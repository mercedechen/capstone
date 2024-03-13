// React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { useLoginMutation } from '../redux/api';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/cart';

function Login(props) {
  
  const [ login ] = useLoginMutation(props.userInfo);
  const navigate = useNavigate();
  const [ errorMsg, setErrorMsg ] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await login(props.userInfo);

    if (error) {
      setErrorMsg(error.data);
    } else {
      props.setToken(data.token);

      const existingCart = JSON.parse(localStorage.getItem("cart"));

      if (existingCart) {
        dispatch(setCart(existingCart))
      }
      
      navigate("/account");
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setErrorMsg(null);
    } else {
      props.setUserInfo({
        ...props.userInfo,
        [e.target.name]: e.target.value,
      });
    };
  };

  return (
    <div className="login">
      <h2>Returning User</h2>

      { errorMsg ? <p>Error: {errorMsg}</p> : <span /> }

      <form onSubmit={handleSubmit}>
        <label>Username
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={props.userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label>Password
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={props.userInfo.password}
            onChange={onUserInput}
          />
        </label>
        
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;