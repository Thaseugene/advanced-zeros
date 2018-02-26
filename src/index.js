module.exports = function getZerosCount(number, base) {
    var c = 0;
    var i = 1;
    var m = number;
    str = '';
    if (base === 10) {
        while (Math.floor(number / Math.pow(5, i)) > 0) {
            //m = m % base;
            //str = str + m;
            c = c + Math.floor(number / Math.pow(5, i));
            i++;
        }
    } else {
        while (Math.floor(number / Math.pow(base, i)) > 0) {
            //m = m % base;
            //str = str + m;
            c = c + Math.floor(number / Math.pow(base, i));
            i++;
        }
    }

    //console.log(c);

    return c;
}