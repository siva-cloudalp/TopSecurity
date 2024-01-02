// @module CloudAlp.ItemRelations.ItemRelations
define('CloudAlp.ItemRelations.ItemRelations.View'
	, [
		'cloudalp_itemrelations_itemrelations.tpl'
		, 'CloudAlp.ItemRelations.ItemRelations.Model'
		, 'Backbone'
		, 'LiveOrder.Model'
		, 'underscore'
		, 'Cart.Confirmation.Helpers'
		, 'Profile.Model'
	]
	, function (
		cloudalp_itemrelations_itemrelations_tpl
		, ItemRelationsModel
		, Backbone
		, LiveOrderModel
		, _
		, CartConfirmationHelpers
		, ProfileModel
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
				let profileModel = ProfileModel.getInstance();

				let hidePrice = profileModel.hidePrices(); // this will work based on Required login to see price

				const isLoggedIn = profileModel.get('isLoggedIn') === 'T' ? true : false;

				let show_add_cart = true;

				(hidePrice) ? show_add_cart = isLoggedIn : show_add_cart;

				return {
					model: this.model,
					ispurchasable: this.model.get('ispurchasable'),
					show_add_cart: show_add_cart
				};
			}
		});
	});
