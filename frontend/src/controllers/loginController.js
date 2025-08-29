// src/controllers/loginController.js

export function showLogin() {
  const loginHTML = `
    <div>
      <h1>Iniciar Sesión</h1>
      <form id="loginForm">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>No tienes cuenta? <a href="#register">Regístrate</a></p>
    </div>
  `;
  document.getElementById('app').innerHTML = loginHTML;

  // Llamar a la función de manejar el inicio de sesión cuando se envíe el formulario
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
}

async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Llamada al backend para autenticar al usuario
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    alert('Inicio de sesión exitoso');
    // Redirigir o hacer algo después de un login exitoso
    window.location.hash = '#account';  // Redirige a la cuenta del usuario
  } else {
    alert('Error: ' + data.message);  // Mostrar mensaje de error
  }
}
