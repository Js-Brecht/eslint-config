#!/usr/bin/env node
const path = require("path");
const { spawn } = require("child_process");

const hasArg = (arg) => {
    return process.argv.some((posArg) => posArg.includes(arg));
};

const eslintRoot = path.dirname(__dirname);
const nodeModules = path.join(eslintRoot, "node_modules");

process.env.NODE_PATH = [
    nodeModules,
    process.env.NODE_PATH,
].filter(Boolean).join(path.delimiter);

const args = {
    "--resolve-plugins-relative-to": eslintRoot,
};

const customArgv = [];
Object.entries(args).forEach(([ arg, val ]) => {
    if (!hasArg(arg)) {
        customArgv.push(
            arg,
            val,
        );
    }
});

const eslintPath = require.resolve("eslint/bin/eslint");

const cmd = [
    eslintPath,
    ...customArgv,
    ...process.argv.slice(2),
];

const proc = spawn("node", cmd, {
    cwd: process.cwd(),
    env: {
        ...process.env,
    },
    stdio: [0, 1, 2],
});

proc.on("exit", (exitCode) => {
    process.exit(exitCode);
});