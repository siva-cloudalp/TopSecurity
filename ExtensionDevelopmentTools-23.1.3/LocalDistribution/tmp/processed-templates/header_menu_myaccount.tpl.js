define('header_menu_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<li>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasNoItem") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":70,"column":7},"end":{"line":81,"column":14}}})) != null ? stack1 : "")
    + "						</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "								<a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes/new\" name=\"requestaquotes\">\r\n									"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Request a Quote",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":72,"column":9},"end":{"line":72,"column":40}}}))
    + "\r\n								</a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasItemInBasket") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":8},"end":{"line":80,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "									<a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotebasket\" name=\"quotebasket\">\r\n										"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quote basket <span>(300)</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":78,"column":10},"end":{"line":78,"column":57}}}))
    + "\r\n				</a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<li class=\"header-menu-myaccount-item-level2\">\r\n			<a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"wishlist\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Wishlist",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":93,"column":4},"end":{"line":93,"column":28}}}))
    + "\r\n			</a>\r\n\r\n			<ul class=\"header-menu-myaccount-level3\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"productListsReady") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":97,"column":4},"end":{"line":118,"column":11}}})) != null ? stack1 : "")
    + "			</ul>\r\n		</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSingleList") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":98,"column":5},"end":{"line":104,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"productLists") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":105,"column":5},"end":{"line":111,"column":14}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "						<li>\r\n							<a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"allmylists\">\r\n								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All my lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":101,"column":8},"end":{"line":101,"column":36}}}))
    + "\r\n							</a>\r\n						</li>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li>\r\n						<a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":107,"column":109},"end":{"line":107,"column":116}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":107,"column":124},"end":{"line":107,"column":132}}}) : helper)))
    + "\">\r\n							"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":108,"column":7},"end":{"line":108,"column":15}}}) : helper)))
    + " ("
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"items") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), depth0))
    + ")\r\n						</a>\r\n					</li>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "					<li>\r\n						<a href=\"#\" class=\"header-menu-myaccount-anchor-level3\">\r\n							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":115,"column":7},"end":{"line":115,"column":33}}}))
    + "\r\n						</a>\r\n					</li>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<li class=\"header-menu-myaccount-item-level2\" data-permissions=\"lists.listCase.2\">\r\n		<a  class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"cases\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":196,"column":3},"end":{"line":196,"column":24}}}))
    + "\r\n			<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n		</a>\r\n		<ul class=\"header-menu-myaccount-level3\">\r\n			<li>\r\n				<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\r\n					<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":203,"column":5},"end":{"line":203,"column":25}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#cases\" name=\"allmycases\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Support Cases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":207,"column":147},"end":{"line":207,"column":176}}}))
    + "</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#newcase\" name=\"submitnewcase\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Submit New Case",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":210,"column":152},"end":{"line":210,"column":183}}}))
    + "</a>\r\n			</li>\r\n		</ul>\r\n	</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<a class=\"header-menu-myaccount-anchor\" href=\"#\" data-action=\"push-menu\" name=\"myaccount\">\r\n	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":27}}}))
    + "\r\n	<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n</a>\r\n\r\n<ul class=\"header-menu-myaccount\">\r\n	<li>\r\n		<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back\">\r\n			<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":23}}}))
    + "\r\n		</a>\r\n	</li>\r\n	<li class=\"header-menu-myaccount-overview\">\r\n		<a class=\"header-menu-myaccount-overview-anchor\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#overview\" name=\"accountoverview\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Account Overview",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":35}}}))
    + "\r\n		</a>\r\n\r\n		<a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\">\r\n			<i class=\"header-menu-myaccount-signout-icon\"></i>\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sign Out",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":27}}}))
    + "\r\n		</a>\r\n	</li>\r\n\r\n	<li class=\"header-menu-myaccount-item-level2 header-menu-myaccount-level2-orders\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data,"loc":{"start":{"line":24,"column":101},"end":{"line":24,"column":125}}}) : helper)))
    + "\" data-permissions-operator=\"OR\">\r\n		<a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"orders\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":26,"column":28}}}))
    + "\r\n			<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n		</a>\r\n		<ul class=\"header-menu-myaccount-level3 header-menu-myaccount-level3-orders\">\r\n			<li>\r\n				<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\r\n					<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":25}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data,"loc":{"start":{"line":36,"column":25},"end":{"line":36,"column":49}}}) : helper)))
    + "\">\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#purchases\" name=\"orderhistory\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchases History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":5},"end":{"line":38,"column":38}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#returns\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"returnsPermissions") || (depth0 != null ? compilerNameLookup(depth0,"returnsPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"returnsPermissions","hash":{},"data":data,"loc":{"start":{"line":42,"column":135},"end":{"line":42,"column":157}}}) : helper)))
    + "\" name=\"returns\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Returns",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":5},"end":{"line":43,"column":28}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data,"loc":{"start":{"line":46,"column":25},"end":{"line":46,"column":49}}}) : helper)))
    + "\">\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#reorderItems\" name=\"reorderitems\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reorder Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":48,"column":34}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li class=\"header-menu-myaccount-item-level3\" data-permissions=\"transactions.tranFind.1,transactions.tranEstimate.1\">\r\n				<a class=\"header-menu-myaccount-anchor-level3\" data-action=\"push-menu\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"quotes\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":5},"end":{"line":53,"column":27}}}))
    + "\r\n					<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n				</a>\r\n				<ul class=\"header-menu-myaccount-level4\">\r\n					<li>\r\n						<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level4\">\r\n							<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":7},"end":{"line":60,"column":27}}}))
    + "\r\n						</a>\r\n			</li>\r\n					<li>\r\n						<a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"allmyquotes\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"All my Quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":65,"column":7},"end":{"line":65,"column":36}}}))
    + "\r\n						</a>\r\n					</li>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasProductList") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":5},"end":{"line":83,"column":12}}})) != null ? stack1 : "")
    + "				</ul>\r\n			</li>\r\n		</ul>\r\n	</li>\r\n\r\n	<!-- Product Lists - For single list mode data-hashtag will be added dynamically -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isProductListsEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":1},"end":{"line":121,"column":8}}})) != null ? stack1 : "")
    + "\r\n\r\n	<!-- Billing -->\r\n	<li class=\"header-menu-myaccount-item-level2\">\r\n		<a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"billing\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":127,"column":3},"end":{"line":127,"column":26}}}))
    + "\r\n			<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n		</a>\r\n		<ul class=\"header-menu-myaccount-level3\">\r\n			<li>\r\n				<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\r\n					<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":134,"column":5},"end":{"line":134,"column":25}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#balance\" name=\"accountbalance\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Account Balance",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":138,"column":153},"end":{"line":138,"column":184}}}))
    + "</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#invoices\" data-permissions=\"transactions.tranCustInvc.1\" name=\"invoices\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":141,"column":195},"end":{"line":141,"column":219}}}))
    + "</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory\" data-permissions=\"transactions.tranCustInvc.1, transactions.tranCustCred.1, transactions.tranCustPymt.1, transactions.tranCustDep.1, transactions.tranDepAppl.1\" data-permissions-operator=\"OR\" name=\"transactionhistory\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Transaction History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":144,"column":360},"end":{"line":144,"column":395}}}))
    + "</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#printstatement\" data-permissions=\"transactions.tranStatement.2\" name=\"printastatement\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Print a Statement",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":147,"column":209},"end":{"line":147,"column":242}}}))
    + "</a>\r\n			</li>\r\n		</ul>\r\n	</li>\r\n\r\n	<!-- Settings -->\r\n	<li class=\"header-menu-myaccount-item-level2\">\r\n		<a class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"settings\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":155,"column":3},"end":{"line":155,"column":27}}}))
    + "\r\n			<i class=\"header-menu-myaccount-menu-push-icon\"></i>\r\n		</a>\r\n		<ul class=\"header-menu-myaccount-level3\">\r\n			<li>\r\n				<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\r\n					<i class=\"header-menu-myaccount-pop-icon \"></i>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":162,"column":5},"end":{"line":162,"column":25}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#profileinformation\" name=\"profileinformation\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Profile Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":167,"column":5},"end":{"line":167,"column":40}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#emailpreferences\" name=\"emailpreferences\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Preferences",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":172,"column":5},"end":{"line":172,"column":38}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#addressbook\" name=\"addressbook\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Address Book",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":177,"column":5},"end":{"line":177,"column":33}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#creditcards\" name=\"creditcards\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credit Cards",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":182,"column":5},"end":{"line":182,"column":33}}}))
    + "\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#updateyourpassword\" name=\"updateyourpassword\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Update Your Password",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":187,"column":5},"end":{"line":187,"column":41}}}))
    + "\r\n				</a>\r\n			</li>\r\n		</ul>\r\n	</li>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCaseModuleEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":193,"column":1},"end":{"line":214,"column":8}}})) != null ? stack1 : "")
    + "\r\n</ul>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu_myaccount'; return template;});