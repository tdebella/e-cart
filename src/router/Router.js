import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { About } from "../pages/About";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import ForgotPassword from "../auth/ForgotPassword";
import App from "../App.tsx";
import { ShoppingCart } from "../cmp/ShoppingCart";
import Checkout from "../checkout/Checkout";
// import WishlistCard from "../wishlist/WishlistCard";

const Router = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-100"
        style={{ Width: "400px", backgroundColor: "#fffeee" }}
      >
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/wishlistcard" element={<WishlistCard />} /> */}
          </Route>
        </Routes>
      </div>
    </Container>
  );
};

export default Router;
