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
import Payment from './components/payment.js';
import Error404 from "./components/404error.js";
import B2BbulkOreder from "./components/b2bBulkOrder.js";
import Blogs from "./components/blogs.js"
import BlogDetail from "./components/blogDetail.js";
import Career from "./components/career.js";
import ComingSoon from "./components/comingSoon.js";
import ContactUs from "./components/contactUs.js";
import FAQ from "./components/FAQ.js";
import Feedback from "./components/feedback.js";
import ForgetPassword from "./components/forgetPassword.js";
import Login from "./components/login.js";
import PrivacyPolicy from "./components/privacyPolicy.js";
import ShippingPolicy from "./components/shippingPolicy.js";
import SignUp from "./components/signUp.js";
import TermsOfServices from "./components/termsOfServices.js";
import OrderDetail from "./components/orderDetail.js";
import CancelOrder from './components/cancelOrder.js';


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
        <Route path="/payment" element={<Payment />} />
        <Route path="/404error" element={<Error404 />} />
        <Route path="/b2bbulkoreder" element={<B2BbulkOreder />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderDetail" element={<OrderDetail />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/shippingpolicy" element={<ShippingPolicy />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/termsofservices" element={<TermsOfServices />} />
        <Route path="/cancelOrder" element={<CancelOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
