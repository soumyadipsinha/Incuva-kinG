import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './route/authRoutes.js';
import cartRoutes from './route/cartRoutes.js';

const app = express();

const PORT = process.env.PORT || 5000;

//Allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins, 
    credentials: true
}));

// Routes
app.get("/", (req, res) => {
  res.send("Hello TypeScript + Express!");
});

// Test Prisma connection
app.get("/api/test-db", async (req, res) => {
  try {
    const prisma = (await import('./config/prisma.js')).default;
    // Try to access the user model
    const userCount = await (prisma as any).user.count().catch(() => null);
    res.json({ 
      status: 'ok', 
      prismaWorking: userCount !== null,
      userCount: userCount || 'N/A',
      message: userCount !== null ? 'Database connected' : 'Database connection issue'
    });
  } catch (error: any) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Auth routes
app.use("/api/auth", authRoutes);

// Cart routes
app.use("/api/cart", cartRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test database connection: http://localhost:${PORT}/api/test-db`);
});