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
        <p>{cuisines.join(', ')}</p>
        <p>{avgRatingString} stars</p>
        <p>{sla.slaString}</p>
      </Link>
    </div>
  ) : (
    <div className="restaurant-card"></div>
  );
};

export default RestaurantCard;
