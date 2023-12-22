/*
 © 2017 NetSuite Inc.
 User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
 provided, however, if you are an authorized user with a NetSuite account or log-in, you
 may use this code subject to the terms that govern your access and use.
 */

// @module Home
define('SC.ThreadsThemeExtension.Home', [
    'Home.View',
    'PluginContainer',
    'underscore',
    'SC.Configuration'
], function ThemeExtensionHome(
    HomeView,
    PluginContainer,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            var carousel = Configuration.get('home.themeCarouselImages', []);
            var infoblock = Configuration.get('home.infoblock', []);
            var infoblockTile = false;
            var showCarousel = false;
            var carouselObj;
            var isReady = false;

            HomeView.addExtraContextProperty(
                'extraHomeViewContext',
                'object',
                function HomeAddExtraContextProperty(context) {
                    carouselObj = context.carousel;
                    isReady = (_.has(context, 'isReady') && !_.isUndefined(context.isReady)) ? context.isReady : true;

                    if(!_.isEmpty(carouselObj)) {
                        _.each(carouselObj, function (carousel) {
                            if (!_.isEmpty(carousel.image)) {
                                _.extend(carousel, {
                                    isAbsoluteUrl: (carousel.image.indexOf('core/media') !== -1)
                                });
                            }
                        });
                    } else {
                        carouselObj = carousel;
                    }

                    return {
                        isReady: isReady,
                        // @property {Boolean} showCarousel
                        showCarousel: carouselObj && !!carouselObj.length,
                        // @property {Array<Object>} carousel
                        carousel: carouselObj,
                        // @property {Array<Object>} infoblock
                        infoblock: infoblock,
                        // @property {String} freeTextTitle - allows markup
                        freeTextText: _(Configuration.get('home.freeTextText', '')).translate(),
                        // @property {String} freeTextTitle
                        freeTextTitle: _(Configuration.get('home.freeTextTitle')).translate(),
                        // @property {String} freeTextSubtitle
                        freeTextSubtitle: _(Configuration.get('home.freeTextSubtitle')).translate(),
                        // @property {String} freeTextBtnText
                        freeTextBtnText: _(Configuration.get('home.freeTextBtnText')).translate(),
                        // @property {String} freeTextBtnHref
                        freeTextBtnHref: _(Configuration.get('home.freeTextBtnHref')).translate()
                    };
                }
            );
        }
    };
});
