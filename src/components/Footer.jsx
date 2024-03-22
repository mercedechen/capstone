// react
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className="links">
      <div className="additional-links">
        <h4>Customer Service</h4>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/return">Returns</Link>
      </div>

      <div className="additional-links">
        <h4>About SHOP</h4>
        <Link to="/about">About Us</Link>
        <Link to="/sustainability">Sustainability</Link>
      </div>
    </div>
  )
}

export default Footer;