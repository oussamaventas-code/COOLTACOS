import './style.css';
import { PRODUCTOS_CARTA, RAZONES, STATS } from './data/menuData.js';

// RENDER RAZONES
function renderRazones() {
  const container = document.getElementById('razones-grid');
  if (!container) return;

  container.innerHTML = RAZONES.map(razon => `
    <div class="razon-card ct-hard">
      <div class="razon-number">${razon.n}</div>
      <div class="razon-divider"></div>
      <h3 class="razon-title">${razon.title}</h3>
      <p class="razon-text">${razon.text}</p>
    </div>
  `).join('');
}

// RENDER CARTA
function renderCarta() {
  const container = document.getElementById('productos-carta-grid');
  if (!container) return;

  container.innerHTML = PRODUCTOS_CARTA.map(prod => {
    const whatsappUrl = `https://wa.me/34634341293?text=${encodeURIComponent('Hola Cool Tacos, quiero pedir: ' + prod.name)}`;
    const tagHtml = prod.tag
      ? `<span class="product-tag ct-stamp" style="background-color: var(--ct-${prod.tagColor === 'yellow' ? 'yellow' : 'orange'}); color: var(--ct-${prod.tagColor === 'yellow' ? 'black' : 'cream'});">${prod.tag}</span>`
      : '';
    
    const ingredientsHtml = prod.ingredients.map(ing => `
      <span class="ingredient-pill">${ing}</span>
    `).join('');

    return `
      <div class="product-card ct-hard">
        <div class="product-image-wrapper">
          <img src="${prod.img}" alt="${prod.alt}" loading="lazy" />
          ${tagHtml}
        </div>
        <div class="product-body">
          <div class="product-header">
            <h3>${prod.name}</h3>
            <span class="product-price">${prod.price}</span>
          </div>
          <p class="product-desc">${prod.desc}</p>
          <div class="product-ingredients">
            ${ingredientsHtml}
          </div>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="product-cta ct-hard-sm">
            Pedirlo
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// RENDER STATS
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = STATS.map(stat => `
    <div class="stat-item">
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

// MOBILE DRAWER
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuClose = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.drawer-nav-link');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openDrawer);
  menuClose?.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// INITIALIZATION
function init() {
  renderRazones();
  renderCarta();
  renderStats();
  initMobileDrawer();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
