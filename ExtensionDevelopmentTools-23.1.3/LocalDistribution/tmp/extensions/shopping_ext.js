var extensions = {};

extensions['CloudAlp.AdvancedIntermediaryScreen.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/AdvancedIntermediaryScreen/1.0.0/' + asset;
}

// @module CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen
define('CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View'
	, [
		'cloudalp_advancedintermediaryscreen_advancedintermediaryscreen.tpl'

		, 'CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_advancedintermediaryscreen_advancedintermediaryscreen_tpl

		, AdvancedIntermediaryScreenModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_advancedintermediaryscreen_advancedintermediaryscreen_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new AdvancedIntermediaryScreenModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View.Context
				return {

				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/AdvancedIntermediaryScreen.Service.ss"
            )
        )
        
});
});



define(
	'CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen'
	, [
		'CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View'
		, 'underscore'
		, "ItemRelations.AdvancedRelatedItem.View"
		, 'LiveOrder.Model'
	]
	, function (
		AdvancedIntermediaryScreenView
		, _
		, ItemRelationsAdvancedRelatedItemView
		, LiveOrderModel

	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {

				/**
				 * AdvancedIntermediaryScreen this is custom functionality done in SCA,Here overriding in extensions
				 * Added the input functionality ,i.e puls minus for quntatity to add product to cart
				 */
				_.extend(ItemRelationsAdvancedRelatedItemView.prototype, {

					events: _.extend({}, ItemRelationsAdvancedRelatedItemView.prototype.events, {
						'click [data-action="updateQuantity"]': 'setQuantity',
						'click [data-action="changeQuantity"]': 'setFocus',
						'keyup [data-action="changeQuantity"]': 'disableFocus'
					}),

					// @method setQuantity Increase the product's Quantity by 1
					// @param {jQuery.Event} e
					// @return {Void}
					setQuantity: function setQuantity(e) {
						e.preventDefault();
						const value = parseInt(this.$(e.currentTarget).data('value'), 10);
						const $input_quantity = this.$('[name="AdvanceQnty"]');
						const old_value = parseInt($input_quantity.val(), 10);
						const new_quantity = old_value + value;
						if (new_quantity > 0) {
							let submit_btn = $(e.currentTarget).parent().parent().prev().children();
							submit_btn.data('value', new_quantity);
							$input_quantity.val(new_quantity).trigger('blur');

						}
					},

					// @method setFocus sets focus on input when clicked. Needed as FF won't focus if quantity is updated from spinners
					// @return {Void}
					setFocus: function setFocus() {
						this.$('[name="AdvanceQnty"]').focus();
					},
					// @method disableFocus Blur if ENTER/RETURN key is pressed
					// @return {Void}
					disableFocus: function disableFocus(e) {
						let input = this.$('[name="AdvanceQnty"]').val();
						if (input != "") {
							let submit_btn = $(e.currentTarget).parent().parent().prev().children();
							submit_btn.data('value', parseInt(input, 10));
						}

						if (e.keyCode === 13) {
							this.$('[name="AdvanceQnty"]').blur();
						}
					},
					addToCart: function addToCart(e) {
						var self = this;
						var itemid = jQuery(e.currentTarget).attr('data-item-id');
						var originalText = jQuery(e.currentTarget).text();
						var cart = LiveOrderModel.getInstance();

						var quantity = parseInt($(e.currentTarget).data('value'), 10);

						if (isNaN(quantity)) {
							// when direct click on add to cart btn NaN wil get so we are passing 1 ,by default 1 will be there in input.
							quantity = 1;
						}

						if (!this.processing && quantity > 0) {
							this.loading(e, true);
							var lineData = {
								quantity: quantity,
								item: {
									internalid: itemid
								},
								options: []
							};

							cart.addLine(lineData).done(function done() {
								self.loading(e, false, originalText);
								self.itemAdded = true;
								self.render();
							});
						}
					}
				});

			}
		};
	});


};

extensions['CloudAlp.ItemRelations.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/ItemRelations/1.0.0/' + asset;
}

