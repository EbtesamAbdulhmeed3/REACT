
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { useTheme } from "../ThemeContext.jsx";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode
          ? "bg-[#281713] text-[#fce1ce]"
          : "bg-[#fce1ce] text-[#662714]"
      }`}
    >
      <h1 className="mb-6 text-3xl font-bold">
        Shopping Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div>
          <p className="mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-5 py-3 font-bold text-white"
          >
            Go to Products
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`flex flex-wrap items-center justify-between gap-4 rounded-xl p-4 ${
                  darkMode ? "bg-[#45251c]" : "bg-white"
                }`}
              >
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>{item.price} EGP</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-[#ee9537] px-3 py-1 text-white"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded bg-[#ee9537] px-3 py-1 text-white"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                
                   className="cursor-pointer font-bold text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Total: {totalPrice} EGP
          </h2>
          <Link
  to="/checkout"
  className="mt-5 inline-block cursor-pointer rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white transition hover:bg-[#ee9537]"
>
  Proceed to Checkout
</Link>
        </>
      )}
    </div>
  );
}
