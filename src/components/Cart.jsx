import { useSelector, useDispatch } from "react-redux";
import { removeProduct, getCart } from "../redux/cart";
import { Link } from "react-router-dom";

function Cart(props) {

  if (!props.token) {
    return <h3>You must be logged in to perform this action.</h3>
  }

  const cart = useSelector(getCart);

  const dispatch = useDispatch();


// localStorage resides in Cart component where the products are stored in the cart
console.log(localStorage);

// localStorage.setItem("key", "value") where key (name of the argument) and value (data of the argument) are strings. If object or array, must use JSON.stringify().
// Sets cart to the state it was at.
localStorage.setItem("cart", JSON.stringify(cart))

return (
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
                <button onClick={() => {dispatch(removeProduct(product.id))}}>
                  Dispatch Remove
                </button>
              </div>
            </div>
          )
        })
      }

      <div className="summary">
        <div className="details">
          <h3>Subtotal:</h3>
          <p>$</p>
        </div>

        <div className="details">
          <h3>Total:</h3>
          <p>$</p>
        </div>
        
        <button>Check Out</button>
      </div>
    </div>
  )
}

export default Cart;