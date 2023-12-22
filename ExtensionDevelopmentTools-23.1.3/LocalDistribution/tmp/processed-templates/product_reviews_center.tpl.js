define('product_reviews_center.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"product-reviews-center-container\">\r\n					<div class=\"product-reviews-center-container-header\">\r\n                        <div class=\"product-reviews-center-container-header-title-container\">\r\n                            <h2 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":86},"end":{"line":15,"column":123}}}))
    + "</h2>\r\n                            <div class=\"product-reviews-center-container-header-list-header-view-container\" data-view=\"ListHeader.View\"></div>\r\n                        </div>\r\n                        \r\n                        <div class=\"product-reviews-center-container-wrapper\">\r\n                            <h3 class=\"product-reviews-center-container-header-number\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":21,"column":32},"end":{"line":25,"column":39}}})) != null ? stack1 : "")
    + "                            </h3>\r\n                            <div class=\"product-reviews-center-global-views-star-rating-container\" data-view=\"Global.StarRating\"></div>\r\n                            <div class=\"product-reviews-center-global-views-rating-by-star-container\" data-view=\"Global.RatingByStar\"></div>\r\n\r\n                        </div>\r\n                        \r\n                        <div class=\"product-reviews-center-container-list-header-view-container-mobile\" data-view=\"ListHeader.View\"></div>\r\n					</div>\r\n\r\n                    <section class=\"product-reviews-center-list\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"totalRecords") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":36,"column":24},"end":{"line":40,"column":31}}})) != null ? stack1 : "")
    + "                        <div class=\"product-reviews-center-container-footer\">\r\n                            <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":42,"column":37},"end":{"line":42,"column":48}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-footer-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":115},"end":{"line":42,"column":145}}}))
    + "</a>\r\n                        </div>\r\n                    </section>\r\n				</div>\r\n\r\n				<div class=\"product-reviews-center-footer\">\r\n					<div data-view=\"GlobalViews.Pagination\"></div>\r\n				</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":60}}}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                                    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Reviews",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":36},"end":{"line":24,"column":74}}}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"ProductReviews.Review\" class=\"product-reviews-center-review-container\"></div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                            "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no reviews available for your selection",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":28},"end":{"line":39,"column":93}}}))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"product-reviews-center-container\">\r\n					<div class=\"product-reviews-center-container-header product-reviews-center-container-header-no-reviews-available\">\r\n						<h3 class=\"product-reviews-center-container-header-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":64},"end":{"line":53,"column":101}}}))
    + "</h3>\r\n						<h4 class=\"product-reviews-center-container-header-title-no-reviews\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"No reviews available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":75},"end":{"line":54,"column":111}}}))
    + "</h4>\r\n						<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Be the first to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":9},"end":{"line":55,"column":40}}}))
    + " <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":55,"column":50},"end":{"line":55,"column":61}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":121},"end":{"line":55,"column":151}}}))
    + "</a></p>\r\n					</div>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<section class=\"product-reviews-center-content\">\r\n	<button class=\"product-reviews-center-pusher\" data-target=\"product-reviews-center-review\" data-type=\"sc-pusher\">\r\n		<span class=\"product-reviews-center-pusher-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":52},"end":{"line":5,"column":77}}}))
    + "</span>\r\n		<div class=\"product-reviews-center-pusher-rating\" data-view=\"Global.StarRating\"></div>\r\n		<i class=\"product-reviews-center-pusher-icon\"></i>\r\n	</button>\r\n	<div class=\"product-reviews-center-more-info-content-container\" data-action=\"pushable\" data-id=\"product-reviews-center-review\">\r\n		<div class=\"product-reviews-center\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":58,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_center'; return template;});