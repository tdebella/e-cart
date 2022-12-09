import { Outlet } from "react-router-dom";
import { Navbar } from "./cmp/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Outlet />
    </ShoppingCartProvider>
  );
}

export default App;

// src. https://www.youtube.com/watch?v=lATafp15HWA&t=26s
// https://github.com/WebDevSimplified/react-ts-shopping-cart
