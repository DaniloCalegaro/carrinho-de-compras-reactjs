import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  //console.log(cart)

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  const testeCart = {
    1: 4,
	  2: 3,
  }
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(testeCart))

  useEffect(() => {
    async function loadProducts() {
      api.get('/products')
      .then(response => setProducts(formatProduct(response.data)))
    }
    loadProducts();
  }, []);
  
  function formatProduct(products: ProductFormatted[]){
    const productsFormated = products.map(product => {
      product.priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price);
      return product
    }) 
    return productsFormated
  }

  function handleAddProduct(id: number) {
    // TODO
  }

  return (
    
    <ProductList>

      {products.map(product => {
        return (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            data-testid="add-product-button"
          // onClick={() => handleAddProduct(product.id)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
              {/* {cartItemsAmount[product.id] || 0} */} 2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        )
      }
      )}
      
    </ProductList>
  );
};

export default Home;
