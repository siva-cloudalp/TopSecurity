
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.AdvancedIntermediaryScreen.AdvancedIntermediaryScreen.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}