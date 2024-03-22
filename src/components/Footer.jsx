// react
import { Link } from 'react-router-dom';

// component
import About from './About.jsx';

function Footer(){
  return (
    <div className="external-links">
      <h4>About SHOP</h4>
      <div>
        <Link to="/about">About Us</Link>
      </div>
      {/* <p>Sustainability</p> */}
      {/* <p>Press Room</p> */}
    </div>
  )
}

export default Footer;