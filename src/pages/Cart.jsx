
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

  const cardStyle = darkMode
    ? "bg-[#45251c] border border-[#fce1ce]/10"
    : "bg-white border border-[#662714]/10";

  return (
    <div
      className={`min-h-screen p-5 md:p-8 ${
        darkMode
          ? "bg-[#281713] text-[#fce1ce]"
          : "bg-[#fce1ce] text-[#662714]"
      }`}
    >
      {/* Page Title */}
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-bold md:text-4xl">
          Shopping Cart 🛒
        </h1>

        <p className="mt-2 opacity-75">
          Review your healthy choices before checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart */
        <div
          className={`mx-auto max-w-6xl rounded-2xl p-8 text-center md:p-12 ${cardStyle}`}
        >
          <div className="mb-4 text-6xl">🛍️</div>

          <h2 className="mb-3 text-2xl font-bold">
            Your cart is empty
          </h2>

          <p className="mb-6 opacity-75">
            You haven't added any products yet.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-7 py-3 font-bold text-white transition hover:bg-[#ee9537]"
          >
            Go to Products
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Cart Products */}
          <div className="space-y-5 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col gap-5 rounded-2xl p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center ${cardStyle}`}
              >
                {/* Product Image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-full rounded-xl object-cover sm:h-32 sm:w-32"
                  />
                )}

                {/* Product Details */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold md:text-xl">
                    {item.name}
                  </h2>

                  {item.nameAr && (
                    <p className="mt-1 text-sm opacity-75">
                      {item.nameAr}
                    </p>
                  )}

                  <p className="mt-2 font-semibold text-[#ee6326]">
                    {item.price} EGP each
                  </p>

                  <p className="mt-1 text-sm opacity-75">
                    Subtotal: {item.price * item.quantity} EGP
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ee9537] text-xl font-bold text-white transition hover:bg-[#ee6326] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>

                  <span
                    className="min-w-6 text-center text-lg font-bold"
                    aria-live="polite"
                  >
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase quantity of ${item.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ee9537] text-xl font-bold text-white transition hover:bg-[#ee6326]"
                  >
                    +
                  </button>
                </div>

                {/* Remove Product */}
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="self-start font-semibold text-red-500 transition hover:text-red-700 sm:self-center"
                >
                  🗑 Remove
                </button>
              </div>
            ))}

            <Link
              to="/products"
              className="inline-block font-semibold text-[#ee6326] transition hover:underline"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div
            className={`rounded-2xl p-6 shadow-md lg:sticky lg:top-36 ${cardStyle}`}
          >
            <h2 className="mb-5 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex items-center justify-between gap-3 border-b border-current/15 pb-4">
              <span className="opacity-75">Products</span>
              <span className="font-semibold">
                {cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-current/15 py-4">
              <span className="opacity-75">Subtotal</span>
              <span className="font-semibold">
                {totalPrice} EGP
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 py-5">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-[#ee6326]">
                {totalPrice} EGP
              </span>
            </div>

            <Link
              to="/checkout"
              className="block w-full rounded-full bg-[#ee6326] px-6 py-4 text-center font-bold text-white transition hover:bg-[#ee9537]"
            >
              Proceed to Checkout →
            </Link>

            <p className="mt-4 text-center text-sm opacity-70">
              Thank you for choosing Tamra Healthy Bites!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
