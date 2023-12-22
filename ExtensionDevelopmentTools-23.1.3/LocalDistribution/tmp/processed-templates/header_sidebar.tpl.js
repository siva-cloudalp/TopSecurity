define('header_sidebar.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":68,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "					<li>\r\n						<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":15,"column":9},"end":{"line":15,"column":36}}}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":37},"end":{"line":15,"column":85}}})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":15,"column":92},"end":{"line":15,"column":100}}}) : helper)))
    + "\">\r\n							"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":15}}}) : helper)))
    + "\r\n							"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":7},"end":{"line":17,"column":77}}})) != null ? stack1 : "")
    + "\r\n						</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":66,"column":13}}})) != null ? stack1 : "")
    + "					</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-action=\"push-menu\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "<i class=\"header-sidebar-menu-push-icon\"></i>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<ul>\r\n								<li>\r\n									<a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\" name=\"back-sidebar\">\r\n										<i class=\"header-sidebar-menu-pop-icon\"></i>\r\n										"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":30}}}))
    + "\r\n									</a>\r\n								</li>\r\n\r\n								<li>\r\n									<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":39}}}))
    + ">\r\n										"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":30,"column":42}}}))
    + "\r\n									</a>\r\n								</li>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":64,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "								<li>\r\n									<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":39}}}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":40},"end":{"line":36,"column":88}}})) != null ? stack1 : "")
    + ">\r\n									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":37,"column":9},"end":{"line":37,"column":17}}}) : helper)))
    + "\r\n									"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":9},"end":{"line":38,"column":79}}})) != null ? stack1 : "")
    + "\r\n									</a>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":9},"end":{"line":62,"column":16}}})) != null ? stack1 : "")
    + "								</li>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									<ul>\r\n										<li>\r\n											<a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\">\r\n												<i class=\"header-sidebar-menu-pop-icon\"></i>\r\n												"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":46,"column":32}}}))
    + "\r\n											</a>\r\n										</li>\r\n\r\n										<li>\r\n											<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":51,"column":14},"end":{"line":51,"column":41}}}))
    + ">\r\n												"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":52,"column":44}}}))
    + "\r\n											</a>\r\n										</li>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":10},"end":{"line":60,"column":19}}})) != null ? stack1 : "")
    + "									</ul>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "										<li>\r\n											<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":58,"column":14},"end":{"line":58,"column":41}}}))
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":58,"column":48},"end":{"line":58,"column":56}}}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":58,"column":58},"end":{"line":58,"column":66}}}) : helper)))
    + "</a>\r\n										</li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<li class=\"header-sidebar-menu-myaccount\" data-view=\"Header.Menu.MyAccount\"></li>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "			<li class=\"header-menu-quickorder-mobile\" data-view=\"QuickOrderHeaderLink\"></li>\r\n			<li class=\"header-menu-requestquote-mobile\" data-view=\"RequestQuoteWizardHeaderLink\"></li>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "	<a class=\"header-sidebar-user-logout\" href=\"#\" data-touchpoint=\"logout\" name=\"logout\">\r\n		<i class=\"header-sidebar-user-logout-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Sign Out",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":87,"column":2},"end":{"line":87,"column":26}}}))
    + "\r\n	</a>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "	<div data-view=\"Global.HostSelector\"></div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "	<div data-view=\"Global.CurrencySelector\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div class=\"header-sidebar-wrapper\">\r\n    <div class=\"header-logo-wrapper\">\r\n        <div data-view=\"Header.SideBarLogo.View\"></div>\r\n    </div>\r\n\r\n	<div class=\"header-sidebar-menu-wrapper\" data-type=\"header-sidebar-menu\">\r\n        <div class=\"header-sidebar-profile-menu\" data-view=\"Header.Profile\"></div>\r\n        \r\n		<ul class=\"header-sidebar-menu\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":69,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":3},"end":{"line":73,"column":10}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"userLoggedIn") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":3},"end":{"line":78,"column":10}}})) != null ? stack1 : "")
    + "\r\n            <li class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></li>\r\n		</ul>\r\n	</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":1},"end":{"line":89,"column":8}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":1},"end":{"line":93,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":1},"end":{"line":96,"column":8}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_sidebar'; return template;});