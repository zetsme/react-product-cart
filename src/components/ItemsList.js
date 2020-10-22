import React from 'react';
import { useGlobalContext } from '../context/context';
import Item from './Item';
import Total from './Total';

const ItemsList = () => {
  const { cart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className='items__empty'>
        <h1>Your card Is empty</h1>
      </div>
    );
  }
  return (
    <>
      <section className='items__section'>
        <h1 className='items__heading'>Items</h1>
        <div className='items__grid'>
          {cart.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </div>
      </section>
      <Total />
    </>
  );
};

export default ItemsList;
