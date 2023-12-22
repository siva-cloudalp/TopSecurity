<a class="header-mini-cart-menu-cart-link {{#if showLines}}header-mini-cart-menu-cart-link-enabled{{/if}}" data-type="mini-cart" title="{{translate 'Cart'}}" data-touchpoint="{{cartTouchPoint}}" data-hashtag="#cart" href="#">
	<svg version="1.1" id="ts_shoppingcart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">

<path d="M8,12c0,2.5,2,4.5,4.5,4.5h6.9c1.4,0,2.5,0.9,2.9,2.3l16.7,70.4c-6.2,2.2-10.7,8.2-10.7,15.2c0,8.9,7.3,16.2,16.2,16.2
	s16.2-7.3,16.2-16.2c0-2.6-0.6-5-1.7-7.2h19.9c-1.1,2.2-1.7,4.6-1.7,7.2c0,8.9,7.3,16.2,16.2,16.2s16.2-7.3,16.2-16.2
	c0-7.4-5-13.7-11.8-15.6c-0.7-0.4-1.4-0.6-2.2-0.6H47.9L45.8,79h48.9c3.7,0,7.2-2.2,8.8-5.6l15.7-33.3c1.3-2.8,1.1-6.1-0.6-8.8
	c-1.7-2.7-4.6-4.2-7.7-4.2H33.5L31,16.7c-1.3-5.4-6.1-9.2-11.6-9.2h-6.9C10,7.5,8,9.5,8,12z M43.6,70l-8-33.9h75.2
	c0,0,0.1,0,0.1,0.1c0.1,0.1,0,0.1,0,0.2L95.3,69.7C95.2,69.9,95,70,94.7,70C94.7,70,43.6,70,43.6,70z M93.2,97.2
	c4,0,7.2,3.2,7.2,7.2s-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2S89.2,97.2,93.2,97.2z M37.2,104.3c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2
	s-3.2,7.2-7.2,7.2S37.2,108.3,37.2,104.3z"/>
</svg>
	<span class="header-mini-cart-menu-cart-legend">
		{{#if isLoading}}
		<span class="header-mini-cart-summary-cart-ellipsis"></span>
		{{else}}
				{{translate '$(0)' itemsInCart}}
		{{/if}}
	</span>
</a>
<div class="header-mini-cart">
	 {{#if showLines}} 
	 	<div data-view="Header.MiniCartItemCell" class="header-mini-cart-container"></div>
		<div class="header-mini-cart-subtotal">
			<div class="header-mini-cart-subtotal-items">
				{{#if showPluraLabel}}
					{{translate '$(0) items' itemsInCart}}
				{{else}}
					{{translate '1 item'}}
				{{/if}}
			</div>

			{{#if isPriceEnabled}}
			<div class="header-mini-cart-subtotal-amount">
				{{translate 'SUBTOTAL: $(0)' subtotalFormatted}}
			</div>
			{{/if}}
		</div>

		<div class="header-mini-cart-buttons">
			<div class="header-mini-cart-buttons-left">
				<a href="#" class="header-mini-cart-button-view-cart" data-touchpoint="{{cartTouchPoint}}" data-hashtag="#cart" >
					{{translate 'View Cart'}}
				</a>
			</div>
			<div class="header-mini-cart-buttons-right">
				<a href="#" class="header-mini-cart-button-checkout" data-touchpoint="checkout" data-hashtag="#" >
					{{translate 'Checkout'}}
				</a>
			</div>
		</div>

		{{else}} 
		<div class="header-mini-cart-empty">
			<a href="#" data-touchpoint="{{cartTouchPoint}}" data-hashtag="#cart">
				{{#if isLoading}}
					{{translate 'Your cart is loading'}}
				{{else}}
					{{translate 'Your cart is empty'}}
				{{/if}}
			</a>
		</div>
	{{/if}} 
</div>





{{!----
Use the following context variables when customizing this template: 
	
	model (Object)
	model.addresses (Array)
	model.addresses.0 (Object)
	model.addresses.0.zip (String)
	model.addresses.0.country (String)
	model.addresses.0.company (undefined)
	model.addresses.0.internalid (String)
	model.shipmethods (Array)
	model.lines (Array)
	model.paymentmethods (Array)
	model.internalid (String)
	model.confirmation (Object)
	model.confirmation.addresses (Array)
	model.confirmation.shipmethods (Array)
	model.confirmation.lines (Array)
	model.confirmation.paymentmethods (Array)
	model.multishipmethods (Array)
	model.lines_sort (Array)
	model.latest_addition (undefined)
	model.promocodes (Array)
	model.ismultishipto (Boolean)
	model.shipmethod (undefined)
	model.billaddress (undefined)
	model.shipaddress (String)
	model.isPaypalComplete (Boolean)
	model.touchpoints (Object)
	model.touchpoints.logout (String)
	model.touchpoints.customercenter (String)
	model.touchpoints.serversync (String)
	model.touchpoints.viewcart (String)
	model.touchpoints.login (String)
	model.touchpoints.welcome (String)
	model.touchpoints.checkout (String)
	model.touchpoints.continueshopping (String)
	model.touchpoints.home (String)
	model.touchpoints.register (String)
	model.touchpoints.storelocator (String)
	model.agreetermcondition (Boolean)
	model.summary (Object)
	model.summary.discounttotal_formatted (String)
	model.summary.taxonshipping_formatted (String)
	model.summary.taxondiscount_formatted (String)
	model.summary.itemcount (Number)
	model.summary.taxonhandling_formatted (String)
	model.summary.total (Number)
	model.summary.tax2total (Number)
	model.summary.discountedsubtotal (Number)
	model.summary.taxtotal (Number)
	model.summary.discounttotal (Number)
	model.summary.discountedsubtotal_formatted (String)
	model.summary.taxondiscount (Number)
	model.summary.handlingcost_formatted (String)
	model.summary.taxonshipping (Number)
	model.summary.taxtotal_formatted (String)
	model.summary.totalcombinedtaxes_formatted (String)
	model.summary.handlingcost (Number)
	model.summary.totalcombinedtaxes (Number)
	model.summary.giftcertapplied_formatted (String)
	model.summary.shippingcost_formatted (String)
	model.summary.discountrate (Number)
	model.summary.taxonhandling (Number)
	model.summary.tax2total_formatted (String)
	model.summary.discountrate_formatted (String)
	model.summary.estimatedshipping (Number)
	model.summary.subtotal (Number)
	model.summary.shippingcost (Number)
	model.summary.estimatedshipping_formatted (String)
	model.summary.total_formatted (String)
	model.summary.giftcertapplied (Number)
	model.summary.subtotal_formatted (String)
	model.options (Object)
	itemsInCart (Number)
	showPluraLabel (Boolean)
	showLines (Boolean)
	isLoading (Boolean)
	subtotalFormatted (String)
	cartTouchPoint (String)
	isPriceEnabled (Boolean)

----}}
