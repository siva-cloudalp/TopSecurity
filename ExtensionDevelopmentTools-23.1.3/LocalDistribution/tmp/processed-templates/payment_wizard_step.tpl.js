define('payment_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"payment-wizard-step-actions\">\r\n		<div class=\"payment-wizard-step-button-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":17,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":22,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<button class=\"payment-wizard-step-button-continue\" data-action=\"submit-step\">\r\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data,"loc":{"start":{"line":15,"column":5},"end":{"line":15,"column":28}}}) : helper)))
    + "\r\n				</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<button class=\"payment-wizard-step-button-back\" data-action=\"previous-step\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":5},"end":{"line":20,"column":25}}}))
    + "\r\n				</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2 class=\"payment-wizard-step-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentStepGroupName","hash":{},"data":data,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":62}}}) : helper)))
    + "</h2>\r\n\r\n<div data-type=\"alert-placeholder-step\"></div>\r\n\r\n<div class=\"payment-wizard-step-content-wrapper\">\r\n	<div id=\"wizard-step-content\" class=\"payment-wizard-step-content-main\"></div>\r\n	<div id=\"wizard-step-content-right\" class=\"payment-wizard-step-content-secondary\"></div>\r\n\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":25,"column":8}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_step'; return template;});