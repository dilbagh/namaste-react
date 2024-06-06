import { Link } from 'react-router-dom';
import { COMPANY_LOGO_URL } from '../utils/urls';
import useOnlineState from '../utils/useOnlineState';

const Header = () => {
  const online = useOnlineState();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={COMPANY_LOGO_URL} alt="Company Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>{online ? '🟢' : '🔴'}</li>
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
