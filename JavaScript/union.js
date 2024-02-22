function sumStringOrNumber(a, b) {
    if (typeof a == 'string' || typeof b == 'string') {
        return "".concat(a) + "".concat(b);
    }
    if (typeof a == 'number' || typeof b == 'number') {
        return a + b;
    }
}
console.log("".concat(sumStringOrNumber(12, 35)));
