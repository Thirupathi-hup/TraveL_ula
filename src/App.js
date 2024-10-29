import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import FullCart from './components/FullCart/FullCart';
function App() {
  let [cart, setCart] = useState({});

  function addToCart(product) {
    const newCart = { ...cart }; // copy of state
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);

    console.log(product);
  }

  function removeFromCart(product) {
    console.log(product);
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      <div className="App">
        <FullCart />
        <Products />

      </div>
    </CartContext.Provider>
  );
}

export default App;


// ProductCard()

// cart = {1:{id: 1, title: x, quantity: 2}, 
//  2: { id: 2, title: x1, quantity: 1 }, 
//  3: { id: 3, title: x2, quantity: 3 }, 
//  4: { id: 4, title: x3, quantity: 4 }
//}
// product = { id: 2, title: x1, quantity: 1 }
// cart[product.id]