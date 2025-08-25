import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import CustomerLoginPage from "./pages/customer/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer/CustomerRegisterPage";
import TiffinMenuPage from "./pages/customer/TiffinMenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/customer/OrderPage";

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
                    <Route path="/order" element={<OrderPage />} /> {/* new */}
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
