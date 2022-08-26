const sumAll = function(start, end) {
    let sum = 0;
    if (typeof start === 'number' && typeof end === 'number' && start > 0 && end > 0){
        if (start > end) {
            for (let i = start; i >= end; i--) {
                sum+=i;
            }
            return sum;
        } else {
            for (let i = start; i <= end; i++) {
                sum+=i;
            }
            return sum;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
