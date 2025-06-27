const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Import routes
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API Routes
app.use('/api/products', productRoutes);

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ShopSmart API is running on http://localhost:${PORT}`);
});
