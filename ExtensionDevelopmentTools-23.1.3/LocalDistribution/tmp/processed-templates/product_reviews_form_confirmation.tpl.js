define('product_reviews_form_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup','facets_item_cell_list.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "                    - <i class=\"product-reviews-form-confirmation-icon-sign\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verified purchaser",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":82},"end":{"line":27,"column":116}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"product-reviews-form-confirmation\">\r\n    <h1>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":20}}}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n    <div class=\"product-reviews-form-confirmation-divider-desktop\"></div>\r\n    <div class=\"product-reviews-form-confirmation-divider\"></div>\r\n    <div class=\"product-reviews-form-confirmation-message\">\r\n		"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"confirmationMessage") || (depth0 != null ? compilerNameLookup(depth0,"confirmationMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationMessage","hash":{},"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\r\n		<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":22}}}) : helper)))
    + "\" class=\"product-reviews-form-confirmation-button-back\">\r\n			"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":8,"column":27}}}))
    + " "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"productTitle") || (depth0 != null ? compilerNameLookup(depth0,"productTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productTitle","hash":{},"data":data,"loc":{"start":{"line":8,"column":28},"end":{"line":8,"column":46}}}) : helper))) != null ? stack1 : "")
    + "\r\n		</a>\r\n    </div>\r\n    <div class=\"product-reviews-form-confirmation-item-cell\">\r\n        <div data-view=\"Facets.ItemCell\" data-template=\"facets_item_cell_list\"></div>\r\n    </div>\r\n    <div class=\"product-reviews-form-confirmation-content\">\r\n        <div class=\"product-reviews-form-confirmation-review-rating\">\r\n            <div data-view=\"Global.StarRatingAttribute\" class=\"product-reviews-form-confirmation-rating-attribute\"></div>\r\n            <div data-view=\"Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"https://schema.org/Rating\"></div>\r\n        </div>\r\n        <div class=\"product-reviews-form-confirmation-content-review\">\r\n\r\n            <h4 itemprop=\"name\">\r\n                "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewTitle","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":31}}}) : helper)))
    + "\r\n            </h4>\r\n            <p class=\"product-reviews-form-confirmation-content-username\">\r\n                "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"By <span itemprop=\"author\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":83}}}))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":28,"column":23}}})) != null ? stack1 : "")
    + "            </p>\r\n            <div class=\"product-reviews-form-confirmation-content-description\">\r\n                <p itemprop=\"description\">\r\n                    "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"reviewText") || (depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewText","hash":{},"data":data,"loc":{"start":{"line":32,"column":20},"end":{"line":32,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_form_confirmation'; return template;});