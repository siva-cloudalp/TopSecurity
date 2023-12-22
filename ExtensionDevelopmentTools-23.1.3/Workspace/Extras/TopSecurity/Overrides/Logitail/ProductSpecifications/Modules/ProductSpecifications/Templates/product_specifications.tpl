{{!-- Edit by philipdenys --}}

<div class="product-specifications-content">
    {{#if isJson}}
        {{#each sections}}
            <div class="product-specifications-section">
                <h3 class="product-specifications-section-title">{{label}}</h3>
                <div class="product-specifications-attributes">
                    <table class="product-specifications-table">
                        {{#each attributes}}
                            <tr class="product-specifications-row">
                                <td class="product-specifications-leftcolumn">
                                    {{label}} 
                                    
                                </td>
                                <td class="product-specifications-rightcolumn">{{value}}</td>
                                <td class="product-specs-lastcolumn">
                                    {{#if tooltip}}
                                        <i data-toggle="tooltip" class="cart-summary-expander-tooltip" data-placement="left" title="" data-original-title="{{tooltip}}"></i>
                                    {{/if}} 
                                </td>
                            </tr>   
                        {{/each}}
                    </table>
                </div>
            </div>
        {{/each}}
    {{else}}
        {{{sections}}}
    {{/if}}
</div>