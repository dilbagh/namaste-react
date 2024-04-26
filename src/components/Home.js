import { useCallback, useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Search from './Search';
import { API } from '../utils/urls';

const FilterButton = (props) => {
  const { title, onClick, disabled = false } = props;
  return (
    <button className="filter-btn" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

const ShimmerRestaurants = () => {
  return (
    <>
      {new Array(12).fill('').map((_, i) => (
        <RestaurantCard key={i} />
      ))}
    </>
  );
};

const Home = () => {
  const [restInfo, setRestInfo] = useState([]);

  const [filteredRestInfo, setFilteredRestInfo] = useState([]);

  const [filterStatus, setFilterStatus] = useState('');

  const topRatedFilter = () => {
    setFilteredRestInfo(
      restInfo.filter((restaurant) => restaurant.info.avgRating > 4.2)
    );
    setFilterStatus('Top Rated Restaurants');
  };

  const searchFilter = (searchText) => {
    setFilteredRestInfo(
      restInfo.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText)
      )
    );
    setFilterStatus(`Search Results: ${searchText}`);
  };

  const clearFilter = (newRestInfo) => {
    setFilteredRestInfo(newRestInfo || restInfo);
    setFilterStatus('');
  };

  const fetchAndUpdate = async () => {
    try {
      const response = await fetch(API.restaurantList());
      const json = await response.json();
      const newRestInfo =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestInfo(newRestInfo);
      clearFilter(newRestInfo);
    } catch (err) {
      console.log('Error while loading data.', err);
    }
  };

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  return (
    <div className="body">
      <div className="filters">
        <Search onSearch={searchFilter} />
        <FilterButton title="Top Rated Restaurants" onClick={topRatedFilter} />
        <FilterButton title="Clear Filters" onClick={() => clearFilter()} />
      </div>
      <div className="filter-status-container">
        {filterStatus.length > 0 && (
          <h3 className="filter-status">{filterStatus}</h3>
        )}
      </div>
      <div className="restaurant-container">
        {!restInfo.length && <ShimmerRestaurants />}
        {filteredRestInfo.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;
