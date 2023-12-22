define('item_relations_related_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"item-relations-related-item-rate\" data-view=\"Global.StarRating\">\r\n		</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div itemprop=\"itemListElement\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":56}}}) : helper)))
    + "\" data-track-productlist-list=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_list") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_list") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_list","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":113}}}) : helper)))
    + "\"\r\n	data-track-productlist-category=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_category") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_category","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":64}}}) : helper)))
    + "\"\r\n	data-track-productlist-position=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"track_productlist_position") || (depth0 != null ? compilerNameLookup(depth0,"track_productlist_position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"track_productlist_position","hash":{},"data":data,"loc":{"start":{"line":3,"column":34},"end":{"line":3,"column":64}}}) : helper)))
    + "\" data-sku=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":3,"column":76},"end":{"line":3,"column":83}}}) : helper)))
    + "\">\r\n	<a class=\"item-relations-related-item-thumbnail\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":63}}}) : helper))) != null ? stack1 : "")
    + ">\r\n		<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"merchzone",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":53}}}))
    + "\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" />\r\n	</a>\r\n	<a class=\"item-relations-related-item-link\" href=\"#\">\r\n		<span class=\"item-relations-related-item-brand\">\r\n			"
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"custitem_bhs_merken") : stack1), depth0))
    + "\r\n		</span>\r\n	</a>\r\n	<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURL") || (depth0 != null ? compilerNameLookup(depth0,"itemURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURL","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":17}}}) : helper))) != null ? stack1 : "")
    + " class=\"item-relations-related-item-title\">\r\n		<span itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":13,"column":36}}}) : helper)))
    + "</span>\r\n		<div class=\"item-relations-related-item-sku\" data-view=\"ItemViews.Sku\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":14,"column":73},"end":{"line":14,"column":80}}}) : helper)))
    + "</div>\r\n	</a>\r\n	<div class=\"item-relations-related-item-price\" data-view=\"Item.Price\">\r\n	</div>\r\n\r\n	<div data-view=\"AddToCart\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":1},"end":{"line":26,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_relations_related_item'; return template;});