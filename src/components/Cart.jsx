// React
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeProduct, getCart, addProduct } from "../redux/cart";

function Cart(props) {

  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [ cartSubtotal, setCartSubtotal ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0)

  // Only when there's a change to 'cart', useEffect() will be invoked. Maps over each item in the cart array and calculates subtotal.
  // Subtotal = item price * item quantity and adds to cartSubtotal. setCartSubtotal() updates cartSubtotal.
  useEffect(() => {
    // cart.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    const subtotal = cart.reduce((total, product) => {
      return (total + (product.price * product.quantity));
    }, 0);
    const newSubtotal = subtotal.toFixed(2);
    setCartSubtotal(newSubtotal);
  }, [cart])

  // Total = cartSubtotal * NYC tax rate 8.875%
  // setCartTotal() updates cartTotal
  useEffect(() => {
    const cartTotal = (cartSubtotal * 1.08875).toFixed(2);
    setCartTotal(cartTotal);
  })

  // localStorage resides in Cart component where the products are stored in the cart
  // localStorage.setItem("key", "value") where key (name of the argument) and value (data of the argument) are strings. If object or array, must use JSON.stringify().
  // Sets cart to the state it was at.
  localStorage.setItem("cart", JSON.stringify(cart))

  const handleClick = () => {
    navigate('checkout');
  };

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
                    <p>${product.price}</p>
                  </div>

                  <div className="details">
                    <h3>Quantity:</h3>

                    <p className="quantity">{product.quantity}</p>

                    <button 
                      onClick={() => {
                        if(product.quantity === 1) {
                          dispatch(removeProduct(product.id))
                          return
                        }
                        dispatch(decrease(product.id))}
                      }> - 
                    </button>
                    
                    <button onClick={() => {dispatch(increase(product.id))}}> + </button>
                  </div>
                  
                  <button onClick={()=>{dispatch(removeProduct(product.id))}}>
                    Remove
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="summary">
        <h3>Subtotal:</h3>
        <p>${cartSubtotal}</p>
        <h3>Total:</h3>
        <p>${cartTotal}</p>
        <button onClick={handleClick}>Check Out</button>
      </div>
    </div>
  )
}

export default Cart;