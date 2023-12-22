<span class="bksvg" data-action="show-header-wishlist-control">
	
    <svg version="1.1" id="ts_orderlist" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">

<g>
	<path d="M105.38,27.41L89.37,11.39c-2.46-2.46-5.74-3.82-9.23-3.82h-49.9c-6.48,0-11.74,5.27-11.74,11.74v89.38
		c0,6.48,5.27,11.74,11.74,11.74h67.51c6.48,0,11.74-5.27,11.74-11.74V37.34C109.5,33.59,108.04,30.06,105.38,27.41z M99.02,33.77
		c0.18,0.18,0.33,0.38,0.48,0.58H82.71V17.51c0.1,0.08,0.2,0.15,0.29,0.24L99.02,33.77z M97.76,111.43H30.24
		c-1.51,0-2.74-1.23-2.74-2.74V19.31c0-1.51,1.23-2.74,2.74-2.74h43.47v22.29c0,2.49,2.01,4.5,4.5,4.5h22.29v65.34
		C100.5,110.2,99.27,111.43,97.76,111.43z"/>
	<path d="M84.23,56.22H71.11c-2.49,0-4.5,2.01-4.5,4.5s2.01,4.5,4.5,4.5h13.12c2.49,0,4.5-2.02,4.5-4.5S86.71,56.22,84.23,56.22z"/>
	<path d="M84.23,84.1H71.11c-2.49,0-4.5,2.01-4.5,4.5s2.01,4.5,4.5,4.5h13.12c2.49,0,4.5-2.01,4.5-4.5S86.71,84.1,84.23,84.1z"/>
	<path d="M55.62,78.58L44.59,89.62l-3.1-3.1c-1.76-1.76-4.61-1.76-6.36,0c-1.76,1.76-1.76,4.61,0,6.36l6.29,6.29
		c0.84,0.84,1.99,1.32,3.18,1.32s2.34-0.47,3.18-1.32l14.21-14.21c1.76-1.76,1.76-4.61,0-6.36C60.23,76.83,57.38,76.83,55.62,78.58z
		"/>
	<path d="M55.62,51.25L44.59,62.28l-3.1-3.1c-1.76-1.76-4.61-1.76-6.36,0c-1.76,1.76-1.76,4.61,0,6.36l6.29,6.29
		c0.88,0.88,2.03,1.32,3.18,1.32s2.3-0.44,3.18-1.32l14.21-14.21c1.76-1.76,1.76-4.61,0-6.36C60.23,49.49,57.38,49.49,55.62,51.25z"
		/>
</g>
</svg>

</span>

<span data-action="show-header-wishlist-control" class="totem"></span>
<div class="product-list-control-flyout" data-type="header-wishlist-control">
    <ul class="product-list-control-flyout-product-lists">
        {{#if isEmpty}}
            <li class="product-list-control-nolists-messages">
                {{translate 'There are no lists'}}
            </li>
        {{/if}}
    </ul>
    <div class="product-list-control-new-product-list-container" data-type="header-new-item-container"></div>
</div>