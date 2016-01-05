/* ------------------------------------------------------ *\
 [Methods] compiler_phpobjectjs_method
\* ------------------------------------------------------ */
    var compilerCamcar_v1_sitio, compilerCamcar_v1_intranet, compilerCamcar_v1_admin,
        compilerCamcar_v2_sitio, compilerCamcar_v2_intranet, compilerCamcar_v2_admin,
        compilerEurolimpio, compilerTamizgen,
        compilerSukGdl, compilerSukVallarta, compilerSukLm, compilerSukColima, compilerSukMorelia, ihidden;
    compilerCamcar_v1_sitio = '../camcar/sitio/phpobjectjs/';
    compilerCamcar_v1_intranet = '../camcar/intranet/phpobjectjs/';
    compilerCamcar_v1_admin = '../camcar/intranet/admin/phpobjectjs/';
    compilerCamcar_v2_sitio = '../camcar-v2.0/sitio/phpobjectjs/';
    compilerCamcar_v2_intranet = '../camcar-v2.0/intranet/phpobjectjs/';
    compilerCamcar_v2_admin = '../camcar-v2.0/intranet/admin/phpobjectjs/';
    compilerEurolimpio = '../eurolimpio/phpobjectjs/';
    compilerTamizgen = '../tamizgen/phpobjectjs/';
    compilerSukGdl = '../suzuki/suzuki-gdl-new/phpobjectjs/';
    compilerSukVallarta = '../suzuki/suzuki-vallarta-new/phpobjectjs/';
    compilerSukLm = '../suzuki/suzuki-lopez-mateos-new/phpobjectjs/';
    compilerSukColima = '../suzuki/suzuki-colima-new/phpobjectjs/';
    compilerSukMorelia = '../suzuki/suzuki-morelia-new/phpobjectjs/';
    var compiler_phpobjectjs_method = {
        proCamcarV1Sitio: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v1-sitio', dataProjects);
            dataProCamcarV1SitioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV1SitioAttributes);
            $.ajax({
                url: compilerCamcar_v1_sitio,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV1Intranet: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v1-intranet', dataProjects);
            dataProCamcarV1IntranetAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV1IntranetAttributes);
            $.ajax({
                url: compilerCamcar_v1_intranet,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV1Admin: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v1-admin', dataProjects);
            dataProCamcarV1AdminAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV1AdminAttributes);
            $.ajax({
                url: compilerCamcar_v1_admin,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV2Sitio: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v2', dataProjects);
            dataProCamcarV2SitioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV2SitioAttributes);
            $.ajax({
                url: compilerCamcar_v2_sitio,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV2Intranet: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v2-intranet', dataProjects);
            dataProCamcarV2IntranetAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV2IntranetAttributes);
            $.ajax({
                url: compilerCamcar_v2_intranet,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV2Admin: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-camcar-v2-admin', dataProjects);
            dataProCamcarV2AdminAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProCamcarV2AdminAttributes);
            $.ajax({
                url: compilerCamcar_v2_admin,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proEuroLimpio: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-eurolimpio', dataProjects);
            dataProEurolimpioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProEurolimpioAttributes);
            $.ajax({
                url: compilerEurolimpio,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proTamizgen: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-tamizgen', dataProjects);
            dataProTamizgenAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProTamizgenAttributes);
            $.ajax({
                url: compilerTamizgen,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proSukGdl: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-sukgdl', dataProjects);
            dataProSukGdlAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProSukGdlAttributes);
            $.ajax({
                url: compilerSukGdl,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proSukVallarta: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-sukvallarta', dataProjects);
            dataProSukVallartaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProSukVallartaAttributes);
            $.ajax({
                url: compilerSukVallarta,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proSukLm: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-suklm', dataProjects);
            dataProSukLmAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProSukLmAttributes);
            $.ajax({
                url: compilerSukLm,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proSukColima: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-sukcolima', dataProjects);
            dataProSukColimaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProSukColimaAttributes);
            $.ajax({
                url: compilerSukColima,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proSukMorelia: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COR.appendMulti('#main-compiler-sukmorelia', dataProjects);
            dataProSukMoreliaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COR.appendMulti('#compiler', dataProSukMoreliaAttributes);
            $.ajax({
                url: compilerSukMorelia,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        funcBeforeSend: function() {
            $('#status').html('<img src="img/loading.gif" />');
            $('#data').html('Compilando: phpobjectjs');
        },
        funcDone: function() {
            setTimeout(function() {
                $('#data').html('<i class="icon ion-md-checkmark"></i> compilado: phpobjectjs');
                setTimeout(function() {
                    $('#compiler').remove();
                }, 4100);
            }, 3900);
        },
        funcAlways: function() {
            setTimeout(function() {
                $('#status').html('');
            }, 4700);
            setTimeout(function() {
                $('#data').html('');
            }, 7700);
        }
    }
