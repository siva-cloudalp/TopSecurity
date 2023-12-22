/*
    © 2016 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

// @module Facets.AddedForComparison.View
define('Facets.AddedForComparison.View', [
    'ProductComparison.Helper',
    'product_comparison_facets.tpl',
    'Backbone',
    'underscore',
    'jQuery',
    'js.cookie',
    'Utils'
], function FacetsAddedForComparisonView(
    ProductComparisonHelper,
    Template,
    Backbone,
    _,
    jQuery,
    Cookies
) {
    'use strict';

    return Backbone.View.extend({
        template: Template,
        title: _('Added For Comparison').translate(),
        page_header: _('Available Products to be Compared').translate(),
        events: {
            'click [data-action="remove-from-add-to-compare"]': 'removeFromAddToCompare',
            'click [data-action="proceed-to-compare-products"]': 'routeToProductComparison',
            'click [data-action="clear-all-compare-products"]': 'clearAllCompareProducts',
            'click [data-action="slide-toggle-compared-items"]': 'slideToggleCompareItems'
        },
        // @method slideToggleCompareItems
        slideToggleCompareItems: function slideToggleCompareItems(e) {
            var $this = this.$el.find(e.currentTarget);
            var comparePanelButton = this.$el.find('.compare-items-container-hide-button');

            comparePanelButton.toggleClass('active');
            this.$el.find($this.data('target')).slideToggle(350);

            e.preventDefault();
        },
        // @method initialize
        initialize: function initialize(options) {
            var self = this;
            self.isReload = '';
            self.title = options.title;
            self.page_header = options.title;
            this.parentView = options.parentView;
            self.body = options.body;
            self.$productCompareContainer = jQuery('[data-view="AddedForComparison"]');
            self.plp = options.plp;
            self.plp.on('addToComparison-event-listener', function onAddToComparison() {
                jQuery('.compare-items-container').show();
            });
        },
        // @method getContext
        getContext: function getContext() {
            // @class GlobalViews.Conformation.View.Context
            var products = ProductComparisonHelper.getSessionCookieProductIDs();

            return {
                body: this.body,
                products: products,
                hideContainer: true
            };
        },

        // @method removeFromAddToCompare
        removeFromAddToCompare: function removeFromAddToCompare(e) {
            var self = this;
            var itemId = self.$el.find(e.target).data('itemid');
            var comparisonProductIDs;
            var comparisonProducts;
            var removeIdIndex;
            var selectorStr;

            e.preventDefault();
            // Call function retrieveProductsToCompare to get product for comparison
            comparisonProductIDs = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');
            comparisonProducts = ProductComparisonHelper.getSessionCookieProductIDs();
            removeIdIndex = comparisonProductIDs.indexOf(itemId);
            if (removeIdIndex > -1) {
                // Find a match proceed to remove the matching ID from comparing product list
                comparisonProductIDs.splice(removeIdIndex, 1);
                comparisonProducts.splice(removeIdIndex, 1);
            }

            // Convert back to a string and store it back to the list
            
            //jQuery.cookie('NS_ProductComparisonIDs', JSON.stringify(comparisonProducts));
            //$.cookie('NS_ProductComparisonIDs', JSON.stringify(comparisonProducts));
            Cookies.set('NS_ProductComparisonIDs',JSON.stringify(comparisonProducts));

            if (comparisonProductIDs && comparisonProductIDs.length >= 0) {
                if (comparisonProductIDs.length === 0) {
                    this.plp.cancelableTrigger('addToComparison-event-listener');
                    this.$productCompareContainer.hide();
                } else {
                    // Re-render the Modal
                    self.render();
                    this.$productCompareContainer.show();

                    // need to clear out related Product ID checkbox on the Parent View
                    selectorStr = 'input[type=checkbox][value=' + itemId + ']';
                    jQuery(selectorStr).prop('checked', false);
                }
            } else {
                this.plp.cancelableTrigger('addToComparison-event-listener');
                this.$productCompareContainer.show();
            }

            // retain Compare panel as active upon removing items from add to compare
            this.$el.find('.compare-items-container').show();
        },

        // @method routeToProductComparison
        routeToProductComparison: function routeToProductComparison() {
            var routeStr;
            var idsStr = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');
            var ids = idsStr.join('&id=');
            if (idsStr) {
                routeStr = '#productcomparison?id=' + (ids);
            }
            Backbone.history.navigate(routeStr, { trigger: true });
        },
        // @method clearAllCompareProducts
        clearAllCompareProducts: function clearAllCompareProducts() {
            // Empty out the cooke
            
            //jQuery.cookie('NS_ProductComparisonIDs', null);
            //$.cookie('NS_ProductComparisonIDs', null);
            Cookies.set('NS_ProductComparisonIDs', null);

            this.plp.cancelableTrigger('addToComparison-event-listener');
        }
    });
});
