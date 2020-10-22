import React from 'react';
import ItemsList from './components/ItemsList';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context/context';

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <ItemsList />
      </div>
    </>
  );
};

export default App;
