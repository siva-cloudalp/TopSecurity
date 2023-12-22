define('header_profile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<a class=\"header-profile-welcome-link\" href=\"#\" data-toggle=\"dropdown\">\r\n		<!-- <i class=\"header-profile-welcome-user-icon\"></i> -->\r\n\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"$(0)",(depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":7,"column":34}}}))
    + "\r\n		<i class=\"header-profile-welcome-carret-icon\"></i>\r\n	</a>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMyAccountMenu") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"megamenu\">\r\n		<ul class=\"header-profile-menu-myaccount-container\">\r\n			<li data-view=\"Header.Menu.MyAccount\"></li>\r\n		</ul>\r\n	</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLoginMenu") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":21,"column":1},"end":{"line":47,"column":8}}})) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":41,"column":9}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"megamenu\">\r\n			<div class=\"header-profile-menu-login-container\">\r\n				<ul class=\"header-profile-menu-login\">\r\n					<li>\r\n						<a class=\"header-profile-login-link\" data-touchpoint=\"login\" data-hashtag=\"login-register\" href=\"#\">\r\n							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Login",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":7},"end":{"line":28,"column":28}}}))
    + "\r\n						</a>\r\n					</li>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":5},"end":{"line":37,"column":12}}})) != null ? stack1 : "")
    + "				</ul>\r\n			</div>\r\n		</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "						<li>\r\n							<a class=\"header-profile-register-link\" data-touchpoint=\"register\" data-hashtag=\"login-register\" href=\"#\">\r\n								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":34,"column":32}}}))
    + "\r\n							</a>\r\n						</li>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<a class=\"header-profile-loading-link\">\r\n			<i class=\"header-profile-loading-icon\"></i>\r\n			<span class=\"header-profile-loading-indicator\"></span>\r\n		</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":49,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_profile'; return template;});