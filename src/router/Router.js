import { Routes, Route, useLocation } from "react-router-dom";
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
import Order from "../order/Order";
import WishlistCard from "../wishlist/WishlistCard";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

const Router = () => {
  //useLocation hook used for animating the routes for routing across pages

  return (
    <ShoppingCartProvider>
      <Container
        className="d-flex align-items-center justify-content-center mb-4"
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
              <Route path="/order" element={<Order />} />
              <Route path="/wishlistcard" element={<WishlistCard />} />
            </Route>
          </Routes>
        </div>
      </Container>
    </ShoppingCartProvider>
  );
};

export default Router;
