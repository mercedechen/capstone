// react
import { useState } from 'react';

// api
import { useRegisterMutation } from '../redux/api';

// Registering will return successful 200 status but nothing will be inserted into the database. Accessing the new id will return 404 error.
function Register(props) {

  // Database structure of adding new user contains email, username, password, name (first and last), address (city, street, number, zipcode, geolocation), phone. Some data will be "" because the register form created on the mock ecommerce site does not request for this info.
  const [ userInfo, setUserInfo ] = useState({
    name: {
      firstname: "",
      lastname: ""
    },
    email: "",
    username: "",
    password: "",
  });
  
  // "register" must match the endpoint name from redux
  const [ register ] = useRegisterMutation(userInfo);
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ success, setSuccess ] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await register(userInfo);
    
    if (error) {
      setErrorMsg(error);
    } else {
      props.setToken(data.token)
      setSuccess('Thank you for signing up! Please proceed to log in.')
    }
  };
  
  const onUserInput = (e) => {
    if (errorMsg) {
      setErrorMsg(null);
    } else if (e.target.name === "firstname"){
      setUserInfo({
        ...userInfo,
        name: {
          ...userInfo.name,
          firstname: e.target.value
        }
      });
    } else if (e.target.name === "lastname"){
      setUserInfo({
        ...userInfo,
        name: {
          ...userInfo.name,
          lastname: e.target.value
        }
      });
    } else {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      })
    }
  }

  return (
    <div className="registration">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={userInfo.name.firstname} 
            onChange={onUserInput}
            required
          />
        </label>
        <label>Last Name
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name"
            value={userInfo.name.lastname}
            onChange={onUserInput}
            required
          />
        </label>
        <label>Email
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>
        <label>Username
          <input 
            type="text" 
            name="username" 
            value={userInfo.username}
            onChange={onUserInput}
            placeholder="Username"
            required
          />
        </label>
        <label>Password
          <input 
            type="password" 
            name="password" 
            value={userInfo.password}
            onChange={onUserInput}
            placeholder="Password"
            required
          />
        </label>

        <button>Sign Up</button>
      </form>

      <div className="response">
        {/* check ? true : false */}
        { errorMsg ? <p>Oops! Unable to create an account right now. Please try again later. {errorMsg}</p> : <span /> }

        {success ? <p>{success}</p> : <span />}
      </div>
    </div>
  )
}

export default Register;