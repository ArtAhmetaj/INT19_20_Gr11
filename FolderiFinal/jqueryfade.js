

      function preke() {
            var z = document.getElementById("shfaqe");
            z.style.opacity = "1";
            var y = document.getElementById("fshihe");
            y.style.opacity = "0";

      }

      function preke2() {


            var z = document.getElementById("shfaqe");
            z.style.opacity = "0";
            var y = document.getElementById("fshihe");
            y.style.opacity = "1"
      }




      $(document).ready(function () {
            $("#fshihe").click(function () {
                  $("#LajmiKryesor").hide("slow");


            });
            $("#shfaqe").click(function () {
                  $("#LajmiKryesor").fadeIn("slow");

            });

      });
