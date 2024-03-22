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
import FilterByM from './components/FilterByM.jsx';
import FilterByF from './components/FilterByF.jsx';
import FilterByJewelery from './components/FilterByJewelery.jsx';
import FilterByElectronics from './components/FilterByElectronics.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';

function App() {
  
  // These can be passed down to specific components.
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
            element={<Register setToken={setToken}/>}
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
            element={<Products/>}
          />

          <Route 
            path="/:id" 
            element={<Product 
              token={token}
            />}
          />

        {/* Filters */}
          <Route
            path="/mensclothing"
            element={<FilterByM/>}
          />

          <Route
            path="/womensclothing"
            element={<FilterByF/>}
          />

          <Route
            path="/jewelery"
            element={<FilterByJewelery/>}
          />

          <Route
            path="/electronics"
            element={<FilterByElectronics/>}
          />
        {/* End of Filters */}

          <Route
            path="/cart"
            element={<Cart 
              token={token}
            />}
          />

          <Route
            path="/cart/checkout"
            element={<Checkout 
              token={token}
            />}
          />

      {/* Footer */}
          <Route 
            path="/about"
            element={<About/>}
          />
        </Routes>

        <Footer/>
      {/* End of Footer */}
      </BrowserRouter>
    </div>
  )
}

export default App;
