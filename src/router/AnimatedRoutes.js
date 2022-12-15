import { useLocation } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { About } from "../pages/About";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import ForgotPassword from "../auth/ForgotPassword";
import Checkout from "../checkout/Checkout";
import { motion } from "framer-motion";

function AnimatedRoutes() {
  //useLocation hook used for animating the routes for routing across pages
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </motion.div>
  );
}

export default AnimatedRoutes;
