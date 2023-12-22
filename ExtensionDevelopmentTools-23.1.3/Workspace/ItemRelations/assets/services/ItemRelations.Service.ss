
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.ItemRelations.ItemRelations.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.ItemRelations.ItemRelations.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}