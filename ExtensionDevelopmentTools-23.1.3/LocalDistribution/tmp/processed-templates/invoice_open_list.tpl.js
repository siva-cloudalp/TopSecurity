define('invoice_open_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"invoice-open-list-button-back\">\r\n		<i class=\"invoice-open-list-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<a data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" data-type=\"make-a-payment\" class=\"invoice-open-list-button-payment\"\r\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"enableMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":22,"column":80}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"enableMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "			</a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "href=\"/make-a-payment\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"8":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make a Payment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":5},"end":{"line":24,"column":35}}}))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"0 Invoices Selected",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":5},"end":{"line":26,"column":40}}}))
    + "\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n			<table class=\"invoice-open-list-records\">\r\n				<thead class=\"invoice-open-list-records-head\">\r\n					<tr class=\"invoice-open-list-records-head-row\">\r\n						<th></th>\r\n						<th></th>\r\n						<th>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":7},"end":{"line":43,"column":27}}}))
    + "\r\n						</th>\r\n						<th>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Due date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":7},"end":{"line":46,"column":31}}}))
    + "\r\n						</th>\r\n						<th>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":7},"end":{"line":49,"column":29}}}))
    + "\r\n						</th>\r\n					</tr>\r\n				</thead>\r\n\r\n				<tbody class=\"invoice-open-list-records-body\" data-view=\"Invoice.Results\"></tbody>\r\n\r\n			</table>\r\n\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"invoice-open-list-no-records\">\r\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Open Invoices at the moment,<br/>see <a href=\"/paid-invoices\" class=\"invoice-open-list-anchor-paid\">Invoices Paid In Full</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":8},"end":{"line":60,"column":169}}}))
    + "</h5>\r\n			</div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"invoice-paid-list-paginator\">\r\n		<div data-view=\"GlobalViews.Pagination\"></div>\r\n	</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"invoice-open-list\">\r\n\r\n	<header class=\"invoice-open-list-header\">\r\n		<h2 class=\"invoice-open-list-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":11,"column":38},"end":{"line":11,"column":52}}}) : helper)))
    + "</h2>\r\n	</header>\r\n\r\n	<div class=\"invoice-open-list-header-nav\">\r\n		<div class=\"invoice-open-list-header-button-group\">\r\n			<span class=\"invoice-open-list-header-button-open\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":54},"end":{"line":16,"column":74}}}))
    + "</span>\r\n			<a href=\"/paid-invoices\" class=\"invoice-open-list-header-button-paid\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Paid in Full",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":73},"end":{"line":17,"column":101}}}))
    + "</a>\r\n		</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n\r\n	<div data-view=\"ListHeader\"></div>\r\n\r\n	<div class=\"invoice-open-list-body\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":35,"column":2},"end":{"line":62,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":1},"end":{"line":68,"column":8}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'invoice_open_list'; return template;});