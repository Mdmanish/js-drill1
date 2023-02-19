const olderCars = require("../problem5");

test("Testing the problem5", () => {
    let years = [1987, 1996, 2000, 2004, 2003, 2005, 2012, 2008, 2008, 1995, 2007];
    let olderYears = [1987, 1996, 2000, 1995];
    let olderThan = 2002;
    expect(olderCars(years, olderThan)).toStrictEqual(olderYears);
});
