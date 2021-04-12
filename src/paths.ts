const standard = require.resolve("./configs/standard");
const react = require.resolve("./configs/react");
const preact = require.resolve("./configs/preact");
const vue = require.resolve("./configs/vue");

const typescript = require.resolve("./configs/typescript");
const reactTypescript = require.resolve("./configs/react-typescript");
const preactTypescript = require.resolve("./configs/preact-typescript");
const vueTypescript = require.resolve("./configs/vue-typescript");

const all = require.resolve("./all");

export {
    standard,
    react,
    preact,
    vue,

    typescript,
    reactTypescript,
    preactTypescript,
    vueTypescript,

    all,
};