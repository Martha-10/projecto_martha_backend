import { loadDynamicStyle } from "../utils/styleManager.js";   // import function that controls dynamic CSS

export function renderNotFound(prevRoute) {
    document.getElementById('app').innerHTML = `
        <h2>Error 404. Página no encontrada</h2>
        <a href="${prevRoute || '#/login'}" data-link>Volver</a>`;
    
    loadDynamicStyle('./src/styles/nofound.css', 'nofound');
}