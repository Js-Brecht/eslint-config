import typescriptConfig from "./config.json";

export const overrides = [
    {
        files: [ "*.ts" ],
        ...typescriptConfig,
    },
];