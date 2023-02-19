
const lastCarDetails = require("../problem2");

var test_inventory = require("./testInventory");
test("Testing the problem2", () => {
    expect(lastCarDetails(test_inventory)).toStrictEqual("Last car is a Volkswagen Jetta");
});
