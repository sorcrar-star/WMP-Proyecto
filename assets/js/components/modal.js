/**
 * =============================================
 * Modal Component – Proyecto WMP
 * Archivo: assets/js/components/modal.js
 * ---------------------------------------------
 * Responsabilidades:
 * - Abrir modal al hacer click en una card
 * - Inyectar información del producto
 * - Cerrar modal (botón, overlay, ESC)
 * =============================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-modal");
    if (!modal) return;

    const closeButtons = modal.querySelectorAll("[data-modal-close]");

    const fields = {
      title: modal.querySelector("[data-modal-title]"),
      price: modal.querySelector("[data-modal-price]"),
      screen: modal.querySelector("[data-modal-screen]"),
      cpu: modal.querySelector("[data-modal-cpu]"),
      ram: modal.querySelector("[data-modal-ram]"),
      rom: modal.querySelector("[data-modal-rom]"),
      battery: modal.querySelector("[data-modal-battery]"),
      cooling: modal.querySelector("[data-modal-cooling]"),
      os: modal.querySelector("[data-modal-os]")
    };

    /* ===============================
       ABRIR MODAL DESDE TARJETA
    =============================== */

    // Abrir modal desde botones "Ver"
    const actionButtons = document.querySelectorAll("[data-js='product-action']");

    actionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        if (!card) return;

        if (fields.title) fields.title.textContent = card.querySelector(".product-card__title")?.textContent || "Producto";
        if (fields.price) fields.price.textContent = card.querySelector(".product-card__price")?.textContent || "";

        if (fields.screen) fields.screen.textContent = card.dataset.screen || "Pantalla de alta calidad";
        if (fields.cpu) fields.cpu.textContent = card.dataset.cpu || "Procesador eficiente";
        if (fields.ram) fields.ram.textContent = card.dataset.ram || "Memoria suficiente para multitarea";
        if (fields.rom) fields.rom.textContent = card.dataset.rom || "Almacenamiento amplio";
        if (fields.battery) fields.battery.textContent = card.dataset.battery || "Batería de larga duración";
        if (fields.cooling) fields.cooling.textContent = card.dataset.cooling || "Sistema térmico optimizado";
        if (fields.os) fields.os.textContent = card.dataset.os || "Sistema operativo moderno";

        openModal();
      });
    });

    /* ===============================
       CERRAR MODAL
    =============================== */

    function openModal() {
      // Fuerza visibilidad del modal (fallback seguro)
      modal.style.display = "block";
      modal.classList.add("is-open", "is-active");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.style.display = "none";
      modal.classList.remove("is-open", "is-active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

    modal.addEventListener("click", (e) => {
      if (e.target.hasAttribute('data-modal-close')) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });
})(); 
