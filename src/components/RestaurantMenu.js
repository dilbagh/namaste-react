import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../utils/useRestaurantInfo';
import ItemCategory from './ItemCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantInfo(restaurantId);
  const [expandedIndex, setExpandedIndex] = useState(0);

  if (!restaurantInfo) {
    return <></>;
  }

  const { restaurantName, categories } = restaurantInfo;

  return (
    <div className="body">
      <h1 className="font-bold text-2xl text-center font-serif my-2">
        {restaurantName} Menu
      </h1>
      <div className="m-2 p-2">
        {categories.map((category, index) => {
          const categoryData = category.card.card;
          return (
            <ItemCategory
              key={categoryData.title}
              expanded={index === expandedIndex}
              categoryData={categoryData}
              onStateChange={() => setExpandedIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
