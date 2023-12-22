define('reorder_items_actions_add_to_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"reorder-items-actions-add-to-cart-button-container\">\r\n	<button \r\n		data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":26}}}) : helper)))
    + "\" \r\n		data-line-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":26}}}) : helper)))
    + "\" \r\n		data-parent-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"parentItemId") || (depth0 != null ? compilerNameLookup(depth0,"parentItemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentItemId","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":34}}}) : helper)))
    + "\" \r\n		data-item-options=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemOptions") || (depth0 != null ? compilerNameLookup(depth0,"itemOptions") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemOptions","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":36}}}) : helper)))
    + "\" \r\n		data-action=\"add-to-cart\" \r\n		"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"disableButtonAddToCart") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":49}}})) != null ? stack1 : "")
    + " \r\n		class=\"reorder-items-actions-add-to-cart\">\r\n		"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add to Shopping Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":38}}}))
    + "	\r\n	</button>\r\n</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'reorder_items_actions_add_to_cart'; return template;});