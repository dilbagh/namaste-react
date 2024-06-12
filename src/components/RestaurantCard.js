import { Link } from 'react-router-dom';
import { getCDNImage } from '../utils/urls';

const RestaurantCard = (props) => {
  const { resInfo = {} } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRatingString, sla } =
    resInfo;
  return name ? (
    <div className="m-2 p-2 w-52 min-h-64 border rounded-lg bg-orange-100 hover:shadow-md hover:shadow-gray-500">
      <Link to={`/restaurants/${id}`}>
        <img
          className="h-32 w-full"
          src={getCDNImage(cloudinaryImageId)}
          alt={`${name} Logo`}
        />
        <h3 className="font-bold text-md my-3">{name}</h3>
        <p className="text-xs my-1">{cuisines.join(', ')}</p>
        <div className="flex justify-between my-3 align-bottom">
          <p className="font-bold text-xs">{avgRatingString} stars</p>
          <p className="font-bold text-xs">{sla.slaString}</p>
        </div>
      </Link>
    </div>
  ) : (
    <div className="m-2 p-2 w-52 min-h-64 border rounded-lg bg-orange-100 hover:shadow-lg hover:shadow-gray-500">
      <div className="h-32 w-full bg-orange-50"></div>
    </div>
  );
};

export default RestaurantCard;
