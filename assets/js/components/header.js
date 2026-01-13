/**
 * =============================================
 * Header Component – WimoPay Zumpango
 * Archivo: assets/js/components/header.js
 * ---------------------------------------------
 * Responsabilidades:
 * - Comportamiento del header
 * - Estados al hacer scroll
 * - Preparado para menú responsive
 * =============================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    if (!header) return;

    let lastScrollY = window.scrollY;

    /**
     * Header dinámico al hacer scroll
     * - Agrega clase al bajar
     * - La remueve al volver arriba
     */
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  });
})();
