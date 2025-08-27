// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";

// Customer Pages
import HomePage from "./pages/HomePage";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import TiffinMenuPage from "./pages/customer/TiffinMenuPage";
import OrderPage from "./pages/customer/OrderPage";
import MyOrders from "./pages/customer/MyOrders";
import MyAccountPage from "./pages/customer/MyAccountPage";
import EditMyProfilePage from "./pages/customer/EditMyProfilePage";

// Admin Pages
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";

// Common Pages
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      {/* Header appears on all pages */}
      <Header />

      {/* Main content */}
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/customer-login" element={<CustomerLoginPage />} />
          <Route path="/customer-register" element={<CustomerRegisterPage />} />
          <Route path="/customer-tiffin-menu" element={<TiffinMenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/edit-account" element={<EditMyProfilePage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

          {/* Common Routes */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
