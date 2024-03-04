import { NavLink, useNavigate } from "react-router-dom";

function Navigation(props){

  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  }

  if (props.token) {
    return (
      <nav>
        <NavLink to="/">SHOP</NavLink>
        <NavLink to="/account">Account</NavLink>
        <a onClick={logoutUser}>Logout</a>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    )
  }

  return (
    <nav>
      <NavLink to="/">SHOP</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  )
}

export default Navigation;