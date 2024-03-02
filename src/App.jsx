// react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// components
import './App.css';
import Navigation from './components/Navigation.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {

  const [ token, setToken ] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>

        <Routes>
          <Route 
            path="/" 
            element={<Products />}
          />
          <Route 
            path="/:id" 
            element={<Product />}
          />
          <Route 
            path="/login"
            element={<Login setToken={setToken} />}
          />
          <Route 
            path="/register" 
            element={<Register setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
