
const car33Details = require("../problem1");

var test_inventory = require("./testInventory");
test("Testing the problem1", () => {
    expect(car33Details(test_inventory, 1)).toStrictEqual("Car 1 is a 1987 Audi 4000CS Quattro");
});
