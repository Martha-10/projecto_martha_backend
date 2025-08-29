// router.js

/* Importa las funciones de las vistas de tu tienda */
import { showCatalog } from '../views/catalog.js';
import { showProduct } from '../views/product.js';
import { showCart } from '../views/cart.js';
import { showAccount } from '../views/account.js';
import { showLogin } from '../views/login.js';
import { renderNotFound } from '../views/notfound.js';

/* Mapea las rutas con las funciones de las vistas */
const routes = {
    '#/': showCatalog,
    '#/product': showProduct,
    '#/cart': showCart,
    '#/account': showAccount,
    '#/login': showLogin
};

let previousRoute = null;

export function router() {
    const path = location.hash || '#/';

    const view = routes[path];
    if (view) {
        view();
        previousRoute = path;
    } else {
        renderNotFound(previousRoute);
    }
}