/**
 * =============================================
 * Buttons Component – WimoPay Zumpango
 * Archivo: assets/js/components/buttons.js
 * ---------------------------------------------
 * Responsabilidades:
 * - Feedback visual al interactuar con botones
 * - Estados activos / focus
 * - Preparado para efectos avanzados (ripple, loading)
 * =============================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');

    if (!buttons.length) return;

    buttons.forEach(button => {
      /**
       * Efecto de presión (micro-interacción)
       */
      button.addEventListener('mousedown', () => {
        button.classList.add('is-pressed');
      });

      button.addEventListener('mouseup', () => {
        button.classList.remove('is-pressed');
      });

      button.addEventListener('mouseleave', () => {
        button.classList.remove('is-pressed');
      });

      /**
       * Accesibilidad – teclado
       */
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          button.classList.add('is-pressed');
        }
      });

      button.addEventListener('keyup', () => {
        button.classList.remove('is-pressed');
      });
    });
  });
})();
