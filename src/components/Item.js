import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);

  const sign = item.price < 0 ? '-' : '+';

  return (
    <>
      <li key={item.id} className={item.amount < 0 ? 'minus' : 'plus'}>
        {item.name}{' '}
        <span>
          {sign}${Math.abs(item.total)}
        </span>
        <button className='delete-btn' onClick={(e) => deleteItem(item.id)}>
          x
        </button>
      </li>
    </>
  );
};
