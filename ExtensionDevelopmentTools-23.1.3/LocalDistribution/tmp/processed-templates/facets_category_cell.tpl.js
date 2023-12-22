define('facets_category_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"facets-category-cell-thumbnail\">\r\n            <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":28}}}) : helper)))
    + "\" class=\"facets-category-cell-anchor\">\r\n                <div class=\"facets-category-cell-content-container \">\r\n                    <div class=\"facets-category-cell-image-container ratio-4-3\" imgurl=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":14,"column":88},"end":{"line":14,"column":118}}}))
    + "\" style=\"background-image: url('"
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"image") : depth0),"categorythumb",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":14,"column":150},"end":{"line":14,"column":187}}}))
    + "');\"></div>\r\n                    <div class=\"facets-category-cell-title-container\">\r\n                        \r\n                    </div>\r\n                </div>\r\n                <h4 class=\"facets-category-cell-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":55},"end":{"line":19,"column":63}}}) : helper)))
    + "</h4>\r\n            </a>\r\n        </div>\r\n        <div class=\"facets-category-cell-title\"></div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"facets-category-cell-thumbnail\">\r\n            <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":25,"column":21},"end":{"line":25,"column":28}}}) : helper)))
    + "\" class=\"facets-category-cell-anchor\">\r\n                <div class=\"facets-category-cell-content-container\">\r\n                    <div class=\"facets-category-cell-image-container ratio-4-3\" imgurl=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":27,"column":88},"end":{"line":27,"column":129}}}))
    + "\" style=\"background-image: url('"
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"categorythumb",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":27,"column":161},"end":{"line":27,"column":206}}}))
    + "');\"></div> \r\n                </div>\r\n                <h4 class=\"facets-category-cell-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":63}}}) : helper)))
    + "</h4>\r\n            </a>\r\n        </div>          \r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"categories") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":40,"column":17}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"facets-category-cell-title\">\r\n                <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fullurl") || (depth0 != null ? compilerNameLookup(depth0,"fullurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullurl","hash":{},"data":data,"loc":{"start":{"line":36,"column":25},"end":{"line":36,"column":36}}}) : helper)))
    + "\" class=\"facets-category-cell-anchor\">\r\n                    "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":28}}}) : helper)))
    + "\r\n                </a>\r\n            </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "withsummary";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <article class=\"widget_content\">\r\n                            <ul> \r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"categories") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":32},"end":{"line":66,"column":41}}})) != null ? stack1 : "")
    + "                            </ul>\r\n                        </article>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                    <li>\r\n                                        <div class=\"facets-category-cell-title\">\r\n                                            <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fullurl") || (depth0 != null ? compilerNameLookup(depth0,"fullurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullurl","hash":{},"data":data,"loc":{"start":{"line":61,"column":53},"end":{"line":61,"column":64}}}) : helper)))
    + "\" class=\"facets-category-cell-anchor\">\r\n                                                "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":62,"column":48},"end":{"line":62,"column":56}}}) : helper)))
    + "\r\n                                            </a>\r\n                                        </div>\r\n                                    </li>                                    \r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"categories") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":32},"end":{"line":96,"column":41}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                <li>\r\n                                    <div class=\"facets-category-cell-title\">\r\n                                        <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fullurl") || (depth0 != null ? compilerNameLookup(depth0,"fullurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullurl","hash":{},"data":data,"loc":{"start":{"line":91,"column":49},"end":{"line":91,"column":60}}}) : helper)))
    + "\" class=\"facets-category-cell-anchor\">\r\n                                            "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":92,"column":44},"end":{"line":92,"column":52}}}) : helper)))
    + "\r\n                                        </a>\r\n                                    </div>\r\n                                </li>                                    \r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"facets-category-cell\">\r\n\r\n\r\n<div class=\"facets-category-cell-desktop\"> \r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasImage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":32,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSummaryView") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":41,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n    <div class=\"facets-category-cell-mobile\">\r\n        <div class=\"container-fluid\" id=\"footer-secondary-container\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">           \r\n                    <div class=\"col-md-3 widget  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSummaryView") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":49},"end":{"line":49,"column":88}}})) != null ? stack1 : "")
    + "\">\r\n                        <h4 class=\"facets-category-cell-title\">\r\n                            <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":51,"column":37},"end":{"line":51,"column":44}}}) : helper)))
    + "?page=1\" class=\"facets-category-cell-anchor\">\r\n                                "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":52,"column":32},"end":{"line":52,"column":40}}}) : helper)))
    + "\r\n                            </a>\r\n                        </h4>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSummaryView") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":24},"end":{"line":69,"column":31}}})) != null ? stack1 : "")
    + "                    </div>          \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!--div class=\"facets-category-cell-mobile\">\r\n<div class=\"container-fluid\" id=\"footer-secondary-container\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">           \r\n            <div class=\"col-md-3 widget\">\r\n                <h4 class=\"facets-category-cell-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":84,"column":55},"end":{"line":84,"column":63}}}) : helper)))
    + "</h4>\r\n                <article class=\"widget_content\">\r\n                    <ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSummaryView") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":24},"end":{"line":97,"column":35}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </article>\r\n            </div>          \r\n        </div>\r\n    </div>\r\n</div>\r\n</div-->\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_category_cell'; return template;});