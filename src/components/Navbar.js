import React from 'react';
import { useGlobalContext } from '../context/context';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav__inner'>
          <h4 className='nav__logo'>Navbar</h4>
          <div className='nav__cart'>
            <FaCartPlus className='nav__icon' />
            <span className='nav__amount'>{amount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
