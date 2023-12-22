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
