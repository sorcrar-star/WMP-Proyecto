/**
 * =====================================================
 * main.js
 * Punto de entrada principal de la aplicación
 * Proyecto: WimoPay Zumpango
 * =====================================================
 */

'use strict';

// =====================================================
// Imports (cuando el proyecto escale)
// =====================================================
// import { initHeader } from './components/header.js';
// import { initHero } from './components/hero.js';
import './components/modal.js';
import './components/cards.js';

// =====================================================
// DOM Ready Helper
// =====================================================
const onDOMReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

// =====================================================
// Inicialización principal
// =====================================================
onDOMReady(() => {
  console.info('[WimoPay] Aplicación inicializada');

  // Inicializar componentes (cuando existan)
  // initHeader();
  // initHero();

  // Hooks futuros
  // setupAnimations();
  // setupEvents();
});

// =====================================================
// Eventos globales (opcional)
// =====================================================
window.addEventListener('resize', () => {
  // Preparado para lógica responsive futura
});


