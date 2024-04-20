import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const {
    resInfo: { name, cuisines, cloudinaryImageId, avgRatingString, sla },
  } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={`${name} Logo`}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRatingString} stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
