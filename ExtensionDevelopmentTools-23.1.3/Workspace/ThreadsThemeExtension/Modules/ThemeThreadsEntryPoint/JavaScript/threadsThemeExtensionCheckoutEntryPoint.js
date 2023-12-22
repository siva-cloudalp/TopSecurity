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
