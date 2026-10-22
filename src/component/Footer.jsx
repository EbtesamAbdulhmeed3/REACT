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
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getProducts();
//   }, []);

//   // Add product to cart
//   function addToCart(product) {
//     setCart((prevCart) => [...prevCart, product]);
//   }

//   // Remove product from cart
//   function removeFromCart(index) {
//     setCart((prevCart) => prevCart.filter((_, i) => i !== index));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-screen flex-col items-center justify-center gap-5 [bg-gradient-to-br] from-[#17120D] via-[#292016] to-[#3B2A1A]">
//         <ClipLoader color="#FCD34D" size={65} />
//         <p className="animate-pulse text-xl font-semibold text-amber-300">
//           Loading Products...
//         </p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#17120D] p-6">
//         <p className="rounded-2xl bg-red-100 p-5 font-semibold text-red-700">
//           Error: {error}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen [bg-gradient-to-br] from-[#17120D] via-[#292016] to-[#3B2A1A] px-5 py-12 sm:px-8">

//       {/* Shopping Cart Button */}
//       <button
//         onClick={() => setCartOpen(true)}
//         className="fixed right-6 top-6 z-40 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-bold text-amber-950 shadow-xl transition hover:scale-105 hover:bg-amber-300"
//       >
//         <span className="text-xl">🛒</span>
//         Cart
//         <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-950 px-1 text-xs text-amber-100">
//           {cart.length}
//         </span>
//       </button>

//       {/* Page Header */}
//       <div className="mx-auto mb-12 max-w-7xl text-center">
//         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
//           Discover Our Collection
//         </p>

//         <h1 className="text-4xl font-extrabold tracking-tight text-amber-300 sm:text-5xl">
//           Our Products
//         </h1>

//         <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-400"></div>

//         <p className="mx-auto mt-5 max-w-xl text-amber-100">
//           Find your favorite products with the best quality and prices.
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group w-full max-w-80 overflow-hidden rounded-3xl border border-amber-200/20 bg-amber-50 p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl"
//           >
//             <div className="mb-4 flex items-center justify-between">
//               <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold capitalize text-amber-950">
//                 {product.category}
//               </span>

//               <span className="text-2xl text-amber-800">♡</span>
//             </div>

//             <div className="flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             <div className="mt-5">
//               <h2 className="line-clamp-1 text-lg font-bold text-amber-950">
//                 {product.title}
//               </h2>

//               <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-500">
//                 {product.description}
//               </p>

//               <div className="mt-5 flex items-center justify-between gap-3 border-t border-amber-200 pt-4">
//                 <p className="text-xl font-extrabold text-amber-800">
//                   ${product.price}
//                 </p>

//                 <button
//                   onClick={() => addToCart(product)}
//                   className="rounded-xl bg-amber-800 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-amber-950 active:scale-95"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dark Background Behind Cart */}
//       {cartOpen && (
//         <div
//           onClick={() => setCartOpen(false)}
//           className="fixed inset-0 z-40 bg-black/60"
//         ></div>
//       )}

//       {/* Side Cart */}
//       <div
//         className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[#211910] shadow-2xl transition-transform duration-300 ${
//           cartOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Cart Header */}
//         <div className="flex items-center justify-between border-b border-amber-400/30 p-6">
//           <h2 className="text-2xl font-extrabold text-amber-300">
//             🛒 My Cart ({cart.length})
//           </h2>

//           <button
//             onClick={() => setCartOpen(false)}
//             className="rounded-lg px-3 py-1 text-3xl text-amber-300 transition hover:bg-amber-400/20 hover:text-white"
//           >
//             ×
//           </button>
//         </div>

//         {/* Cart Products */}
//         <div className="flex-1 space-y-4 overflow-y-auto p-5">
//           {cart.length === 0 ? (
//             <p className="mt-10 text-center text-amber-100/70">
//               Your cart is empty 🛒
//             </p>
//           ) : (
//             cart.map((product, index) => (
//               <div
//                 key={`${product.id}-${index}`}
//                 className="flex gap-4 rounded-2xl border border-amber-400/20 bg-amber-50 p-3"
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="h-20 w-20 rounded-xl bg-white object-contain"
//                 />

//                 <div className="min-w-0 flex-1">
//                   <h3 className="line-clamp-2 font-bold text-amber-950">
//                     {product.title}
//                   </h3>

