import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from './components/CartPage';
import { Header } from './components/Header';
import { NotFound } from './components/NotFound';
import { ProductDisplayPage } from './components/ProductDisplayPage';
import { ProductListPage } from './components/ProductListPage';
import { CartContext } from './context/CartContext';

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse();
    console.log(response);
  }, [response])
  // -------------------------------------------------

  const { count } = useContext( CartContext );

  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path='/' element={ <ProductListPage /> } />
        <Route path='details/:id' element={ <ProductDisplayPage /> } />
        <Route path='cart' element={ <CartPage /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
