import React from 'react';
import { useGlobalContext } from '../context/context';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Item = ({ id, img, title, amount, price }) => {
  const { changeQuantity, remove } = useGlobalContext();
  return (
    <div className='item'>
      <img src={img} alt={title} className='item__img' />
      <div className='item__content'>
        <h4 className='item__title'>{title}</h4>
        <p className='item__price'>${price}</p>
        <button className='item__btn--delete' onClick={() => remove(id)}>
          <span>Remove</span>
          <FaTrash />
        </button>
      </div>
      <div className='item__buttons'>
        <button className='item__btn' onClick={() => changeQuantity(id, -1)}>
          <FaMinus />
        </button>
        <span className='item__amount'>{amount}</span>
        <button className='item__btn' onClick={() => changeQuantity(id, +1)}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Item;
