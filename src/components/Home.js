import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Search from './Search';
import useRestaurantList from '../utils/useRestaurantList';
import useOnlineState from '../utils/useOnlineState';

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
  const restInfo = useRestaurantList();

  const [filteredRestInfo, setFilteredRestInfo] = useState([]);

  const [filterStatus, setFilterStatus] = useState('');

  const online = useOnlineState();

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

  const clearFilter = () => {
    setFilteredRestInfo(restInfo);
    setFilterStatus('');
  };

  useEffect(() => {
    clearFilter();
  }, [restInfo]);

  if (!online) {
    return (
      <div className="body">
        <h1>‼️ You're not connected to the internet.</h1>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filters">
        <Search onSearch={searchFilter} />
        <FilterButton title="Top Rated Restaurants" onClick={topRatedFilter} />
        <FilterButton title="Clear Filters" onClick={clearFilter} />
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
