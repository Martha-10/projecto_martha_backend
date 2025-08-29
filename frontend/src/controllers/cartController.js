// cartController.js

import { getCartItems, loadCartItems, showNotification, updateCartCounter } from './utilityFunctions.js';

/**
 * Inicializa los eventos de la vista del carrito de compras.
 * Controla la actualización de cantidades, la eliminación de artículos y el proceso de checkout.
 */
export async function initCartEvents() {
    // Eventos para el manejo del carrito (aumentar/disminuir, eliminar)
    document.addEventListener('click', async (e) => {
        if (e.target.classList.contains('qty-increase')) {
            const itemId = e.target.dataset.itemId;
            await updateCartItemQuantity(itemId, 1);
        }
    
        if (e.target.classList.contains('qty-decrease')) {
            const itemId = e.target.dataset.itemId;
            await updateCartItemQuantity(itemId, -1);
        }
    
        if (e.target.classList.contains('remove-item')) {
            const itemId = e.target.dataset.itemId;
            await removeCartItem(itemId);
        }
    });

    // Evento de checkout
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async () => {
            await processCheckout();
        });
    }

    // Funciones para la gestión del carrito
    async function updateCartItemQuantity(itemId, change) {
        try {
            const response = await fetch(`http://localhost:3000/cart-items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity_change: change
                })
            });
    
            if (response.ok) {
                await loadCartItems();
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    }
    
    async function removeCartItem(itemId) {
        try {
            const response = await fetch(`http://localhost:3000/cart-items/${itemId}`, {
                method: 'DELETE'
            });
    
            if (response.ok) {
                await loadCartItems();
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }
    
    async function processCheckout() {
        try {
            const cartItems = await getCartItems();
            const total = calculateTotal(cartItems);
    
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: 1, // TODO: Get from auth
                    total_amount: total,
                    status: 'pending'
                })
            });
    
            if (response.ok) {
                const order = await response.json();
                await clearCart(); // Función por implementar
                showNotification('Pedido realizado con éxito');
                location.hash = '#/account';
            }
        } catch (error) {
            console.error('Error processing checkout:', error);
        }
    }
}