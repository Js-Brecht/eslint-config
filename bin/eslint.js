#!/usr/bin/env node
const path = require("path");

const hasArg = (arg) => {
    return process.argv.some((posArg) => posArg === arg || posArg.startsWith(`${arg}=`));
};

const eslintRoot = path.dirname(__dirname);

const args = {
    "--resolve-plugins-relative-to": eslintRoot,
};

Object.entries(args).forEach(([ arg, val ]) => {
    if (!hasArg(arg)) {
        process.argv.push(
            arg,
            val,
        );
    }
});

require("eslint/bin/eslint");