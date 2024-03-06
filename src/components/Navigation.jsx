// react
import { NavLink, useNavigate } from "react-router-dom";

// assets
import logo from '../assets/logo.svg';

function Navigation(props){

  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  }

  if (props.token) {
    return (
      <div>
        <div className="logo">
          <NavLink to="/">
            <img src={logo}/>
          </NavLink>
        </div>
        <nav>
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
      </div>
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
        <NavLink to="/account">
          Account
        </NavLink>
        <a onClick={logoutUser}>
          Logout
        </a>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation;