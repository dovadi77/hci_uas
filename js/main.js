$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    if (this.id != "c-next" && this.id != "c-prev") {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    }
  });
});

// Scroll to top button appear
$(document).scroll(function () {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $(".scroll-to-top").fadeIn();
  } else {
    $(".scroll-to-top").fadeOut();
  }
});

$("#poli").change(function (e) {
  e.preventDefault();
  if ($(this).val() != "") {
    $("#dokter").removeAttr("disabled");
  } else {
    $("#dokter").attr("disabled", true);
  }
});

$("#dokter").click(function (e) {
  e.preventDefault();
  if ($("#poli option:selected").attr("value") == "gigi") {
    $("#dokter option[value='dr.']").html("drg. Simon Sin, Sp. Ort");
  } else if ($("#poli option:selected").attr("value") == "umum") {
    $("#dokter option[value='dr.']").html("dr. Reynard Xavi, M. Kes");
  } else if ($("#poli option:selected").attr("value") == "bidan") {
    $("#dokter option[value='dr.']").html("dr. Darmayu Sari");
  } else if ($("#poli option:selected").attr("value") == "fisioterapis") {
    $("#dokter option[value='dr.']").html("dr. Jhonny Dexter, Sp. KFR");
  }
});
