define('transaction_line_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"transaction-line-views-price\">\r\n	<span class=\"transaction-line-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\">\r\n		<meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":58}}}) : helper)))
    + "\"/>\r\n		<span class=\"transaction-line-views-price-lead\" itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":5,"column":78},"end":{"line":5,"column":87}}}) : helper)))
    + "\">\r\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":28}}}) : helper)))
    + "\r\n	</span>\r\n		\r\n		<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":38},"end":{"line":9,"column":125}}})) != null ? stack1 : "")
    + "\"/>\r\n	</span>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/InStock";
},"4":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/OutOfStock";
},"6":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"transaction-line-views-price-login-to-see-prices\">\r\n		<p class=\"transaction-line-views-price-message\">\r\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"$(0)\">Log in</a> to see price",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":66}}}))
    + "\r\n		</p>\r\n	</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_price'; return template;});