const inventory = require("./inventory");

function sortCarModels(inventory) {
    let len = inventory.length;
    for (let i = 0; i < len; i++) {
        let prev = inventory[i]['car_model'];
        let row = i;
        for (let j = i + 1; j < len; j++) {
            if (prev > inventory[j]['car_model']) {
                prev = inventory[j]['car_model'];
                row = j;
            }
        }
        [inventory[i], inventory[row]] = [inventory[row], inventory[i]];
    }
    return inventory;
}

console.log(sortCarModels(inventory));

module.exports = sortCarModels;