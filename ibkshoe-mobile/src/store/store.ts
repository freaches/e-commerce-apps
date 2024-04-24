import { create } from "zustand";
import products from "../mocks/product";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  quantity?: number;
}

// Definisikan tipe data untuk state aplikasi
interface ECommerceState {
  products: Product[];
  cart: number[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  getTotalPrice: () => number;
}

export const useECommerceStore: any = create<ECommerceState>((set) => ({
  products,

  cart: [],

  addToCart: (productId) =>
    set((state) => ({
      cart: [...state.cart, productId],
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((id) => id !== productId),
    })),

  getTotalPrice: () =>
    useECommerceStore
      .getState()
      .cart.reduce((total: number, productId: number) => {
        const product = useECommerceStore
          .getState()
          .products.find((p: any) => p.id === productId);
        return total + (product ? product.price : 0);
      }, 0),
}));
