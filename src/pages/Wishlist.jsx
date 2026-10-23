import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./Products.jsx";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

export default function Wishlist() {
  const { darkMode } = useTheme();
  const { addToCart } = useCart();

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

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((itemId) => itemId !== id));
  }

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  return (
    <main
      dir="rtl"
      className={`min-h-screen px-4 py-10 md:px-10 ${pageStyle}`}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-center text-3xl font-black md:text-5xl">
          قائمة المفضلة ❤️
        </h1>

        <p className="mb-10 text-center font-semibold opacity-75">
          منتجات تمرة الصحية اللي بتحبها.
        </p>

        {favoriteProducts.length === 0 ? (
          <div
            className={`rounded-2xl p-10 text-center shadow ${cardStyle}`}
          >
            <p className="mb-4 text-5xl">🤍</p>

            <h2 className="mb-3 text-xl font-black">
              قائمة المفضلة فارغة
            </h2>

            <p className="mb-6 font-semibold">
              اختاري المنتجات اللي بتحبها واضغط على القلب.
            </p>

            <Link
              to="/products"
              className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-black text-white hover:bg-[#ee9537]"
            >
              اكتشفي المنتجات
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteProducts.map((product) => (
              <article
                key={product.id}
                className={`overflow-hidden rounded-2xl shadow-md ${cardStyle}`}
              >
                <img
                  src={product.image}
                  alt={product.nameAr || product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="mb-2 text-lg font-black">
                    {product.nameAr || product.name}
                  </h2>

                  {product.nameAr && (
                    <p className="mb-4 text-sm font-semibold opacity-75">
                      {product.name}
                    </p>
                  )}

                  <p className="mb-4 text-lg font-black text-[#ee6326]">
                    {product.price} جنيه
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="flex-1 rounded-full bg-[#ee6326] px-4 py-2 font-black text-white hover:bg-[#ee9537]"
                    >
                      أضيف للسلة
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFavorite(product.id)}
                      className="rounded-full border border-[#ee6326] px-4 py-2 font-bold text-[#ee6326] hover:bg-[#ee6326] hover:text-white"
                    >
                      إزالة ❤️
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}