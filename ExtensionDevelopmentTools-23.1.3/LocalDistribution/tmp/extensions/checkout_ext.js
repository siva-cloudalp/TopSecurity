var extensions = {};

extensions['CloudAlp.LoginPageOverRide.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/LoginPageOverRide/1.0.0/' + asset;
}


define(
	'CloudAlp.LoginPageOverRide.LoginPageOverRide'
	, [
		"LoginRegister.Login.View"
		, "underscore"
	]
	, function (
		LoginView
		, _
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				/**
				 * changed the link from the register page to the lead page,
				 * and in the error message when entering invalid login information
				 * change link in customize text for error messages
				 */

				/** @type {LayoutComponent} */
				var Checkout = container.getComponent('Checkout');



			}
		};
	});


};

extensions['CloudAlp.ShowSiteSearch.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/ShowSiteSearch/1.0.0/' + asset;
}


define(
	'CloudAlp.ShowSiteSearch.ShowSiteSearch'
	, [
		'Header.View'
		, 'underscore'
	]
	, function (
		HeaderView
		, _
	) {

		'use strict';

		return {
			mountToApp: function mountToApp(container) {

				_.extend(HeaderView.prototype, {
					verifyShowSiteSearch: _.wrap(HeaderView.prototype.verifyShowSiteSearch, function (...args) {
						if (this.$('[data-action="show-sitesearch"]').length > 0) {
							let hash = Backbone.history.getFragment() || '';
							hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
						}
					})
				});
			}
		};
	});


};

extensions['Logitail.ThreadsThemeExtension.1.1.18'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Logitail/ThreadsThemeExtension/1.1.18/' + asset;
}

