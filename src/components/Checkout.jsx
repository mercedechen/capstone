import { useState } from "react";

function Checkout () {

  const dummyBill = {
    name: {
      firstname: "Chum",
      lastname: "Lee"
    },
    cardnumber: 1234567890,
  }

  console.log('dummydata', dummyBill);

  const [ billingInfo, setBillingInfo ] = useState({
    name: {
      firstname: "",
      lastname: ""
    },
    cardnumber: "",
  });

  const [ shippingInfo, setShippingInfo ] = useState ({
    address: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
  });
  console.log('billInfo', billingInfo);
  console.log('shippingInfo', shippingInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const onUserInput = (e) => {
    if (e.target.name === "firstname"){
      setBillingInfo({
        ...billingInfo,
        name: {
          ...billingInfo.name,
          firstname: e.target.value
        }
      });
    } else if (e.target.name === "lastname"){
      setBillingInfo({
        ...billingInfo,
        name: {
          ...billingInfo.name,
          lastname: e.target.value
        }
      });
    } else if (e.target.name === "street"){
      setShippingInfo({
        ...shippingInfo,
        address: {
          ...shippingInfo.address,
          street: e.target.value
        }
      });
    } else if (e.target.name === "city"){
      setShippingInfo({
        ...shippingInfo,
        address: {
          ...shippingInfo.address,
          city: e.target.value
        }
      });
    } else if (e.target.name === "state"){
      setShippingInfo({
        ...shippingInfo,
        address: {
          ...shippingInfo.address,
          state: e.target.value
        }
      });
    } else if (e.target.name === "zipcode"){
      setShippingInfo({
        ...shippingInfo,
        address: {
          ...shippingInfo.address,
          zipcode: e.target.value
        }
      });
    } else {
      setBillingInfo({
        ...billingInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
      <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name
            <input 
              type="text"
              name="firstname"
              placeholder="First Name"
              value={billingInfo.name.firstname}
              onChange={onUserInput}
              required
            />
          </label>
          <label>Last Name
            <input 
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={billingInfo.name.lastname}
              onChange={onUserInput}
              required
            />
          </label>
          <label>Card Number
            <input 
              type="text"
              name="cardnumber"
              placeholder="Card Number"
              value={billingInfo.cardnumber}
              onChange={onUserInput}
              required
            />
          </label>

          <label>Address
            <input 
              type="text"
              name="street"
              placeholder="Address"
              value={shippingInfo.address.street}
              onChange={onUserInput}
              required
            />
          </label>
          <label>City
            <input 
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.address.city}
              onChange={onUserInput}
              required
            />
          </label>
          <label>State
            <input 
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.address.state}
              onChange={onUserInput}
              required
            />
          </label>
          <label>Zip Code
            <input 
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={shippingInfo.address.zipcode}
              onChange={onUserInput}
              required
            />
          </label>
          <button>Order</button>
        </form>
      </div>
  )
}

export default Checkout;