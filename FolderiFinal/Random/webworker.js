var r;

function lshoje() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(r) == "undefined") {
      r = new Worker("workers.js");
    }
    r.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Browseri juaj nuk i supporton workers.";
  }
}

function nale() { 
  r.terminate();
  r = undefined;
}