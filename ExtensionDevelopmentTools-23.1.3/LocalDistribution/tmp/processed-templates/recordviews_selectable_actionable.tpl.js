define('recordviews_selectable_actionable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "recordviews-selectable-actionable-active";
},"3":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"5":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"7":function(container,depth0,helpers,partials,data) {
    return "checked";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "			<a class=\"recordviews-selectable-actionable-anchor\" href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":61},"end":{"line":7,"column":70}}}) : helper))) != null ? stack1 : "")
    + "\" data-toggle=\"show-in-modal\">\r\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":13}}}) : helper)))
    + "\r\n			</a>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<p class=\"recordviews-selectable-actionable-title\">\r\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":13}}}) : helper)))
    + "\r\n			</p>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<td class=\"recordviews-selectable-actionable-td recordviews-selectable-actionable-td-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":87},"end":{"line":18,"column":95}}}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":108},"end":{"line":18,"column":116}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":21,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isComposite") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":26,"column":10}}})) != null ? stack1 : "")
    + "		</td>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"recordviews-selectable-actionable-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":20,"column":58},"end":{"line":20,"column":67}}}) : helper)))
    + "</span>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span data-view=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"compositeKey") || (depth0 != null ? compilerNameLookup(depth0,"compositeKey") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"compositeKey","hash":{},"data":data,"loc":{"start":{"line":23,"column":21},"end":{"line":23,"column":37}}}) : helper)))
    + "\"></span>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"recordviews-selectable-actionable-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":25,"column":58},"end":{"line":25,"column":67}}}) : helper)))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr class=\"recordviews-selectable-actionable-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":49},"end":{"line":1,"column":113}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":114},"end":{"line":1,"column":153}}})) != null ? stack1 : "")
    + "\" data-action=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"actionType") || (depth0 != null ? compilerNameLookup(depth0,"actionType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actionType","hash":{},"data":data,"loc":{"start":{"line":1,"column":168},"end":{"line":1,"column":182}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":193},"end":{"line":1,"column":199}}}) : helper)))
    + "\">\r\n	<td class=\"recordviews-selectable-actionable-td-selectable\">\r\n		<input class=\"recordviews-selectable-actionable-checkbox "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"checkboxIsHidden") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":3,"column":96}}})) != null ? stack1 : "")
    + "\" type=\"checkbox\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":121},"end":{"line":3,"column":127}}}) : helper)))
    + "\" data-action=\"select\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":150},"end":{"line":3,"column":181}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":182},"end":{"line":3,"column":221}}})) != null ? stack1 : "")
    + ">\r\n	</td>\r\n	<td class=\"recordviews-selectable-actionable-td-title\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "	</td>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":28,"column":10}}})) != null ? stack1 : "")
    + "\r\n	<td class=\"recordviews-selectable-actionable-td-action\" data-view=\"Action.View\">\r\n	</td>\r\n</tr>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'recordviews_selectable_actionable'; return template;});