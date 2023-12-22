define('requestquote_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"requestquote-wizard-step-actions\">\r\n			<div class=\"requestquote-wizard-step-button-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<button class=\"requestquote-wizard-step-button-continue\" data-action=\"submit-step\">\r\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":29}}}) : helper)))
    + "\r\n					</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<button class=\"requestquote-wizard-step-button-back\" data-action=\"previous-step\">\r\n						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":26}}}))
    + "\r\n					</button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"requestquote-wizard-step-content-wrapper-bottom-content\">\r\n			<p class=\"requestquote-wizard-step-content-wrapper-disclaimer-message\">\r\n				"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"bottomMessage") || (depth0 != null ? compilerNameLookup(depth0,"bottomMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bottomMessage","hash":{},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n			</p>\r\n		</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div>\r\n	<header>\r\n		<h1 class=\"requestquote-wizard-step-header-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentStepGroupName","hash":{},"data":data,"loc":{"start":{"line":3,"column":52},"end":{"line":3,"column":76}}}) : helper)))
    + "</h1>\r\n	</header>\r\n</div>\r\n\r\n<div data-type=\"alert-placeholder-step\"></div>\r\n\r\n<div class=\"requestquote-wizard-step-content-wrapper\">\r\n\r\n	<div id=\"wizard-step-content\" class=\"requestquote-wizard-step-content-main\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":28,"column":8}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":1},"end":{"line":36,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_step'; return template;});