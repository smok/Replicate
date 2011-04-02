chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		console.log('Got message ' + request.action);
		if (request.action == "eval") {
			sendResponse({ ret : evaluateCondition(request.condition) });
			return;
		}
		
		if (request.action == "refresh") {
			console.log('Refresh!');
			window.location.reload();
			sendResponse({});
			return;
		}
		
		sendResponse({});
	});
	
function evaluateCondition(cond) {
	try {
		var ret = eval(cond);
		return !!ret;
	} catch(e) {
		console.log(e);
		return false;
	}
}

console.log('Hello!');