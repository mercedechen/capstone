// react
import { NavLink, useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCart, resetCart } from "../redux/cart";

// assets
import logo from '../assets/logo.svg';

function Navigation(props){

  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(resetCart());
    navigate("/");
  }

  if(props.token){
    return (
      <nav>
        <div className="logo-box">
          <NavLink to="/" className="logo">
            <img src={logo}/>
          </NavLink>
        </div>
        <NavLink to="/account">
          Account
        </NavLink>
        <a onClick={logoutUser}>
          Logout
        </a>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </nav>
    )
  }

  return (
    <nav>
      <div className="logo-box">
        <NavLink to="/" className="logo">
          <img src={logo}/>
        </NavLink>
      </div>
      <div>
        <NavLink to="/register">
          Register
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation;