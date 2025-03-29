import { useDispatch, useSelector } from 'react-redux';
import { getCDNImage } from '../utils/urls';
import { addItem } from '../utils/cartSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';

const ConfirmCartReset = ({ yesHandler, noHandler, item }) => {
  return (
    <div className="m-2">
      <div className="m-1 p-1 mt-4">
        Your previous cart items from another restaurant will be cleared. Do you
        want to continue?
      </div>
      <hr className="border-orange-300" />
      <div className="flex justify-end m-1 p-1">
        <button
          onClick={() => yesHandler(item)}
          className="m-1 p-1 w-11 border bg-orange-300 rounded-md font-bold text-sm shadow-md"
        >
          Yes
        </button>
        <button
          onClick={noHandler}
          className="m-1 p-1 w-11 border bg-orange-300 rounded-md font-bold text-sm shadow-md"
        >
          No
        </button>
      </div>
    </div>
  );
};

const ItemList = ({ itemData }) => {
  const { restaurantId } = useParams();
  const [showCartResetWarning, setShowCartResetWarning] = useState(false);
  const cartRestaurantId = useSelector((store) => store.cart.restaurant.id);

  const dispatch = useDispatch();
  const handleAdd = (item, force = false) => {
    if (!force && cartRestaurantId && cartRestaurantId !== restaurantId) {
      setShowCartResetWarning(true);
      return;
    }
    dispatch(addItem({ restaurantId, item }));
  };

  return (
    <>
      <Modal
        show={showCartResetWarning}
        content={
          <ConfirmCartReset
            yesHandler={(item) => {
              handleAdd(item, true);
              setShowCartResetWarning(false);
            }}
            noHandler={() => setShowCartResetWarning(false)}
          />
        }
      />
      {itemData.map((item) => {
        const itemInfo = item.card.info;
        return (
          <div
            key={itemInfo.id}
            className="flex justify-between mx-4 p-1 border-b-2 border-gray-200 min-h-40"
          >
            <div className="w-9/12 py-2">
              <div className="font-bold text-sm m-2">
                {itemInfo.name} - ₹
                {(itemInfo.defaultPrice || itemInfo.price) / 100}
              </div>
              <div className="font-light text-sm m-2">
                {itemInfo.description}
              </div>
            </div>
            <div className="w-3/12 p-4 h-40">
              <div className="absolute p-1">
                <button
                  className="rounded-lg bg-orange-300 m-1 mt-20 ml-20 p-2 text-sm opacity-90 hover:opacity-100 hover:shadow-md font-bold"
                  onClick={() => handleAdd(itemInfo)}
                >
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
      })}
    </>
  );
};

export default ItemList;
