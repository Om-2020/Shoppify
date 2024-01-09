import React from 'react';
import { Header } from './components/Header';
import "./style.css";
import { Body } from './components/Body';
import {Routes,Route  } from 'react-router-dom';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Cart } from './components/Cart';

export const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>

    </div>
  )
};
