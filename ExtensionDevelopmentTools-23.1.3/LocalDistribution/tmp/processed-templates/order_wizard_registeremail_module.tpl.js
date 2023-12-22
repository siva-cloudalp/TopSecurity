define('order_wizard_registeremail_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-registeremail-module\">\r\n	<div class=\"order-wizard-registeremail-module-show-addresses-container\">\r\n		<h3 class=\"order-wizard-registeremail-module-title\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Enter Email Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":38}}}))
    + "\r\n		</h3>\r\n		<div class=\"order-wizard-registeremail-module-form-placeholder\">\r\n			<label class=\"order-wizard-registeremail-module-edit-fields-group-label\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":33}}}))
    + "\r\n				<span class=\"order-wizard-registeremail-module-input-required\">*</span>\r\n			</label>\r\n\r\n			<input type=\"email\" name=\"email\" id=\"email\" class=\"order-wizard-registeremail-module-edit-fields-group-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":126},"end":{"line":12,"column":156}}}))
    + "\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":12,"column":165},"end":{"line":12,"column":174}}}) : helper)))
    + "\" >\r\n			<small class=\"order-wizard-registeremail-module-input-help\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We need you email address to send you information about your order.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":87}}}))
    + "\r\n			</small>\r\n		</div>\r\n		<label class=\"order-wizard-registeremail-module-checkbox\">\r\n			<input\r\n				type=\"checkbox\"\r\n				name=\"sign-up-newsletter\"\r\n				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmailSubcribe") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":21,"column":43}}})) != null ? stack1 : "")
    + "\r\n			>\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sign up for our Newsletter to receive promotions",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":23,"column":67}}}))
    + "\r\n		</label>\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_registeremail_module'; return template;});