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
    $(domEl.div_recurrent).on('click', '#main-compiler-bigbang-admin form', compiler_phpobjectjs_method.proBigBangAdmin);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v1-sitio form', compiler_phpobjectjs_method.proCamcarV1Sitio);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v1-intranet form', compiler_phpobjectjs_method.proCamcarV1Intranet);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v1-admin form', compiler_phpobjectjs_method.proCamcarV1Admin);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v2 form', compiler_phpobjectjs_method.proCamcarV2Sitio);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v2-intranet form', compiler_phpobjectjs_method.proCamcarV2Intranet);
    $(domEl.div_recurrent).on('click', '#main-compiler-camcar-v2-admin form', compiler_phpobjectjs_method.proCamcarV2Admin);
    $(domEl.div_recurrent).on('click', '#main-compiler-eurolimpio form', compiler_phpobjectjs_method.proEuroLimpio);
    $(domEl.div_recurrent).on('click', '#main-compiler-tamizgen form', compiler_phpobjectjs_method.proTamizgen);
    $(domEl.div_recurrent).on('click', '#main-compiler-sukgdl form', compiler_phpobjectjs_method.proSukGdl);
    $(domEl.div_recurrent).on('click', '#main-compiler-sukvallarta form', compiler_phpobjectjs_method.proSukVallarta);
    $(domEl.div_recurrent).on('click', '#main-compiler-suklm form', compiler_phpobjectjs_method.proSukLm);
    $(domEl.div_recurrent).on('click', '#main-compiler-sukcolima form', compiler_phpobjectjs_method.proSukColima);
    $(domEl.div_recurrent).on('click', '#main-compiler-sukmorelia form', compiler_phpobjectjs_method.proSukMorelia);
    $(domEl.div_recurrent).on('click', '#main-compiler-landrover form', compiler_phpobjectjs_method.proLandRover);
    $(domEl.div_recurrent).on('click', '#main-compiler-landrover-v2 form', compiler_phpobjectjs_method.proLandRoverV2);
    $(domEl.div_recurrent).on('click', '#main-compiler-jaguar form', compiler_phpobjectjs_method.proJaguar);
    $(domEl.div_recurrent).on('click', '#main-compiler-jaguar-v2 form', compiler_phpobjectjs_method.proJaguarV2);
    $(domEl.div_recurrent).on('click', '#main-compiler-vwgdl form', compiler_phpobjectjs_method.proVWGDL);
    $(domEl.div_recurrent).on('click', '#main-compiler-directexpress form', compiler_phpobjectjs_method.proDirectExpress);
    $(domEl.div_recurrent).on('click', '#main-compiler-viajeroseguro form', compiler_phpobjectjs_method.proViajeroSeguro);
    $(domEl.div_recurrent).on('click', '#main-compiler-viajeroseguro-int form', compiler_phpobjectjs_method.proViajeroSeguroInt);

});
