/**
 * =====================================================
 * utils.js
 * Funciones utilitarias reutilizables en todo el proyecto
 * =====================================================
 */

/**
 * Selector corto
 * @param {string} selector
 * @param {HTMLElement} scope
 */
export const qs = (selector, scope = document) => scope.querySelector(selector);

/**
 * Selector múltiple corto
 * @param {string} selector
 * @param {HTMLElement} scope
 */
export const qsa = (selector, scope = document) => scope.querySelectorAll(selector);

/**
 * Ejecutar cuando el DOM esté listo
 * @param {Function} callback
 */
export const onReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

/**
 * Debounce: limita ejecuciones excesivas
 * @param {Function} fn
 * @param {number} delay
 */
export const debounce = (fn, delay = 150) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(null, args), delay);
  };
};

/**
 * Throttle: ejecuta a intervalos fijos
 * @param {Function} fn
 * @param {number} limit
 */
export const throttle = (fn, limit = 200) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Detecta si un elemento está en viewport
 * @param {HTMLElement} el
 */
export const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};
