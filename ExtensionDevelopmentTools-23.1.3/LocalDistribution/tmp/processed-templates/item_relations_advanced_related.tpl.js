define('item_relations_advanced_related.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "    <aside class=\"item-relations-related\">\n        <h3>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"sectionTitle") || (depth0 != null ? compilerNameLookup(depth0,"sectionTitle") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sectionTitle","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":28}}}) : helper)))
    + "</h3>\n        <div class=\"item-relations-related-row\">\n            <div data-type=\"backbone.collection.view.rows\"></div>\n        </div>\n        <p class=\"quantity-purchase\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity: $(0)",(depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":76}}}))
    + "</p>\n    </aside>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCells") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_relations_advanced_related'; return template;});