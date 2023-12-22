
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
