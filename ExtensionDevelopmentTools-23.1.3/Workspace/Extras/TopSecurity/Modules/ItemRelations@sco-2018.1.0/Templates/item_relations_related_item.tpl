<div itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<a class="item-relations-related-item-thumbnail" {{{itemURL}}}>
		<img src="{{resizeImage thumbnail.url 'merchzone'}}" alt="{{thumbnail.altimagetext}}" />
	</a>
	<a class="item-relations-related-item-link" href="#">
		<span class="item-relations-related-item-brand">
			{{model.custitem_bhs_merken}}
		</span>
	</a>
	<a {{{itemURL}}} class="item-relations-related-item-title">
		<span itemprop="name">{{itemName}}</span>
		<div class="item-relations-related-item-sku" data-view="ItemViews.Sku">{{sku}}</div>
	</a>
	<div class="item-relations-related-item-price" data-view="Item.Price">
	</div>

	{{!-- custom  --}}
	<div data-view="AddToCart"></div>
	{{!-- end  --}}

	{{#if showRating}}
		<div class="item-relations-related-item-rate" data-view="Global.StarRating">
		</div>
	{{/if}}
</div>




{{!----
Use the following context variables when customizing this template:

	itemURL (String)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	sku (String)
	model (Object)
	model.itemsIds (Number)
	model.options (Array)
	model._matrixParent (Object)
	model._matrixParent.options (Array)
	model._url (String)
	model._name (String)
	model._thumbnail (Object)
	model._thumbnail.url (String)
	model._thumbnail.altimagetext (String)
	model._sku (String)
	model._rating (Number)
	model._ratingsCount (Number)
	model._matrixChilds (Array)
	model._inStockMessage (String)
	model._showInStockMessage (Boolean)
	model._showStockDescription (Boolean)
	model._stockDescriptionClass (String)
	model._quantityavailableforstorepickup_detail (Array)
	model._showQuantityAvailable (Boolean)
	showRating (Boolean)
	itemName (String)
	itemId (Number)

----}}
