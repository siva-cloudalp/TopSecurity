define('reorder_items_actions_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "		<label class=\"reorder-items-actions-quantity-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":54},"end":{"line":3,"column":79}}}))
    + "</label>\r\n		<div class=\"reorder-items-actions-quantity-input\">\r\n			<button class=\"reorder-items-actions-quantity-remove\" data-action=\"minus\">-</button>\r\n				<input type=\"number\" name=\"item_quantity\" data-line-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":70}}}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data,"loc":{"start":{"line":6,"column":79},"end":{"line":6,"column":95}}}) : helper)))
    + "\" class=\"reorder-items-actions-quantity-value\" min=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"minimumQuantity","hash":{},"data":data,"loc":{"start":{"line":6,"column":147},"end":{"line":6,"column":166}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMaximumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":168},"end":{"line":6,"column":228}}})) != null ? stack1 : "")
    + ">\r\n			<button class=\"reorder-items-actions-quantity-add\" data-action=\"plus\">+</button>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " max=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maximumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maximumQuantity","hash":{},"data":data,"loc":{"start":{"line":6,"column":201},"end":{"line":6,"column":220}}}) : helper)))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Item.Stock\"></div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<p class=\"reorder-items-actions-quantity-last-purchased\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Last purchased on $(0)",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":110}}}))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"reorder-items-actions-quantity\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuantityInput") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":11,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n<div data-view=\"Quantity.Pricing\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLastPurchased") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'reorder_items_actions_quantity'; return template;});