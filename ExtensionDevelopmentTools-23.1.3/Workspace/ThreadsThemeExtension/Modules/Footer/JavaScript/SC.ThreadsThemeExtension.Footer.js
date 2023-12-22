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