/*
    © 2017 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

// @module Header
define('SC.ThreadsThemeExtension.Header', [
    'Header.View',
    'PluginContainer',
    'underscore',
    'SC.Configuration'
], function ThemeExtensionHeader(
    HeaderView,
    PluginContainer,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            HeaderView.addExtraContextProperty(
                'extraHeaderView',
                'object',
                function HeaderViewAddExtraContextProperty() {
                    return {
                        // @property {String} bannertext
                        bannertext: Configuration.get('header.bannerText')
                    };
                }
            );
        }
    };
});


/*
    © 2017 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

define('SC.ThreadsThemeExtension.HeaderLogo', [
    'Header.Logo.View'
], function HeaderSideBarLogoView(
    HeaderLogoView
) {
    'use strict';

    return {
        loadModule: function loadModule(application) {
            var layout = application.getComponent('Layout');
            // Add to Header.Menu.View
            layout.addChildViews(
                'Header.Menu.View', {
                    'Header.SideBarLogo.View': {
                        'Header.SideBarLogo.View': {
                            childViewIndex: 5,
                            childViewConstructor: function childViewConstructor() {
                                return new HeaderLogoView();
                            }
                        }
                    }
                }
            );
            // Add to Footer.View
            layout.addChildViews(
                'Footer.View', {
                    'Footer.Logo.View': {
                        'Header.SideBarLogo.View': {
                            childViewIndex: 5,
                            childViewConstructor: function childViewConstructor() {
                                return new HeaderLogoView();
                            }
                        }
                    }
                }
            );
        }
    };
});


/*
    © 2017 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

// @module Footer
define('SC.ThreadsThemeExtension.Footer', [
    'Footer.View',
    'underscore',
    'SC.Configuration',
    'jQuery'
],
function ThemeExtensionFooter(
    FooterView,
    _,
    Configuration,
    jQuery
) {
    'use strict';

    var getColLinks = function getColLinks(whichColumn) {
        // for large format footer with up to four columns of links
        var multiColLinks = Configuration.get('footer.multiColLinks', []);
        var targetColLinks = jQuery.grep(multiColLinks, function targetColLinks(e) {
            return e.column === whichColumn;
        });
        return targetColLinks;
    };

    return {
        loadModule: function loadModule() {
            // for Social Media Links
            var socialMediaLinks = Configuration.get('footer.socialMediaLinks', []);
            // for Copyright message
            var initialConfigYear = Configuration.get('footer.copyright.initialYear');
            var initialYear = initialConfigYear ? parseInt(initialConfigYear, 10) : new Date().getFullYear();
            var currentYear = new Date().getFullYear();

            FooterView.addExtraContextProperty(
                'extraFooterViewContext',
                'object',
                function FooterViewAddExtraContextProperty() { 
                    return {
                        // @property {Array<Object>} col1Links
                        col1Links: getColLinks('Column 1'),
                        // @property {Array<Object>} col2Links
                        col2Links: getColLinks('Column 2'),
                        // @property {Array<Object>} col3Links
                        col3Links: getColLinks('Column 3'),
                        // @property {Array<Object>} col4Links
                        col4Links: getColLinks('Column 4'),
                        // @property {String} title
                        title: Configuration.get('footer.title'),
                        // @property {Array<Object>} socialMediaLinks
                        socialMediaLinks: socialMediaLinks,
                        // @property {String} socialMediaLinksTitle
                        socialMediaLinksTitle: Configuration.get('footer.socialMediaLinksTitle'),
                        copyright: {
                            hide: !!Configuration.get('footer.copyright.hide'),
                            companyName: Configuration.get('footer.copyright.companyName'),
                            initialYear: initialYear,
                            currentYear: currentYear,
                            showRange: initialYear < currentYear
                        }
                    }
                }
            );
        }
    };
});


/*
    © 2017 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

// @module Footer
define('SC.ThreadsThemeExtension.Footer.Simplified', [
    'Footer.Simplified.View',
    'underscore',
    'SC.Configuration'
],
function ThemeExtensionFooterSimplified(
    FooterView,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            // for Copyright message
            var initialConfigYear = Configuration.get('footer.copyright.initialYear');
            var initialYear = initialConfigYear ? parseInt(initialConfigYear, 10) : new Date().getFullYear();
            var currentYear = new Date().getFullYear();

            FooterView.addExtraContextProperty(
                'extraFooterSimplifiedViewContext',
                'object',
                function FooterViewAddExtraContextProperty() {
                   return {
                        copyright: {
                            hide: !!Configuration.get('footer.copyright.hide'),
                            companyName: Configuration.get('footer.copyright.companyName'),
                            initialYear: initialYear,
                            currentYear: currentYear,
                            showRange: initialYear < currentYear
                        }
                    }
                }
            );
        }
    };
});


define('SC.ThreadsThemeExtension.ItemRelations.SC.Configuration', [
    'SC.Configuration'
],
function ThemeExtensionItemRelations() {
    'use strict';

    return {
        loadModule: function loadModule() {
            if (SC.CONFIGURATION.bxSliderDefaults && SC.CONFIGURATION.bxSliderDefaults.slideWidth) {
                SC.CONFIGURATION.bxSliderDefaults.slideWidth = 296;
                SC.CONFIGURATION.bxSliderDefaults.maxSlides = 4;
            }
        }
    };
});


/* eslint-disable */
define('SC.ThreadsThemeExtension.LoadWebFont', [

    'SC.Configuration'

], function SCThreadsThemeExtensionLoadWebFont(

    Configuration

) {

'use strict';

return {

  loadModule: function loadModule() {

    if (Configuration.get('threads.webFonts.isWebFontEnabled') && Configuration.get('threads.webFonts.isWebFontAsync')) {
        window.WebFontConfig = Configuration.get('threads.webFonts.webFontConfig');

        if (SC.ENVIRONMENT.jsEnvironment === 'browser') {
            (function(d) {
                var wf = d.createElement('script'), s = d.scripts[0];
                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                s.parentNode.insertBefore(wf, s);
            })(document);
        }
    }

  }

};


});

/* eslint-enable */


