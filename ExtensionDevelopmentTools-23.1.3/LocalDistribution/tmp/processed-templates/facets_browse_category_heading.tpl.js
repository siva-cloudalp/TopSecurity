define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "facets-browse-category-heading-list-header-with-image";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"facets-browse-category-heading-main-image\" style=\"background-image:url('"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"banner") || (depth0 != null ? compilerNameLookup(depth0,"banner") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"banner","hash":{},"data":data,"loc":{"start":{"line":12,"column":86},"end":{"line":12,"column":96}}}) : helper)))
    + "');\">\r\n			<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":13,"column":13},"end":{"line":13,"column":52}}}))
    + "\" alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":13,"column":59},"end":{"line":13,"column":74}}}) : helper)))
    + "\" />\r\n		</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"facets-browse-category-heading-main-description\">\r\n        <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "\r\n<section class=\"facets-browse-category-heading-list-header "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":3,"column":136}}})) != null ? stack1 : "")
    + "\">\r\n	<div class=\"facets-browse-category-heading\">\r\n		<img src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,"img/ts_camera.svg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":65}}}))
    + "\" class=\"img_"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":5,"column":78},"end":{"line":5,"column":93}}}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":5,"column":100},"end":{"line":5,"column":115}}}) : helper)))
    + "\" />\r\n\r\n		<h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":21}}}) : helper)))
    + "</h1>\r\n	</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":1},"end":{"line":15,"column":8}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDescription") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n \r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_browse_category_heading'; return template;});