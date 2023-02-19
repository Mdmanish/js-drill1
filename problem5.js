let { arrayOfYears } = require("./problem4")

function olderCars(arrayOfYears, olderThan) {
    let ans = [];
    let numOfOlderCar = 0;
    for (let index = 0; index < arrayOfYears.length; index++) {
        if (arrayOfYears[index] < olderThan) {
            ans.push(arrayOfYears[index]);
            numOfOlderCar++;
        }
    }
    console.log(numOfOlderCar);
    return ans;
}

olderThan = 2000;
olderCarsArray = olderCars(arrayOfYears, olderThan);
console.log(olderCarsArray);

module.exports = olderCars;