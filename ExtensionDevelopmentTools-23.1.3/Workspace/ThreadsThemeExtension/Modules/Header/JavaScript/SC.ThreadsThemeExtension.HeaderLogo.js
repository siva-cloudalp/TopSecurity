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
