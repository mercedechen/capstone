// react
import { NavLink, useNavigate, Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCart, resetCart } from "../redux/cart";

// assets
import logo from '../assets/logo.svg';

// components
import Search from "./Search";

function Navigation(props){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  const logoutUser = () => {
    props.setToken(null);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(resetCart());
    navigate("/");
  }
  
  if(props.token){
    
    return (
      <div>
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
        
        <div className="filters">
          <Link to="/">All</Link>
          <Link to="/mensclothing">Men</Link>
          <Link to="/womensclothing">Women</Link>
          <Link to="/jewelery">Jewelery</Link>
          <Link to="/electronics">Electronics</Link>
        </div>

      </div>
    )
  }

  return (
    <div>
      <nav>
        <div className="logo-box">
          <NavLink to="/" className="logo">
            <img src={logo}/>
          </NavLink>
        </div>
          <NavLink to="/register">
            Register
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
      </nav>

      <div className="filters">
        <Link to="/">All</Link>
        <Link to="/mensclothing">Men</Link>
        <Link to="/womensclothing">Women</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
      </div>
    </div>
  )
}

export default Navigation;