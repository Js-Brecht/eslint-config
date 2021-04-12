test("Overrides execute successfully", () => {
    const config = require("../index");
    expect(config).toEqual(expect.any(Object));
});