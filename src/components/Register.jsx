// react
import { useState } from 'react';

// api
import { useRegisterMutation } from '../redux/api';

function Register(props) {
  // variables
  const [ userInfo, setUserInfo ] = useState({
    name: {
      firstname: "",
      lastname: ""
    },
    email: "",
    username: "",
    password: "",
    // address: {
    //   city: "",
    //   street: "",
    //   number: "",
    //   zipcode: "",
    // },
    // phone: "",
  });
  
  // must match the endpoint name
  const [ register ] = useRegisterMutation(userInfo);
  const [ errorMsg, setErrorMsg ] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await register(userInfo);
    
    if (error) {
      setErrorMsg(error);
    } else {
      props.setToken(data.token)
    }
  };
  
  function onUserInput(e){
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
    // } else if (e.target.name === "number") {
    //   setUserInfo({
    //     ...userInfo,
    //     address: {
    //       ...userInfo.address,
    //       number: e.target.value
    //     }
    //   });
    // } else if (e.target.name === "street") {
    //   setUserInfo({
    //     ...userInfo,
    //     address: {
    //       ...userInfo.address,
    //       street: e.target.value
    //     }
    //   });
    // } else if (e.target.name === "city") {
    //   setUserInfo({
    //     ...userInfo,
    //     address: {
    //       ...userInfo.address,
    //       city: e.target.value
    //     }
    //   });
    // } else if (e.target.name == "zipcode") {
    //   setUserInfo({
    //     ...userInfo,
    //     address: {
    //       ...userInfo.address,
    //       zipcode: e.target.value
    //     }
    //   });
    } else {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      })
    }
  }

  return (
    <>
      <h2>Create an Account</h2>

      {/* check ? true : false */}
      { errorMsg ? <p>Error: {errorMsg}</p> : <span /> }

      <form onSubmit={handleSubmit}>
        <label>First Name
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={userInfo.name.firstname} 
            onChange={onUserInput}
          />
        </label>
        <label>Last Name
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name"
            value={userInfo.name.lastname}
            onChange={onUserInput}
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
          />
        </label>
        <label>Password
          <input 
            type="password" 
            name="password" 
            value={userInfo.password}
            onChange={onUserInput}
            placeholder="Password"
          />
        </label>
        {/* <label>Address
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={userInfo.address.number}
            onChange={onUserInput}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={userInfo.address.street}
            onChange={onUserInput}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={userInfo.address.city}
            onChange={onUserInput}
          />
          <input
            type="number"
            name="zipcode"
            placeholder="Zip Code"
            value={userInfo.address.zipcode}
            onChange={onUserInput}
          />
        </label>
        <label>Phone
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={userInfo.phone}
            onChange={onUserInput}
          />
        </label> */}
        <button>Submit</button>
      </form>
    </>
  )
}

export default Register;