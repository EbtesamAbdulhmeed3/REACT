


import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  const navStyle = darkMode
    ? "bg-[#662714] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const linkStyle = "transition hover:text-[#ee6326]";

  return (
    <nav
      className={`${navStyle} relative z-50 px-5 py-4 transition-colors duration-300 md:px-10`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-3xl font-bold">
          Tamra<span className="text-[#ee6326]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 font-medium lg:flex">
          <Link to="/" className={linkStyle}>Home</Link>
          <Link to="/products" className={linkStyle}>Products</Link>
          <Link to="/about" className={linkStyle}>About Us</Link>
          <Link to="/orders" className={linkStyle}>My Orders</Link>
          <Link to="/wishlist" className={linkStyle}>
  ❤️ Wishlist
</Link>
        </div>

        {/* Search */}
        <div className="order-last flex w-full items-center gap-2 rounded-full border border-[#662714]/20 bg-white px-4 py-2 text-[#662714] [sm:order-none] sm:w-auto sm:flex-1 sm:max-w-xs">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#662714]/60"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-[#ee6326] px-3 py-2 transition hover:bg-[#ee9537]"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2"
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ee6326] px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-current px-3 py-2 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-current/20 pt-4 lg:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className={linkStyle}>
            Products
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={linkStyle}>
            About Us
          </Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)} className={linkStyle}>
            My Orders
          </Link>
        </div>
      )}
    </nav>
  );
}
