// src/views/product.js

export function showProduct(productId) {
  const productHTML = `
    <div>
      <h1>Detalles del Producto ${productId}</h1>
      <p>Descripción del producto ${productId}</p>
      <button>Agregar al carrito</button>
    </div>
  `;
  document.getElementById('app').innerHTML = productHTML;
}
