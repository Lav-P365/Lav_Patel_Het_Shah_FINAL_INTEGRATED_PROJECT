document.addEventListener("DOMContentLoaded", () => {
  // Toggle Menu Visibility
  document.getElementById("icon").onclick = toggleMenu;

  // Product Card Functionality
  initProductCards();
});

// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Initialize product card functionality
function initProductCards() {
  const productElements = document.querySelectorAll(
    ".products-container .product"
  );

  productElements.forEach((product) => {
    product.addEventListener("click", handleProductClick);
  });

  document.querySelector(".products-preview").addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-times")) {
      closeProductPreview(e.target.closest(".preview"));
    }
  });
}

// Handle product click to show the corresponding preview
function handleProductClick() {
  const name = this.getAttribute("data-name");
  const productsPreview = document.querySelector(".products-preview");

  productsPreview.style.display = "flex";

  document.querySelectorAll(".products-preview .preview").forEach((preview) => {
    preview.classList.remove("active");
  });

  document
    .querySelector(`.products-preview .preview[data-target='${name}']`)
    .classList.add("active");
}

// Close the product preview
function closeProductPreview(previewElement) {
  previewElement.classList.remove("active");
  const productsPreview = document.querySelector(".products-preview");

  if (
    document.querySelectorAll(".products-preview .preview.active").length === 0
  ) {
    productsPreview.style.display = "none";
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $("#backToTop").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 200, "swing");
    return false;
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(".contact-form, .contact-info").each(function () {
      var elementTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("animate");
      }
    });
  });

  $(window).trigger("scroll");
});
