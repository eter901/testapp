$(document).ready(init());

function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("offline", onOffline, false);
}

//funkce po DEVICE READY
function onDeviceReady() {
	//funkce overeni iOS7
	if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
	console.log("PhoneGap is running");
	showNativeMessage("PhoneGap is running", false, "Title", "Button Text");
	
}

//funkce na overeni offline modu
function onOffline() {
	showNativeMessage("Internet je nedostupný", init,
			"Connection error", "Try again");
}

//funkce pro zobrazeni nativni notifikace allert
function showNativeMessage(message, callback, title, buttonText) {
	navigator.notification.alert(
	message, // Zprava
	callback, // callback
	title, // titulek
	buttonText // nazev tlacitka
	);
}