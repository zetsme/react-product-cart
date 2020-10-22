import React from 'react';
import { useGlobalContext } from '../context/context';
import { FaTrashAlt } from 'react-icons/fa';

const Total = () => {
  const { total, clearAll } = useGlobalContext();
  return (
    <div className='total'>
      <div className='total__content'>
        <h4>Total :</h4>
        <p>${total}</p>
      </div>
      <button className='total__btn' onClick={clearAll}>
        Clear All
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Total;
