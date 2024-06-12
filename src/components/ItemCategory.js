import { useEffect, useRef, useState } from 'react';
import ItemList from './ItemList';

const ItemCategory = ({ expanded = false, onStateChange, categoryData }) => {
  const self = useRef();
  const [scrollNeeded, setScrollNeeded] = useState(false);

  useEffect(() => {
    if (scrollNeeded && expanded) {
      const position = self.current.getBoundingClientRect().top;
      window.scrollTo({
        top: position + window.scrollY - 100,
        behavior: 'smooth',
      });
    }
    setScrollNeeded(true);
  }, [expanded]);

  return (
    <div className="w-[48rem] my-2 mx-auto shadow-md rounded-md">
      <div
        ref={self}
        className="flex justify-between p-4 my-2 cursor-pointer"
        onClick={onStateChange}
      >
        <span className="font-bold text-md p-1">
          {categoryData.title} ({categoryData.itemCards.length})
        </span>
        <span>{expanded ? '^' : '⌄'}</span>
      </div>
      {expanded && <ItemList itemData={categoryData.itemCards} />}
    </div>
  );
};

export default ItemCategory;
