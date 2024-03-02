import { NavLink } from "react-router-dom";

function Navigation(){

  return (
    <div>
      <div>
        <NavLink to="/">SHOP</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  )
}

export default Navigation;