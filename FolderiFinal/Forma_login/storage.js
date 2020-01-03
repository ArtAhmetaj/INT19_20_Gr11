if(localStorage) {
	$(document).ready(function() {
		$(".save").click(function() {
			// Get input name
			var firstName = $("#username").val();
			
			// Store data
    		localStorage.setItem("first_name", firstName);
			alert("Your first name is saved.");
		});
		$(".access").click(function() {
			// Retrieve data
    		alert("Hi, " + localStorage.getItem("first_name"));
		});
	});
} else {
    alert("Sorry, your browser do not support local storage.");
}