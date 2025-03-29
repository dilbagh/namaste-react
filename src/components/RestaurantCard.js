import { Link } from 'react-router-dom';
import { getCDNImage } from '../utils/urls';

const RestaurantCard = (props) => {
  const { resInfo = {}, promo } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRatingString, sla } =
    resInfo;
  return name ? (
    <div className="m-2 p-2 w-52 min-h-64 border rounded-lg bg-orange-100 hover:shadow-md hover:shadow-gray-500">
      <Link to={`/restaurants/${id}`}>
        {promo && promo}
        <img
          className="h-32 w-full rounded-lg"
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
      <div className="h-32 w-full rounded-lg bg-orange-50"></div>
    </div>
  );
};

export const withPromo = (RestaurantCard) => {
  return ({ resInfo }) => {
    const { header, subHeader } = resInfo.aggregatedDiscountInfoV3;
    const promoText = `${header} ${subHeader || ''}`;
    const promo = (
      <label className="absolute bg-black text-white text-xs rounded-lg p-1 m-2 mt-24 opacity-80">
        {promoText}
      </label>
    );
    return <RestaurantCard promo={promo} resInfo={resInfo} />;
  };
};

export default RestaurantCard;
