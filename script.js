
/* =========================================================
   WISSELMEESTER - WEBSITE JAVASCRIPT
   TEST VERSIE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  // MOBIEL NAVIGATIEMENU

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Menu sluiten" : "Menu openen"
      );

    });

    // Menu sluiten na aanklikken van een navigatielink

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Menu openen");

      });

    });

    // Menu sluiten met Escape

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Menu openen");

      }

    });

  }


  // AUTOMATISCH JAARTAL IN DE FOOTER

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

  }

});
