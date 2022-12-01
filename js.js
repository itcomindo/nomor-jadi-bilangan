var NUMBER2TEXT = {
    ones: ['', 'se', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'],
    tens: ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'],
    sep: ['', ' ribu ', ' juta ', ' milyar ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion ']
};

(function (ones, tens, sep) {

    var input = document.getElementById('input'),
    output = document.getElementById('output');
    
    // input.onkeyup = function () {
        // input on window load
        window.onload = function () {
            var input = document.getElementById('input')
            // get innerHTML from #input
            var zzz = input.innerHTML;
        // var val = this.value,
        var val = zzz,
            arr = [],
            str = '',
            i = 0;

        if (val.length === 0) {
            output.textContent = 'Please type a number into the text-box.';
            return;
        }

        val = parseInt(val, 10);
        if (isNaN(val)) {
            output.textContent = 'Invalid input.';
            return;
        }

        while (val) {
            arr.push(val % 1000);
            val = parseInt(val / 1000, 10);
        }

        while (arr.length) {
            str = (function (a) {
                var x = Math.floor(a / 100),
                    y = Math.floor(a / 10) % 10,
                    z = a % 10;

                return (x > 0 ? ones[x] + ' ratus ' : '') +
                    (y >= 2 ? tens[y] + ' ' + ones[z] : ones[10 * y + z]);
                })(arr.shift()) + sep[i++] + str;
            // })(arr.shift()) + sep[i++];
        }

        // if in str contain only se then replace with satu
        if (str == 'se') {
            str = 'satu';
        }

        // if in str contain se folowed by space, remove space
        str = str.replace(/se /g, 'se');

        // if in str contain sejuta, replace with satu juta
        str = str.replace(/sejuta/g, 'satu juta');


        output.textContent = str;
    };

})(NUMBER2TEXT.ones, NUMBER2TEXT.tens, NUMBER2TEXT.sep);
