import { useEffect, useState } from 'react';

const useOnlineState = () => {
  const [onlineState, setOnlineState] = useState(true);

  useEffect(() => {
    window.addEventListener('online', () => setOnlineState(true));
    window.addEventListener('offline', () => setOnlineState(false));
  }, []);

  return onlineState;
};

export default useOnlineState;
