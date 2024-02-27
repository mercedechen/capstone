import { NavLink } from "react-router-dom"

function Navigation(){
  return (
    <>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  )
}

export default Navigation