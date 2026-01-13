/**
 * =============================================
 * Hero Component – WimoPay Zumpango
 * Archivo: assets/js/components/hero.js
 * ---------------------------------------------
 * Responsabilidades:
 * - Animaciones suaves de entrada
 * - Preparado para sliders, carruseles o CTA dinámicos
 * - Sin tocar estructura HTML ni estilos base
 * =============================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    const heroCard = hero.querySelector('.hero__card');
    const heroFeatures = hero.querySelectorAll('.feature-card');

    /**
     * Animación inicial del Hero
     * Se basa únicamente en clases CSS
     */
    const animateHero = () => {
      hero.classList.add('hero--ready');

      if (heroCard) {
        heroCard.classList.add('is-visible');
      }

      heroFeatures.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('is-visible');
        }, 120 * (index + 1));
      });
    };

    // Ejecutar animación
    requestAnimationFrame(animateHero);
  });
})();
