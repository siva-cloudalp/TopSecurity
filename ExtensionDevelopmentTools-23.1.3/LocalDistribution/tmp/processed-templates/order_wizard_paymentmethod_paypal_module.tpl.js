define('order_wizard_paymentmethod_paypal_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<p>\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You have selected to pay using PayPal as your payment method.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":81}}}))
    + "\r\n			</p>\r\n			<p>\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"To review your order, click the \"Continue\" button below.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":76}}}))
    + "\r\n			</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<p>\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Please select the \"Continue To PayPal\" button below to sign in into your PayPal account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":16,"column":108}}}))
    + "\r\n			</p>\r\n			<p>\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You will be redirected to PayPal, but will have an opportunity to review your order back on our site before purchasing.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":139}}}))
    + "\r\n			</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"order-wizard-paymentmethod-paypal-module-row\">\r\n	<div class=\"order-wizard-paymentmethod-paypal-module-column-left\">\r\n		<img class=\"order-wizard-paymentmethod-paypal-module-paypal-logo\" src=\""
    + container.escapeExpression((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"paypalImageUrl") : depth0),"img/paypal.png",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":3,"column":73},"end":{"line":3,"column":138}}}))
    + "\" alt=\"PayPal\">\r\n	</div>\r\n	<div class=\"order-wizard-paymentmethod-paypal-module-column-right\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPaypalComplete") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_paypal_module'; return template;});