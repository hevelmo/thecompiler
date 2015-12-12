$(document).ready(function() {
    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
        //This method change a form into a JSON
        $.fn.serializeFormJSON = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */
        Number.prototype.format = function(n, x) {
            var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
        };
    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */
    $('body').on('click', '#main-compiler-camcar-v1-sitio form', compiler_phpobjectjs_method.proCamcarV1Sitio);
    $('body').on('click', '#main-compiler-camcar-v1-intranet form', compiler_phpobjectjs_method.proCamcarV1Intranet);
    $('body').on('click', '#main-compiler-camcar-v1-admin form', compiler_phpobjectjs_method.proCamcarV1Admin);
    $('body').on('click', '#main-compiler-camcar-v2 form', compiler_phpobjectjs_method.proCamcarV2Sitio);
    $('body').on('click', '#main-compiler-camcar-v2-intranet form', compiler_phpobjectjs_method.proCamcarV2Intranet);
    $('body').on('click', '#main-compiler-camcar-v2-admin form', compiler_phpobjectjs_method.proCamcarV2Admin);

});
