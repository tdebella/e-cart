import { Outlet } from "react-router-dom";
import { Navbar } from "./cmp/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

// initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         backgroundColor: "#000",
//         boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
//         transition: {
//           duration: 5,
//
//         },
//       }}