//                   <p className="mt-2 font-extrabold text-amber-800">
//                     ${product.price}
//                   </p>

//                   <button
//                     onClick={() => removeFromCart(index)}
//                     className="mt-2 text-sm font-semibold text-red-600 hover:text-red-800"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Footer */}
//         <div className="border-t border-amber-400/30 p-6">
//           <div className="mb-4 flex items-center justify-between">
//             <span className="font-semibold text-amber-100">
//               Total Price
//             </span>

//             <span className="text-2xl font-extrabold text-amber-300">
//               $
//               {cart
//                 .reduce((total, product) => total + product.price, 0)
//                 .toFixed(2)}
//             </span>
//           </div>

//           <button
//             disabled={cart.length === 0}
//             className="w-full rounded-xl bg-amber-400 py-3 font-bold text-amber-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {
      // ignore storage errors
    }
  }, [cart]);

  // Add product to cart (increase quantity if it already exists)
  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  // Change quantity (+1 / -1). Removes the item if quantity reaches 0
  function changeQuantity(id, amount) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove product from cart completely
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // Toggle favorite
  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5[bg-gradient-to-br] from-[#17120D] via-[#292016] to-[#3B2A1A]">
        <ClipLoader color="#FCD34D" size={65} />
        <p className="animate-pulse text-xl font-semibold text-amber-300">
          Loading Products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#17120D] p-6">
        <p className="rounded-2xl bg-red-100 p-5 font-semibold text-red-700">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen [bg-gradient-to-br] from-[#17120D] via-[#292016] to-[#3B2A1A] px-5 py-12 sm:px-8">
      {/* Shopping Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        aria-label={`Open cart, ${itemsCount} items`}
        className="fixed right-6 top-6 z-40 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-bold text-amber-950 shadow-xl transition hover:scale-105 hover:bg-amber-300"
      >
        <span className="text-xl">🛒</span>
        Cart
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-950 px-1 text-xs text-amber-100">
          {itemsCount}
        </span>
      </button>

      {/* Page Header */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Discover Our Collection
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-amber-300 sm:text-5xl">
          Our Products
        </h1>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-400"></div>

        <p className="mx-auto mt-5 max-w-xl text-amber-100">
          Find your favorite products with the best quality and prices.
        </p>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const isFavorite = favorites.includes(product.id);

          return (
            <div
              key={product.id}
              className="group w-full max-w-80 overflow-hidden rounded-3xl border border-amber-200/20 bg-amber-50 p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold capitalize text-amber-950">
                  {product.category}
                </span>

                <button
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  aria-pressed={isFavorite}
                  className={`text-2xl transition hover:scale-110 ${
                    isFavorite ? "text-red-500" : "text-amber-800"
                  }`}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
              </div>

              <div className="flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-5">
                <h2 className="line-clamp-1 text-lg font-bold text-amber-950">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-500">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-amber-200 pt-4">
                  <p className="text-xl font-extrabold text-amber-800">
                    ${product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="rounded-xl bg-amber-800 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-amber-950 active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dark Background Behind Cart */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-40 bg-black/60"
        ></div>
      )}

      {/* Side Cart */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[#211910] shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between border-b border-amber-400/30 p-6">
          <h2 className="text-2xl font-extrabold text-amber-300">
            🛒 My Cart ({itemsCount})
          </h2>

          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="rounded-lg px-3 py-1 text-3xl text-amber-300 transition hover:bg-amber-400/20 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Cart Products */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <p className="mt-10 text-center text-amber-100/70">
              Your cart is empty 🛒
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-amber-400/20 bg-amber-50 p-3"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-20 w-20 rounded-xl bg-white object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 font-bold text-amber-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-extrabold text-amber-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.title}`}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-200 font-bold text-amber-950 transition hover:bg-amber-300"
                      >
                        −
                      </button>

                      <span className="min-w-6 text-center font-bold text-amber-950">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Increase quantity of ${item.title}`}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-200 font-bold text-amber-950 transition hover:bg-amber-300"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-semibold text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        <div className="border-t border-amber-400/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold text-amber-100">Total Price</span>

            <span className="text-2xl font-extrabold text-amber-300">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            disabled={cart.length === 0}
            className="w-full rounded-xl bg-amber-400 py-3 font-bold text-amber-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}