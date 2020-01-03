var i = 0;

function numero() {
  i = i + 1;
  postMessage(i);
  setTimeout("numero()",500);
}

numero();