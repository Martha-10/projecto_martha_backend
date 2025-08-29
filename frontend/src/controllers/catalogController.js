// catalogController.js

import { addToCart, showNotification, updateCartCounter } from './utilityFunctions.js';

/**
 * Inicializa los eventos de la vista del catálogo de productos.
 * Controla los filtros y los clics en los botones "Agregar al Carrito".
 */
export async function initCatalogEvents() {
    // Eventos de filtros
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('change', async (e) => {
            await filterProducts();
        });
    }

    // Eventos para agregar al carrito
    document.addEventListener('click', async (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.productId;
            const variantId = e.target.dataset.variantId;
            await addToCart(productId, variantId);
        }
    });

    // Función para filtrar productos
    async function filterProducts() {
        const sizeFilter = document.getElementById('size-filter').value;
        const colorFilter = document.getElementById('color-filter').value;
        const priceFilter = document.getElementById('price-filter').value;
    
        try {
            let url = 'http://localhost:3000/products';
            const params = new URLSearchParams();
    
            if (sizeFilter) params.append('size', sizeFilter);
            if (colorFilter) params.append('color', colorFilter);
            if (priceFilter) params.append('maxPrice', priceFilter);
    
            if (params.toString()) {
                url += '?' + params.toString();
            }
    
            const response = await fetch(url);
            const products = await response.json();
    
            renderProductGrid(products);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    }

    // Función para renderizar la cuadrícula de productos
    function renderProductGrid(products) {
        const grid = document.getElementById('products-grid');
        if (!grid) return;
    
        grid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="/images/products/${product.id}.jpg" alt="${product.name}" onerror="this.src='/images/placeholder.jpg'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price}</div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `).join('');
    }
}