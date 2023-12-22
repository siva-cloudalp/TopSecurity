define('global_views_host_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"global-views-host-selector\">\r\n	<!--span class=\"global-views-host-selector-addon\">\r\n		<i class=\"global-views-host-selector-globe-icon\"></i>\r\n	</span-->\r\n\r\n\r\n\r\n<ul class=\"header-menu-level3 global-views-host-selector-select\"  value=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":9,"column":73},"end":{"line":9,"column":81}}}) : helper)))
    + "\" >\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"availableHosts") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "</ul>\r\n\r\n\r\n	<!--select data-toggle=\"host-selector\" class=\"global-views-host-selector-select\"-->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"availableHosts") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "	<!--/select-->\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"languages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":5},"end":{"line":18,"column":14}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":24}}}) : helper)))
    + "\"  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":27},"end":{"line":14,"column":60}}})) != null ? stack1 : "")
    + ">\r\n					  <!--a class=\"header-menu-level3-anchor ddn\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":15,"column":57},"end":{"line":15,"column":65}}}) : helper)))
    + "\" data-hashtag=\"\" onclick=\"return false;\" data-toggle=\"host-selector\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":15,"column":142},"end":{"line":15,"column":150}}}) : helper)))
    + "\" presently=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":163},"end":{"line":15,"column":196}}})) != null ? stack1 : "")
    + "\" data-touchpoint=\"home\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":15,"column":221},"end":{"line":15,"column":236}}}) : helper)))
    + "</a-->					\r\n					  <button class=\"header-menu-level3-anchor ddn\" data-toggle=\"host-selector\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":16,"column":88},"end":{"line":16,"column":96}}}) : helper)))
    + "\" presently=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":109},"end":{"line":16,"column":142}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":16,"column":144},"end":{"line":16,"column":159}}}) : helper)))
    + "</button>\r\n					</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "selected";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":3},"end":{"line":36,"column":10}}})) != null ? stack1 : "")
    + "			\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<!--optgroup label=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":28,"column":33}}}) : helper)))
    + "\"-->\r\n				<!--optgroup label=\"\"-->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"languages") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":5},"end":{"line":34,"column":14}}})) != null ? stack1 : "")
    + "				<!--/optgroup-->\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<!--option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"host") || (depth0 != null ? compilerNameLookup(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":31,"column":24},"end":{"line":31,"column":32}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":34},"end":{"line":31,"column":67}}})) != null ? stack1 : "")
    + ">\r\n							"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":32,"column":7},"end":{"line":32,"column":22}}}) : helper)))
    + "\r\n						</option-->\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showHosts") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":41,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_host_selector'; return template;});