define('product_line_stock.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class='product-line-stock-msg-not-available'>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This item is no longer available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":52},"end":{"line":3,"column":100}}}))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOutOfStockMessage") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInStockMessage") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<p class=\"product-line-stock-msg-out\">\r\n				<span class=\"product-line-stock-icon-out\">\r\n					<i></i>\r\n				</span>\r\n				<span class=\"product-line-stock-msg-out-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"outOfStockMessage") : stack1), depth0))
    + "</span>\r\n			</p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<p class=\"product-line-stock-msg-in\">\r\n				<span class=\"product-line-stock-icon-in\">\r\n					<i></i>\r\n				</span>\r\n				"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"inStockMessage") : stack1), depth0))
    + "\r\n			</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-line-stock\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isNotAvailableInStore") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":21,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_line_stock'; return template;});