define('header_menu.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":44,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":63}}})) != null ? stack1 : "")
    + ">\r\n					<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":17,"column":15},"end":{"line":17,"column":24}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":53}}}))
    + ">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":24}}}))
    + "\r\n					</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":5},"end":{"line":42,"column":12}}})) != null ? stack1 : "")
    + "				</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-toggle=\"categories-menu\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<ul class=\"header-menu-level-container\">\r\n							<li>\r\n								<ul class=\"header-menu-level2\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":9},"end":{"line":38,"column":18}}})) != null ? stack1 : "")
    + "								</ul>\r\n							</li>\r\n						</ul>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										<li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":14},"end":{"line":25,"column":69}}})) != null ? stack1 : "")
    + ">\r\n											<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":26,"column":21},"end":{"line":26,"column":30}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":26,"column":59}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":60},"end":{"line":26,"column":78}}}))
    + "</a>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":11},"end":{"line":36,"column":18}}})) != null ? stack1 : "")
    + "										</li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "class=\"categories-menu-arrow\" ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "												<ul class=\"header-menu-level3\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":13},"end":{"line":34,"column":22}}})) != null ? stack1 : "")
    + "												</ul>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "														<li>\r\n															<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":32,"column":25},"end":{"line":32,"column":34}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":32,"column":36},"end":{"line":32,"column":63}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":64},"end":{"line":32,"column":82}}}))
    + "</a>\r\n														</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<nav class=\"header-menu-secondary-nav\">\r\n\r\n\r\n\r\n	<ul class=\"header-menu-level1\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":45,"column":11}}})) != null ? stack1 : "")
    + "\r\n	</ul>\r\n\r\n</nav>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu'; return template;});