function sayHello() {
	console.log("Hello");
}

function callSayHello(callbackFunction) {
	callbackFunction();
}

callSayHello(sayHello);