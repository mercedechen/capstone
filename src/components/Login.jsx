import { useState } from 'react';
import { useLoginMutation } from '../redux/api';

function Login() {
  const [ userInfo, setUserInfo ] = useState({
    username: "",
    password: ""
  });
  
  const [ login ] = useLoginMutation(userInfo);
  const [ errorMsg, setErrorMsg ] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await login(userInfo);

    if (error) {
      setErrorMsg(error);
    }
  };

  const onUserInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
    </>
  )
}

export default Login;