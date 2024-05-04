import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SWIGGY_API } from '../utils/urls';

const getRecommendedItems = (cards) => {
  return cards?.find((card) => card?.card?.card?.title === 'Recommended');
};

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(undefined);

  const fetchAndUpdate = async () => {
    const response = await fetch(SWIGGY_API.menuItems([restaurantId]));
    const json = await response.json();
    const newRestaurantInfo = json?.data;
    setRestaurantInfo(newRestaurantInfo);
  };

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  const cards = restaurantInfo?.cards;
  if (!cards) {
    return <></>;
  }

  const restaurantName = cards[0]?.card?.card?.text;
  const menuItems = getRecommendedItems(
    cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )?.card?.card?.itemCards;

  return (
    <div className="body">
      <h1 className="menu-heading">{restaurantName} Menu</h1>
      {!menuItems && <h2>Nothing here ☹️</h2>}
      <ul>
        {menuItems &&
          menuItems.map((item) => (
            <li key={item.card?.info?.id}>{item.card?.info?.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
