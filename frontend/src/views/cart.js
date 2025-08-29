// src/views/cart.js

export function showCart() {
  const cartHTML = `
    <div>
      <h1>Tu Carrito</h1>
      <ul>
        <li>Producto 1: $10</li>
        <li>Producto 2: $20</li>
      </ul>
      <p>Total: $30</p>
      <button>Realizar Pedido</button>
    </div>
  `;
  document.getElementById('app').innerHTML = cartHTML;
}
