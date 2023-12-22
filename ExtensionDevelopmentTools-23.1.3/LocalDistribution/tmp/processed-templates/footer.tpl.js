define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h5 class=\"footer-content-upper-section-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</h5>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"footer-content-middle-section\">\r\n            <div class=\"footer-columns quality-labels\">\r\n                <div class=\"footer-column-ql-links\">\r\n                    <span class=\"ql-title\">\r\n                        "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"footerUspTitle") || (depth0 != null ? compilerNameLookup(depth0,"footerUspTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerUspTitle","hash":{},"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":23,"column":42}}}) : helper)))
    + "\r\n                    </span>\r\n                </div>\r\n                <div class=\"footer-column-ql-links\">\r\n                    <img src=\""
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"footerUspIcon1") : depth0),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":27,"column":30},"end":{"line":27,"column":68}}}))
    + "\"\r\n                        alt=\"\" class=\"ql-img\">\r\n                    <span class=\"ql-text\">\r\n                        "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"footerUspLabel1") || (depth0 != null ? compilerNameLookup(depth0,"footerUspLabel1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerUspLabel1","hash":{},"data":data,"loc":{"start":{"line":32,"column":24},"end":{"line":32,"column":43}}}) : helper)))
    + "\r\n                    </span>\r\n                </div>\r\n                <div class=\"footer-column-ql-links\">\r\n                    <img src=\""
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"footerUspIcon2") : depth0),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":36,"column":30},"end":{"line":36,"column":68}}}))
    + "\"\r\n                        alt=\"\" class=\"ql-img\">\r\n                    <span class=\"ql-text\">\r\n                        "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"footerUspLabel2") || (depth0 != null ? compilerNameLookup(depth0,"footerUspLabel2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerUspLabel2","hash":{},"data":data,"loc":{"start":{"line":41,"column":24},"end":{"line":41,"column":43}}}) : helper)))
    + "\r\n                    </span>\r\n                </div>\r\n                <div class=\"footer-column-ql-links\">\r\n                    <img src=\""
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"footerUspIcon3") : depth0),{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":45,"column":30},"end":{"line":45,"column":68}}}))
    + "\"\r\n                        alt=\"\" class=\"ql-img\">\r\n                    <span class=\"ql-text\">\r\n                        "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"footerUspLabel3") || (depth0 != null ? compilerNameLookup(depth0,"footerUspLabel3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerUspLabel3","hash":{},"data":data,"loc":{"start":{"line":50,"column":24},"end":{"line":50,"column":43}}}) : helper)))
    + "\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"footer-content-social\">\r\n                <div class=\"footer-logo-view-container\">\r\n                   		<svg version=\"1.1\" id=\"logofooter\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 2345.7 925.6\" xml:space=\"preserve\"><style>.st1{opacity:.6}.st1,.st2{fill:#fff}</style><path d=\"M525.4 30.3L111.8 269.1c-149.1 86.1-149.1 301.4 0 387.5l413.5 238.8c149.1 86.1 335.5-21.5 335.5-193.7V224c.1-172.2-186.3-279.8-335.4-193.7zm179.1 488.3c-2.2 5.2-4.5 10.5-7 15.7-2.5 5.3-5.1 10.5-8 15.8-4.2 7.9-8.8 15.9-13.8 23.8s-10.4 15.8-16.3 23.6c-5.9 7.8-12.2 15.6-18.9 23.2C606.6 658.8 561 694 499.4 721c-45.2-19.8-81.8-44-111.4-70.5-2.7-2.4-5.3-4.8-7.9-7.3-15.5-14.7-29-30-40.7-45.7-2-2.6-3.9-5.2-5.7-7.8-3.7-5.2-7.2-10.5-10.6-15.8-16.7-26.4-28.9-53.1-37.7-78.6-1.8-5.1-3.4-10.1-4.9-15.1-7.6-24.9-12-48.3-14.6-68.5-.8-6.1-1.4-11.8-1.9-17.3-2.8-32.7-.7-53.7-.7-53.7l236.1-136.4h-.1.1-.1l236.1 136.4c.1.2 8.5 84.1-30.9 177.9z\" opacity=\".2\" fill=\"#fff\"/><path class=\"st1\" d=\"M886.9 269.1L473.4 30.3C324.3-55.8 137.8 51.8 137.8 224v477.5c0 172.2 186.4 279.8 335.6 193.7l413.5-238.8c149.2-86 149.2-301.2 0-387.3zm-387.5 452C236.7 606 263.3 340.9 263.3 340.9l236.1-136.4h-.1.1-.1l236.1 136.4c.1 0 26.7 265.1-236 380.2z\"/><path class=\"st2\" d=\"M608.5 367.6H390.2v57.1h80.6v161.2h57.1V424.7h80.6z\"/><path class=\"st2\" d=\"M499.4 45.3L137.8 254.1v417.5l361.5 208.7 361.5-208.7V254.1L499.4 45.3zm205.1 473.3c-2.2 5.2-4.5 10.5-7 15.7-2.5 5.3-5.1 10.5-8 15.8-4.2 7.9-8.8 15.9-13.8 23.8s-10.4 15.8-16.3 23.6c-5.9 7.8-12.2 15.6-18.9 23.2C606.6 658.8 561 694 499.4 721c-45.2-19.8-81.8-44-111.4-70.5-2.7-2.4-5.3-4.8-7.9-7.3-15.5-14.7-29-30-40.7-45.7-2-2.6-3.9-5.2-5.7-7.8-3.7-5.2-7.2-10.5-10.6-15.8-16.7-26.4-28.9-53.1-37.7-78.6-1.8-5.1-3.4-10.1-4.9-15.1-7.6-24.9-12-48.3-14.6-68.5-.8-6.1-1.4-11.8-1.9-17.3-2.8-32.7-.7-53.7-.7-53.7l236.1-136.4h-.1.1-.1l236.1 136.4c.1.2 8.5 84.1-30.9 177.9z\"/><g><path class=\"st2\" d=\"M1114.5 418.2v-27.4h108v27.4h-38.6v115.7h-30.7V418.2h-38.7zM1254.5 410.8c14.1-14.3 31.4-21.6 51.5-21.6 20.4 0 37.6 7.3 51.5 21.6 14.1 14.3 21.2 31.6 21.2 51.9 0 20.1-7.1 37.6-21.2 51.9-14.1 14.3-31.4 21.4-51.5 21.4s-37.4-7.1-51.5-21.4c-13.9-14.3-21-31.8-21-51.9 0-20.4 7-37.6 21-51.9zm81.4 21.1c-8.1-8.5-18.1-12.7-29.9-12.7-11.8 0-21.8 4.2-29.9 12.7-8.1 8.5-12.3 18.7-12.3 30.7s4.2 22.2 12.3 30.7c8.1 8.3 18.1 12.5 29.9 12.5 11.8 0 21.8-4.2 29.9-12.7 8.3-8.5 12.5-18.7 12.5-30.5-.1-12-4.2-22.1-12.5-30.7zM1404 533.9V390.8h58.8c15.4 0 27 4.6 35.1 13.9 8.1 9.1 12 20.1 12 33s-3.9 23.9-12 33c-8.1 9.1-19.7 13.7-35.1 13.7h-28.2v49.4H1404zm30.5-116.3v40.3h26.8c11 0 18.1-10 18.1-20.1 0-10-6.6-20.1-17.2-20.1h-27.7zM1599.4 492c.6 9.8 8.3 17.2 21.4 17.2 12.5 0 20.8-6 21-15.2.2-7.3-3.7-12.3-17.2-16.2l-17.2-4.8c-24.7-7.7-37-21.4-37-41.1 0-12.7 4.8-22.8 14.1-30.7 9.3-8.1 21.2-12 35.1-12 14.1 0 25.7 3.9 34.7 11.8 9.1 7.9 13.7 18.5 13.7 32h-30.3c0-9.8-6.6-16.2-18.5-16.2-10.8 0-18.5 6-18.5 14.3 0 6.9 5.2 11.6 15.4 14.5l17 5.4c26.8 7.7 39.9 22.2 39.3 43.2-.2 8.9-2.7 16.8-7.9 23.5-10.2 13.1-26 18.5-43.6 18.5-15.6 0-28-4.2-37.6-12.3-9.6-8.3-14.3-18.9-14.3-32h30.4zM1783 516.3c-8.9 13.1-23.7 19.7-44.2 19.7-14.3 0-26.4-4.8-36.1-14.1-9.8-9.6-14.5-21.8-14.5-36.8 0-15 4.8-27 14.5-36.3 9.8-9.3 21.8-13.9 36.1-13.9 14.1 0 26 4.8 35.3 14.3 9.6 9.3 14.3 21.6 14.3 36.8 0 2.7-.2 5.6-.4 8.9h-71c1.5 10.6 12.5 16.2 23.9 16.2 9.3 0 16.4-3.1 21.2-9.1l20.9 14.3zm-23.7-39.5c-2.9-22-37.4-22.2-41.9 0h41.9zM1897.2 455.4l-23.5 16.8c-4.2-6.4-10.4-9.8-18.7-9.8-6.4 0-12 2.1-16.8 6.4-4.8 4.2-7.3 9.6-7.3 16.2 0 6.9 2.5 12.5 7.3 16.8 4.8 4.4 10.4 6.4 16.8 6.4 8.3 0 14.5-3.3 18.7-9.8l23.5 16.6c-9.1 13.1-24.7 20.8-42.2 20.8-14.3 0-26.8-4.8-37.2-14.3-10.4-9.6-15.6-21.8-15.6-36.6 0-14.7 5.2-26.8 15.6-36.1 10.4-9.3 22.8-14.1 37.2-14.1 17.3.2 32.8 7.6 42.2 20.7zM1979.6 436.9h28.9v97h-28.9v-13.3c-5 9.3-15.4 15.4-25.1 15.4-22.6 0-38.4-14.5-38.4-41.1V437h28.9v51.7c0 13.9 8.7 19.3 17.2 19.3 10 0 17.4-6.2 17.4-19.7v-51.4zM2063.9 533.9H2035v-97h28.9v23.5c4.8-16.8 16.4-25.5 27.4-25.5 6.4 0 11.8 1.2 16.6 3.5l-5.2 26c-3.9-1.9-8.9-2.9-14.7-2.9-16 0-24.1 12.9-24.1 38.6v33.8zM2154.9 407.7c0 9.3-7.9 17-17.7 17-10 0-18.1-7.7-18.1-17s8.1-16.8 18.1-16.8c9.8-.1 17.7 7.4 17.7 16.8zM2122.9 436.9h28.7v97h-28.7zM2215.9 436.9h20.4v22.8h-20.4v74.1h-28.7v-74.1h-17.7v-22.8h17.7v-37.2h28.7v37.2zM2345.7 436.9l-59.8 144.5h-30.5l23.3-57.5-37.4-87h30.7l21.4 55 21.6-55h30.7z\"/></g></svg>\r\n                   </div>\r\n                <ul class=\"footer-content-social-list\">\r\n                    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinksTitle") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":20},"end":{"line":70,"column":32}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":20},"end":{"line":76,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li\r\n                        class=\"footer-content-social-media-links-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinksTitle") : stack1), depth0))
    + "\r\n                    </li>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                    <li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":72,"column":27},"end":{"line":72,"column":54}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":72,"column":69},"end":{"line":72,"column":84}}}) : helper)))
    + "\"\r\n                            data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":73,"column":45},"end":{"line":73,"column":63}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":73,"column":78},"end":{"line":73,"column":92}}}) : helper)))
    + "\"\r\n                            class=\"footer-content-social-link\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":74,"column":63},"end":{"line":75,"column":108}}})) != null ? stack1 : "")
    + "</a></li>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i\r\n                                class=\"footer-content-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":75,"column":71},"end":{"line":75,"column":79}}}) : helper)))
    + "\"></i>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":75,"column":93},"end":{"line":75,"column":101}}}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"footer-column-links\">\r\n                    <ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":24},"end":{"line":95,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":86,"column":24},"end":{"line":94,"column":31}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                        <li class=\"footer-column-link-listitem\"><a class=\"footer-column-link\"\r\n                                "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":88,"column":32},"end":{"line":88,"column":59}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":88,"column":74},"end":{"line":88,"column":89}}}) : helper)))
    + "\"\r\n                                data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":89,"column":49},"end":{"line":89,"column":67}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":89,"column":82},"end":{"line":89,"column":96}}}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":89,"column":98},"end":{"line":89,"column":106}}}) : helper)))
    + "</a></li>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <li class=\"footer-column-heading-listitem\">\r\n                            <h4 class=\"footer-column-heading\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":92,"column":62},"end":{"line":92,"column":70}}}) : helper)))
    + "</h4>\r\n                        </li>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"footer-column-links\">\r\n                    <ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":24},"end":{"line":112,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"footer-column-links\">\r\n                    <ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":119,"column":24},"end":{"line":129,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"footer-column-links\">\r\n                    <ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":24},"end":{"line":146,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\r\n                </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":4},"end":{"line":169,"column":15}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <section class=\"footer-content-bottom-section-container\">\r\n        <div class=\"footer-content-bottom-section\">\r\n            <div class=\"footer-content-copyright\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":159,"column":16},"end":{"line":164,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </section>\r\n\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":160,"column":16},"end":{"line":160,"column":97}}}))
    + "\r\n                <!-- an en dash &#8211; is used to indicate a range of values -->\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "                "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":163,"column":16},"end":{"line":163,"column":72}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div data-view=\"Global.BackToTop\"></div>\r\n<div class=\"footer-content\">\r\n\r\n    <div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\"\r\n        data-cms-area-filters=\"global\"></div>\r\n\r\n    <section class=\"footer-content-upper-section-container\">\r\n        <!--div class=\"footer-content-upper-section\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "            <div data-view=\"FooterContent\" class=\"footer-content-newsletter-container\"></div>\r\n        </div-->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"footerUspEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":56,"column":15}}})) != null ? stack1 : "")
    + "    </section>\r\n\r\n    <section class=\"footer-content-middle-section-container\">\r\n        <div class=\"footer-content-middle-section\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":79,"column":19}}})) != null ? stack1 : "")
    + "\r\n            <div class=\"footer-columns\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":16},"end":{"line":98,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":16},"end":{"line":115,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":16},"end":{"line":132,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":16},"end":{"line":149,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </section>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterViewContext") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":154,"column":4},"end":{"line":170,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Logitail/TopSecurity/1.1.19/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer'; return template;});