// DOMContentLoaded event: Yeh ensure karta hai ke JavaScript code tab execute ho jab page puri tarah se load ho chuka ho
document.addEventListener("DOMContentLoaded", function () {
	var form = document.querySelector("[id^='form']");
	if (form) {
	//var cityInput = form.querySelector("[name='RecordId']");
	var cityInput = form.querySelector("[name='40f5e7b7-217d-4b53-84a6-ae7a63729648']");

	if (cityInput != null) {
		var recordId = cityInput.value;
		console.log("RecordId value: ", recordId);
	}

		if (form && cityInput) {
			form.addEventListener("submit", function (event) {
				var city = cityInput.value;
				sessionStorage.setItem("cityValue", city);
			});
		} else {
			console.log("Form or City Input not found");
		}
	}
	});


