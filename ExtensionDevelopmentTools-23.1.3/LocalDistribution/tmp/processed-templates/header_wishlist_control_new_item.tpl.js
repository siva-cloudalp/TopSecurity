define('header_wishlist_control_new_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a class=\"product-list-control-new-item-button-create\" data-action=\"header-show-add-new-list-form\">\r\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create a New List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":37}}}))
    + "\r\n</a>\r\n<form action=\"#\" data-action=\"header-create-and-move\" data-type=\"header-wishlist-control-add-new-list-form\"\r\n    class=\"product-list-control-new-item-add-new-list-form\">\r\n    <div class=\"product-list-control-new-item-add-new-list-input-container\" data-validation=\"control-group\">\r\n        <input class=\"product-list-control-new-item-add-new-list-input\" name=\"name\" type=\"text\"\r\n            data-type=\"new-header-wishlist-name\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Your new list name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":96}}}))
    + "\">\r\n    </div>\r\n    <div class=\"product-list-control-new-item-add-new-list-buttons\">\r\n        <button type=\"submit\" class=\"product-list-control-new-item-button-create\">\r\n            "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":34}}}))
    + "\r\n        </button>\r\n    </div>\r\n</form>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_wishlist_control_new_item'; return template;});