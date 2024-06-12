import { Link } from 'react-router-dom';
import { COMPANY_LOGO_URL } from '../utils/urls';
import useOnlineState from '../utils/useOnlineState';

const MenuItem = ({ content }) => {
  return <li className="mx-3">{content}</li>;
};

const Header = () => {
  const online = useOnlineState();
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg px-2 fixed w-full top-0">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-32 mix-blend-multiply"
            src={COMPANY_LOGO_URL}
            alt="Company Logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <MenuItem content={online ? '🟢' : '🔴'} />
          <MenuItem content={<Link to="/">Home</Link>} />
          <MenuItem content={<Link to="/about">About Us</Link>} />
          <MenuItem content={<Link to="/contact">Contact Us</Link>} />
          <MenuItem content={'🛒'} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
