const inventory = require("./inventory");

function lastCarDetails(inventory) {
    let index = inventory.length - 1;
    let ans = `Last car is a ${inventory[index]['car_make']} ${inventory[index]['car_model']}`;
    return ans;
}

console.log(lastCarDetails(inventory));

module.exports = lastCarDetails;