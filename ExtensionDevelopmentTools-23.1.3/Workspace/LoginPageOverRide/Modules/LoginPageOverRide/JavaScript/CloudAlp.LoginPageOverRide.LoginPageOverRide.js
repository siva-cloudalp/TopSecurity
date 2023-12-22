
define(
	'CloudAlp.LoginPageOverRide.LoginPageOverRide'
	, [
		"LoginRegister.Login.View"
		, "underscore"
	]
	, function (
		LoginView
		, _
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				/**
				 * changed the link from the register page to the lead page,
				 * and in the error message when entering invalid login information
				 * change link in customize text for error messages
				 */

				/** @type {LayoutComponent} */
				var Checkout = container.getComponent('Checkout');



			}
		};
	});
