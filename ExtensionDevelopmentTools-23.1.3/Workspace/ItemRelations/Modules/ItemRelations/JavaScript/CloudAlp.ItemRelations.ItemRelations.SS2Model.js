// Model.js
// -----------------------
// @module Case
define("CloudAlp.ItemRelations.ItemRelations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ItemRelations/SuiteScript2/ItemRelations.Service.ss"
            ),
            true
        )
});
});
