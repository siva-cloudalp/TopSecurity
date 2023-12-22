{{#if showCells}}
    <aside class="item-relations-related">
        <h3>{{sectionTitle}}</h3>
        <div class="item-relations-related-row">
            <div data-type="backbone.collection.view.rows"></div>
        </div>
        <p class="quantity-purchase">{{translate 'Quantity: $(0)' quantity}}</p>
        {{!-- does translation work? --}}
    </aside>
{{/if}}