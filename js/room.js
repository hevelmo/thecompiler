/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            // Add favicon
            //window.onload = favicon.load_favicon();
            section = "home";
            Breakpoints();
            //Site.run();
            viewSectionHomeMethod.addStylesHome();
        },
        load: function(bindings) {
            viewSectionSiteNavbarMethod.viewSectionSiteNavbar();
            viewSectionHomeMethod.viewSectionHome();
        },
        unload: function(bindings) {
            section = "";
            COR.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
