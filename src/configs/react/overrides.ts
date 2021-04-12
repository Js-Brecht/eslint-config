import { addBabelParserConfig } from "~/utils";
import reactConfig from "./config.json";

export const overrides = [
    {
        files: [ "*.jsx" ],
        ...addBabelParserConfig(reactConfig, { addReact: true }),
    },
];