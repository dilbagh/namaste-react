import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resInfo = {} } = props;
  const { name, cuisines, cloudinaryImageId, avgRatingString, sla } = resInfo;
  return name ? (
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
  ) : (
    <div className="restaurant-card"></div>
  );
};

export default RestaurantCard;
