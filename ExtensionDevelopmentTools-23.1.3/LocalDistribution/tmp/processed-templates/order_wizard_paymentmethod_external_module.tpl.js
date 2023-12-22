define('order_wizard_paymentmethod_external_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "order-wizard-paymentmethod-external-module-container-selected";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <b>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Selected",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":35}}}))
    + "</b>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Select",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":30}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"order-wizard-paymentmethod-external-module-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":149}}})) != null ? stack1 : "")
    + "\" data-action=\"select\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":181},"end":{"line":1,"column":189}}}) : helper)))
    + "\">\r\n    <input type=\"radio\" name=\"paymentmethod-external-option\" class=\"order-wizard-paymentmethod-external-module-radio\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":127},"end":{"line":2,"column":135}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":144},"end":{"line":2,"column":152}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":154},"end":{"line":2,"column":188}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "</a>\r\n<div class=\"order-wizard-paymentmethod-external-module-details "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":63},"end":{"line":9,"column":149}}})) != null ? stack1 : "")
    + "\"  data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":9,"column":161},"end":{"line":9,"column":169}}}) : helper)))
    + "\">\r\n    <div class=\"order-wizard-paymentmethod-external-module-details-container\">\r\n        <img class=\"order-wizard-paymentmethod-external-module-details-container-image\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":11,"column":93},"end":{"line":11,"column":105}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":112},"end":{"line":11,"column":120}}}) : helper)))
    + "\">\r\n    </div>\r\n</div>\r\n<!---<div class=\"order-wizard-paymentmethod-external-module-row\">\r\n	<div class=\"order-wizard-paymentmethod-external-module-column-left\">\r\n		<img class=\"order-wizard-paymentmethod-external-module-image\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":69},"end":{"line":16,"column":81}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":16,"column":88},"end":{"line":16,"column":96}}}) : helper)))
    + "\">\r\n	</div>\r\n	<div class=\"order-wizard-paymentmethod-external-module-column-right\">\r\n		<p>"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"description",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":19,"column":32}}}))
    + "</p>\r\n		"
    + alias4(compilerNameLookup(helpers,"log").call(alias1,depth0,{"name":"log","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":14}}}))
    + "\r\n	</div>\r\n</div>--->\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_external_module'; return template;});