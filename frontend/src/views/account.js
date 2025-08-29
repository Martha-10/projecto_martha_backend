// src/views/account.js

export function showAccount() {
  const accountHTML = `
    <div>
      <h1>Mi Cuenta</h1>
      <p>Nombre: Juan Pérez</p>
      <p>Email: juan@ejemplo.com</p>
      <button>Editar Cuenta</button>
    </div>
  `;
  document.getElementById('app').innerHTML = accountHTML;
}
