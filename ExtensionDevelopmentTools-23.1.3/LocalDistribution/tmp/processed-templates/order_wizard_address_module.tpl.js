define('order_wizard_address_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<h3 class=\"order-wizard-address-module-title\">\r\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":13}}}) : helper)))
    + "\r\n			</h3>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<label class=\"order-wizard-address-module-checkbox\">\r\n				<input\r\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSameAsCheckBoxDisable") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":5},"end":{"line":11,"column":62}}})) != null ? stack1 : "")
    + "\r\n					type=\"checkbox\"\r\n					name=\"same-as-address\"\r\n					data-action=\"same-as\"\r\n					value=\"1\"\r\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSameAsSelected") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\r\n				>\r\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sameAsMessage") || (depth0 != null ? compilerNameLookup(depth0,"sameAsMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sameAsMessage","hash":{},"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":21}}}) : helper)))
    + "\r\n			</label>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "checked";
},"8":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"Single.Address.Details\" class=\"order-wizard-address-module-single\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showAddressList") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":25,"column":3},"end":{"line":48,"column":10}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div id=\"order-wizard-address-module-placeholder\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showManageValue") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":54},"end":{"line":26,"column":113}}})) != null ? stack1 : "")
    + " class=\"order-wizard-address-module-list-placeholder\">\r\n					<p>\r\n						<a class=\"order-wizard-address-module-new-button\" href=\"/addressbook/new\" data-toggle=\"show-in-modal\">\r\n							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Add New Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":7},"end":{"line":29,"column":38}}}))
    + "\r\n						</a>\r\n					</p>\r\n					<div class=\"order-wizard-address-module-address-container\">\r\n						<div data-view=\"Address.List\"></div>\r\n					</div>\r\n				</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-manage=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"manageValue") || (depth0 != null ? compilerNameLookup(depth0,"manageValue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"manageValue","hash":{},"data":data,"loc":{"start":{"line":26,"column":90},"end":{"line":26,"column":105}}}) : helper)))
    + "\"";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div id=\"address-module-form-placeholder\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showManageValue") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":46},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " class=\"order-wizard-address-module-form-placeholder\">\r\n					<div data-view=\"New.Address.Form\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaveButton") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":5},"end":{"line":46,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "						<div class=\"order-wizard-address-module-form-actions\">\r\n							<button type=\"submit\" class=\"order-wizard-address-module-save-button\" data-action=\"submit\">\r\n								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":36}}}))
    + "\r\n							</button>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"order-wizard-address-module\">\r\n	<div class=\"order-wizard-address-module-show-addresses-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSameAsEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSingleAddressDetails") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":49,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_address_module'; return template;});