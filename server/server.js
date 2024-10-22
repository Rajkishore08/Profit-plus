// server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
