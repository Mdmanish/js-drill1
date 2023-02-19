const inventory = require("./inventory");

function car33Details(inventory, id) {
    let ans = "";
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index]["id"] === id) {
            ans = `Car ${id} is a ${inventory[index]['car_year']} ${inventory[index]['car_make']} ${inventory[index]['car_model']}`;
        }
    }
    return ans;
}

let carId = 33;
console.log(car33Details(inventory, carId));

module.exports = car33Details;