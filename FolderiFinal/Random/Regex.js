function IRegex() {
  var str = document.getElementById("wood").innerHTML;
  var patt1 = /woodchuck/i;
  var result = str.match(patt1);
  document.getElementById("IRegex").innerHTML = result;

}

function GRegex() {
  var str = document.getElementById("wood").innerHTML;
  var patt1 = /wood/gi;
  var result = str.match(patt1);
  document.getElementById("GRegex").innerHTML = result;
}


function RegexTest() {

  var text = document.getElementById("wood").innerHTML;
  document.getElementById("RegexTest").innerHTML = /e/.test(text);

}


function Gjeje_Syprinen() {


  var rrezja = document.getElementById("circle").getAttribute("r");

  var Syprina =  2 * Math.PI * rrezja;

  alert(Syprina);



}

function Gjeje_Diagonalen()

{
  var  a  =document.getElementById("katrori").getAttribute("width");
  var Diagonalja = a * Math.sqrt(2);

  alert(Diagonalja);
}