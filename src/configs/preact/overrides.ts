import { addBabelParserConfig } from "~/utils";
import preactConfig from "./config.json";

export const overrides = [
    {
        files: [ "*.jsx" ],
        ...addBabelParserConfig(preactConfig, {
            addReact: true,
            reactOptions: {
                importSource: "preact",
                pragma: "h",
            },
        }),
    },
];