module.exports = function getZerosCount(number, base) {
    var array = [2, 3, 5, 7, 11, 13];
    arr = [];
    sor = [];
    var cc = 0;
    var c = 0;
    step = base;

    //return arr;





    if (base % 2 === 0 && base % 3 === 0 && base % 5 === 0 && base % 7 === 0 && base % 11 === 0 && base % 13 === 0) {
        for (var i = 0; i < array.length; i++) {
            while (step % array[i] === 0) {
                step = step / array[i];
                arr.push(array[i]);
            }
        }
        //return arr[arr.length - 1];
        for (var i = (arr.length - 1); i >= 0; i--) {
            if (arr[i] === arr[i - 1]) {
                cc++;
                sor.push(arr[i]);
            } else { sor.push(arr[i]) };
        }
        return (sor);



    } else {
        while (Math.floor(number / Math.pow(base, i)) > 0) {
            c = c + (Math.floor(number / Math.pow(base, i)));
            i++;
            return c;
        }
    }


    /*var c = 0;
    var i = 1;
    var m = number;
    str = '';
    array = [2, 3, 5, 7, 11, 13];
    if (base % 2 === 0 && base != 10) {
        var x = 2;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 2 + x;
        }
    }
    if (base % 3 === 0) {
        var x = 3;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 3 + x;
        }
    }
    if (base % 5 === 0 && base != 10) {
        var x = 5;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 5 + x;
        }
    }
    if (base % 7 === 0) {
        var x = 7;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 7 + x;
        }
    }
    if (base % 11 === 0) {
        var x = 11;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 11 + x;
        }
    }
    if (base % 13 === 0) {
        var x = 13;
        while (Math.floor(number / Math.pow(x, i)) > 0) {
            c = c + Math.floor(number / Math.pow(x, i));
            i++;
            x = 13 + x;
        }
    }
    if (base === 10) {
        while (Math.floor(number / Math.pow(5, i)) > 0) {
            c = c + Math.floor(number / Math.pow(5, i));
            i++;
        }
    } else {
        while (Math.floor(number / Math.pow(base, i)) > 0) {
            c = c + (Math.floor(number / Math.pow(base, i)));
            i++;
        }
    }

    //console.log(c);

    return c;*/
}