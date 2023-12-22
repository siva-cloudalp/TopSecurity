define('header_mini_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "header-mini-cart-menu-cart-link-enabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"header-mini-cart-summary-cart-ellipsis\"></span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0)",(depth0 != null ? compilerNameLookup(depth0,"itemsInCart") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":17,"column":36}}}))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	 	<div data-view=\"Header.MiniCartItemCell\" class=\"header-mini-cart-container\"></div>\r\n		<div class=\"header-mini-cart-subtotal\">\r\n			<div class=\"header-mini-cart-subtotal-items\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPluraLabel") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":3},"end":{"line":37,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n\r\n		<div class=\"header-mini-cart-buttons\">\r\n			<div class=\"header-mini-cart-buttons-left\">\r\n				<a href=\"#\" class=\"header-mini-cart-button-view-cart\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":42,"column":75},"end":{"line":42,"column":93}}}) : helper)))
    + "\" data-hashtag=\"#cart\" >\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":5},"end":{"line":43,"column":30}}}))
    + "\r\n				</a>\r\n			</div>\r\n			<div class=\"header-mini-cart-buttons-right\">\r\n				<a href=\"#\" class=\"header-mini-cart-button-checkout\" data-touchpoint=\"checkout\" data-hashtag=\"#\" >\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":48,"column":29}}}))
    + "\r\n				</a>\r\n			</div>\r\n		</div>\r\n\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) items",(depth0 != null ? compilerNameLookup(depth0,"itemsInCart") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":5},"end":{"line":27,"column":43}}}))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":5},"end":{"line":29,"column":27}}}))
    + "\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"header-mini-cart-subtotal-amount\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SUBTOTAL: $(0)",(depth0 != null ? compilerNameLookup(depth0,"subtotalFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":35,"column":52}}}))
    + "\r\n			</div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"header-mini-cart-empty\">\r\n			<a href=\"#\" data-touchpoint=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":55,"column":32},"end":{"line":55,"column":50}}}) : helper)))
    + "\" data-hashtag=\"#cart\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":56,"column":4},"end":{"line":60,"column":11}}})) != null ? stack1 : "")
    + "			</a>\r\n		</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your cart is loading",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":5},"end":{"line":57,"column":41}}}))
    + "\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your cart is empty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":59,"column":5},"end":{"line":59,"column":39}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a class=\"header-mini-cart-menu-cart-link "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":105}}})) != null ? stack1 : "")
    + "\" data-type=\"mini-cart\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":136},"end":{"line":1,"column":156}}}))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":1,"column":175},"end":{"line":1,"column":193}}}) : helper)))
    + "\" data-hashtag=\"#cart\" href=\"#\">\r\n	<svg version=\"1.1\" id=\"ts_shoppingcart\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\r\n	 y=\"0px\" viewBox=\"0 0 128 128\" style=\"enable-background:new 0 0 128 128;\" xml:space=\"preserve\">\r\n\r\n<path d=\"M8,12c0,2.5,2,4.5,4.5,4.5h6.9c1.4,0,2.5,0.9,2.9,2.3l16.7,70.4c-6.2,2.2-10.7,8.2-10.7,15.2c0,8.9,7.3,16.2,16.2,16.2\r\n	s16.2-7.3,16.2-16.2c0-2.6-0.6-5-1.7-7.2h19.9c-1.1,2.2-1.7,4.6-1.7,7.2c0,8.9,7.3,16.2,16.2,16.2s16.2-7.3,16.2-16.2\r\n	c0-7.4-5-13.7-11.8-15.6c-0.7-0.4-1.4-0.6-2.2-0.6H47.9L45.8,79h48.9c3.7,0,7.2-2.2,8.8-5.6l15.7-33.3c1.3-2.8,1.1-6.1-0.6-8.8\r\n	c-1.7-2.7-4.6-4.2-7.7-4.2H33.5L31,16.7c-1.3-5.4-6.1-9.2-11.6-9.2h-6.9C10,7.5,8,9.5,8,12z M43.6,70l-8-33.9h75.2\r\n	c0,0,0.1,0,0.1,0.1c0.1,0.1,0,0.1,0,0.2L95.3,69.7C95.2,69.9,95,70,94.7,70C94.7,70,43.6,70,43.6,70z M93.2,97.2\r\n	c4,0,7.2,3.2,7.2,7.2s-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2S89.2,97.2,93.2,97.2z M37.2,104.3c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2\r\n	s-3.2,7.2-7.2,7.2S37.2,108.3,37.2,104.3z\"/>\r\n</svg>\r\n	<span class=\"header-mini-cart-menu-cart-legend\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "")
    + "	</span>\r\n</a>\r\n<div class=\"header-mini-cart\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":63,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_mini_cart'; return template;});