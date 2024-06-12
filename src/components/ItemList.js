import { getCDNImage } from '../utils/urls';

const ItemList = ({ itemData }) => {
  return itemData.map((item) => {
    const itemInfo = item.card.info;
    return (
      <div
        key={itemInfo.id}
        className="flex justify-between mx-4 p-1 border-b-2 border-gray-200 min-h-40"
      >
        <div className="w-9/12 py-2">
          <div className="font-bold text-sm m-2">
            {itemInfo.name} - ₹{(itemInfo.defaultPrice || itemInfo.price) / 100}
          </div>
          <div className="font-light text-sm m-2">{itemInfo.description}</div>
        </div>
        <div className="w-3/12 p-4 h-40">
          <div className="absolute p-1">
            <button className="rounded-lg bg-orange-300 m-1 mt-20 ml-20 p-2 text-sm opacity-90 hover:opacity-100 hover:shadow-md font-bold">
              Add +
            </button>
          </div>
          {itemInfo.imageId && (
            <img
              className="rounded-lg border border-gray-100 p-1 h-full w-full object-fill"
              src={getCDNImage(itemInfo.imageId)}
            />
          )}
        </div>
      </div>
    );
  });
};

export default ItemList;
