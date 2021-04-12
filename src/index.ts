import '@rushstack/eslint-patch/modern-module-resolution';

import * as paths from "./paths";
import ignorePatterns from "./ignore";

import type { Linter } from "eslint";

interface IConfigFn {
    (extend: Linter.Config): Linter.Config;
    path: string;
}

type ConfigFunctions = {
    [K in keyof typeof paths]: IConfigFn;
}

const base = {
    root: true,
    ignorePatterns,
};

export = Object.entries(paths).reduce((acc, [key, val]) => {
    const curKey = key as keyof typeof paths;
    const fn: IConfigFn = (extend: Linter.Config) => ({
        extends: val,
        ...base,
        ...extend,
    });
    fn.path = val;
    acc[curKey] = fn;
    return acc;
}, {} as ConfigFunctions);