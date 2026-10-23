
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المنتجات", path: "/products" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
    { name: "المفضلة", path: "/wishlist" },
    { name: "طلباتي", path: "/orders" },
  ];

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    setSearch("");
    setSearchOpen(false);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        darkMode
          ? "bg-[#662714] text-white"
          : "bg-white text-[#662714]"
      } shadow-lg`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-5 px-6 py-5 sm:px-10 lg:px-14 xl:flex-nowrap xl:px-16 2xl:px-20">

        {/* اللوجو */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={darkMode ? logo2 : logo}
            alt="تمرة"
            className="h-8 w-auto object-contain sm:h-10 lg:h-12"
          />
        </Link>

        {/* روابط الصفحات */}
        <div className="hidden items-center gap-5 whitespace-nowrap xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-base font-semibold transition-colors duration-200 hover:text-[#EE6326] 2xl:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* الأزرار */}
        <div className="flex shrink-0 items-center gap-3">

          {/* البحث */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="البحث عن المنتجات"
              aria-expanded={searchOpen}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EE9537]/60 bg-[#EE9537]/10 transition hover:bg-[#EE9537]/25 sm:h-14 sm:w-14"
            >
              <Search size={23} />
            </button>

            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className={`absolute left-0 top-16 z-50 flex w-280px items-center gap-2 rounded-2xl border border-[#EE9537]/40 p-3 shadow-xl sm:w-[320px] ${
                  darkMode
                    ? "bg-[#662714] text-white"
                    : "bg-white text-[#662714]"
                }`}
              >
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحثي عن منتج..."
                  aria-label="ابحثي عن منتج"
                  autoFocus
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none placeholder:text-current/50"
                />

                <button
                  type="submit"
                  aria-label="تنفيذ البحث"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE6326] text-white transition hover:bg-[#EE9537]"
                >
                  <Search size={19} />
                </button>
              </form>
            )}
          </div>

          {/* السلة */}
          <Link
            to="/cart"
            onClick={closeMenu}
            aria-label={`سلة التسوق، عدد المنتجات ${cartCount}`}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#EE6326] text-white transition hover:bg-[#EE9537] sm:h-14 sm:w-14"
          >
            <ShoppingCart size={23} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-[#662714] px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* الوضع الليلي */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "الوضع الفاتح" : "الوضع الداكن"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EE9537]/60 transition hover:bg-[#EE9537]/20 sm:h-14 sm:w-14"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* قائمة الموبايل */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EE9537]/60 xl:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* روابط الموبايل */}
        {menuOpen && (
          <div className="flex w-full flex-col gap-1 border-t border-[#EE9537]/30 pt-4 xl:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold transition hover:bg-[#EE9537]/15 hover:text-[#EE6326]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
