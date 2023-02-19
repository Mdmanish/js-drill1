const audiBmwCars = require("../problem6");

var test_inventory = require("./testInventory");
test("Testing the problem6", () => {
    let output = [{ "id": 1, "car_make": "Audi", "car_model": "4000CS Quattro", "car_year": 1987 },
    { "id": 6, "car_make": "BMW", "car_model": "525", "car_year": 2005 },
    { "id": 7, "car_make": "Audi", "car_model": "Q7", "car_year": 2012 },
    { "id": 8, "car_make": "Audi", "car_model": "TT", "car_year": 2008 }
    ]
    expect(audiBmwCars(test_inventory)).toStrictEqual(output);
});
