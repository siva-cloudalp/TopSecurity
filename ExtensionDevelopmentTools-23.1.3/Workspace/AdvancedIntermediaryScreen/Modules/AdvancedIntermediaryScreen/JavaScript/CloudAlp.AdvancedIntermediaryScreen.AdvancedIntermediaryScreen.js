
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
