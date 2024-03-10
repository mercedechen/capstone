import { useState } from 'react';
import { useLoginMutation } from '../redux/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/cart';

function Login(props) {
  const [ userInfo, setUserInfo ] = useState({
    username: "",
    password: ""
  });
  
  const [ login ] = useLoginMutation(userInfo);
  const navigate = useNavigate();
  const [ errorMsg, setErrorMsg ] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await login(userInfo);

    if (error) {
      setErrorMsg(error.data);
    } else {
      props.setToken(data.token);
      const existingCart = JSON.parse(localStorage.getItem("cart"));
      console.log('existing cart', existingCart);
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
      setUserInfo({
        ...userInfo,
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
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label>Password
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={onUserInput}
          />
        </label>
        
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;