
const { functionCarYear } = require("../problem4");

var test_inventory = require("./testInventory");
test("Testing the problem4", () => {
    let years = [1987, 1996, 2000, 2004, 2003, 2005, 2012, 2008, 2008, 1995, 2007];
    expect(functionCarYear(test_inventory)).toStrictEqual(years);
});
