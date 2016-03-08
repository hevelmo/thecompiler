/* ------------------------------------------------------ *\
 [Methods] compiler_phpobjectjs_method
\* ------------------------------------------------------ */
    /*var projects, compilers, local_projects, data_project;

    projects = Array(
        'bigbang-admin', 'camcar',
    );
    console.log(projects);*/
    var compilerBBI, compilerCamcar_v1_sitio, compilerCamcar_v1_intranet, compilerCamcar_v1_admin,
        compilerCamcar_v2_sitio, compilerCamcar_v2_intranet, compilerCamcar_v2_admin,
        compilerEurolimpio, compilerTamizgen,
        compilerSukGdl, compilerSukVallarta, compilerSukLm, compilerSukColima, compilerSukMorelia,
        compilerLDR, compilerLDRv2, compilerJaguar, compilerJaguarv2, compilerVWGDL, compilerDirectExpress,
        compilerViajeroSeguro, compilerViajeroSeguroInt,
        ihidden;
    compilerBBI = '../bigbang-admin/phpobjectjs/';
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
    compilerLDR = '../landrover/phpobjectjs/';
    compilerLDRv2 = '../landrover.v2/phpobjectjs/';
    compilerJaguar = '../jaguar/phpobjectjs/';
    compilerJaguarv2 = '../jaguar.v2/phpobjectjs/';
    compilerVWGDL = '../landingvolkswagen/phpobjectjs/';
    compilerDirectExpress = '../directexpress/phpobjectjs/';
    compilerViajeroSeguro = '../viajeroseguro/phpobjectjs/';
    compilerViajeroSeguroInt = '../viajeroseguro/intranet/phpobjectjs/';

    var compiler_phpobjectjs_method = {
        proBigBangAdmin: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-bigbang-admin', dataProjects);
            dataBBIAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataBBIAttributes);
            $.ajax({
                url: compilerBBI,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proCamcarV1Sitio: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-camcar-v1-sitio', dataProjects);
            dataProCamcarV1SitioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV1SitioAttributes);
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
            COM.appendMulti('#main-compiler-camcar-v1-intranet', dataProjects);
            dataProCamcarV1IntranetAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV1IntranetAttributes);
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
            COM.appendMulti('#main-compiler-camcar-v1-admin', dataProjects);
            dataProCamcarV1AdminAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV1AdminAttributes);
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
            COM.appendMulti('#main-compiler-camcar-v2', dataProjects);
            dataProCamcarV2SitioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV2SitioAttributes);
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
            COM.appendMulti('#main-compiler-camcar-v2-intranet', dataProjects);
            dataProCamcarV2IntranetAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV2IntranetAttributes);
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
            COM.appendMulti('#main-compiler-camcar-v2-admin', dataProjects);
            dataProCamcarV2AdminAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProCamcarV2AdminAttributes);
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
            COM.appendMulti('#main-compiler-eurolimpio', dataProjects);
            dataProEurolimpioAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProEurolimpioAttributes);
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
            COM.appendMulti('#main-compiler-tamizgen', dataProjects);
            dataProTamizgenAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProTamizgenAttributes);
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
            COM.appendMulti('#main-compiler-sukgdl', dataProjects);
            dataProSukGdlAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProSukGdlAttributes);
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
            COM.appendMulti('#main-compiler-sukvallarta', dataProjects);
            dataProSukVallartaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProSukVallartaAttributes);
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
            COM.appendMulti('#main-compiler-suklm', dataProjects);
            dataProSukLmAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProSukLmAttributes);
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
            COM.appendMulti('#main-compiler-sukcolima', dataProjects);
            dataProSukColimaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProSukColimaAttributes);
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
            COM.appendMulti('#main-compiler-sukmorelia', dataProjects);
            dataProSukMoreliaAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProSukMoreliaAttributes);
            $.ajax({
                url: compilerSukMorelia,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proLandRover: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-landrover', dataProjects);
            dataProLandRoverAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProLandRoverAttributes);
            $.ajax({
                url: compilerLDR,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proLandRoverV2: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-landrover-v2', dataProjects);
            dataProLandRoverV2Attributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProLandRoverV2Attributes);
            $.ajax({
                url: compilerLDRv2,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proJaguar: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-jaguar', dataProjects);
            dataProJaguarAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProJaguarAttributes);
            $.ajax({
                url: compilerJaguar,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proJaguarV2: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-jaguar-v2', dataProjects);
            dataProJaguarV2Attributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProJaguarV2Attributes);
            $.ajax({
                url: compilerJaguarv2,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proVWGDL: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-vwgdl', dataProjects);
            dataProVWGDLAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProVWGDLAttributes);
            $.ajax({
                url: compilerVWGDL,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proDirectExpress: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-directexpress', dataProjects);
            dataProDirectExpressAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProDirectExpressAttributes);
            $.ajax({
                url: compilerDirectExpress,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proViajeroSeguro: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-viajeroseguro', dataProjects);
            dataProViajeroSeguroAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProViajeroSeguroAttributes);
            $.ajax({
                url: compilerViajeroSeguro,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        proViajeroSeguroInt: function(event) {
            event.preventDefault();
            dataProjects = [
                ['div', {'id':'compiler'}, '', 1],
            ]
            COM.appendMulti('#main-compiler-viajeroseguro-int', dataProjects);
            dataProViajeroSeguroIntAttributes = [
                ['div', {'id':'status'}, '', 1],
                ['div', {'id':'data'}, '', 1],
            ];
            COM.appendMulti('#compiler', dataProViajeroSeguroIntAttributes);
            $.ajax({
                url: compilerViajeroSeguroInt,
                type: 'post',
                data: {ihidden: ihidden},
                beforeSend: compiler_phpobjectjs_method.funcBeforeSend()
            })
            .done(compiler_phpobjectjs_method.funcDone)
            .always(compiler_phpobjectjs_method.funcAlways)
        },
        funcBeforeSend: function() {
            $('#status').html('<img src="img/loading.gif" />');
            $('#data').html('Procesando');
        },
        funcDone: function() {
            setTimeout(function() {
                $('#data').html('<i class="icon ion-md-checkmark"></i> correcto.');
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
