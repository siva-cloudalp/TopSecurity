define('invoice_date.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span class=\"invoice-date-overdue\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":47}}}) : helper)))
    + "</span>\r\n	<i class=\"invoice-date-overdue-icon\"></i>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span class=\"invoice-date-due\"> \r\n		"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":13}}}) : helper)))
    + "\r\n	</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "	<span class=\"invoice-date-legend\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Partially paid",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":35},"end":{"line":10,"column":65}}}))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOverdueFlag") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPartiallyPaid") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'invoice_date'; return template;});