import { merge } from "~/utils";
import typescriptConfig from "@/typescript/config.json";
import vueConfig from "@/vue/config.json";

export const overrides = [
    {
        files: [ "*.ts", "*.vue" ],
        ...merge(vueConfig, typescriptConfig),
    },
];