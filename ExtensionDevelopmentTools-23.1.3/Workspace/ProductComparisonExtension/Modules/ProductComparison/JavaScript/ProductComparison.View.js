define('ProductComparison.View', [
    'Backbone',
    'underscore',
    'ProductComparison.Helper',
    'product_comparison_view.tpl',
    'jQuery',
    'js.cookie'
], function ProductComparisonView(
    Backbone,
    _,
    ProductComparisonHelper,
    productComparisonViewTpl,
    jQuery,
    Cookies
) {
    'use strict';

    return Backbone.View.extend({
        template: productComparisonViewTpl,
        contextDataRequest: ['item'],
        events: {
            'click [data-action="add-to-compare"]': 'updateAddedForComparison'
        },

        initialize: function initialize(options) {
            var self = this;
            self.plp = options.plp;
            self.application = options.application;

            self.plp.on('addToComparison-event-listener', function plpOnAddComparison(e) {  // eslint-disable-line
                self.render();
            });
        },

        checkForAddToCompare: function checkForAddToCompare() {
            var index;
            var willBeAddedToCompare = false;
            var existingProductToCompareIDs = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');

            index = existingProductToCompareIDs.indexOf(this.contextData.item().internalid);
            if (index > -1) {
                willBeAddedToCompare = true;
            }
            return willBeAddedToCompare;
        },

        //  @method updateAddedForComparison
        updateAddedForComparison: function updateAddedForComparison(e) {
            var allowAddToCompare;
            var itemId;
            var self = this;

            self.$el.find('.compare-items-container').show();

            if (e && e.currentTarget.checked === true) {
                allowAddToCompare = this.allowAddToCompare();
                if (allowAddToCompare === true) {
                    itemId = self.$el.find(e.target).data('item-id');
                    this.addProductIdsToCompare(itemId);
                    this.plp.cancelableTrigger('addToComparison-event-listener', {
                        check: e.currentTarget.checked,
                        itemId: itemId
                    });
                } else {
                    e.preventDefault();
                    alert(_.translate('Can no longer add this product, only a maximum of 4 products are allowed!')); // eslint-disable-line no-alert
                }
            } else if (e && e.currentTarget.checked === false) {
                itemId = self.$el.find(e.target).data('item-id');
                this.removeProductIdsFromCompare(itemId);
                this.plp.cancelableTrigger('addToComparison-event-listener', {
                    check: e.currentTarget.checked,
                    itemId: itemId
                });
            }
        },

        // @method allowAddToCompare
        allowAddToCompare: function allowAddToCompare() {
            var existingProductToCompareIDs = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');
            return existingProductToCompareIDs.length < 4;
        },

        // @method addProductIdsToCompare
        addProductIdsToCompare: function addProductIdsToCompare(id) {
            // Check to see if passed in id already exist or not, if not add to the selection
            var self = this;
            var index;
            var sessionProducts = ProductComparisonHelper.getSessionCookieProductIDs();
            var existingProductToCompareIDs = _.pluck(sessionProducts, 'id');

            index = existingProductToCompareIDs.indexOf(id);
            if (existingProductToCompareIDs.length < 4) {
                if (index === -1) {
                    sessionProducts.push({
                        id: self.contextData.item().internalid,
                        url: self.contextData.item().keyMapping_thumbnail.url,
                        name: self.contextData.item().keyMapping_name
                    });
                }

                // Proceed to set product comparison IDs as a string in session cookie
                
                //jQuery.cookie('NS_ProductComparisonIDs', JSON.stringify(sessionProducts));
                //$.cookie('NS_ProductComparisonIDs', JSON.stringify(sessionProducts));
                Cookies.set('NS_ProductComparisonIDs', JSON.stringify(sessionProducts));

            }
            return existingProductToCompareIDs;
        },

        // @method removeProductIdsFromCompare
        removeProductIdsFromCompare: function removeProductIdsFromCompare(id) {
            var index;
            var newProductToCompareIDsStr;

            var existingProductToCompareIDs = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');
            var existingProductToCompare = ProductComparisonHelper.getSessionCookieProductIDs();

            index = existingProductToCompareIDs.indexOf(id);
            if (index >= -1) {
                existingProductToCompareIDs.splice(index, 1);
                existingProductToCompare.splice(index, 1);

                newProductToCompareIDsStr = JSON.stringify(existingProductToCompare);
                
                //jQuery.cookie('NS_ProductComparisonIDs', newProductToCompareIDsStr);
                //$.cookie('NS_ProductComparisonIDs', newProductToCompareIDsStr);
                Cookies.set('NS_ProductComparisonIDs', newProductToCompareIDsStr);
                
            }
        },

        getContext: function getContext() {
            return {
                itemId: this.contextData.item().internalid,
                checkForAddToCompare: this.checkForAddToCompare()
            };
        }
    });
});
