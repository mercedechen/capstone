import { useState } from 'react';

function Register() {

  const [userInfo, setUserInfo] = useState({
    name: {
      firstname: "",
      lastname: ""
    },
    email: "",
    username: "",
    password: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    phone: "",
  });
  console.log("userinfo", userInfo)

  function handleSubmit(event){
    event.preventDefault();
  };

  function onUserInput(e){
    if (e.target.name === "firstname"){
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
      })

    } else if (e.target.name === "number") {
      setUserInfo({
        ...userInfo,
        address: {
          ...userInfo.address,
          number: e.target.value
        }
      })

    } else if (e.target.name === "street") {
      setUserInfo({
        ...userInfo,
        address: {
          ...userInfo.address,
          street: e.target.value
        }
      })

    } else if (e.target.name === "city") {
      setUserInfo({
        ...userInfo,
        address: {
          ...userInfo.address,
          city: e.target.value
        }
      })

    } else if (e.target.name == "zipcode") {
      setUserInfo({
        ...userInfo,
        address: {
          ...userInfo.address,
          zipcode: e.target.value
        }
      })

    } else {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <>
      <h2>Create an Account</h2>

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

        <label>Address
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
        </label>

        <button>Submit</button>
      </form>
    </>
  )
}

export default Register;