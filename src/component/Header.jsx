
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
import logo from "../";

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
          ? "bg-[#662714] text-[#fff4e8]"
          : "bg-[#fffaf5] text-[#662714]"
      } shadow-lg`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5 lg:px-12 xl:flex-nowrap xl:px-16 2xl:px-20">
        {/* اللوجو */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="تمرة"
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </Link>

        {/* روابط الصفحات للشاشات الكبيرة */}
        <div className="hidden items-center gap-4 whitespace-nowrap xl:flex 2xl:gap-6">
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* البحث */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="البحث عن المنتجات"
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EE9537]/60 bg-[#EE9537]/10 transition hover:bg-[#EE9537]/25 sm:h-12 sm:w-12"
            >
              <Search size={21} />
            </button>

            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className={`absolute left-0 top-12 z-50 flex w-[min(280px,calc(100vw-32px))] items-center gap-2 rounded-2xl border border-[#EE9537]/40 p-3 shadow-xl sm:top-14 sm:w-[320px] ${
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
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-current/50"
                />

                <button
                  type="submit"
                  aria-label="تنفيذ البحث"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EE6326] text-white transition hover:bg-[#EE9537]"
                >
                  <Search size={18} />
                </button>
              </form>
            )}
          </div>

          {/* السلة */}
          <Link
            to="/cart"
            onClick={closeMenu}
            aria-label={`سلة التسوق، عدد المنتجات ${cartCount}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#EE6326] text-white transition hover:bg-[#EE9537] sm:h-12 sm:w-12"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#662714] px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* الوضع الليلي */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "الوضع الفاتح" : "الوضع الداكن"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EE9537]/60 transition hover:bg-[#EE9537]/20 sm:h-12 sm:w-12"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* زر قائمة الموبايل */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EE9537]/60 xl:hidden sm:h-12 sm:w-12"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* قائمة الموبايل والتابلت */}
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
