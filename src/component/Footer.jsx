// const  Footer=({title ,bt})=>{
// //    const info=()=>{
// //     alert("clicked")
// //    }  
//     return(
//         <>
//         <h1>{ title("ebtesam")}</h1>
//         {/* <button onClick={bt}>click hheir</button> */}
//         <button onClick={ ()=> bt(80000)}>
//         Click here
//       </button>
//          </>
//     )
// }

// export default Footer
// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-10">
//       <div className="grid md:grid-cols-3 gap-8">

//         <div>
//           <h2 className="text-2xl font-bold mb-3">
//             Evently
//           </h2>

//           <p>
//             Discover events that move you forward.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold mb-3">
//             Quick Links
//           </h3>

//           <div className="flex flex-col gap-2">
//             <a href="#home">Home</a>
//             <a href="#events">Events</a>
//             <a href="#speakers">Speakers</a>
//             <a href="#about">About</a>
//           </div>
//         </div>

//         <div>
//           <h3 className="font-bold mb-3">
//             Social Links
//           </h3>

//           <div className="flex gap-4">
//             <a href="#">Facebook</a>
//             <a href="#">LinkedIn</a>
//           </div>
//         </div>

//       </div>

//       <p className="text-center mt-8 border-t border-gray-300 pt-5">
//         © 2026 Evently. All rights reserved.
//       </p>
//     </footer>
//   );
// }

// export default Footer;

// import { useEffect, useState } from "react";
// import { ClipLoader } from "react-spinners";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const response = await fetch("https://dummyjson.com/products");

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         const data = await response.json();
//         setProducts(data.products);

import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

export default function Footer() {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? "#24150f" : "#fce1ce";
  const textColor = darkMode ? "#fce1ce" : "#662714";
  const mutedColor = darkMode ? "#d5b8a8" : "#805744";

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "My Cart", path: "/cart" },
    { name: "My Orders", path: "/orders" },
  ];

  return (
    <footer
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="mt-0 border-t-0 px-6 pt-12 pb-5 transition-colors duration-300"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-extrabold">
            <span style={{ color: "#ee6326" }}>Tamra</span>
            <span> Healthy Bites</span>
          </Link>

          <p
            style={{ color: mutedColor }}
            className="mt-4 max-w-sm leading-7"
          >
            Healthy bites, happy life!
            <br />
            اكتشفي اختيارات لذيذة تناسب يومك.
          </p>

          <div className="mt-5 flex gap-3">
            <span role="img" aria-label="dates" className="text-2xl">
              🌴
            </span>
            <span role="img" aria-label="nuts" className="text-2xl">
              🥜
            </span>
            <span role="img" aria-label="apple" className="text-2xl">
              🍎
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{ color: mutedColor }}
                  className="transition-colors duration-200 hover:font-semibold hover:text-orange-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Get in Touch</h3>

          <p style={{ color: mutedColor }} className="mb-3 leading-7">
            Have a question? We'd love to hear from you.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-lg px-5 py-3 font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#ee6326" }}
          >
            Contact Us
          </Link>

          <p style={{ color: mutedColor }} className="mt-5 text-sm">
            Fresh choices for a healthier lifestyle.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-6xl pt-5 text-center">
        <p style={{ color: mutedColor }} className="text-sm">
          © {new Date().getFullYear()} Tamra Healthy Bites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
