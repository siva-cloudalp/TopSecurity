define('product_list_lists.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"product-list-lists-button-back\">\r\n		<i class=\"product-list-lists-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"product-list-lists-button-add\" data-action=\"add-list\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create New List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":72},"end":{"line":14,"column":103}}}))
    + "</button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"product-list-lists-wrapper\">\r\n			<table class=\"product-list-lists-details\">\r\n				<tbody data-view=\"ProductList.ListDetails\"></tbody>\r\n			</table>\r\n		</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<h4 class=\"product-list-lists-subtitle\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create a product list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":42},"end":{"line":26,"column":79}}}))
    + "</h4>\r\n		<div data-type=\"new-product-list\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"product-list-lists\">\r\n	<div data-type=\"alert-placeholder\" class=\"product-list-lists-message\"></div>\r\n\r\n	<header class=\"product-list-lists-header\">\r\n		<h2 class=\"product-list-lists-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"My Wishlist",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":39},"end":{"line":12,"column":66}}}))
    + "</h2>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSingleList") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "	</header>\r\n\r\n	<!-- if the customer as no lists then we show a Create New List form (rendered in view.render()) -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasLists") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":19,"column":1},"end":{"line":28,"column":8}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_lists'; return template;});