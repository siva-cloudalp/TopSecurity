{{!-- Edited for Threads Theme --}}

{{#if isCurrentItemPurchasable}}
	<div class="cart-add-to-cart-button-container">
		<div class="cart-add-to-cart-button">
			<button id="plp-addtocart" type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">
				<i class="add-to-cart-icon"></i>
				<span class="buttonText">
				{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'Add to Shopping Cart'}}{{/if}}
				</span>
			</button/>
		</div>
	</div>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}
