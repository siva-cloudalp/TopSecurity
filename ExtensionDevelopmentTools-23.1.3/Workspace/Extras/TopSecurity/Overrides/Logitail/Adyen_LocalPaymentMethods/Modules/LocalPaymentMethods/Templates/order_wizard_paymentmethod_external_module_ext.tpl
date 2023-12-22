<div class="order-wizard-paymentmethod-external-module-row">
    <div class="order-wizard-paymentmethod-external-module-column-left">
        <img name="paymentmethod-external-image" class="order-wizard-paymentmethod-external-module-image" src="{{imageUrl}}" alt="{{name}}">
    </div>
    <div class="order-wizard-paymentmethod-external-module-column-right">
        {{#if hasAltPay}}
            <div id="adyenAltPayList" class="adyen-alt-pay-list">
                <p>{{translate 'Please select an alternative payment method'}}</p>
                <select id="adyenAltPay" class="order-wizard-paymentmethod-selector-module-options"
                    data-action="select-alt-payment-method">
                    <option data-action="select-alt-payment-method-radio" value="" issuer="" selected>
                        {{translate '- Select one -'}}
                    </option>
                    {{#each altPayMethods}}
                        {{#if issuers}}
                            <optgroup label="{{name}}">
                                {{#each issuers}}
                                <option data-active="{{isActive}}" value="{{../brandCode}}" issuer="{{issuerId}}">{{../name}} :
                                    {{name}}
                                </option>
                                {{/each}}
                            </optgroup>
                        {{else}}
                            <option data-active="{{isActive}}" value="{{brandCode}}" issuer="">{{name}}</option>
                        {{/if}}
                    {{/each}}
                </select>
            </div>
        {{/if}}
        <p>{{description}}</p>
    </div>
</div>

<script>
    $('#adyenAltPay').find('[data-active="true"]').attr('selected', 'selected');
</script>