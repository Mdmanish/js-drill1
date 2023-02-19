const { json } = require("stream/consumers");
const inventory = require("./inventory");

function audiBmwCars(inventory) {
    let ans = [];
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index]['car_make'] === "Audi" || inventory[index]['car_make'] === "BMW") {
            ans.push(inventory[index])
        }
    }
    return ans;
}

let BMWAndAudi = audiBmwCars(inventory);
console.log(JSON.stringify(BMWAndAudi));

module.exports = audiBmwCars;