// @module CloudAlp.ItemRelations.ItemRelations
define('CloudAlp.ItemRelations.ItemRelations.View'
	, [
		'cloudalp_itemrelations_itemrelations.tpl'
		, 'CloudAlp.ItemRelations.ItemRelations.Model'
		, 'Backbone'
		, 'LiveOrder.Model'
		, 'underscore'
		, 'Cart.Confirmation.Helpers'
	]
	, function (
		cloudalp_itemrelations_itemrelations_tpl
		, ItemRelationsModel
		, Backbone
		, LiveOrderModel
		, _
		, CartConfirmationHelpers
	) {
		'use strict';

		// @class CloudAlp.ItemRelations.ItemRelations.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_itemrelations_itemrelations_tpl

			, initialize: function (options) {
				let self = this;
				self.ItemRelationsModel = new ItemRelationsModel();
				self.model = options.model;
			}

			, events: {
				'click [data-action="updateQuantity"]': 'setQuantity',
				'click [data-action="changeQuantity"]': 'setFocus',
				'keyup [data-action="changeQuantity"]': 'disableFocus',
				'click [data-action="addToCart"] ': 'addToCart'
			}
			// @method setQuantity Increase the product's Quantity by 1
			// @param {jQuery.Event} e
			// @return {Void}
			, setQuantity: function setQuantity(e) {
				e.preventDefault();
				let self = this;
				let value = parseInt(this.$(e.currentTarget).data('value'), 10);
				const $input_quantity = this.$('[name="itemRelationquantity"]');
				const old_value = parseInt($input_quantity.val(), 10);
				const new_quantity = old_value + value;
				if (new_quantity > 0) {
					let add_qnty = $(e.currentTarget).parent().parent().prev().children();
					add_qnty.data('value', new_quantity);
					$input_quantity.val(new_quantity).trigger('blur');
				}

			},

			// @method setFocus sets focus on input when clicked. Needed as FF won't focus if quantity is updated from spinners
			// @return {Void}
			setFocus: function setFocus(e) {
				this.$('[name="itemRelationquantity"]').focus();
			},
			// @method disableFocus Blur if ENTER/RETURN key is pressed
			// @return {Void}
			disableFocus: function disableFocus(e) {
				let input = this.$('[name="itemRelationquantity"]').val();
				if (input != "") {
					let add_qnty = $(e.currentTarget).parent().parent().prev().children();
					add_qnty.data('value', parseInt(input, 10));
				}
				if (e.keyCode === 13) {
					this.$('[name="itemRelationquantity"]').blur();
				}
			}

			, addToCart: function addToCart(e) {
				var self = this;
				var itemid = $(e.currentTarget).attr('data-id');
				var quantity = parseInt($(e.currentTarget).data('value'), 10);
				var application = self.options.container.layout.application;
				var cart = LiveOrderModel.getInstance();

				if (isNaN(quantity)) {
					// when direct click on add to cart btn NaN wil get so we are passing 1 ,by default 1 will be there in input.
					quantity = 1;
				}

				if (itemid && quantity > 0) {
					let lineData = {
						quantity: quantity,
						item: {
							internalid: itemid
						},
						options: []
					};
					var cartPromise = cart.addLine(lineData).done(function done() {
						let line = cart.getLatestAddition();
						CartConfirmationHelpers.showCartConfirmation(cartPromise, line, application);
					});
				}


			}

			//@method getContext @return CloudAlp.ItemRelations.ItemRelations.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.ItemRelations.ItemRelations.View.Context
				return {
					model: this.model,
					ispurchasable: this.model.get('ispurchasable')
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ItemRelations.ItemRelations.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ItemRelations.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ItemRelations.ItemRelations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ItemRelations/SuiteScript2/ItemRelations.Service.ss"
            ),
            true
        )
});
});



