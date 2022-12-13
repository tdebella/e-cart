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
