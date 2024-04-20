import { useCallback, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const restaurantInfo = require('../utils/rest-info.json');

const FilterButton = (props) => {
  const { title, onClick } = props;
  return (
    <button className="filter-btn" onClick={onClick}>
      {title}
    </button>
  );
};

const Body = () => {
  const [restInfo, setRestInfo] = useState(restaurantInfo);

  const topRatedFilter = useCallback(() => {
    setRestInfo(
      restInfo.filter((restaurant) => restaurant.info.avgRating >= 4)
    );
  }, [restInfo, setRestInfo]);

  const clearFilter = useCallback(() => {
    setRestInfo(restaurantInfo);
  }, [setRestInfo]);

  return (
    <div className="body">
      <div className="filters">
        <FilterButton title="Top Rated Restaurants" onClick={topRatedFilter} />
        <FilterButton title="Clear Filters" onClick={clearFilter} />
      </div>
      <div className="restaurant-container">
        {restInfo.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
