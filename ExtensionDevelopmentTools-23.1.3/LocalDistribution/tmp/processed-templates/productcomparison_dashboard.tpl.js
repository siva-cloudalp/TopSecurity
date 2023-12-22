define('productcomparison_dashboard.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <tr class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"rowclass") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":27},"end":{"line":14,"column":67}}})) != null ? stack1 : "")
    + "\">\r\n                    <td class=\"productcomparison-property-name\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"label") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":20,"column":31}}})) != null ? stack1 : "")
    + "                    </td>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"productValues") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":62,"column":29}}})) != null ? stack1 : "")
    + "                </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rowclass") || (depth0 != null ? compilerNameLookup(depth0,"rowclass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rowclass","hash":{},"data":data,"loc":{"start":{"line":14,"column":45},"end":{"line":14,"column":59}}}) : helper)))
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                            &nbsp;\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <td class=\"\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"isTypeControlActions") : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":29,"column":39}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"isPrice") : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":28},"end":{"line":33,"column":35}}})) != null ? stack1 : "")
    + "                             \">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"isTypeImage") : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":60,"column":35}}})) != null ? stack1 : "")
    + "                        </td>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                                    productcompare-dashboard-table-buttons\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                                    productcomparison-property-value\r\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                                "
    + container.escapeExpression(compilerNameLookup(helpers,"lookup").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? compilerNameLookup(depths[1],"productGroups") : depths[1]),(data && compilerNameLookup(data,"index")),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":32,"column":32},"end":{"line":32,"column":66}}}))
    + "\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                                <img src=\""
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":37,"column":42},"end":{"line":37,"column":78}}}))
    + "\" alt=\"item thumbnail\">\r\n";
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? compilerNameLookup(depths[1],"isTypeControlActions") : depths[1]),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":39,"column":32},"end":{"line":59,"column":39}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing;

  return "                                    <div>\r\n                                        <a href=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"_url") : depth0), depth0))
    + "\" class=\"productcomparison-button-view\" title=\""
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"View Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":111},"end":{"line":41,"column":139}}}))
    + "\">\r\n                                            "
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"View",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":44},"end":{"line":42,"column":64}}}))
    + "\r\n                                        </a>\r\n                                        <button data-itemid=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0), depth0))
    + "\" class=\"productcomparison-button-remove\" data-toggle=\"show-in-modal\" data-action=\"remove-from-productcomparison\" title=\"removefromproductcomparison\">\r\n                                            "
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Remove",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":44},"end":{"line":45,"column":66}}}))
    + "\r\n                                        </button>\r\n                                    </div> <br/>\r\n                                    <div class=\"productcomparison-property-value\">\r\n                                        <a href=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"_url") : depth0), depth0))
    + "\" data-itemid=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0), depth0))
    + "\"  class=\"productcomparison-add\" data-toggle=\"show-in-modal\" data-action=\"add-to-cart\" title=\"Add\">\r\n                                            <i class=\"icon-shopping-cart icon-white\"></i>"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Add To Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":89},"end":{"line":50,"column":116}}}))
    + "\r\n                                        </a>\r\n                                    </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":54,"column":36},"end":{"line":58,"column":43}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                        "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "                                        &nbsp;\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"productcomparison-container\">\r\n    <div id=\"productcompare-dashboard\" class=\"productcompare-dashboard\">\r\n        <div class=\"productcompare-dashboard-header\">\r\n            <div class=\"productcompare-dashboard-title\"><h1>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Compare Products",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":60},"end":{"line":4,"column":92}}}))
    + "</h1></div>\r\n            <div class=\"productcompare-dashboard-buttons\">\r\n                <button type=\"button\" class=\"productcomparison-button-share\" data-action=\"share-productcomparison\" title=\"shareproductcomparison\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Share",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":146},"end":{"line":6,"column":167}}}))
    + "</button>\r\n                <a href=\"/search\" class=\"productcomparison-button-back\" title=\"Back to Search\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":95},"end":{"line":7,"column":125}}}))
    + "</a>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"productcompare-dashboard-table\">\r\n            <tbody>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemProperties") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":64,"column":21}}})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/ProductComparisonExtension/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'productcomparison_dashboard'; return template;});