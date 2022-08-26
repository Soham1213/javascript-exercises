const repeatString = function(str, times) {
    let repeat = '';
    if (times < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < times; i++)
        {
            repeat += str;
        }
    return repeat;
    }
};
// Do not edit below this line
module.exports = repeatString;
