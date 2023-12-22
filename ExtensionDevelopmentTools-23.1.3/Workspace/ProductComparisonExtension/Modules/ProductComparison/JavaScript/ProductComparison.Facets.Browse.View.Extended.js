// Not yet in use

// @module Facets.Browse.View.Extended
define('ProductComparison.Facets.Browse.View.Extended', [
    'Backbone',
    'Facets.Browse.View',
    'Facets.AddedForComparison.View',
    'ProductComparison.Helper',
    'SC.Configuration',
    'underscore',
    'product_comparison_facets_browse_view_extended.tpl',
    //'jQuery',
    //'jquery.cookie'
], function FacetsBrowseViewExtended(
    Backbone,
    FacetsBrowseView,
    AddedForComparisonView,
    ProductComparisonHelper,
    Configuration,
    _,
    productComparisonFacetsBrowseViewExtended
) {
    'use strict';

    return Backbone.View.extend({
        template: productComparisonFacetsBrowseViewExtended,
        initialize: function initialize(options) {
            var self = this;
            this.plp = options.plp;
            this.plp.on('addToComparison-event-listener', function onAddToComparison(e) { // eslint-disable-line no-unused-vars
                self.render();
            });
        },
        childViews: {
            'AddedForComparison': function facetsBrowseChildView() {
                return new AddedForComparisonView({ parentView: this.plp.current_view, plp: this.plp });
            }
        },
        getContext: function getContext() {
            var existingProductToCompareHelper = ProductComparisonHelper.getSessionCookieProductIDs();
            return {
                productToCompareNotExist: existingProductToCompareHelper && existingProductToCompareHelper.length === 0
            };
        }
    });
});
