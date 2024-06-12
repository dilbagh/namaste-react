import { useContext } from 'react';
import LoginContext from '../utils/LoginContext';

const LoginButton = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  if (loggedInUser) {
    return (
      <span>
        👤{loggedInUser} ·{' '}
        <button onClick={() => setLoggedInUser('')}>Logout</button>
      </span>
    );
  }
  return <button onClick={() => setLoggedInUser('Dummy User')}>Login</button>;
};

export default LoginButton;
