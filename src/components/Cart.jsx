// React
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, getCart } from "../redux/cart";

function Cart(props) {

  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [ cartSubtotal, setCartSubtotal ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0)

  // Only when there's a change to 'cart', useEffect() will be invoked.
  useEffect(() => {
    cart.map((item) => {
      const newSubtotal = (cartSubtotal + (item.price * item.quantity)).toFixed(2);
      setCartSubtotal(newSubtotal);
    })
  }, [cart])

  console.log('subtotal', cartSubtotal);

  useEffect(() => {
    const cartTotal = (cartSubtotal * 1.08875).toFixed(2);
    setCartTotal(cartTotal);
  })

  console.log('cart total', cartTotal);

  // localStorage resides in Cart component where the products are stored in the cart
  // localStorage.setItem("key", "value") where key (name of the argument) and value (data of the argument) are strings. If object or array, must use JSON.stringify().
  // Sets cart to the state it was at.
  localStorage.setItem("cart", JSON.stringify(cart))

  const handleClick = () => {
    navigate('checkout');
  }

  console.log('cart', cart)

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
                    <input value={product.quantity}></input>
                    {/* use dispatch similar to the dispatch remove */}
                    <button>-</button>
                    <button onClick={()=>{dispatch(addToProduct(product.id))}}>+</button>
                  </div>
                  
                  <button onClick={()=>{dispatch(removeProduct(product.id))}}>
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
          <h3>Subtotal: ${cartSubtotal}</h3>
        </div>

        <div className="details">
          <h3>Total: ${cartTotal}</h3>
        </div>
        
        <button onClick={handleClick}>Check Out</button>

      </div>
    </div>
  )
}

export default Cart;