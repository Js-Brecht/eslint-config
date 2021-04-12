import { merge } from "~/utils";
import typescriptConfig from "@/typescript/config.json";
import preactConfig from "@/preact/config.json";
import { overrides as preactOverrides } from "@/preact/overrides";

export const overrides = [
    {
        files: [ "*.ts", "*.tsx" ],
        ...merge(preactConfig, typescriptConfig),
    },
    ...preactOverrides,
];