import * as path from "path";
import type { PluginItem } from "@babel/core";
import type { JsonObject } from "type-fest";
import type { Linter } from "eslint";

export interface IExtendOptions {
    presets?: PluginItem[];
    plugins?: PluginItem[];
}

interface IReactBabelConfig {
    pragma?: string;
    pragmaFrag?: string;
    throwIfNamespace?: boolean;
    runtime?: string;
    importSource?: string;
}

const r = (pkg: string): string => require.resolve(pkg);

interface IGetBabelConfigArgs {
    addReact?: boolean;
    reactOptions?: IReactBabelConfig;
    extendOptions?: IExtendOptions;
}

const absoluteRuntimePath = path.dirname(
    r("@babel/runtime/package.json"),
);

const getBabelConfig = ({
    addReact = false,
    reactOptions,
    extendOptions,
} = {} as IGetBabelConfigArgs): IExtendOptions => ({
    presets: [
        [r("@babel/preset-env"), {
            loose: false,
            modules: false,
            targets: {
                node: "current",
            },
            // Exclude transforms that make all code slower (https://github.com/facebook/create-react-app/pull/5278)
            exclude: ["transform-typeof-symbol"],
        }],
        addReact && [r("@babel/preset-react"), reactOptions],
        ...(extendOptions?.presets || []),
    ].filter(Boolean) as PluginItem[],
    plugins: [
        [r("@babel/plugin-proposal-class-properties"), {
            loose: false,
        }],
        [r("@babel/plugin-transform-spread"), {
            loose: false,
        }],
        [r("@babel/plugin-proposal-nullish-coalescing-operator")],
        [r("@babel/plugin-proposal-optional-chaining")],
        [r("@babel/plugin-syntax-dynamic-import")],
        [r("@babel/plugin-transform-runtime"), {
            helpers: true,
            useESModules: true,
            absoluteRuntimePath,
        }],
        ...(extendOptions?.plugins || []),
    ],
});

export const addBabelParserConfig = <T extends JsonObject | Linter.Config>(
    config = {} as T,
    babelOptions?: IGetBabelConfigArgs,
) => {
    return Object.assign(
        config,
        {
            parserOptions: {
                ...(config.parserOptions || {}) as JsonObject,
                babelOptions: getBabelConfig(babelOptions),
            },
        },
    );
};