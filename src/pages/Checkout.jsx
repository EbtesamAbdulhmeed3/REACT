
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { useTheme } from "../ThemeContext.jsx";

export default function Checkout() {
  const {
    cart,
    totalPrice,
    removeFromCart,
  } = useCart();

  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const deliveryFee = cart.length > 0 ? 30 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const order = {
      orderNumber: `TAM-${Date.now()}`,
      customer: formData,
      items: cart,
      subtotal: totalPrice,
      deliveryFee,
      total: finalTotal,
      paymentMethod: "Cash on Delivery",
      createdAt: new Date().toISOString(),
    };

    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("tamra-orders") || "[]"
      );

      localStorage.setItem(
        "tamra-orders",
        JSON.stringify([...savedOrders, order])
      );

      setOrderNumber(order.orderNumber);
      setOrderPlaced(true);

      // Clear the cart after saving the order
      cart.forEach((item) => removeFromCart(item.id));
    } catch (error) {
      console.error("Could not save the order:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  if (orderPlaced) {
    return (
      <main className={`min-h-screen px-4 py-16 ${pageStyle}`}>
        <div
          className={`mx-auto max-w-xl rounded-2xl p-8 text-center shadow-lg ${cardStyle}`}
        >
          <div className="mb-4 text-6xl">✅</div>

          <h1 className="mb-3 text-3xl font-bold">
            Order Placed Successfully!
          </h1>

          <p className="mb-3">
            Thank you for choosing Tamra Healthy Bites.
          </p>

          <p className="mb-6">
            Your order number is:
            <strong className="ml-2 text-[#ee6326]">
              {orderNumber}
            </strong>
          </p>

          <p className="mb-6 text-sm opacity-75">
            Payment method: Cash on Delivery
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white hover:bg-[#ee9537]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className={`min-h-screen px-4 py-16 ${pageStyle}`}>
        <div className={`mx-auto max-w-xl rounded-2xl p-8 text-center ${cardStyle}`}>
          <div className="mb-4 text-5xl">🛒</div>

          <h1 className="mb-3 text-2xl font-bold">
            Your cart is empty
          </h1>

          <p className="mb-6 opacity-75">
            Add some products before checking out.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white hover:bg-[#ee9537]"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen px-4 py-10 md:px-10 ${pageStyle}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-[#ee6326]">
            Tamra Healthy Bites
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 opacity-75">
            Complete your details to place your order.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Customer information */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 rounded-2xl p-6 shadow-md lg:col-span-2 ${cardStyle}`}
          >
            <h2 className="text-2xl font-bold">
              Delivery Information
            </h2>

            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={3}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                pattern="01[0125][0-9]{8}"
                title="Enter a valid 11-digit Egyptian mobile number starting with 010, 011, 012, or 015."
                value={formData.phone}
                onChange={handleChange}
                placeholder="01xxxxxxxxx"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />

              <p className="mt-1 text-sm opacity-70">
                Enter an 11-digit Egyptian mobile number.
              </p>
            </div>

            <div>
              <label htmlFor="address" className="mb-2 block font-semibold">
                Delivery Address *
              </label>

              <textarea
                id="address"
                name="address"
                autoComplete="street-address"
                required
                minLength={8}
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder="City, area, street, building and apartment"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block font-semibold">
                Order Notes (Optional)
              </label>

              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional delivery instructions?"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            <div className="rounded-xl bg-[#ee9537]/15 p-4">
              <h3 className="mb-1 font-bold">
                Payment Method
              </h3>

              <p>💵 Cash on Delivery</p>

              <p className="mt-1 text-sm opacity-75">
                Pay when your order arrives.
              </p>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-4 font-bold text-white transition hover:bg-[#ee9537]"
            >
              Confirm Order · {finalTotal} EGP
            </button>
          </form>

          {/* Order summary */}
          <aside className={`rounded-2xl p-6 shadow-md ${cardStyle}`}>
            <h2 className="mb-5 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3 border-b border-[#ee9537]/30 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>

                    <p className="mt-1 text-sm opacity-70">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="whitespace-nowrap font-semibold">
                    {item.price * item.quantity} EGP
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex justify-between gap-3">
                <span>Subtotal</span>
                <span>{totalPrice} EGP</span>
              </div>

              <div className="flex justify-between gap-3">
                <span>Delivery Fee</span>
                <span>{deliveryFee} EGP</span>
              </div>

              <div className="flex justify-between gap-3 border-t border-[#ee9537]/40 pt-4 text-xl font-bold">
                <span>Total</span>
                <span className="text-[#ee6326]">
                  {finalTotal} EGP
                </span>
              </div>
            </div>

            <Link
              to="/cart"
              className="mt-6 inline-block cursor-pointer font-semibold text-[#ee6326] underline"
            >
              Back to Cart
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
