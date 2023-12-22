<div itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}"
    data-track-productlist-category="{{track_productlist_category}}"
    data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
    <a class="item-relations-related-item-thumbnail" {{{itemURL}}}>
        <img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" />
    </a>
    <a class="item-relations-related-item-link" href="#">
			<span class="item-relations-related-item-brand">
				{{custitem_bhs_merken}}
			</span>
	</a>
    <a {{{itemURL}}} class="item-relations-related-item-title">
        <span itemprop="name">{{itemName}}</span>
        <div class="item-relations-related-item-sku" data-view="ItemViews.Sku">{{sku}}</div>
    </a>
    
    <div class="item-relations-related-item-price" data-view="Item.Price"></div>
    {{#if showRating}}
        <div class="item-relations-related-item-rate" data-view="Global.StarRating"></div>
    {{/if}}
    {{#if showButton}}
        {{#if isMatrixItem}}
            <a href="/{{urlcomponent}}" data-toggle="show-in-modal" class="cart-add-to-cart-button-button" style="width: 80%">{{translate '2Add to cart'}}</a>
        {{else}}
            <div class="cart-add-to-cart-button-container" style="display: contents">
                <button id="plp-addtocart" data-type="alt-item-add-to-cart" type="submit" class="cart-add-to-cart-button-button" data-item-id="{{itemId}}" 
                    data-quantity="1">
                    <i class="add-to-cart-icon"></i>
                        <!-- <span class="buttonText">
                            {{translate 'Add to cart'}}
                        </span> -->
                </button>
            </div>
        {{/if}}
    {{/if}}
</div>