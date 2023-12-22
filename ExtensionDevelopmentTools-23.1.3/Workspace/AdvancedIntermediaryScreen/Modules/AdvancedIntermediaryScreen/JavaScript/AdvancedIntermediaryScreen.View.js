// @module CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen
define('CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View'
	, [
		'cloudalp_advancedintermediaryscreen_advancedintermediaryscreen.tpl'

		, 'CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_advancedintermediaryscreen_advancedintermediaryscreen_tpl

		, AdvancedIntermediaryScreenModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_advancedintermediaryscreen_advancedintermediaryscreen_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new AdvancedIntermediaryScreenModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.View.Context
				return {

				};
			}
		});
	});
