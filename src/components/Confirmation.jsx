import { Link } from "react-router-dom";

function Confirmation(){

  return (
    <div className="confirmation">
      <h2>Thank you for your order!</h2>
      <p>A confirmation containing your order details has been sent to your email. If you have any questions, feel free to contact us at contact@shop.com.</p>
      <Link to="/account">
        <button>Account</button>
      </Link>
    </div>
  )
}

export default Confirmation;