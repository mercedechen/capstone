// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import './App.css';
import Navigation from './components/Navigation.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Account from './components/Account.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';


function App() {
  
  // The following can be passed down to specific components.
  const [ token, setToken ] = useState(null);
  // Username will be passed down to Login and Account components.
  const [ userInfo, setUserInfo ] = useState({
    username: "",
    password: ""
  });

  return (
    <div>
      <BrowserRouter>
        <Navigation 
          token={token} 
          setToken={setToken}
        />

        <Routes>
          <Route 
            path="/register" 
            element={<Register 
              setToken={setToken} 
            />}
          />

          <Route 
            path="/login"
            element={<Login 
              setToken={setToken} 
              userInfo={userInfo} 
              setUserInfo={setUserInfo} 
            />}
          />

          <Route 
            path="/account"
            element={<Account 
              token={token} 
              userInfo={userInfo}
            />}
          />

          <Route 
            path="/" 
            element={<Products />}
          />

          <Route 
            path="/:id" 
            element={<Product 
              token={token}
            />}
          />

          <Route
            path="/cart"
            element={<Cart 
              token={token}
            />}
          />

          <Route
            path="/checkout"
            element={<Checkout 
              token={token}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
