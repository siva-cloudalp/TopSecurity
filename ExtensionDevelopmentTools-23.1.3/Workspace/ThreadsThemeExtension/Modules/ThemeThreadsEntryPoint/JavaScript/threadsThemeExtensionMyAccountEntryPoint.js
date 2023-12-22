define('threadsThemeExtensionMyAccountEntryPoint', [
    'SC.ThreadsThemeExtension.Header',
    'SC.ThreadsThemeExtension.HeaderLogo',
    'SC.ThreadsThemeExtension.Footer',
    'SC.ThreadsThemeExtension.ItemRelations.SC.Configuration',
    'SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View',
    'SC.ThreadsThemeExtension.LoadWebFont'
], function threadsThemeExtensionMyAccountEntryPoint(
    ThreadsThemeExtHeader,
    ThreadsThemeExtHeaderLogo,
    ThreadsThemeExtFooter,
    ThreadsThemeExtItemRelations,
    ThreadsThemeExtErrorManagementPageNotFound,
    ThreadsThemeExtLoadWebFont
) {
    'use strict';

    return {
        mountToApp: function (application) {
            ThreadsThemeExtHeader.loadModule();
            ThreadsThemeExtHeaderLogo.loadModule(application);
            ThreadsThemeExtFooter.loadModule();
            ThreadsThemeExtItemRelations.loadModule();
            ThreadsThemeExtErrorManagementPageNotFound.loadModule();
            ThreadsThemeExtLoadWebFont.loadModule();
        }
    }
});
