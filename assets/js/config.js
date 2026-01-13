/**
 * ======================================================
 * config.js
 * Configuración global del proyecto WimoPay Zumpango
 * ------------------------------------------------------
 * Este archivo contiene constantes, flags y valores
 * compartidos por todo el sistema JavaScript.
 * NO debe contener lógica de negocio.
 * ======================================================
 */

/* ================= BREAKPOINTS ================= */
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

/* ================= SELECTORES data-js ================= */
export const SELECTORS = {
  header: '[data-js="header"]',
  nav: '[data-js="nav"]',
  navList: '[data-js="nav-list"]',
  hero: '[data-js="hero"]',
  ctaCatalogo: '[data-js="cta-catalogo"]',
  ctaCredito: '[data-js="cta-credito"]',
};

/* ================= FLAGS GLOBALES ================= */
export const FLAGS = {
  enableAnimations: true,
  enableStickyHeader: true,
  enableMobileMenu: true,
};

/* ================= TIEMPOS (ms) ================= */
export const TIMING = {
  animationFast: 150,
  animationNormal: 300,
  animationSlow: 600,
};

/* ================= MENSAJES ================= */
export const MESSAGES = {
  genericError: 'Ocurrió un error. Intenta nuevamente.',
};