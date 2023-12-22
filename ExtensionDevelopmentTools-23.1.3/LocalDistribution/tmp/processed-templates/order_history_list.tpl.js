define('order_history_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"order-history-list-button-back\">\r\n		<i class=\"order-history-list-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"order-history-list-header-button-open-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":63},"end":{"line":17,"column":83}}}))
    + "</span>					\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<a href=\"/open-purchases\" class=\"order-history-list-header-button-open\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":76},"end":{"line":19,"column":96}}}))
    + "</a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"inStoreIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"order-history-list-header-button-instore-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"In Store",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":67},"end":{"line":24,"column":91}}}))
    + "</span>					\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					<a href=\"/instore-purchases\" class=\"order-history-list-header-button-instore\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"In Store",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":83},"end":{"line":26,"column":107}}}))
    + "</a>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"order-history-list-header-button-all-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":62},"end":{"line":31,"column":81}}}))
    + "</span>					\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "				<a href=\"/purchases\" class=\"order-history-list-header-button-all\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":70},"end":{"line":33,"column":89}}}))
    + "</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "style=\"display:none;\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"order-history-list-recordviews-container\">\r\n		<table class=\"order-history-list-recordviews-actionable-table\">\r\n			<thead class=\"order-history-list-recordviews-actionable-header\">\r\n				<tr>\r\n					<th class=\"order-history-list-recordviews-actionable-title-header\">\r\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":46,"column":40}}}))
    + "</span>\r\n					</th>\r\n					<th class=\"order-history-list-recordviews-actionable-date-header\">\r\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":12},"end":{"line":49,"column":32}}}))
    + "</span>\r\n					</th>\r\n					<th class=\"order-history-list-recordviews-actionable-currency-header\">\r\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":52,"column":34}}}))
    + "</span>\r\n					</th>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":54,"column":5},"end":{"line":64,"column":12}}})) != null ? stack1 : "")
    + "					<th class=\"order-history-list-recordviews-actionable-actions-header\">\r\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Track Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":39}}}))
    + "</span>\r\n					</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class=\"order-history-list\" data-view=\"Order.History.Results\"></tbody>\r\n		</table>\r\n	</div>\r\n\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"inStoreIsActive") : depth0),{"name":"unless","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":6},"end":{"line":59,"column":17}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"order-history-list-recordviews-actionable-origin-header\">\r\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Origin",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":14},"end":{"line":57,"column":36}}}))
    + "</span>\r\n							</th>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "						<th class=\"order-history-list-recordviews-actionable-status-header\">\r\n							<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":62,"column":13},"end":{"line":62,"column":35}}}))
    + "</span>\r\n						</th>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":75,"column":2},"end":{"line":91,"column":9}}})) != null ? stack1 : "")
    + "\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "			<p class=\"order-history-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":76,"column":39},"end":{"line":76,"column":65}}}))
    + "</p>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"order-history-list-empty-section\">\r\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"You don't have any purchases in your account right now.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":8},"end":{"line":79,"column":80}}}))
    + "</h5>\r\n				\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"allIsActive") : depth0),{"name":"unless","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":4},"end":{"line":83,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":4},"end":{"line":89,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "					<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To see a list of all your past purchases, you can go to the tab <a href=\"/purchases\" class=\"\">All</a>.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":82,"column":126}}}))
    + "</p>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":5},"end":{"line":88,"column":12}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    return "						<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"If you are looking to review some past purchases made in one of our brick and mortar stores, please check the tab <a href=\"/instore-purchases\" class=\"\">In Store</a>.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":87,"column":9},"end":{"line":87,"column":190}}}))
    + "</p>\r\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"order-history-list-case-list-paginator\">\r\n			<div data-view=\"GlobalViews.Pagination\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":98,"column":3},"end":{"line":100,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"order-history-list\">\r\n	<header class=\"order-history-list-header\">\r\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\r\n	</header>\r\n\r\n	\r\n	<div class=\"order-history-list-header-nav\">\r\n		<div class=\"order-history-list-header-button-group\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":28,"column":10}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"allIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":30,"column":3},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n\r\n	<div data-view=\"ListHeader\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":29},"end":{"line":38,"column":77}}})) != null ? stack1 : "")
    + "></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":40,"column":1},"end":{"line":93,"column":8}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":1},"end":{"line":102,"column":8}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_history_list'; return template;});