define(
	'CloudAlp.ItemRelations.ItemRelations'
	, [
		'CloudAlp.ItemRelations.ItemRelations.View'
		, "ItemRelations.RelatedItem.View"
		, 'ProductDetails.Quantity.View'
		, 'Utils'
		, 'underscore'
	]
	, function (
		ItemRelationsView
		, ItemRelationsRelatedItemView
		, ProductDetailsQuantityView
		, Utils
		, _
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				/** @type {LayoutComponent} */

				_.extend(ItemRelationsRelatedItemView.prototype, {
					childViews: _.extend({}, ItemRelationsRelatedItemView.prototype.childViews, {
						AddToCart: function () {
							return new ItemRelationsView({
								model: this.model,
								container: container
							});
						}
					})
				});


			}
		};
	});


};

extensions['SC.ProductComparisonExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/SC/ProductComparisonExtension/1.0.0/' + asset;
}

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


/*
    © 2016 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
// @module ProductComparison
define('ProductComparison.Collection', [
    'SC.Configuration',
    'Profile.Model',
    'Backbone',
    'Backbone.CachedCollection',
    'Item.Collection',
    'Session',
    'underscore',
    'Utils'
], function ProductComparisonCollection(
    Configuration,
    ProfileModel,
    Backbone,
    BackboneCachedCollection,
    ItemCollection,
    Session,
    _
) {
    'use strict';

    return ItemCollection.extend({
        url: function Url() {
            var productIDs = [];
            var idString = '';
            var url = '';
            var tmpVal;

            // Retreieving from URL queryStr from options
            var queryStrParams = this.options;
            if (queryStrParams) {
                _.each(queryStrParams, function eachQueryParams(value, key) {
                    tmpVal = parseInt(value, 10);
                    if (key < 4) {
                        productIDs.push(tmpVal);
                        idString += 'id=' + tmpVal + '&';
                    }
                });
                url = '/api/items?' + idString + 'fieldset=productcomparison';
            }
            return url;
        },

        // @method initialize
        initialize: function initialize(options) {
            this.options = options;
        },

        // @method getModuleConfig
        getModuleConfig: function getModuleConfig() {
            var config = Configuration.get('productComparison');
            return config;
        },

        getUrlLogin: function getUrlLogin() {
            var url = Session.get('touchpoints.login') + '&origin=' + (Configuration.get('currentTouchpoint') || 'home') + '&origin_hash=';

            return url + encodeURIComponent(Backbone.history.fragment);
        },

        // @method getMappedValuesToProperties
        getMappedValuesToProperties: function getMappedValuesToProperties() {
            var self = this;
            var productValues = [];
            var productGroups = [];
            var itemValue;
            var test = this.getModuleConfig().itemProperties;
            var tmpItemProperties = _.clone(test);
            var pluckMatrixChildItems;
            var maxPriceValue;
            var minPriceValue;
            var loginText = '';
            var seePriceText = '';

            tmpItemProperties = _.sortBy(tmpItemProperties, 'order');

            _.map(tmpItemProperties, function tmpItemPropertiesMapping(itemProperty, key) {
                productValues = [];

                self.each(function eachProperty(item) { // eslint-disable-line
                    if (itemProperty && itemProperty.fieldid) {
                        if (itemProperty.type === 'Actions') {
                            itemValue = {};

                            if (typeof itemProperty.fieldid === 'string') {
                                itemProperty.fieldid = itemProperty.fieldid.replace(/\s/g, '');
                                itemProperty.fieldid = itemProperty.fieldid.split(',');
                            }

                            _.each(itemProperty.fieldid, function eachItemPropertyId(itemPropertyID) {
                                itemValue[itemPropertyID] = item.get(itemPropertyID);
                            });

                            itemProperty.isTypeControlActions = true;
                        } else {
                            if (itemProperty.fieldid === 'pricelevel5_formatted') { // eslint-disable-line no-lonely-if
                                if (!ProfileModel.getInstance().hidePrices()) {
                                    itemProperty.isPrice = true;

                                    if (item.get('custitem_item_customersegments') !== undefined) {
                                        productGroups.push(
                                            item.get('custitem_item_customersegments')
                                                .split(', ')
                                                .toString()
                                                .replace(new RegExp(' ', 'g'), '-')
                                                .replace(',', ' ') || '');
                                    }

                                    if (item.get('matrixchilditems_detail')) {
                                        pluckMatrixChildItems = _.pluck(item.get('matrixchilditems_detail'), 'onlinecustomerprice_detail');
                                        if (pluckMatrixChildItems) {
                                            maxPriceValue = _.max(pluckMatrixChildItems, function getMaxPriceValue(matrixChild) {
                                                return matrixChild.onlinecustomerprice;
                                            });

                                            minPriceValue = _.min(pluckMatrixChildItems, function getMinPriceValue(matrixChild) {
                                                return matrixChild.onlinecustomerprice;
                                            });

                                            if (maxPriceValue.onlinecustomerprice_formatted !== minPriceValue.onlinecustomerprice_formatted) {
                                                itemValue = (maxPriceValue.onlinecustomerprice && minPriceValue.onlinecustomerprice) ?
                                                    minPriceValue.onlinecustomerprice_formatted + ' ' +
                                                        _.translate('to') + ' ' +
                                                        maxPriceValue.onlinecustomerprice_formatted :
                                                    item.get(itemProperty.fieldid);
                                            } else {
                                                itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                            }
                                        } else {
                                            itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                        }
                                    } else {
                                        itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                                    }
                                } else {
                                    loginText = _.translate('Log in');
                                    seePriceText = _.translate('to see price');
                                    itemValue = '<a data-touchpoint="login" data-hashtag="login-register" href="#">' + loginText + '</a> ' + seePriceText;
                                }
                            } else {
                                itemValue = (item.get(itemProperty.fieldid) ? item.get(itemProperty.fieldid) : '');
                            }
                        }

                        if (itemProperty.type === 'Image') {
                            itemProperty.isTypeImage = true;
                        }

                        if (itemProperty.fieldid === '_images') {
                            itemValue = _.first(itemValue);
                        }

                        productValues.push(itemValue);
                    }
                });

                // if the product values is not empty, add it in the item property else remove
                if (_.compact(productValues).length !== 0) {
                    itemProperty.productValues = productValues;
                    itemProperty.productGroups = productGroups;
                } else {
                    delete tmpItemProperties[key];
                }
            });

            return _.compact(tmpItemProperties);
        }
    });
});


define('ProductComparison.Dashboard.View', [
    'Backbone',
    'Backbone.CollectionView',
    'Backbone.CompositeView',
    'ProductComparison.Helper',
    'productcomparison_dashboard.tpl',
    'underscore',
    'SC.Configuration',
    'jQuery',
    'js.cookie',
    'Utils'
], function ProductComparisonDashboardView(
    Backbone,
    BackboneCollectionView,
    BackboneCompositeView,
    ProductComparisonHelper,
    Template,
    _,
    Configuration,
    jQuery,
    Cookies
) {
    'use strict';

    return Backbone.View.extend({
        template: Template,
        title: _('Product Comparison Dashboard').translate(),
        events: {
            'click [data-action="remove-from-productcomparison"]': 'removeFromProductComparison',
            'click [data-action="share-productcomparison"]': 'shareProductComparison'
        },

        getBreadcrumbPages: function getBreadcrumbPages() {
            return [{
                text: _('Compare Products').translate()
            }];
        },

        // @method initialize
        initialize: function initialize(options) {
            BackboneCompositeView.add(this);
            this.application = options.application;
            this.collection = options.collection;
            this.listenTo(this.collection, 'all', this.updateProductComparisonSessionCookie);
        },

        // @method getContext
        getContext: function getContext() {
            return {
                itemProperties: this.collection.getMappedValuesToProperties(),

                // @property {String} iconClass
                buttonColor: '#' + Configuration.get('productComparison.buttonColor'),

                // @property {String} title
                PropertyLabelColor: '#' + Configuration.get('productComparison.PropertyLabelColor')
            };
        },

        // @method setProductComparisonSessionCookie
        updateProductComparisonSessionCookie: function updateProductComparisonSessionCookie() {
            var self = this;
            var existingCookieProductIDs;
            var urlProductIDs;
            var sessionProducts = [];
            // If cookie exists we need to check the existing URL is the same as cookie
            existingCookieProductIDs = _.pluck(ProductComparisonHelper.getSessionCookieProductIDs(), 'id');

            // Get the current IDs fomr the URL
            urlProductIDs = ProductComparisonHelper.getQueryStrProductIDs();

            // If the cookies are different, proceed to reset the cookies from the URL
            if (((existingCookieProductIDs.length === urlProductIDs.length &&
                _.difference(existingCookieProductIDs, urlProductIDs).length !== 0)) ||
                (existingCookieProductIDs.length === 0) ||
                ((existingCookieProductIDs.length !== urlProductIDs.length) && urlProductIDs.length > 0)
                ) {
                self.collection.each(function traverseCollection(item) {
                    sessionProducts.push({
                        id: item.get('_id'),
                        url: item.get('_thumbnail').url,
                        name: item.get('_name')
                    });
                });


                ProductComparisonHelper.setProductComparisonSessionCookie(sessionProducts);
            }
        },

        // @method removeFromProductComparison
        removeFromProductComparison: function removeFromProductComparison(e) {
            var itemIdStr;
            var itemId = jQuery(e.target).data('itemid');
            var comparisonProductIDs;
            var removeIndex;
            var productComparisonIDsStr;
            var routeStr;
            var i;
            e.preventDefault();


            if (itemId) itemIdStr = itemId.toString();

            // Call function retrieveProductsToCompare to get product for comparison
            comparisonProductIDs = ProductComparisonHelper.getQueryStrProductIDs();

            // Find a match proceed to remove the matching ID from comparing product list
            removeIndex = comparisonProductIDs.indexOf(itemIdStr);
            if (removeIndex > -1) comparisonProductIDs.splice(removeIndex, 1);

            // Store it back to session cookie
            productComparisonIDsStr = JSON.stringify(comparisonProductIDs);
            
            //jQuery.cookie('NS_ProductComparisonIDs', productComparisonIDsStr);
            //$.cookie('NS_ProductComparisonIDs', productComparisonIDsStr);
            Cookies.set('NS_ProductComparisonIDs', productComparisonIDsStr);


            // Follow by action to either reRender the page or navigate back to previous page
            if (comparisonProductIDs && comparisonProductIDs.length > 0) {
                routeStr = '#productcomparison?';
                for (i = 0; i < comparisonProductIDs.length; i++) {
                    if (i === comparisonProductIDs.length - 1) {
                        routeStr += 'id=' + comparisonProductIDs[i];
                    } else {
                        routeStr += 'id=' + comparisonProductIDs[i] + '&';
                    }
                }
                // Refresh the current page with new Query Strings
                Backbone.history.navigate(routeStr, { trigger: true });
            } else {
                // Return back to the search result if no products left
                Backbone.history.navigate('#search', { trigger: true });
            }
        },

        // @method shareProductComparison
        shareProductComparison: function shareProductComparison(e) {
            var url = encodeURIComponent(window.location);
            e.preventDefault();
            window.location = 'mailto:?subject=Check out the product comparisons via the URL in the email body&body=' + url;
        }
    });
});


/*
    © 2016 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

define('ProductComparison.Helper', [
    'jQuery',
    'js.cookie'
], function ProductComparisonHelper(jQuery,Cookies) {
    'use strict';

    /* eslint-disable */
    function QueryString(qs) {
        var queryString = qs;
        var match;
        var re = /([^=&]+)(=([^&]*))?/g;

        var key;
        var value;
        this.dict = {};

        // If no query string  was passed in use the one from the current page
        if (!queryString) {
            queryString = location.search;
        }

        // Delete leading question mark, if there is one
        if (queryString.charAt(0) === '?') {
            queryString = qs.substring(1);
        }
        match = re.exec(qs);
        // Parse it
        while (match) {
            key = decodeURIComponent(match[1].replace(/\+/g, ' '));
            value = match[3] ? QueryString.decode(match[3]) : '';

            if (this.dict[key]) {
                this.dict[key].push(value);
            } else {
                this.dict[key] = [value];
            }
            match = re.exec(qs);
        }
    }

    QueryString.decode = function decodeQueryString(s) {
        var queryString = s;
        queryString = queryString.replace(/\+/g, ' ');
        queryString = queryString.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/gi,

        function decode1(code, hex1, hex2, hex3) {
            var n1 = parseInt(hex1, 16) - 0xE0;
            var n2 = parseInt(hex2, 16) - 0x80;
            var n3;
            var n;

            if (n1 === 0 && n2 < 32) {
                return code;
            }

            n3 = parseInt(hex3, 16) - 0x80;
            n = (n1 << 12) + (n2 << 6) + n3;

            if (n > 0xFFFF) {
                return code;
            }

            return String.fromCharCode(n);
        });

        queryString = queryString.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/gi,
            function decode2(code, hex1, hex2) {
                var n1 = parseInt(hex1, 16) - 0xC0;
                var n2 = parseInt(hex2, 16) - 0x80;

                if (n1 < 2) {
                    return code;
                }

                return String.fromCharCode((n1 << 6) + n2);
            });

        queryString = queryString.replace(/%([0-7][0-9A-F])/gi, function returnFromCharCode(code, hex) {
            return String.fromCharCode(parseInt(hex, 16));
        });

        return queryString;
    };

    QueryString.prototype.value = function queryStringValue(key) {
        var a = this.dict[key];
        return a ? a[a.length - 1] : undefined;
    };

    QueryString.prototype.values = function queryStringValues(key) {
        var a = this.dict[key];
        return a ? a : [];
    };

    QueryString.prototype.keys = function queryStringKeys() {
        var a = [];
        var key;
        for ( key in this.dict ) {
            if (this.dict.hasOwnProperty(key)) {
                a.push(key);
            }
        }

        return a;
    };
    /* eslint-enable */

    return {
        // @method getSessionCookieProductIDs
        getSessionCookieProductIDs: function getSessionCookieProductIDs() {
            // load product ID from sessions cookies - need to dicover down the road is it
            // better to retrieve this from the Query String Param instead

            var productIDs = [];
            /*if (jQuery.cookie('NS_ProductComparisonIDs') && (typeof jQuery.cookie('NS_ProductComparisonIDs') !== 'object')) {
                productIDs = JSON.parse(jQuery.cookie('NS_ProductComparisonIDs'));
                if (!productIDs) {
                    productIDs = [];
                }
            }*/
            /*if ($.cookie('NS_ProductComparisonIDs') && (typeof $.cookie('NS_ProductComparisonIDs') !== 'object')) {
                productIDs = JSON.parse($.cookie('NS_ProductComparisonIDs'));
                if (!productIDs) {
                    productIDs = [];
                }
            }*/
            if (Cookies.get('NS_ProductComparisonIDs') && (typeof Cookies.get('NS_ProductComparisonIDs') !== 'object')) {
                productIDs = JSON.parse(Cookies.get('NS_ProductComparisonIDs'));
                if (!productIDs) {
                    productIDs = [];
                }
            }
            return productIDs;
        },
        // @method getQueryStrProductIDs
        getQueryStrProductIDs: function getQueryStrProductIDs() {
          // Retrieve this from the Browser URL
            var qs;
            var ret;
            var urlSubStr = window.location.href.split('?')[1];
            if (urlSubStr) {
                qs = new QueryString(urlSubStr);
                ret = qs.values('id');
            } else {
                ret = null;
            }

            return ret;
        },
        // @method setProductComparisonSessionCookie
        setProductComparisonSessionCookie: function setProductComparisonSessionCookie(objs) {
            if (objs) {
                
                //jQuery.cookie('NS_ProductComparisonIDs', JSON.stringify(objs));
                //$.cookie('NS_ProductComparisonIDs', JSON.stringify(objs));
                Cookies.set('NS_ProductComparisonIDs', JSON.stringify(objs));

            } else {
                //jQuery.cookie('NS_ProductComparisonIDs', null);
                //$.cookie('NS_ProductComparisonIDs', null);
                Cookies.set('NS_ProductComparisonIDs', null);
            }
        }
    };
});


