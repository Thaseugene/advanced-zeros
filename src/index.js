module.exports = function getZerosCount(number, base) {
    var c = 0;
    var i = 1;
    while (Math.floor(number / Math.pow(base, i)) > 0) {

        c = c + (Math.floor(number / Math.pow(base, i)));
        i++;
    }
    console.log(c);
    return c;
}