<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js css-menubar lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html lang="en" class="no-js css-menubar lt-ie10"> <![endif]-->
<html class="no-js css-menubar" lang="en">
	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />

		<meta class="temp" name="description" content="The Compiler Phpobjectjs"/>
		<meta class="temp" name="copyright"content="© Copyright The Compiler Phpobjectjs">
		<meta class="temp" name="robots" content="index, follow">
		<link class="temp" rel="alternate" hreflang="es" href="http://thecompiler.mx" />

		<title>The Compiler</title>

        <link href="css/import.css" rel="stylesheet" type="text/css" />

        <link rel="apple-touch-icon" href="img/ico/apple-touch-icon.png">
        <link rel="shortcut icon" href="img/ico/thecompiler.ico">

        <!--[if lt IE 9]>
            <script src="lib/assets/plugins/html5shiv/html5shiv.min.js"></script>
        <![endif]-->
        <!--[if lt IE 10]>
            <script src="lib/assets/plugins/media-match/media.match.min.js"></script>
            <script src="lib/assets/plugins/respond/respond.min.js"></script>
        <![endif]-->

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
        <script src="lib/modernizr.js"></script>
        <script src="lib/assets/plugins/breakpoints/breakpoints.js"></script>
	</head>
	<body class="app-documents">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-session'></div>

        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-temporal'></div>

        <!-- NAVIGATION -->
        <!--Templates's NAV-->
        <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega site-navbar-box-shadow" rol="navigation" id='content-temporal-interactive-site-navbar'></nav>
        <?php /* <div class="site-menubar" id='content-site-menubar-interactive'></div> */ ?>

        <!--Templates's DIV-->
        <div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

        <!-- Footer -->
        <footer class="site-footer">
            <span class="site-footer-legal">© 2016 The Compiler</span>
        </footer>

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

        <!-- PLUGINS -->
        <script src="lib/assets/plugins/animsition/jquery.animsition.js"></script>
        <script src="lib/assets/plugins/asscroll/jquery-asScroll.js"></script>
        <script src="lib/assets/plugins/mousewheel/jquery.mousewheel.js"></script>
        <script src="lib/assets/plugins/asscrollable/jquery.asScrollable.all.js"></script>
        <script src="lib/assets/plugins/ashoverscroll/jquery-asHoverScroll.js"></script>
        <script src="lib/assets/plugins/switchery/switchery.min.js"></script>
        <script src="lib/assets/plugins/intro-js/intro.js"></script>
        <script src="lib/assets/plugins/screenfull/screenfull.js"></script>
        <script src="lib/assets/plugins/slidepanel/jquery-slidePanel.js"></script>

        <!-- Plugins For This Page -->
        <div id="plugins-for-this-section"></div>

        <!-- Scripts -->
        <script src="lib/assets/run/core.js"></script>
        <script src="lib/assets/run/site.js"></script>

        <script src="lib/assets/run/sections/menu.js"></script>
        <script src="lib/assets/run/sections/menubar.js"></script>
        <script src="lib/assets/run/sections/gridmenu.js"></script>
        <script src="lib/assets/run/sections/sidebar.js"></script>

        <script src="lib/assets/run/configs/config-colors.js"></script>
        <script src="lib/assets/run/configs/config-tour.js"></script>

        <script src="lib/assets/run/components/asscrollable.js"></script>
        <script src="lib/assets/run/components/animsition.js"></script>
        <script src="lib/assets/run/components/slidepanel.js"></script>
        <script src="lib/assets/run/components/switchery.js"></script>
        <!--<script src="lib/site/matchMedia.js"></script>-->

        <!-- Scripts For This Page -->
        <div id="scripts-for-this-section"></div>

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

