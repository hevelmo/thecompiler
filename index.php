<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="es" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="es" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="es" class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="es">
	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

		<meta class="temp" name="description" content="meta-content"/>
		<meta class="temp" name="copyright"content="© Copyright year CORE">
		<meta class="temp" name="robots" content="index, follow">
		<link class="temp" rel="alternate" hreflang="es" href="http://url" />

		<title>The Compiler</title>

        <link href="css/import.css" rel="stylesheet" type="text/css" />

        <link rel="shortcut icon" href="img/ico/thecompiler.ico">

        <script>
            var nav = navigator.appName;

            if(nav == "Microsoft Internet Explorer"){
                // Detectamos si nos visitan desde IE
                if(nav == "Microsoft Internet Explorer"){
                    // Convertimos en minusculas la cadena que devuelve userAgent
                    var ie = navigator.userAgent.toLowerCase();
                    // Extraemos de la cadena la version de IE
                    var version = parseInt(ie.split('msie')[1]);

                    // Dependiendo de la version mostramos un resultado
                    switch(version){
                        case 6:
                            alert("Estas usando IE 6, es obsoleto. \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 7:
                            alert("Estas usando IE 7, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        case 8:
                            alert("Estas usando IE 8, es obsoleto \n Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v9, v10 y v11 ");
                            break;
                        /*case 9:
                            alert("Para una visualización optima del sitio, te recomendamos utilizar \n lo más nuevo en navegadores Google Chrome, Mozilla FireFox, Internet Explorer a partir de las versiones v10 y v11 ");
                            console.log("Estas usando IE 9, mas o menos compatible");
                            break;*/
                        default:
                            console.log("Usas una version compatible");
                            break;
                    }
                }
            }
        </script>
	</head>
	<body>

        <label for="">Camcar v1 Sitio</label>
        <div id="main-compiler-camcar-v1-sitio">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v1_sitio" value="execute">
                <input type="submit" name="execute_site_camcar_v1_sitio" id="compilerCamcar_v1_sitio" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Camcar v1 Intranet</label>
        <div id="main-compiler-camcar-v1-intranet">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v1_intranet" value="execute">
                <input type="submit" name="execute_site_camcar_v1_intranet" id="compilerCamcar_v1_intranet" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Camcar v1 Admin</label>
        <div id="main-compiler-camcar-v1-admin">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v1_admin" value="execute">
                <input type="submit" name="execute_site_camcar_v1_admin" id="compilerCamcar_v1_admin" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Camcar v2 Sitio</label>
        <div id="main-compiler-camcar-v2">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v2" value="execute">
                <input type="submit" name="execute_site_camcar_v2" id="compilerCamcar_v2_sitio" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Camcar v2 Intranet</label>
        <div id="main-compiler-camcar-v2-intranet">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v2_intranet" value="execute">
                <input type="submit" name="execute_site_camcar_v2_intranet" id="compilerCamcar_v2_intranet" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Camcar v2 Admin</label>
        <div id="main-compiler-camcar-v2-admin">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_camcar_v2_admin" value="execute">
                <input type="submit" name="execute_site_camcar_v2_admin" id="compilerCamcar_v2_admin" value="Compilar">
            </form>
        </div>
        <br>
        <label for="">Euro Limpio</label>
        <div id="main-compiler-eurolimpio">
            <form name="form-compiler" method="post" accept-charset="utf-8">
                <input type="hidden" name="execute_site_eurolimpio" value="execute">
                <input type="submit" name="execute_site_eurolimpio" id="compilerEurolimpio" value="Compilar">
            </form>
        </div>

		<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-session'></div>
    	<!-- Auxiliar Temporal Inputs's DIV -->
    	<div id='hidden-inputs-temporal'></div>
    	<!--Templates's DIV-->
    	<div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

		<!-- MAIN -->
		<script src="lib/jquery.js"></script>
		<script src="lib/modernizr.js"></script>
		<script src="lib/bootstrap.js"></script>
		<!-- CORE -->
		<script src="lib/jquery.gdb.js"></script>
		<script src="lib/jquery-ui.js"></script>
		<script src="lib/underscore.js"></script>
		<script src="lib/moment.js"></script>
		<script src="lib/accounting.js"></script>
		<script src="lib/finch.js"></script>
		<!-- HANDLEBARS -->
		<script src="lib/handlebars.runtime.js"></script>
		<!-- TEMPLATES -->
		<script src='templates/min/templates.min.js'></script>
		<!-- FORMS -->
		<script src="lib/forms.js"></script>
		<script src="lib/sha512.js"></script>
		<!-- PLUGINS -->
		<!-- CORE JS -->
        <?php /*
		<script src='js/min/core.min.js'></script>
        */ ?>
        <script src='js/compiler.js'></script>
	    <script src='js/objects.js'></script>
	    <script src='js/method.js'></script>
	    <script src='js/model.js'></script>
	    <script src='js/room.js'></script>
	    <script src='js/main.js'></script>
	</body>
</html>

