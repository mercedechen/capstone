// React
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, getCart } from "../redux/cart";

function Cart(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [ numOfItems, setNumofItems ] = useState([]);


  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  // localStorage resides in Cart component where the products are stored in the cart
  // localStorage.setItem("key", "value") where key (name of the argument) and value (data of the argument) are strings. If object or array, must use JSON.stringify().
  // Sets cart to the state it was at.
  localStorage.setItem("cart", JSON.stringify(cart))

  const handleClick = (event) => {
    navigate('checkout');
  }

  return (
    <div>
      <div className="cartItems">
        {
          cart.map((product) => {
            return (
              <div key={product.id} className="itemInCart">
                <img src={product.image} alt={product.title}/>
                
                <div className="productDetails">
                  <h2>{product.title}</h2>
                  <div className="details">
                    <h3>Description:</h3>
                    <p>{product.description}</p>
                  </div>

                  <div className="details">
                    <h3>Price:</h3>
                    <p>${product.price.toFixed(2)}</p>
                  </div>

                  <div className="details">
                    <h3>Quantity:</h3>
                    <input placeholder="1"></input>
                    <button>-</button>
                    <button>+</button>
                  </div>
                  
                  <button onClick={() => {dispatch(removeProduct(product.id))}}>
                    Dispatch Remove
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="summary">
        <div className="details">
          <h3>Subtotal:</h3>
        </div>

        <div className="details">
          <h3>Total:</h3>
        </div>
        
        <button onClick={handleClick}>Check Out</button>

      </div>
    </div>
  )
}

export default Cart;