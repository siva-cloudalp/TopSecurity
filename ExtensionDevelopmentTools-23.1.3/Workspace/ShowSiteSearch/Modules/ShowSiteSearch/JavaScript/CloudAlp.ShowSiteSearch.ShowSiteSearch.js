
define(
	'CloudAlp.ShowSiteSearch.ShowSiteSearch'
	, [
		'Header.View'
		, 'underscore'
	]
	, function (
		HeaderView
		, _
	) {

		'use strict';

		return {
			mountToApp: function mountToApp(container) {

				_.extend(HeaderView.prototype, {
					verifyShowSiteSearch: _.wrap(HeaderView.prototype.verifyShowSiteSearch, function (...args) {
						if (this.$('[data-action="show-sitesearch"]').length > 0) {
							let hash = Backbone.history.getFragment() || '';
							hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
						}
					})
				});
			}
		};
	});
