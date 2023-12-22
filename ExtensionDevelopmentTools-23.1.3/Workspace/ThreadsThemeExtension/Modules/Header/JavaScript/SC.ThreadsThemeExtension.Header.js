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
