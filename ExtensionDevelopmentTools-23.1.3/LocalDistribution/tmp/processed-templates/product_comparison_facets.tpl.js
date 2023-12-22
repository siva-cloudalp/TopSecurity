define('product_comparison_facets.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " hide-compare-panel ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"compare-items-products\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"products") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "		</div>\r\n    <div class=\"compare-item-buttons-container\">\r\n        <div class=\"addedfromcomparison-compare\">\r\n			<input type=\"button\" class=\"addedfromcomparison-compare-button\" data-action=\"proceed-to-compare-products\" title=\"proceedtocompareproducts\" value=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Compare",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":149},"end":{"line":27,"column":172}}}))
    + "\">\r\n        </div>\r\n        <div class=\"addedfromcomparison-clear-all\">\r\n			<input type=\"button\" class=\"addedfromcomparison-clear-all-button\" data-action=\"clear-all-compare-products\" data-dismiss=\"modal\" title=\"clearallcompareproducts\" value=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Clear All",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":170},"end":{"line":30,"column":195}}}))
    + "\">\r\n		</div>\r\n    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"compare-item-wrapper\">\r\n                <div class=\"compare-item\">\r\n                  <button type=\"button\" class=\"addedfromcomparison-remove-button\" data-action=\"remove-from-add-to-compare\" title=\"removefromaddtocompare\"><i data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":170},"end":{"line":18,"column":176}}}) : helper)))
    + "\" class=\"addedfromcomparison-remove-button-icon\"></i></button>\r\n                  <img class=\"addedfromcomparison-product-thumbnail\" src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":19,"column":74},"end":{"line":19,"column":93}}}))
    + "\" alt=\"\" itemprop=\"image\" height=\"75\" width=\"75\" align=\"left\" >\r\n                  <p class=\"addedfromcomparison-product-name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":62},"end":{"line":20,"column":70}}}) : helper)))
    + "</p>\r\n                </div>\r\n			</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n<div class=\"compare-items-hide-container\" data-action=\"slide-toggle-compared-items\" data-target=\".compare-items-container\">\r\n	<span class=\"compare-items-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Compare Products",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":35},"end":{"line":9,"column":67}}}))
    + "</span>\r\n    <i class=\"compare-items-container-hide-button transitions\"><span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Hide",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":69},"end":{"line":10,"column":89}}}))
    + "</span></i>\r\n</div>\r\n<div class=\"compare-items-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideContainer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":36},"end":{"line":12,"column":84}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"products") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":33,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/ProductComparisonExtension/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_comparison_facets'; return template;});