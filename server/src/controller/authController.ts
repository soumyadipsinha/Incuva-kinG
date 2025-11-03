import { Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import prisma from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '7d') as string;

// Signup
export const signup = async (req: AuthRequest, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await (prisma as any).user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await (prisma as any).user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        createdAt: true
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id }, 
      JWT_SECRET, 
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
    );

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      message: 'User created successfully',
      user,
      token
    });
  } catch (error: any) {
    console.error('Signup error:', error);
    
    // Handle Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    
    if (error.message?.includes('connect') || error.message?.includes('connection')) {
      return res.status(500).json({ error: 'Database connection error. Please try again later.' });
    }
    
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

// Login
export const login = async (req: AuthRequest, res: Response) => {
  try {
    const { email, phone, password } = req.body;

    // Validation - either email or phone is required
    if (!password || (!email && !phone)) {
      return res.status(400).json({ error: 'Email/Phone and password are required' });
    }

    // Find user by email or phone
    let whereClause: any = {};
    
    if (email && phone) {
      whereClause = {
        OR: [
          { email },
          { phone }
        ]
      };
    } else if (email) {
      whereClause = { email };
    } else if (phone) {
      whereClause = { phone };
    }
    
    const user = await (prisma as any).user.findFirst({
      where: whereClause
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id }, 
      JWT_SECRET, 
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
    );

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      },
      token
    });
  } catch (error: any) {
    console.error('Login error:', error);
    console.error('Error stack:', error.stack);
    console.error('Error code:', error.code);
    
    // Handle Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Handle database connection errors
    if (error.message?.includes('connect') || error.message?.includes('connection') || error.code === 'P1001') {
      return res.status(500).json({ error: 'Database connection error. Please check your database connection.' });
    }
    
    // Handle Prisma client not generated error
    if (error.message?.includes('undefined') || error.message?.includes('null') || error.code === 'P1003') {
      console.error('CRITICAL: Prisma client may not be generated. Run: npx prisma generate');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.',
        details: process.env.NODE_ENV === 'development' ? 'Prisma client needs to be generated' : undefined
      });
    }
    
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? `${error.message || 'Unknown error'} (Code: ${error.code || 'N/A'})` : undefined 
    });
  }
};

// Logout
export const logout = (req: AuthRequest, res: Response) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
};

// Get current user profile
export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await (prisma as any).user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error: any) {
    console.error('Get profile error:', error);
    
    // Handle database connection errors
    if (error.message?.includes('connect') || error.message?.includes('connection')) {
      return res.status(500).json({ error: 'Database connection error. Please try again later.' });
    }
    
    res.status(500).json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

