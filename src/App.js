import React from 'react';
import "./css/style.css";
import "./Js/custom.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import  Home  from "./components/home.js";
import About from './components/about.js';
import Category from './components/category.js';
import Combos from './components/combos.js';
import Gifts from './components/gifts.js';
import Profile from './components/profile.js';
import Orders from './components/orders.js';
import SavedAddress from './components/savedAddress.js';
import CahngePassword from './components/changePassword.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/savedaddress" element={<SavedAddress />} />
        <Route path="/changepassword" element={<CahngePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
