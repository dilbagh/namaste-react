import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resInfo: { name, cuisines, cloudinaryImageId, avgRatingString, sla } } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={`${name} Logo`}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRatingString} stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

const Body = () => {
  const restaurantInfo = require('./rest-info.json');
  return (
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="restaurant-container">
        {
          restaurantInfo.map(restaurant => (
            <RestaurantCard
              key={restaurant.info.id}
              resInfo={restaurant.info}
            />
          ))
        }
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
