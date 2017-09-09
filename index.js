var a = [10, 8, 12, 1, 6, 3, 9, 2]
var compare = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
console.log(a.sort(compare));