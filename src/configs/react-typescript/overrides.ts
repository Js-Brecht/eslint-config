import { merge } from "~/utils";
import typescriptConfig from "@/typescript/config.json";
import reactConfig from "@/react/config.json";
import { overrides as reactOverrides } from "@/react/overrides";

export const overrides = [
    {
        files: [ "*.ts", "*.tsx" ],
        ...merge(reactConfig, typescriptConfig),
    },
    ...reactOverrides,
];