"use client"
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";

// Items interface remains the same
export interface Items {
  
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: Rating;
  quantity: number;
}

interface Rating {
  rate: number;
  count: number;
}

export interface AddToCartType{
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType {
  cart: AddToCartType[];
  addToCart: (item: AddToCartType) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  clearCart: () => void;
  totalPrice: number;
  discount: number;
  grandTotal: number;
  totalItems: number;

}



// Context Provider
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [cart, setCart] = useState<AddToCartType[]>([]);

  useEffect(() => {
    // Ensure we only run this on the client-side
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error parsing saved cart data:", error);
          // You might want to clear the cart or reset it in case the data is invalid
          localStorage.removeItem("cart");
        }
      }
    }
  }, []);

// Add to Cart
  const addToCart = (itemCart: AddToCartType) => {
    
    // Make sure quantity is a number and not NaN
   const cleanItem = { ...itemCart, quantity: itemCart.quantity || 1  }; // Only store the item properties that are serializable
  
    const newCart = cart.map(item => 
      item.id === cleanItem.id
        ? { ...item, quantity: item.quantity + cleanItem.quantity }
        : item
    );
  
    if (!newCart.find(item => item.id === cleanItem.id)) {
      newCart.push({...cleanItem, quantity: 1 });  // Set initial quantity to 1

    }
  // Update state and save to localStorage
    setCart(newCart);
    saveCart(newCart);
  };
  
  // Save
  const saveCart = (newCartItem: AddToCartType[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCartItem));
    }
  };


  

  // Remove item from cart
  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCart(updatedCart); // Ensure localStorage is updated
  };


  // Increase quantity of an item in the cart
  const increaseQuantity = (id: number) => {
    const updatedCartIncrease = cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCartIncrease);
    saveCart(updatedCartIncrease); // Ensure localStorage is updated
  };


  // Decrease quantity of an item in the cart
  const decreaseQuantity = (id: number) => {
    const updatedCartdecrease = cart.map((cartItem) =>
      cartItem.id === id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCartdecrease);
    saveCart(updatedCartdecrease); // Ensure localStorage is updated
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart"); // Remove cart from localStorage
    }
  };


  
  // Total Price
  const totalPrice = Math.round(cart.reduce((total, item) => total + item.price * item.quantity, 0));

  // dynamically calculate a discount, for example, a 20% discount
  const discountRate = 0.2; // 20% discount
  const discount = Math.round(totalPrice * discountRate);

  // Calculate the final total price after applying the discount and adding the delivery fee
  const deliveryFee = 300;  // Fixed delivery fee
  const grandTotal = Math.round(totalPrice - discount + deliveryFee);

  // Total Items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);




  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalPrice, discount, grandTotal, totalItems }}>
      {children}
    </Context.Provider>
  );
};



// Custom hook to access the cart context
export const useCart = ():CartContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCart must be used within a ContextProvider");
  }
  return context;
};
