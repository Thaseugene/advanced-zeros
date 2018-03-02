module.exports = function getZerosCount(number, base) {
    var array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
    arr = [];
    sor = [];


    var c = 0;
    var l = 1;
    var h = 1;

    if (base != 10 && base % 2 == 0 || base % 3 == 0 || base % 5 == 0 || base % 7 == 0 || base % 11 == 0 || base % 13 == 0) {
        var step = base;
        for (var i = 0; i < array.length; i++) {
            while (step % array[i] === 0) {
                step = step / array[i];
                arr.push(array[i]);
            }
        }
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                h++;
                sor.push(arr[i]);
            }
        }
        if (sor.length > 1 && h > 1) {
            h = l;
            while (Math.floor(number / Math.pow(sor[1], l)) > 0) {
                c = c + Math.floor(number / Math.pow(sor[1], l));
                l++;
            }
            return (c);
        } else {

            while (Math.floor(number / Math.pow(arr[arr.length - 1], l)) > 0) {
                c = c + Math.floor(number / Math.pow(arr[arr.length - 1], l));
                l++;

            }

            return (c);

        }


    }



    if (base === 10) {
        while (Math.floor(number / Math.pow(5, l)) > 0) {
            c = c + Math.floor(number / Math.pow(5, l));
            l++;
        }
        return (c);
    }
    if (base % 2 != 0 || base % 3 != 0 || base % 5 != 0 || base % 7 != 0 || base % 11 != 0 || base % 13 != 0) {
        while (Math.floor(number / Math.pow(base, l)) > 0) {
            c = c + (Math.floor(number / Math.pow(base, l)));
            l++;
        }
        return (c);
    }



}