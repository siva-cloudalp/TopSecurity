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
        {{#if itemAdded}}

            <div id="plp-addtocart" class="cart-add-to-cart-button-container" style="display: contents">
                <button type="submit" id="addedtocart" class="cart-add-to-cart-button-button">
                    <i class="added-to-cart-icon"></i>
                    {{!-- no text needed  --}}
                </button>
            </div>


        {{else}}

            <div class="item-relations-related-item-cont">

                <div id="plp-addtocart" class="cart-add-to-cart-button-container" style="display: contents">
                    <button data-type="adv-item-add-to-cart" data-value="" type="submit"
                        class="cart-add-to-cart-button-button" data-item-id="{{itemId}}">
                        <i class="add-to-cart-icon"></i>
                        <span class="buttonText">
                            {{translate 'Add to cart'}}
                        </span>
                    </button>

                </div>

                <div class="item-relations-related-item-quantity-options">
                    <div class="item-relations-related-item-quantity-container">
                        <button type="button" class="item-relations-related-item-quantity-remove"
                            data-action="updateQuantity" data-value="-1">-</button>
                        <input type="number" name="AdvanceQnty" id="quantity" data-action="changeQuantity"
                            class="item-relations-related-item-quantity-value" value="1" min="1">
                        <button type="button" class="item-relations-related-item-quantity-add"
                            data-action="updateQuantity" data-value="1">+</button>
                    </div>
                </div>

            </div>

        {{/if}}
    {{/if}}
</div>
{{!-- quick copy and hide --}}
