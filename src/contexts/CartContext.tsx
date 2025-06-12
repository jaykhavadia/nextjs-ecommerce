'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '@/types/product';
import { fetcher } from '@/utils/fetcher';

export type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children, initialCart }: { children: ReactNode; initialCart?: CartItem[] }) => {
  const [cart, setCart] = useState<CartItem[]>(initialCart || []);
  console.log("🚀 ~ CartProvider ~ initialCart:", initialCart)

  // Fetch cart data from API on mount if no initialCart provided
  useEffect(() => {
    if (!initialCart) {
      console.log("🚀 ~ useEffect ~ initialCart:", initialCart)
      const fetchCart = async () => {
        try {
          console.log('Fetching cart data from API...');
          const data = await fetcher.get<CartItem[]>('/cart');
          setCart(data);
        } catch (error) {
          console.error('Failed to fetch cart:', error);
        }
      };
      fetchCart();
    }
  }, [initialCart]);

  const addToCart = async (productId: string, quantity: number) => {
    try {
      await fetcher.post('/cart', { productId, quantity });
      // Refresh cart after adding
      const data = await fetcher.get<CartItem[]>('/cart');
      setCart(data);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      // Assuming DELETE /cart/:productId endpoint exists
      await fetcher.delete(`/cart/${productId}`);
      const data = await fetcher.get<CartItem[]>('/cart');
      setCart(data);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      // Assuming PUT /cart endpoint to update quantity
      await fetcher.put('/cart', { productId, quantity });
      const data = await fetcher.get<CartItem[]>('/cart');
      setCart(data);
    } catch (error) {
      console.error('Failed to update cart quantity:', error);
    }
  };

  const clearCart = async () => {
    try {
      // Assuming DELETE /cart endpoint to clear cart
      await fetcher.delete('/cart');
      setCart([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
    
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
