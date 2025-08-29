-- ========================================
-- 1. INSERT ROLES
-- ========================================
INSERT INTO roles (name) VALUES
('Admin'),
('Customer');

-- ========================================
-- 2. INSERT USERS
-- ========================================
INSERT INTO users (name, email, password) VALUES
('Ana López', 'ana@example.com', 'hashedpassword123'),
('María Gómez', 'maria@example.com', 'hashedpassword123'),
('Laura Pérez', 'laura@example.com', 'hashedpassword123'),
('Carolina Torres', 'carolina@example.com', 'hashedpassword123');

-- ========================================
-- 3. INSERT PRODUCTS
-- ========================================
INSERT INTO products (name, description, price, stock) VALUES
('Vestido Floral Plus Size', 'Vestido largo de flores, ideal para eventos casuales y elegantes.', 89.99, 20),
('Jeans Plus Size Ajuste Perfecto', 'Jeans de tiro alto diseñados para comodidad y estilo.', 59.99, 30),
('Blusa Elegante Plus Size', 'Blusa fresca y elegante, perfecta para oficina o salida casual.', 39.99, 25),
('Falda Midi Plus Size', 'Falda
