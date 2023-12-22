define('product_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceRange") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":49,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<span class=\"product-views-price-range\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/AggregateOffer\">\r\n				<meta itemprop=\"priceCurrency\" content=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":60}}}) : helper)))
    + "\"/>\r\n				<!-- Price Range -->\r\n				<span class=\"product-views-price-lead\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> to <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":8,"column":189}}}))
    + "\r\n				</span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "				<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":40},"end":{"line":15,"column":127}}})) != null ? stack1 : "")
    + "\"/>\r\n			</span>\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<small class=\"product-views-price-old\">\r\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":31}}}) : helper)))
    + "\r\n					</small>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/InStock";
},"7":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/OutOfStock";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "			<span class=\"product-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\">\r\n				<meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data,"loc":{"start":{"line":20,"column":44},"end":{"line":20,"column":60}}}) : helper)))
    + "\"/>\r\n				<!-- Single -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "				\r\n				\r\n				\r\n                <span class=\"product-views-price-lead_bruto\" itemprop=“price” data-rate=“"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":40,"column":89},"end":{"line":40,"column":98}}}) : helper)))
    + "“>\r\n                    "
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"pricelevel1_formatted") : stack1), depth0))
    + " <!-- works in one or the other -->\r\n                    "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"pricelevel1_formatted") : stack1), depth0))
    + "\r\n                     "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"bruto",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":21},"end":{"line":43,"column":42}}}))
    + "\r\n                </span>\r\n				\r\n				\r\n				<link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":47,"column":40},"end":{"line":47,"column":127}}})) != null ? stack1 : "")
    + "\"/>\r\n			</span>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<span class=\"product-views-price-old\">\r\n						"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":31}}}) : helper)))
    + "\r\n					</span>\r\n					&nbsp;	\r\n					<span class=\"product-views-price-lead orange\" itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":27,"column":79},"end":{"line":27,"column":88}}}) : helper)))
    + "\">\r\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceFormatted","hash":{},"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":28,"column":23}}}) : helper)))
    + "\r\n				</span>\r\n				\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					\r\n				<span class=\"product-views-price-lead\" itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":33,"column":71},"end":{"line":33,"column":80}}}) : helper)))
    + "\">\r\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceFormatted","hash":{},"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":23}}}) : helper)))
    + "\r\n				</span>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showHighlightedMessage") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":52,"column":2},"end":{"line":64,"column":9}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-views-price-login-to-see-prices-highlighted\">\r\n				<p class=\"product-views-price-message\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Please <a href=\"$(0)\" data-navigation=\"ignore-click\">log in</a> to see price or purchase this item",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":5},"end":{"line":55,"column":128}}}))
    + "\r\n				</p>\r\n			</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-views-price-login-to-see-prices\">\r\n				<p class=\"product-views-price-message\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"$(0)\" data-navigation=\"ignore-click\">Log in</a> to see price",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":61,"column":5},"end":{"line":61,"column":99}}}))
    + "\r\n				</p>\r\n			</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-views-price\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":65,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_views_price'; return template;});