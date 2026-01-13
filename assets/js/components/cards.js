/**
 * =============================================
 * Cards Component – WimoPay Zumpango
 * Archivo: assets/js/components/cards.js
 * ---------------------------------------------
 * Responsabilidades:
 * - Animaciones de entrada elegantes (tipo Apple)
 * - IntersectionObserver optimizado
 * - Stagger automático entre tarjetas
 * - Filtro por categoría (sin recargar)
 * =============================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll('.card'));
    const filterButtons = document.querySelectorAll('[data-filter]');

    if (!cards.length) return;

    /* ===============================
       ANIMACIÓN DE ENTRADA
    =============================== */

    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 600ms ease, transform 600ms ease';
      card.dataset.stagger = index * 80;
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const delay = entry.target.dataset.stagger || 0;

          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);

          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach(card => observer.observe(card));

    /* ===============================
       FILTRO POR CATEGORÍA
    =============================== */

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');

        cards.forEach(card => {
          const cardCategory = card.dataset.category;

          const shouldShow = category === 'all' || cardCategory === category;

          card.style.display = shouldShow ? '' : 'none';
        });
      });
    });
  });
})();