define('ProductComparison.Router', [
    'Backbone',
    'ProductComparison.Dashboard.View',
    'ProductComparison.Collection',
    'underscore'
], function ProductComparisonRouter(
    Backbone,
    DashboardView,
    Collection,
    _
) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            'productcomparison?*querystring': 'productsToCompareFilteredList'
        },

        // @method initialize
        initialize: function initialize(application) {
            this.application = application;
        },

        // @method ProductsToCompareFilteredList
        productsToCompareFilteredList: function productsToCompareFilteredList(querystring) {
            var params = this.parseQueryString(querystring);
            var collection = new Collection(params);
            var view = new DashboardView({
                collection: collection,
                application: this.application
            });

            collection.fetch().done(function fetchCollection() {
                view.showContent();
            });
        },

        // @method parseQueryString
        /* Parse QueryString using String Splitting */
        parseQueryString: function parseQueryString(queryString) {
            var parts = queryString.split('&');
            var arr = [];

            _.each(parts, function eachParts(part) {
                var val = part.split('=')[1];
                arr.push(val);
            });

            return arr;
        }
    });
});


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


// module ProductComparison
define('SC.ProductComparison.1.0.0.ProductComparison', [
    'Backbone',
    'SC.Configuration',

    'ProductComparison.Router',
    'Facets.ItemCell.View',
    'ProductComparison.View',
    'Facets.Browse.View',
    'ProductComparison.Facets.Browse.View.Extended',
    'underscore',
    'Utils'
], function ProductComparison(
    Backbone,
    Configuration,

    Router,

    FacetsItemCellView,
    ProductComparisonView,
    FacetsBrowseView,
    ProductComparisonFacetsBrowseViewExtended
) {
    'use strict';

    var ProductComparisonConfig = Configuration.get('productComparison');
    if (ProductComparisonConfig && ProductComparisonConfig.enabled) {
        return {
            mountToApp: function mountToApp(application) {
                var plp = application.getComponent('PLP');
                var layout = application.getLayout();
                application.getLayout().on('afterAppendView', function applicationGetLayout(view) {
                    if (!(view instanceof FacetsBrowseView)) {
                        view.$el.find('.facets-item-cell-addtocompare').remove();
                    }
                });

                layout.goToProductComparison = function goToProductComparison() {
                    Backbone.history.navigate('productcomparison', { trigger: true });
                };

                plp.addChildViews(
                    plp.PLP_VIEW, {
                        'GlobalViews.Pagination': {
                            'AddedForComparison': {
                                childViewIndex: 1,
                                childViewConstructor: function childViewConstructor() {
                                    return new ProductComparisonFacetsBrowseViewExtended({
                                        application: application,
                                        plp: plp
                                    });
                                }
                            }
                        }
                    }
                );

                plp.addChildViews(
                    plp.PLP_VIEW, {
                        'ItemDetails.Options': {
                            'Product.Comparison.View': {
                                childViewIndex: 5,
                                childViewConstructor: function childViewConstructor() {
                                    return new ProductComparisonView({
                                        application: application,
                                        plp: plp
                                    });
                                }
                            }
                        }
                    }
                );

                return new Router(application);
            }
        };
    }
});


};

