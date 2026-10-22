

// import Header from "./component/Header";

// export default function App() {
 
//       <>
//       <Header>
//         jjjj
//       </Header>
//       </>
// 

// import { Routes, Route } from "react-router-dom";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// export default function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }




import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}
