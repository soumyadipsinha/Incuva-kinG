import { Router } from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  checkout,
  getOrders
} from '../controller/cartController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = Router();

// All cart routes require authentication
router.use(authenticateUser);

// Cart operations
router.get('/', getCart);
router.post('/', addToCart);
router.put('/:cartItemId', updateCartItem);
router.delete('/:cartItemId', removeFromCart);
router.delete('/', clearCart);

// Checkout and orders
router.post('/checkout', checkout);
router.get('/orders', getOrders);

export default router;

