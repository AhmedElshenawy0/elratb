import React, { createContext, useState, useEffect } from "react";

export type CartItem = {
  orderId: string;
  title: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedExtras: string[];
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: any }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("shoppingCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
