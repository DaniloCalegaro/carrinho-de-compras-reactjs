import { error } from 'console';
import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    //const storagedCart = localStorage.getItem('@RocketShoes:cart')
    const storagedCart= ''

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const existsInCard = cart.find(product => product.id === productId)

      if(existsInCard) {
        const responseProductStock = await api.get(`/stock/${productId}`)
        const amountStockProduct = responseProductStock.data.amount
        
        
        const newCart = cart.map(product => {
          let productQuantity = {...product, amount: product.amount}
          if(product.id === productId) {
            if(product.amount < amountStockProduct){
              productQuantity = {...product, amount: product.amount + 1}
            } else {
              throw new Error('Quantidade solicitada fora de estoque')
            }
          } 
          return productQuantity
        })

        setCart(newCart)
      } else {
        const response = await api.get(`/products/${productId}`)
        const newProductCart = {...response.data, amount: 1}
        setCart([...cart, newProductCart])
      }

    } catch(e) {
      const result = (e as Error).message;
      toast.error(result);
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
