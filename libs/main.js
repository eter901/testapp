$(document).ready(init());

//In this function we initialize the listener for
// deviceready event and in its CallBack we call a
//function named onDeviceReady.
function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("offline", onOffline, false);

}

//If the PhoneGap is loaded, run function onDeviceReady
//and write message â€ťPhoneGap is runningâ€ťâ€ťto the console
//and to the user display
function onDeviceReady() {

	console.log("PhoneGap is running");
	showNativeMessage("PhoneGap is running", false, "Title", "Button Text");
	//checkSettings();
}

//This function is launched by EventListener offline in
//case that a device has no internet connection available
function onOffline() {
	showNativeMessage("Internet connection is unavailable", init,
			"Connection error", "Try again");

}

//Function for displazing the native MessageBox, parameters
//are: message, callback, title, buttonText function
function showNativeMessage(message, callback, title, buttonText) {
	navigator.notification.alert(message, // Zprava
	callback, // callback
	title, // titulek
	buttonText // nazev tlacitka
	);
}