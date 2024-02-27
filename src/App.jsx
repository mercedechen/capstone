import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Products from './components/Products.jsx'
import Register from './components/Register.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
