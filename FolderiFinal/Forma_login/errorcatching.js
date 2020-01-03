

function isUsername() {
  var usr = "";
  usr = document.getElementById("username").value;

 console.log(usr);
  try {
    if (/\s/.test(usr)) 
throw  " whitespace;"

}
  catch (err) {
    alert("Username ka " + err);
  }

}
