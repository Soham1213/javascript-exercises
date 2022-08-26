const leapYears = function(year) {
    let temp = 0;
    if (year % 100 != 0 && year % 400 == 0) {
            return true;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
