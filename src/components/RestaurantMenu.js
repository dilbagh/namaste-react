import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../utils/useRestaurantInfo';

const getRecommendedItems = (cards) => {
  return cards?.find((card) => card?.card?.card?.title === 'Recommended');
};

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantInfo = useRestaurantInfo(restaurantId);

  if (!restaurantInfo) {
    return <></>;
  }
  const { restaurantName, menuItems } = restaurantInfo;

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
