const removeFromArray = function(...args) {
    const arr = args[0];
    return arr.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
