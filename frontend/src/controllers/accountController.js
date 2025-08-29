// accountController.js

import { showNotification } from './utilityFunctions.js';

/**
 * Inicializa los eventos de la vista de la cuenta del usuario.
 * Carga el historial de pedidos y gestiona la actualización del perfil.
 */
export async function initAccountEvents() {
    // Carga los pedidos del usuario al iniciar la vista
    await loadUserOrders();

    // Eventos de actualización del perfil
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Lógica para actualizar el perfil
            await updateProfile();
        });
    }

    // Funciones para la gestión de la cuenta
    async function loadUserOrders() {
        try {
            const response = await fetch('http://localhost:3000/orders?user_id=1'); // TODO: Obtener del auth
            const orders = await response.json();
            renderOrderHistory(orders);
        } catch (error) {
            console.error('Error loading orders:', error);
        }
    }
    
    function renderOrderHistory(orders) {
        const container = document.getElementById('orders-history');
        if (!container) return;
    
        container.innerHTML = orders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <h3>Pedido #${order.id}</h3>
                    <span class="order-status status-${order.status}">${order.status}</span>
                </div>
                <div class="order-details">
                    <p>Fecha: ${new Date(order.created_at).toLocaleDateString()}</p>
                    <p>Total: $${order.total_amount}</p>
                </div>
            </div>
        `).join('');
    }

    // Puedes agregar una función para actualizar el perfil aquí, si la necesitas.
    async function updateProfile() {
        // Lógica de actualización de perfil
        showNotification('Perfil actualizado con éxito');
    }
}