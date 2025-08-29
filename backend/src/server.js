require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas

const userRoutes = require('./routes/user.routes');
const roleRoutes = require('./routes/role.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');
const orderItemRoutes = require('./routes/orderItem.routes');
const productVariantRoutes = require('./routes/productVariant.routes');
const cartItemRoutes = require('./routes/cartItem.routes');

// Rutas base

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-items', orderItemRoutes);
app.use('/api/product-variants', productVariantRoutes);
app.use('/api/cart-items', cartItemRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
