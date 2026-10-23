
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navStyle = darkMode
    ? "bg-[#662714] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const linkStyle =
    "text-base xl:text-lg font-medium transition hover:text-[#ee6326]";

  function handleSearch(e) {
    e.preventDefault();

    navigate(
      `/products?search=${encodeURIComponent(search.trim())}`
    );

    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      className={`${navStyle} fixed top-0 left-0 z-50 w-full px-5 py-5 shadow-md transition-colors duration-300 md:px-10 lg:py-6`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-4xl font-bold tracking-wide"
        >
          Tamra<span className="text-[#ee6326]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 font-medium xl:flex">
          <Link to="/" className={linkStyle}>
            Home
          </Link>

          <Link to="/products" className={linkStyle}>
            Products
          </Link>

          <Link to="/about" className={linkStyle}>
            About Us
          </Link>

          <Link to="/contact" className={linkStyle}>
            Contact Us
          </Link>

          <Link to="/wishlist" className={linkStyle}>
            Wishlist
          </Link>

          <Link to="/orders" className={linkStyle}>
            My Orders
          </Link>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="order-last flex w-full items-center gap-3 rounded-full border border-[#662714]/20 bg-white px-5 py-3 text-[#662714] [sm:order-none] sm:w-auto sm:max-w-sm sm:flex-1"
        >
          <span aria-hidden="true" className="text-lg">
            🔍
          </span>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full min-w-0 bg-transparent text-base outline-none placeholder:text-[#662714]/60"
          />

          <button
            type="submit"
            className="text-base font-semibold text-[#ee6326] transition hover:text-[#662714]"
          >
            Search
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rounded-full border border-[#ee6326] px-4 py-3 text-lg transition hover:bg-[#ee9537]"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative inline-flex items-center gap-2 text-base font-semibold lg:text-lg"
          >
            <span>🛒 Cart</span>

            {cartCount > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ee6326] px-1.5 text-sm font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-current px-4 py-3 text-lg xl:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-5 flex flex-col gap-4 border-t border-current/20 pt-5 xl:hidden">
          <Link to="/" onClick={closeMenu} className={linkStyle}>
            Home
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
            className={linkStyle}
          >
            Products
          </Link>

          <Link to="/about" onClick={closeMenu} className={linkStyle}>
            About Us
          </Link>

          <Link to="/contact" onClick={closeMenu} className={linkStyle}>
            Contact Us
          </Link>

          <Link
            to="/wishlist"
            onClick={closeMenu}
            className={linkStyle}
          >
            Wishlist
          </Link>

          <Link to="/orders" onClick={closeMenu} className={linkStyle}>
            My Orders
          </Link>
        </div>
      )}
    </nav>
  );
}
