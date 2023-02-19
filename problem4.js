const inventory = require("./inventory");

function carsYear(inventory) {
    let ans = [];
    for (let index = 0; index < inventory.length; index++) {
        ans.push(inventory[index]['car_year']);
    }
    return ans;
}

let carsYearArray = carsYear(inventory);
console.log(carsYearArray);

module.exports = { arrayOfYears: carsYearArray, functionCarYear: carsYear };