define('global_views_breadcrumb.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && compilerNameLookup(data,"last")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "	<li class=\"global-views-breadcrumb-item-active\">\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":27}}}))
    + "\r\n	</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<li class=\"global-views-breadcrumb-item\">\r\n		<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"href") || (depth0 != null ? compilerNameLookup(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":19}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDataTouchpoint") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":92}}})) != null ? stack1 : "")
    + "\r\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDataHashtag") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":14,"column":65}}})) != null ? stack1 : "")
    + "> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":67},"end":{"line":14,"column":92}}}))
    + " </a>\r\n	</li>\r\n	<li class=\"global-views-breadcrumb-divider\">&#62;</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-touchpoint=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"data-touchpoint") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-touchpoint","hash":{},"data":data,"loc":{"start":{"line":13,"column":64},"end":{"line":13,"column":83}}}) : helper)))
    + "\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-hashtag=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"data-hashtag") || (depth0 != null ? compilerNameLookup(depth0,"data-hashtag") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-hashtag","hash":{},"data":data,"loc":{"start":{"line":14,"column":40},"end":{"line":14,"column":56}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div id=\"banner-breadcrumb-top\" class=\"content-banner banner-breadcrumb-top\" data-cms-area=\"breadcrumb_top\"\r\n	data-cms-area-filters=\"global\"></div>\r\n<ul class=\"global-views-breadcrumb\" itemprop=\"breadcrumb\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "</ul>\r\n<div id=\"banner-breadcrumb-bottom\" class=\"content-banner banner-breadcrumb-bottom\" data-cms-area=\"breadcrumb_bottom\"\r\n	data-cms-area-filters=\"global\"></div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_breadcrumb'; return template;});