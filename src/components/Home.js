import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Search from './Search';
import useRestaurantList from '../utils/useRestaurantList';
import useOnlineState from '../utils/useOnlineState';

const FilterButton = (props) => {
  const { title, onClick, disabled = false } = props;
  return (
    <button
      className="bg-orange-100 px-2 mx-1 rounded-md shadow-md hover:shadow-lg hover:shadow-gray-300"
      onClick={onClick}
      disabled={disabled}
    >
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
      restInfo.filter(
        (restaurant) =>
          restaurant.info.name.toLowerCase().includes(searchText) ||
          restaurant.info.cuisines.join(' ').toLowerCase().includes(searchText)
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
      <div className="flex justify-center">
        <h1 className="font-bold text-lg text-red-500">
          ‼️ You're not connected to the internet. ‼️
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex my-2 justify-center">
        <Search onSearch={searchFilter} />
        <FilterButton title="Top Rated Restaurants" onClick={topRatedFilter} />
        <FilterButton title="Clear Filters" onClick={clearFilter} />
      </div>
      {filterStatus.length > 0 && (
        <div className="flex justify-center my-2 pt-3 font-bold text-orange-500">
          <h3 className="filter-status">{filterStatus}</h3>
        </div>
      )}
      <div className="flex flex-wrap m-2 p-2 justify-center">
        {!restInfo.length && <ShimmerRestaurants />}
        {filteredRestInfo.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;