extensions['CloudAlp.ShowSiteSearch.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/ShowSiteSearch/1.0.0/' + asset;
}


define(
	'CloudAlp.ShowSiteSearch.ShowSiteSearch'
	, [
		'Header.View'
		, 'underscore'
	]
	, function (
		HeaderView
		, _
	) {

		'use strict';

		return {
			mountToApp: function mountToApp(container) {

				_.extend(HeaderView.prototype, {
					verifyShowSiteSearch: _.wrap(HeaderView.prototype.verifyShowSiteSearch, function (...args) {
						if (this.$('[data-action="show-sitesearch"]').length > 0) {
							let hash = Backbone.history.getFragment() || '';
							hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
						}
					})
				});
			}
		};
	});


};

extensions['Logitail.ThreadsThemeExtension.1.1.18'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Logitail/ThreadsThemeExtension/1.1.18/' + asset;
}

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


/* eslint-disable */
define('SC.ThreadsThemeExtension.LoadWebFont', [

    'SC.Configuration'

], function SCThreadsThemeExtensionLoadWebFont(

    Configuration

) {

'use strict';

return {

  loadModule: function loadModule() {

    if (Configuration.get('threads.webFonts.isWebFontEnabled') && Configuration.get('threads.webFonts.isWebFontAsync')) {
        window.WebFontConfig = Configuration.get('threads.webFonts.webFontConfig');

        if (SC.ENVIRONMENT.jsEnvironment === 'browser') {
            (function(d) {
                var wf = d.createElement('script'), s = d.scripts[0];
                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                s.parentNode.insertBefore(wf, s);
            })(document);
        }
    }

  }

};


});

