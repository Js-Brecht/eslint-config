const { merge } = require("../index");
const { deepCopy } = require("../deepCopy");

describe("Config merge tests", () => {
    it("Correctly merges a shallow object", () => {
        const from = {
            test1: 1234,
            test2: [ 1234, 4321 ],
            test3: {
                asdf: "fdsa",
                fdsa: "asdf",
            },
        };
        const to = {
            test1: 4321,
            test2: [ 5678 ],
            test3: {
                asdf: "foo",
                fdsa: "bar",
                baz: "foobar!",
            },
        };

        expect(merge(from, to)).toEqual({
            test1: 1234,
            test2: [ 5678, 1234, 4321 ],
            test3: {
                asdf: "fdsa",
                fdsa: "asdf",
                baz: "foobar!",
            },
        });
    });

    it("Correctly overwrites values", () => {
        const from = {
            test1: 1234,
            test2: [ 1234, 4321 ],
            test3: "asdf",
        };
        const to = {
            test1: [ 1, 2, 3 ],
            test2: [ 5678 ],
            test3: {
                asdf: "foo",
            },
        };

        expect(merge(from, to)).toEqual({
            test1: 1234,
            test2: [ 5678, 1234, 4321 ],
            test3: "asdf",
        });
    });

    it("Doesnt mutate original objects", () => {

        const from = {
            test1: 1234,
            test2: [ 1234, 4321 ],
            test3: "asdf",
            test4: {
                asdf: 1234,
                bar: "baz",
            },
        };
        const to = {
            test1: [ 1, 2, 3 ],
            test2: [ 5678 ],
            test3: {
                asdf: "foo",
            },
            test4: {
                foo: "bar",
            },
        };

        const originalFrom = deepCopy(from);
        const originalTo = deepCopy(to);

        const results = merge(from, to);

        expect(results).not.toBe(to);
        expect(from).toEqual(originalFrom);
        expect(to).toEqual(originalTo);
    });
});