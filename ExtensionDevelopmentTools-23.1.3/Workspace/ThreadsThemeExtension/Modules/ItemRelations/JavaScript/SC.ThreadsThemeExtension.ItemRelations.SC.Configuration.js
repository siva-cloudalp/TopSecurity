define('SC.ThreadsThemeExtension.ItemRelations.SC.Configuration', [
    'SC.Configuration'
],
function ThemeExtensionItemRelations() {
    'use strict';

    return {
        loadModule: function loadModule() {
            if (SC.CONFIGURATION.bxSliderDefaults && SC.CONFIGURATION.bxSliderDefaults.slideWidth) {
                SC.CONFIGURATION.bxSliderDefaults.slideWidth = 296;
                SC.CONFIGURATION.bxSliderDefaults.maxSlides = 4;
            }
        }
    };
});
