import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="body">
      <h1>Oops! It's an error.</h1>
      <h2>
        {err.status}:{err.statusTextMessage}
      </h2>
    </div>
  );
};

export default ErrorPage;