// @module ErrorManagementPageNotFound View
define('SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View', [
    'ErrorManagement.PageNotFound.View',
    'underscore',
    'SC.Configuration'
],
function ThemeExtensionErrorManagementPageNotFoundView(
    ErrorManagementPageNotFoundView,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            _.extend(ErrorManagementPageNotFoundView.prototype, {
                getContext: _.wrap(ErrorManagementPageNotFoundView.prototype.getContext, function getContext(fn) {
                    var ret = fn.apply(this, _.toArray(arguments).slice(1));
                    return _.extend(ret, {
                        extraErrorMgtPageNotFoundView: {
                            // @property {String} backgroundUrl
                            backgroundImage: Configuration.get('errorManagementPageNotFound.pageNotFoundBgrImg'),
                            // @property {String} bkgdColor
                            backgroundColor: Configuration.get('errorManagementPageNotFound.bkgdColor'),
                            // @property {String} title
                            title: Configuration.get('errorManagementPageNotFound.title'),
                            // @property {String} text
                            text: Configuration.get('errorManagementPageNotFound.text'),
                            // @property {String} btnText
                            btnText: Configuration.get('errorManagementPageNotFound.btnText'),
                            // @property {String} btnHref
                            btnHref: Configuration.get('errorManagementPageNotFound.btnHref')
                        }
                    });
                })
            });
        }
    };
});


// @module LoginRegister View
define('SC.ThreadsThemeExtension.LoginRegister.Login.View', [
    'LoginRegister.Login.View',
    'underscore',
    'SC.Configuration'
],
function ThemeExtensionLoginRegister(
    LoginRegisterLoginView,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            LoginRegisterLoginView.addExtraContextProperty(
                'extraLoginRegisterLoginView',
                'object',
                function LoginRegisterLoginViewAddExtraContextProperty() {
                    return {
                        // @property {String} loginSubtitle
                        loginSubtitle: Configuration.get('loginRegister.loginSubtitle'),
                        // @property {String} loginText
                        loginText: Configuration.get('loginRegister.loginText')
                    }
                }
            );
        }
    };
});


define('threadsThemeExtensionCheckoutEntryPoint', [
    'SC.ThreadsThemeExtension.Header',
    'SC.ThreadsThemeExtension.HeaderLogo',
    'SC.ThreadsThemeExtension.Footer',
    'SC.ThreadsThemeExtension.Footer.Simplified',
    'SC.ThreadsThemeExtension.ItemRelations.SC.Configuration',
    'SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View',
    'SC.ThreadsThemeExtension.LoginRegister.Login.View',
    'SC.ThreadsThemeExtension.LoadWebFont'
], function threadsThemeExtensionCheckoutEntryPoint(
    ThreadsThemeExtHeader,
    ThreadsThemeExtHeaderLogo,
    ThreadsThemeExtFooter,
    ThreadsThemeExtFooterSimplified,
    ThreadsThemeExtItemRelations,
    ThreadsThemeExtErrorManagementPageNotFound,
    ThreadsThemeExtLoginRegister,
    ThreadsThemeExtLoadWebFont
) {
    'use strict';

    return {
        mountToApp: function(application) {
            ThreadsThemeExtHeader.loadModule();
            ThreadsThemeExtHeaderLogo.loadModule(application);
            ThreadsThemeExtFooter.loadModule();
            ThreadsThemeExtFooterSimplified.loadModule();
            ThreadsThemeExtItemRelations.loadModule();
            ThreadsThemeExtErrorManagementPageNotFound.loadModule();
            ThreadsThemeExtLoginRegister.loadModule();
            ThreadsThemeExtLoadWebFont.loadModule();
        }
    }
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["SC.ThreadsThemeExtension.Header","SC.ThreadsThemeExtension.HeaderLogo","SC.ThreadsThemeExtension.Footer","SC.ThreadsThemeExtension.Footer.Simplified","SC.ThreadsThemeExtension.ItemRelations.SC.Configuration","SC.ThreadsThemeExtension.LoadWebFont","SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View","SC.ThreadsThemeExtension.LoginRegister.Login.View"];
try{
	extensions['CloudAlp.LoginPageOverRide.1.0.0']();
	SC.addExtensionModule('CloudAlp.LoginPageOverRide.LoginPageOverRide');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.ShowSiteSearch.1.0.0']();
	SC.addExtensionModule('CloudAlp.ShowSiteSearch.ShowSiteSearch');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Logitail.ThreadsThemeExtension.1.1.18']();
	SC.addExtensionModule('threadsThemeExtensionCheckoutEntryPoint');
}
catch(error)
{
	console.error(error);
}

