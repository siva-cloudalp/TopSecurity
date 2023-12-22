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
