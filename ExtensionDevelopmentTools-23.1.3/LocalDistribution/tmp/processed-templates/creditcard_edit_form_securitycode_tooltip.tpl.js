define('creditcard_edit_form_securitycode_tooltip.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isVisaMasterOrDiscoverAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":5,"column":8}}})) != null ? stack1 : "")
    + "	\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAmexAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":10,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"VISA/Mastercard/Discover",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":5},"end":{"line":3,"column":45}}}))
    + "</p>\r\n		<p><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"imageCvvAllCardsURL") : depth0),"img/cvv_all_cards.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":92}}}))
    + "\" alt=\"\"></p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"American Express",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":8,"column":37}}}))
    + "</p>\r\n		<p><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"imageCvvAmericanCardURL") : depth0),"img/cvv_american_card.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":100}}}))
    + "\" alt=\"\"></p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"VISA/Mastercard/Discover",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":44}}}))
    + "</p>\r\n	<p><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"imageCvvAllCardsURL") : depth0),"img/cvv_all_cards.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":91}}}))
    + "\" alt=\"\"></p>\r\n\r\n	<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"American Express",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":36}}}))
    + "</p>\r\n	<p><img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"imageCvvAmericanCardURL") : depth0),"img/cvv_american_card.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":99}}}))
    + "\" alt=\"\"></p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCreditCards") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'creditcard_edit_form_securitycode_tooltip'; return template;});