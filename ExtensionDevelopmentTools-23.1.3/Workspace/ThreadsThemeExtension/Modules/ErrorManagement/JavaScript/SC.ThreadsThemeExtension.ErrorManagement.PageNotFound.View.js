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
