// src/views/catalog.js

export function showCatalog() {
  const catalogHTML = `
    <div>
      <h1>Catalogo de Productos</h1>
      <ul>
        <li><a href="#product1">Producto 1</a></li>
        <li><a href="#product2">Producto 2</a></li>
        <li><a href="#product3">Producto 3</a></li>
      </ul>
    </div>
  `;
  document.getElementById('app').innerHTML = catalogHTML;
}
