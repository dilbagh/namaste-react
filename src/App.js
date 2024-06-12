import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import LoginContext from './utils/LoginContext';

const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  return (
    <LoginContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="app">
        <Header />
        <div className="mt-28">
          <Outlet />
        </div>
      </div>
    </LoginContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:restaurantId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
