import { useSelector, useDispatch } from "react-redux";
import { removeProduct, getCart } from "../redux/cart";

function Cart(props) {
  const cart = useSelector(getCart)
  console.log('cart', cart)
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <button onClick={() => {dispatch(removeProduct(item.id))}}>Dispatch remove</button>
          </div>
        )
      })}
    </>
  )
}

export default Cart;