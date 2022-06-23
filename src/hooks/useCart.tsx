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
      // const existsInCard = cart.some(product => {
      //   return product.id === productId
      // })

      const existsInCard = cart.find(product => product.id === productId)

      if(existsInCard) {
        // const newCart = cart.map(product => {
        //   product.amount = product.id === productId ? product.amount + 1 : product.amount
        //   return cart
        // })
        
        //console.log(newCart)
      } else {
        const response = await api.get(`/products/${productId}`)
        const newProductCart = {...response.data, amount: 1}
        setCart([...cart, newProductCart])
        //console.log(newProductCart)
      }
      //console.log(newCard)


      //const newProductCart = {...response.data, amount: 1}
      //setCart([...cart, newProductCart])
    } catch {
      toast.error('Quantidade solicitada fora de estoque');
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
