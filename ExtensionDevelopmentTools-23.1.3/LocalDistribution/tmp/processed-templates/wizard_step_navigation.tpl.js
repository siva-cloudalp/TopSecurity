define('wizard_step_navigation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a data-action=\"previous-step\" class=\"wizard-step-navigation-back\">\r\n		<i class=\"wizard-step-navigation-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Previous",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":26}}}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\r\n		<li class=\"wizard-step-navigation-step wizard-step-navigation-step-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":69},"end":{"line":16,"column":79}}}) : helper)))
    + "\">\r\n			<a class=\"wizard-step-navigation-step-anchor "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"listItemClass") || (depth0 != null ? compilerNameLookup(depth0,"listItemClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listItemClass","hash":{},"data":data,"loc":{"start":{"line":17,"column":48},"end":{"line":17,"column":65}}}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkUrl") || (depth0 != null ? compilerNameLookup(depth0,"linkUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data,"loc":{"start":{"line":17,"column":73},"end":{"line":17,"column":84}}}) : helper)))
    + "\">\r\n\r\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"counter") || (depth0 != null ? compilerNameLookup(depth0,"counter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"counter","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":15}}}) : helper)))
    + "<span class=\"wizard-step-navigation-step-anchor-label\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":70},"end":{"line":19,"column":78}}}) : helper)))
    + "</span>\r\n			</a>\r\n		</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<li class=\"wizard-step-navigation-divider wizard-step-navigation-divider-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":76},"end":{"line":13,"column":86}}}) : helper)))
    + "\">/</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"wizard-step-navigation\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":8,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<ol class=\"wizard-step-navigation-menu\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"stepGroups") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":1},"end":{"line":22,"column":10}}})) != null ? stack1 : "")
    + "	</ol>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'wizard_step_navigation'; return template;});