define('global_views_modal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<h2 class=\"global-views-modal-content-header-title\">\r\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":10,"column":19}}}) : helper)))
    + "\r\n				</h2>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal-dialog global-views-modal "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"modalDialogClass") || (depth0 != null ? compilerNameLookup(depth0,"modalDialogClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modalDialogClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":64}}}) : helper)))
    + "\">\r\n	<div class=\"global-views-modal-content\">\r\n		<!--Modal-Header -->\r\n		<div id=\"modal-header\" class=\"global-views-modal-content-header\">\r\n			<button type=\"button\" class=\"global-views-modal-content-header-close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n				&times;\r\n			</button>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n		<!--Modal-content -->\r\n		<div id=\"modal-body\" data-type=\"modal-body\" class=\" global-views-modal-content-body\" data-view=\"Child.View\">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_modal'; return template;});