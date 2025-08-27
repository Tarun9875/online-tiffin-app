import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";

// Pages
import HomePage from "./pages/HomePage";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import TiffinMenuPage from "./pages/customer/TiffinMenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/customer/OrderPage";
import MyAccountPage from "./pages/customer/MyAccountPage";
import EditMyProfilePage from "./pages/customer/EditMyProfilePage";
import MyOrders from "./pages/customer/MyOrders";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer-login" element={<CustomerLoginPage />} />
          <Route path="/customer-register" element={<CustomerRegisterPage />} />
          <Route path="/customer-tiffin-menu" element={<TiffinMenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/edit-account" element={<EditMyProfilePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
