import { Link } from 'react-router-dom';
import { COMPANY_LOGO_URL } from '../utils/urls';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={COMPANY_LOGO_URL} alt="Company Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
