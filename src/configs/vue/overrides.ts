import vueConfig from "./config.json";

export const overrides = [
    {
        files: [ "*.vue" ],
        ...vueConfig,
    },
];