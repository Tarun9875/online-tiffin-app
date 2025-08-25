// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

// Customer Pages
import CustomerLoginPage from "../pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "../pages/customer/CustomerRegisterPage";
import TiffinMenuPage from "../pages/customer/TiffinMenuPage";
import OrderPage from "../pages/customer/OrderPage";
import MyAccountPage from "../pages/customer/MyAccountPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Customer Pages */}
      <Route path="/customer-login" element={<CustomerLoginPage />} />
      <Route path="/customer-register" element={<CustomerRegisterPage />} />
      <Route path="/customer-tiffin-menu" element={<TiffinMenuPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/my-account" element={<MyAccountPage />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
