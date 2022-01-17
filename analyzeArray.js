function analyzeArray(array) {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length
    };
};

function average(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + Number(array[i]);
    }
    return sum / array.length
}

function min(array) {
    var min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return Number(min);
}

function max(array) {
    var max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return Number(max);
}

module.exports = analyzeArray