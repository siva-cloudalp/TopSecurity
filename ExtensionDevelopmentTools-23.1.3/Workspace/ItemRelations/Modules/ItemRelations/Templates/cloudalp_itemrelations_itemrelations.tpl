{{#if ispurchasable}}
  <section class="itemrelations">

    <div class="itemrelations-itemrelations-cart">
      <button type="submit" data-id="{{model.internalid}}" data-value="" data-action="addToCart"
        class="itemrelations-itemrelations-add-to-cart-button">
        <i class="add-to-cart-icon"></i>
      </button>
    </div>

    <div class="itemrelations-itemrelations-quantity-options">
      <div class="itemrelations-itemrelations-quantity-container">
        <button type="button" class="itemrelations-itemrelations-quantity-remove" data-action="updateQuantity"
          data-value="-1">-</button>
        <input type="number" name="itemRelationquantity" id="ItemRelationquantity" data-action="changeQuantity"
          class="itemrelations-itemrelations-quantity-value" value="1" min="1">
        <button type="button" class="itemrelations-itemrelations-quantity-add" data-action="updateQuantity"
          data-value="1">+</button>
      </div>
    </div>



  </section>
{{/if}}




<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
