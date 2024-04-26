import { Link } from 'react-router-dom';
import { getCDNImage } from '../utils/urls';

const RestaurantCard = (props) => {
  const { resInfo = {} } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRatingString, sla } =
    resInfo;
  return name ? (
    <div className="restaurant-card">
      <Link to={`/restaurants/${id}`}>
        <img
          className="restaurant-logo"
          src={getCDNImage(cloudinaryImageId)}
          alt={`${name} Logo`}
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{avgRatingString} stars</h5>
        <h5>{sla.slaString}</h5>
      </Link>
    </div>
  ) : (
    <div className="restaurant-card"></div>
  );
};

export default RestaurantCard;
