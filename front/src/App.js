import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from './components/CartPage';
import { Header } from './components/Header';
import { NotFound } from './components/NotFound';
import { ProductDisplayPage } from './components/ProductDisplayPage';
import { ProductListPage } from './components/ProductListPage';
import { CartContext } from './context/CartContext';

const App = () => {
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
