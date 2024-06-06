import { useEffect, useState } from 'react';
import { SWIGGY_API } from './urls';

const useRestaurantList = () => {
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  const fetchAndUpdate = async () => {
    try {
      const response = await fetch(SWIGGY_API.restaurantList());
      const json = await response.json();
      const newRestInfo =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestInfo(newRestInfo);
    } catch (err) {
      console.log('Error while loading data.', err);
    }
  };

  return restInfo;
};

export default useRestaurantList;
