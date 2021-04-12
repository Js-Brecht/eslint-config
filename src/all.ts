import { merge } from "./utils";
import stdConfig from "./configs/standard";
import tsConfig from "./configs/typescript/config.json";
import vueConfig from "./configs/vue/config.json";

import { overrides as reactTypescriptOverrides } from "./configs/react-typescript/overrides";

const overrides = [
    ...reactTypescriptOverrides,
    {
        files: [ "*.vue" ],
        ...merge(vueConfig, tsConfig),
    },
];

export = merge(stdConfig, { overrides });