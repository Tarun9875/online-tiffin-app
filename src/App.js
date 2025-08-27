// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/authContext";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Admin Layout
import AdminHeader from "./components/layout/AdminHeader";
import AdminFooter from "./components/layout/AdminFooter";

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
    <AuthProvider>
      <Router>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<><Header /><HomePage /></>} />
          <Route path="/customer-login" element={<><Header /><CustomerLoginPage /><Footer/></>} />
          <Route path="/customer-register" element={<><Header /><CustomerRegisterPage /><Footer/></>} />
          <Route path="/customer-tiffin-menu" element={<><Header /><TiffinMenuPage /></>} />
          <Route path="/order" element={<><Header /><OrderPage /></>} />
          <Route path="/my-orders" element={<><Header /><MyOrders /></>} />
          <Route path="/my-account" element={<><Header /><MyAccountPage /></>} />
          <Route path="/edit-account" element={<><Header /><EditMyProfilePage /></>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<><AdminLoginPage /></>} />
          <Route path="/admin/dashboard" element={<><AdminHeader /><AdminDashboardPage /><AdminFooter /></>} />

          {/* Common Routes */}
          <Route path="/about-us" element={<><Header /><AboutUsPage /></>} />
          <Route path="/contact" element={<><Header /><ContactPage /></>} />

          {/* Fallback */}
          <Route path="*" element={<><Header /><NotFoundPage /><Footer /></>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
