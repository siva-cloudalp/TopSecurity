define('cart_promocode_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "error";
},"3":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"GlobalsViewErrorMessage\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<form class=\"cart-promocode-form\" data-action=\"apply-promocode\">\r\n	<div class=\"cart-promocode-form-summary-grid\">\r\n		<div class=\"cart-promocode-form-summary-container-input\">\r\n			<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":51}}})) != null ? stack1 : "")
    + "\">\r\n				<!-- Placeholder removed on SCA 2015 / placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Promo code",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":56},"end":{"line":5,"column":82}}}))
    + "\" -->\r\n				<input\r\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSaving") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":7,"column":36}}})) != null ? stack1 : "")
    + "\r\n					type=\"text\"\r\n					name=\"promocode\"\r\n					id=\"promocode\"\r\n					class=\"cart-promocode-form-summary-input\"\r\n					value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"promocodeCode") || (depth0 != null ? compilerNameLookup(depth0,"promocodeCode") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"promocodeCode","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":29}}}) : helper)))
    + "\"\r\n				>\r\n			</div>\r\n			\r\n		</div>\r\n		<div class=\"cart-promocode-form-summary-promocode-container-button\">\r\n			<button type=\"submit\" class=\"cart-promocode-form-summary-button-apply-promocode\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSaving") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":84},"end":{"line":18,"column":115}}})) != null ? stack1 : "")
    + ">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Apply",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":26}}}))
    + "\r\n			</button>\r\n		</div>\r\n	</div>\r\n	\r\n</form>\r\n<div data-type=\"promocode-error-placeholder\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_promocode_form'; return template;});