define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"header-banner-text-container\">\r\n			<div class=\"header-banner-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1), depth0))
    + "</div>\r\n		</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<li class=\"header-subheader-settings\">\r\n							<a href=\"#\" class=\"header-subheader-settings-link ddn\" data-toggle=\"dropdown\"\r\n								title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":15},"end":{"line":28,"column":39}}}))
    + "\">\r\n								"
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"profileModel") : depth0)) != null ? compilerNameLookup(stack1,"language") : stack1), depth0))
    + "\r\n								<!--i class=\"header-menu-settings-icon\"></i-->\r\n								<i class=\"header-menu-settings-carret\"></i>\r\n\r\n							</a>\r\n							<div class=\"header-menu-settings-dropdown\">\r\n								<!--h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":59},"end":{"line":35,"column":88}}}))
    + "</h5-->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":8},"end":{"line":38,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":8},"end":{"line":41,"column":15}}})) != null ? stack1 : "")
    + "							</div>\r\n						</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.HostSelector\"></div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Global.CurrencySelector\"></div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "						<li data-view=\"RequestQuoteWizardHeaderLink\"></li>\r\n						<li data-view=\"QuickOrderHeaderLink\"></li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"HeaderWishlist\"></div>\r\n					<div class=\"header-menu-cart\">\r\n						<div class=\"header-menu-cart-dropdown\">\r\n							<div data-view=\"Header.MiniCart\"></div>\r\n						</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\r\n\r\n<div class=\"header-main-wrapper\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":8,"column":8}}})) != null ? stack1 : "")
    + "	<nav class=\"header-main-nav\">\r\n		<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\"\r\n			data-cms-area-filters=\"global\"></div>\r\n\r\n		<div class=\"header-sidebar-toggle-wrapper\">\r\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\r\n				<i class=\"header-sidebar-toggle-icon\"></i>\r\n			</button>\r\n		</div>\r\n\r\n		<div class=\"header-content\">\r\n			<div class=\"header-logo-wrapper-mobile\">\r\n				<div data-view=\"Header.Logo\"></div>\r\n			</div>\r\n			<div class=\"header-right-menu\">\r\n				<ul class=\"header-subheader-options\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":5},"end":{"line":44,"column":12}}})) != null ? stack1 : "")
    + "					<li data-view=\"StoreLocatorHeaderLink\"></li>\r\n					<input type=\"hidden\" name=\"useremailtoto\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"userLoggedIn") || (depth0 != null ? compilerNameLookup(depth0,"userLoggedIn") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userLoggedIn","hash":{},"data":data,"loc":{"start":{"line":46,"column":54},"end":{"line":46,"column":70}}}) : helper)))
    + "\" value1=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"profileModel") : depth0)) != null ? compilerNameLookup(stack1,"isLoggedIn") : stack1), depth0))
    + "\"\r\n						value2=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"showExtendedMenu") || (depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"showExtendedMenu","hash":{},"data":data,"loc":{"start":{"line":47,"column":14},"end":{"line":47,"column":34}}}) : helper)))
    + "\" value3=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"isHomeTouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"isHomeTouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isHomeTouchpoint","hash":{},"data":data,"loc":{"start":{"line":47,"column":44},"end":{"line":47,"column":64}}}) : helper)))
    + "\" />\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"userLoggedIn") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":51,"column":12}}})) != null ? stack1 : "")
    + "				</ul>\r\n				<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\r\n				<div class=\"header-menu-searchmobile\">\r\n					<button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":88},"end":{"line":55,"column":110}}}))
    + "\">\r\n						<i class=\"header-menu-searchmobile-icon\"></i>\r\n					</button>\r\n				</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"userLoggedIn") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":66,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n\r\n\r\n\r\n		<div class=\"header-override-search\">\r\n\r\n			<div class=\"header-logo-wrapper header-logo-wrapper-desktop\">\r\n				<div data-view=\"Header.Logo\"></div>\r\n			</div>\r\n\r\n			<div class=\"header-site-search \" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\r\n		</div>\r\n\r\n		<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\"\r\n			data-cms-area-filters=\"global\"></div>\r\n	</nav>\r\n</div>\r\n\r\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\r\n<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\"\r\n	data-tablet-template=\"header_sidebar\">\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});