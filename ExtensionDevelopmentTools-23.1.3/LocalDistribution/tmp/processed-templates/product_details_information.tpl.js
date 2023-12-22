define('product_details_information.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "\r\n	<div class=\"product-details-information-content-container\">\r\n\r\n		<div id=\"banner-content-top\" class=\"content-banner banner-content-top\"></div>\r\n\r\n		<div role=\"tabpanel\">\r\n			<ul class=\"product-details-information-content-tabs\" role=\"tablist\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + "			</ul>\r\n			<div class=\"product-details-information-tab-content\" data-type=\"information-content\"\r\n				data-action=\"tab-content\">\r\n				\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":58,"column":15}}})) != null ? stack1 : "")
    + "\r\n			</div>\r\n		</div>\r\n		<div id=\"banner-content-bottom\" class=\"content-banner banner-content-bottom\"></div>\r\n	</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<button class=\"product-details-information-pusher\" data-target=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":7,"column":93},"end":{"line":7,"column":105}}}) : helper)))
    + "\"\r\n		data-type=\"sc-pusher\">\r\n		"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":12}}}) : helper)))
    + " <i></i>\r\n		<p class=\"product-details-information-hint\"> "
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"content") : depth0),150,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":73}}})) != null ? stack1 : "")
    + " </p>\r\n	</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<li class=\"product-details-information-tab-title "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":82}}})) != null ? stack1 : "")
    + "\" role=\"presentation\">\r\n					<a href=\"#\" data-action=\"selected-tab\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":53},"end":{"line":24,"column":63}}}) : helper)))
    + "\"\r\n						data-target=\"#product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":52},"end":{"line":25,"column":62}}}) : helper)))
    + "\" data-toggle=\"tab\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":25,"column":82},"end":{"line":25,"column":90}}}) : helper)))
    + "</a>\r\n				</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " active ";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<div role=\"tabpanel\"\r\n							class=\"product-details-information-tab-content-panel "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":60},"end":{"line":35,"column":87}}})) != null ? stack1 : "")
    + "\"\r\n							id=\"product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":36,"column":43},"end":{"line":36,"column":53}}}) : helper)))
    + "\" \r\n							data-action=\"pushable\" data-id=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":37,"column":67},"end":{"line":37,"column":79}}}) : helper)))
    + "\">\r\n							<!--"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"showHeader") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":11},"end":{"line":38,"column":116}}})) != null ? stack1 : "")
    + "-->\r\n							<h2 class=\"product-details-information-tab-content-panel-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":39,"column":71},"end":{"line":39,"column":79}}}) : helper)))
    + "</h2>\r\n							<div class=\"collapse multi-collapse\" id=\"collapseSection-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":40,"column":64},"end":{"line":40,"column":74}}}) : helper)))
    + "\" aria-expanded=\"start\">\r\n								<div class=\"well\">										\r\n									<div id=\"product-details-information-tab-content-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":42,"column":68},"end":{"line":42,"column":78}}}) : helper)))
    + "\"\r\n									class=\"product-details-information-tab-content-container\"\r\n									data-type=\"information-content-text\" itemprop=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemprop") || (depth0 != null ? compilerNameLookup(depth0,"itemprop") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemprop","hash":{},"data":data,"loc":{"start":{"line":44,"column":56},"end":{"line":44,"column":68}}}) : helper)))
    + "\">\r\n									"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":45,"column":9},"end":{"line":45,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\r\n									</div>\r\n								</div>\r\n							</div>\r\n								\r\n						</div>\r\n						<div class=\"shadowContent\">\r\n						</div>\r\n						<hr class=\"showMoreline\">\r\n						<button type=\"button\" id=\"buttonCollapse-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":55,"column":47},"end":{"line":55,"column":57}}}) : helper)))
    + "\" class=\"btn btn-default btn-s collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSection-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":55,"column":152},"end":{"line":55,"column":162}}}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n							\r\n						</button>							\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "active";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"product-details-information-tab-content-panel-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":96},"end":{"line":38,"column":104}}}) : helper)))
    + "</h2>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n<div class=\"product-details-information-content\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showInformation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":69,"column":8}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<script>\r\n$(function() {\r\n\r\n   //$( \".well\" ).scrollHeight;\r\n   // $('.well').css(\"background\", \"red\");\r\n\r\n  // if($('.well').prop('scrollHeight') > 400){\r\n//	   $('.well').css(\"background\", \"red\");\r\n  // }\r\n\r\n    $('.well').each(function(i){\r\n        var sHeight = $(this).prop('scrollHeight');\r\n        if (sHeight < 500 || sHeight === 0){\r\n			// alert(\"scroll height of well#\" + i + \" is smaller than 500!\\n Height: \" + sHeight);\r\n			$('.showMoreline:eq('+i+')').css(\"display\",\"none\");\r\n			$('#buttonCollapse-'+i).css(\"display\",\"none\");\r\n			$('[data-view=\"Product.Information\"] div#collapseSection-'+i).css(\"max-height\",\"none\");\r\n		}\r\n            \r\n\r\n    });\r\n\r\n  // var myValue = // $('.well')[1].prop('scrollHeight');\r\n  // $('.well')[1].scrollHeight;\r\n  // console.log(myValue);\r\n});\r\n</script>\r\n\r\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_information'; return template;});