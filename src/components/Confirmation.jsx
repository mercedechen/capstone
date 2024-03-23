import { Link } from "react-router-dom";

function Confirmation(){

  return (
    <div className="confirmation">
      <h2>Thank you for your order!</h2>
      <p>A confirmation containing your order details has been sent to your email. For any questions, please contact us at customerservice@shop.com.</p>
      <Link to="/account">
        <button>Account</button>
      </Link>
    </div>
  )
}

export default Confirmation;