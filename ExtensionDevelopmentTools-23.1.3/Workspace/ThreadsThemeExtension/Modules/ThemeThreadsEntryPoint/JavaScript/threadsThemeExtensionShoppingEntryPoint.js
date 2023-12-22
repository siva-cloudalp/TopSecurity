define('threadsThemeExtensionShoppingEntryPoint', [
    'SC.ThreadsThemeExtension.Header',
    'SC.ThreadsThemeExtension.HeaderLogo',
    'SC.ThreadsThemeExtension.Footer',
    'SC.ThreadsThemeExtension.Home',
    'SC.ThreadsThemeExtension.ItemRelations.SC.Configuration',
    'SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View',
    'SC.ThreadsThemeExtension.LoadWebFont',
    'SC.Configuration',
    'Utils',
    'underscore'
], function threadsThemeExtensionShoppingEntryPoint(
    ThreadsThemeExtHeader,
    ThreadsThemeExtHeaderLogo,
    ThreadsThemeExtFooter,
    ThreadsThemeExtHome,
    ThreadsThemeExtItemRelations,
    ThreadsThemeExtErrorManagementPageNotFound,
    ThreadsThemeExtLoadWebFont,
    Configuration,
    Utils,
    _
) {
    'use strict';

    return {
        mountToApp: function(application) {
            Utils.initBxSlider = _.initBxSlider = _.wrap(_.initBxSlider, function initBxSlider(fn) {
                var autoPlayCarousel = Configuration.get('home.autoPlayCarousel');
                var carouselSpeed = Configuration.get('home.carouselSpeed');
                
                if (arguments.length !== 0 && 
                    arguments[1] && arguments[1][0] &&
                    arguments[1][0].id === 'home-image-slider-list') {
                    arguments[2] = _.extend(arguments[2], {auto: autoPlayCarousel, pause: carouselSpeed}); 
                }

                return fn.apply(this, _.toArray(arguments).slice(1));
            });
            
            ThreadsThemeExtHeader.loadModule();
            ThreadsThemeExtHeaderLogo.loadModule(application);
            ThreadsThemeExtFooter.loadModule();
            ThreadsThemeExtHome.loadModule();
            ThreadsThemeExtItemRelations.loadModule();
            ThreadsThemeExtErrorManagementPageNotFound.loadModule();
            ThreadsThemeExtLoadWebFont.loadModule();
        }
    }
});
