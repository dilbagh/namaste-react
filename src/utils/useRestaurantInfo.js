import { useEffect, useState } from 'react';
import { SWIGGY_API } from './urls';

const useRestaurantInfo = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(undefined);

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  const fetchAndUpdate = async () => {
    const response = await fetch(SWIGGY_API.menuItems([restaurantId]));
    const json = await response.json();
    const newRestaurantInfo = json?.data;
    setRestaurantInfo(newRestaurantInfo);
  };

  const cards = restaurantInfo?.cards;
  if (!cards) {
    return undefined;
  }

  const restaurantName = cards[0]?.card?.card?.text;
  const menuItems = getRecommendedItems(
    cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )?.card?.card?.itemCards;

  return { restaurantName, menuItems };
};

const getRecommendedItems = (cards) => {
  return cards?.find((card) => card?.card?.card?.title === 'Recommended');
};

export default useRestaurantInfo;
