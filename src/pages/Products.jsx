import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

export const products = [
  {
    id: 1,
    name: "Date & Almond Energy Bar",
    nameAr: "بار التمر واللوز",
    price: 35,
    categories: ["High Protein", "Healthy Snacks"],
    image: product1,
  },
  {
    id: 2,
    name: "Keto Brownies",
    nameAr: "براونيز كيتو خالي من الجلوتين",
    price: 55,
    categories: ["Keto", "Gluten-Free"],
    image: product3,
  },
  {
    id: 3,
    name: "Natural Peanut Butter",
    nameAr: "زبدة فول سوداني بدون سكر",
    price: 95,
    categories: ["Vegan", "Healthy Snacks"],
    image: product2,
  },
  {
    id: 4,
    name: "Kids School Box",
    nameAr: "صندوق المدارس للأطفال",
    price: 300,
    categories: ["Healthy Snacks"],
    image: product4,
  },
];

const categories = [
  "All",
  "Keto",
  "Gluten-Free",
  "Vegan",
  "High Protein",
  "Healthy Snacks",
];

export default function Products() {
  const { darkMode } = useTheme();
  const { addToCart } = useCart();

  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(urlSearch);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tamra-favorites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tamra-favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  }

  const filteredProducts = products.filter((product) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.nameAr.toLowerCase().includes(searchText) ||
      product.categories.some((category) =>
        category.toLowerCase().includes(searchText)
      );

    const matchesCategory =
      selectedCategory === "All" ||
      product.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  const mutedText = darkMode
    ? "text-[#fce1ce]/70"
    : "text-[#662714]/70";

  return (
    <main className={`min-h-screen px-4 py-10 md:px-10 ${pageStyle}`}>
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-[#ee6326]">
            Tamra Healthy Bites
          </p>

          <h1 className="mb-3 text-3xl font-bold md:text-5xl">
            Our Products
          </h1>

          <p className={mutedText}>
            Discover healthy snacks made for your everyday life.
          </p>

          <Link
            to="/wishlist"
            className="mt-4 inline-block font-bold text-[#ee6326] transition hover:underline"
          >
            ❤️ My Wishlist ({favorites.length})
          </Link>
        </div>

        {/* Search */}
        <div className="mx-auto mb-6 max-w-2xl">
          <label
            htmlFor="product-search"
            className="mb-2 block font-semibold"
          >
            Search Products
          </label>

          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search in English or Arabic..."
            className={`w-full rounded-xl border border-[#ee9537] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#ee6326] ${
              darkMode
                ? "bg-[#45251c] text-[#fce1ce] placeholder:text-[#fce1ce]/50"
                : "bg-white text-[#662714] placeholder:text-[#662714]/50"
            }`}
          />
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <p className="mb-3 text-center font-semibold">
            Filter by Category
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer rounded-full border px-5 py-2 font-semibold transition ${
                    isSelected
                      ? "border-[#ee6326] bg-[#ee6326] text-white"
                      : darkMode
                      ? "border-[#ee9537] text-[#fce1ce] hover:bg-[#45251c]"
                      : "border-[#ee9537] text-[#662714] hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>

          {(search !== "" || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="cursor-pointer font-semibold text-[#ee6326] underline"
            >
              Clear Search & Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article
                  key={product.id}
                  className={`relative overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${cardStyle}`}
                >
                  {/* Favorite Button */}
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={
                      isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                    aria-pressed={isFavorite}
                    className="absolute right-3 top-3 z-10 rounded-full bg-white p-3 text-2xl shadow-md transition hover:scale-110"
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>

                  {/* Product Image */}
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.nameAr}
                      className="h-56 w-full object-cover transition duration-300 hover:opacity-90"
                    />
                  </Link>

                  <div className="p-5">
                    {/* Categories */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      {product.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-[#ee9537]/20 px-3 py-1 text-xs font-semibold text-[#ee6326]"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* Product Name */}
                    <Link
                      to={`/products/${product.id}`}
                      className="transition hover:text-[#ee6326]"
                    >
                      <h2 className="mb-1 text-lg font-bold">
                        {product.name}
                      </h2>
                    </Link>

                    <p className={`mb-4 text-sm ${mutedText}`}>
                      {product.nameAr}
                    </p>

                    {/* Price */}
                    <p className="mb-4 text-lg font-bold text-[#ee6326]">
                      {product.price} EGP
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="w-full cursor-pointer rounded-full bg-[#ee6326] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ee9537]"
                      >
                        Add to Cart
                      </button>

                      <Link
                        to={`/products/${product.id}`}
                        className="w-full rounded-full border border-[#ee6326] px-4 py-2 text-center text-sm font-bold text-[#ee6326] transition hover:bg-[#ee6326] hover:text-white"
                      >
                        Product Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={`rounded-2xl p-10 text-center ${cardStyle}`}>
            <p className="mb-3 text-4xl">🔎</p>

            <h2 className="mb-2 text-xl font-bold">No products found</h2>

            <p className={`mb-5 ${mutedText}`}>
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="cursor-pointer rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white transition hover:bg-[#ee9537]"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* Shopping Cart Link */}
        <div className="mt-10 text-center">
          <Link
            to="/cart"
            className="inline-block cursor-pointer font-bold text-[#ee6326] underline"
          >
            View Shopping Cart →
          </Link>
        </div>
      </div>
    </main>
  );
}