// react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// components
import './App.css';
import Navigation from './components/Navigation.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Account from './components/Account.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';

function App() {

  const [ token, setToken ] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Navigation token={token} setToken={setToken}/>

        <Routes>
          <Route 
            path="/register" 
            element={<Register setToken={setToken} />}
          />
          <Route 
            path="/login"
            element={<Login setToken={setToken} />}
          />
          <Route 
            path="/account"
            element={<Account token={token}/>}
          />
          <Route 
            path="/" 
            element={<Products />}
          />
          <Route 
            path="/:id" 
            element={<Product />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
