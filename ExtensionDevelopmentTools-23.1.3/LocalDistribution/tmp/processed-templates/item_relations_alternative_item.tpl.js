define('item_relations_alternative_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"item-relations-related-item-rate\" data-view=\"Global.StarRating\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isMatrixItem") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":34,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <a href=\"/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"urlcomponent") || (depth0 != null ? compilerNameLookup(depth0,"urlcomponent") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"urlcomponent","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":38}}}) : helper)))
    + "\" data-toggle=\"show-in-modal\" class=\"cart-add-to-cart-button-button\" style=\"width: 80%\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"2Add to cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":126},"end":{"line":23,"column":154}}}))
    + "</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"cart-add-to-cart-button-container\" style=\"display: contents\">\n                <button id=\"plp-addtocart\" data-type=\"alt-item-add-to-cart\" type=\"submit\" class=\"cart-add-to-cart-button-button\" data-item-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":26,"column":143},"end":{"line":26,"column":153}}}) : helper)))
    + "\" \n                    data-quantity=\"1\">\n                    <i class=\"add-to-cart-icon\"></i>\n                        <!-- <span class=\"buttonText\">\n                            "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add to cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":28},"end":{"line":30,"column":55}}}))
    + "\n                        </span> -->\n                </button>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div itemprop=\"itemListElement\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":56}}}) : helper)))
    + "\" data-track-productlist-list=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_list") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_list") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_list","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":113}}}) : helper)))
    + "\"\n    data-track-productlist-category=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_category") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_category","hash":{},"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":67}}}) : helper)))
    + "\"\n    data-track-productlist-position=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_position") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_position","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":67}}}) : helper)))
    + "\" data-sku=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":3,"column":79},"end":{"line":3,"column":86}}}) : helper)))
    + "\">\n    <a class=\"item-relations-related-item-thumbnail\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":66}}}) : helper))) != null ? stack1 : "")
    + ">\n        <img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":18},"end":{"line":5,"column":59}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" />\n    </a>\n    <a class=\"item-relations-related-item-link\" href=\"#\">\n			<span class=\"item-relations-related-item-brand\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"custitem_bhs_merken") || (depth0 != null ? compilerNameLookup(depth0,"custitem_bhs_merken") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"custitem_bhs_merken","hash":{},"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":27}}}) : helper)))
    + "\n			</span>\n	</a>\n    <a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":12,"column":7},"end":{"line":12,"column":20}}}) : helper))) != null ? stack1 : "")
    + " class=\"item-relations-related-item-title\">\n        <span itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":13,"column":30},"end":{"line":13,"column":42}}}) : helper)))
    + "</span>\n        <div class=\"item-relations-related-item-sku\" data-view=\"ItemViews.Sku\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":14,"column":79},"end":{"line":14,"column":86}}}) : helper)))
    + "</div>\n    </a>\n    \n    <div class=\"item-relations-related-item-price\" data-view=\"Item.Price\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":35,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_relations_alternative_item'; return template;});