/* eslint-enable */


// @module ErrorManagementPageNotFound View
define('SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View', [
    'ErrorManagement.PageNotFound.View',
    'underscore',
    'SC.Configuration'
],
function ThemeExtensionErrorManagementPageNotFoundView(
    ErrorManagementPageNotFoundView,
    _,
    Configuration
) {
    'use strict';

    return {
        loadModule: function loadModule() {
            _.extend(ErrorManagementPageNotFoundView.prototype, {
                getContext: _.wrap(ErrorManagementPageNotFoundView.prototype.getContext, function getContext(fn) {
                    var ret = fn.apply(this, _.toArray(arguments).slice(1));
                    return _.extend(ret, {
                        extraErrorMgtPageNotFoundView: {
                            // @property {String} backgroundUrl
                            backgroundImage: Configuration.get('errorManagementPageNotFound.pageNotFoundBgrImg'),
                            // @property {String} bkgdColor
                            backgroundColor: Configuration.get('errorManagementPageNotFound.bkgdColor'),
                            // @property {String} title
                            title: Configuration.get('errorManagementPageNotFound.title'),
                            // @property {String} text
                            text: Configuration.get('errorManagementPageNotFound.text'),
                            // @property {String} btnText
                            btnText: Configuration.get('errorManagementPageNotFound.btnText'),
                            // @property {String} btnHref
                            btnHref: Configuration.get('errorManagementPageNotFound.btnHref')
                        }
                    });
                })
            });
        }
    };
});


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


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View","CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.Model","CloudAlp.ItemRelations.ItemRelations.View","CloudAlp.ItemRelations.ItemRelations.Model","CloudAlp.ItemRelations.ItemRelations.SS2Model","ProductComparison.View","Facets.AddedForComparison.View","ProductComparison.Collection","ProductComparison.Dashboard.View","ProductComparison.Helper","ProductComparison.Router","ProductComparison.Facets.Browse.View.Extended","SC.ThreadsThemeExtension.Header","SC.ThreadsThemeExtension.HeaderLogo","SC.ThreadsThemeExtension.Footer","SC.ThreadsThemeExtension.Home","SC.ThreadsThemeExtension.ItemRelations.SC.Configuration","SC.ThreadsThemeExtension.LoadWebFont","SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View"];
try{
	extensions['CloudAlp.AdvancedIntermediaryScreen.1.0.0']();
	SC.addExtensionModule('CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.ItemRelations.1.0.0']();
	SC.addExtensionModule('CloudAlp.ItemRelations.ItemRelations');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['SC.ProductComparisonExtension.1.0.0']();
	SC.addExtensionModule('SC.ProductComparison.1.0.0.ProductComparison');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.ShowSiteSearch.1.0.0']();
	SC.addExtensionModule('CloudAlp.ShowSiteSearch.ShowSiteSearch');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Logitail.ThreadsThemeExtension.1.1.18']();
	SC.addExtensionModule('threadsThemeExtensionShoppingEntryPoint');
}
catch(error)
{
	console.error(error);
}

