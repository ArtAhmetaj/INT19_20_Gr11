if(localStorage) {
	$(document).ready(function() {
		$("#save").click(function() {
			// email
			var email = $("#Username").val();
			
			// ruaj email
    		localStorage.setItem("email", email);
			alert("Jeni kycur me sukses. Emaili juaj eshte ruajtur.");
		});
		$("#access").click(function() {
			// kthe email
    		alert("Emaili i ruajtur eshte: " + localStorage.getItem("email"));
		});
	});
} else {
    alert("Browseri juaj nuk e supporton local storage.");
}