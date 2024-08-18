document.getElementById("icon").onclick = function () {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
};

/*product card*/

$(document).ready(function () {
  $(".products-container .product").click(function () {
    let name = $(this).data("name");

    $(".products-preview").css("display", "flex");

    $(".products-preview .preview").removeClass("active");

    $(`.products-preview .preview[data-target='${name}']`).addClass("active");
  });

  $(".products-preview").on("click", ".fa-times", function () {
    $(this).closest(".preview").removeClass("active");
    $(".products-preview").css("display", "none");
  });
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

scrollReveal().reveal(".hero img", {
  ...scrollRevealOption,
  origin: "right",
});
