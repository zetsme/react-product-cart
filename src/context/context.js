import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
//
const AppContext = createContext();
//
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};
//

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const res = await fetch(
      'https://pacific-lake-32282.herokuapp.com/api/products'
    );
    const resData = await res.json();
    dispatch({ type: 'GET_ITEMS', payload: resData });
  };
  //
  const clearAll = () => dispatch({ type: 'CLEAR_ALL' });
  const changeQuantity = (id, num) =>
    dispatch({ type: 'CHANGE_QUANTITY', payload: { id, num } });
  const remove = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  //
  useEffect(() => {
    fetchData();
  }, []);
  //
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);
  //
  return (
    <AppContext.Provider value={{ ...state, clearAll, changeQuantity, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
