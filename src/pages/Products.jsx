import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";

import dark from "../assets/dark.svg";
import white from "../assets/white.svg";

import { useTheme } from "../ThemeContext";
import { useCart } from "../CartContext";

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
  { name: "الكل", value: "All" },
  { name: "كيتو", value: "Keto" },
  { name: "خالي من الجلوتين", value: "Gluten-Free" },
  { name: "نباتي", value: "Vegan" },
  { name: "غني بالبروتين", value: "High Protein" },
  { name: "سناكس صحية", value: "Healthy Snacks" },
];

export default function Products() {
  const { darkMode } = useTheme();
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(
        localStorage.getItem("tamra-favorites") || "[]"
      );

      setFavorites(
        Array.isArray(savedFavorites) ? savedFavorites : []
      );
    } catch {
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId];

      localStorage.setItem(
        "tamra-favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const filteredProducts = products.filter((product) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.nameAr.includes(search.trim()) ||
      product.categories.some((category) =>
        category.toLowerCase().includes(searchText)
      );

    const matchesCategory =
      selectedCategory === "All" ||
      product.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const pageStyle = darkMode
    ? "text-white"
    : "text-[#3B1608]";

  const mutedText = darkMode
    ? "text-[#F0D8CA]"
    : "text-[#4A2113]";

  const cardStyle = darkMode
    ? "border border-[#754331] bg-[#24130E] text-white"
    : "border border-[#D6B5A2] bg-white text-[#3B1608]";

  const inputStyle = darkMode
    ? "border-[#8B5A46] bg-[#24130E] text-white placeholder:text-[#D6B8A8] focus:border-[#ee9537]"
    : "border-[#B98C75] bg-white text-[#3B1608] placeholder:text-[#795548] focus:border-[#ee6326]";

  return (
    <main
      dir="rtl"
      className={`relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-10 ${pageStyle}`}
      style={{
        backgroundColor: darkMode ? "#281713" : "#FCE1CE",
      }}
    >
      {/* الخلفية بشفافية 15% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${darkMode ? dark : white})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
          opacity: 0.15,
        }}
      />

      {/* محتوى الصفحة */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* عنوان الصفحة */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            منتجات تمرة
          </h1>

          <p
            className={`mx-auto max-w-2xl text-base font-semibold leading-8 sm:text-lg ${mutedText}`}
          >
            اختاري سناكس صحية ولذيذة تناسب يومك، بمكونات بسيطة وطعم يتحب.
          </p>

          <Link
            to="/wishlist"
            className="mt-4 inline-block font-extrabold text-[#ee6326] transition hover:underline"
          >
            ❤️ قائمة المفضلة ({favorites.length})
          </Link>
        </div>

        {/* البحث */}
        <div className="mx-auto mb-8 max-w-2xl">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="ابحثي عن المنتج بالعربي أو الإنجليزي..."
            aria-label="البحث عن المنتجات"
            className={`w-full rounded-full border-2 px-5 py-4 text-base font-semibold outline-none transition ${inputStyle}`}
          />
        </div>

        {/* التصنيفات */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isSelected =
              selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  setSelectedCategory(category.value)
                }
                className={`cursor-pointer rounded-full border-2 px-5 py-3 text-sm font-extrabold transition sm:text-base ${
                  isSelected
                    ? "border-[#ee6326] bg-[#ee6326] text-white shadow-md"
                    : darkMode
                    ? "border-[#9B654C] bg-[#24130E] text-white hover:border-[#ee9537] hover:bg-[#45251A]"
                    : "border-[#B98C75] bg-white text-[#3B1608] hover:border-[#ee6326] hover:bg-[#FFF0E5]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* عدد المنتجات */}
        <div className="mb-6">
          <p className={`text-base font-extrabold ${pageStyle}`}>
            عدد المنتجات: {filteredProducts.length}
          </p>
        </div>

        {/* عرض المنتجات */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article
                  key={product.id}
                  className={`overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${cardStyle}`}
                >
                  {/* صورة المنتج */}
                  <div className="relative">
                    <Link
                      to={`/products/${product.id}`}
                      aria-label={`عرض تفاصيل ${product.nameAr}`}
                      className="block"
                    >
                      <img
                        src={product.image}
                        alt={product.nameAr}
                        className="h-56 w-full object-cover"
                      />
                    </Link>

                    {/* زر المفضلة */}
                    <button
                      type="button"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={
                        isFavorite
                          ? "إزالة المنتج من المفضلة"
                          : "إضافة المنتج للمفضلة"
                      }
                      title={
                        isFavorite
                          ? "إزالة من المفضلة"
                          : "إضافة للمفضلة"
                      }
                      className={`absolute left-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-2xl shadow-md transition ${
                        isFavorite
                          ? "bg-[#ee6326] text-white"
                          : "bg-white text-[#3B1608] hover:bg-[#FFF0E5]"
                      }`}
                    >
                      {isFavorite ? "♥" : "♡"}
                    </button>
                  </div>

                  {/* تفاصيل المنتج */}
                  <div className="p-5">
                    <Link
                      to={`/products/${product.id}`}
                      className="block"
                    >
                      <h2 className="mb-3 text-xl font-extrabold leading-8 text-current transition hover:text-[#ee6326]">
                        {product.nameAr}
                      </h2>
                    </Link>

                    <p
                      dir="ltr"
                      className={`mb-4 text-right text-sm font-semibold leading-6 ${mutedText}`}
                    >
                      {product.name}
                    </p>

                    {/* التصنيفات */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {product.categories.map((category) => {
                        const categoryLabel =
                          categories.find(
                            (item) => item.value === category
                          )?.name || category;

                        return (
                          <span
                            key={category}
                            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                              darkMode
                                ? "bg-[#503025] text-[#FFE1CC]"
                                : "bg-[#FFF0E5] text-[#542313]"
                            }`}
                          >
                            {categoryLabel}
                          </span>
                        );
                      })}
                    </div>

                    {/* السعر */}
                    <p className="mb-5 text-2xl font-extrabold text-[#ee6326]">
                      {product.price} جنيه
                    </p>

                    {/* زر السلة والتفاصيل */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="flex-1 cursor-pointer rounded-full bg-[#ee6326] px-3 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#d94f18] hover:shadow-md sm:text-base"
                      >
                        أضف إلى السلة 🛒
                      </button>

                      <Link
                        to={`/products/${product.id}`}
                        aria-label={`عرض تفاصيل ${product.nameAr}`}
                        title="عرض تفاصيل المنتج"
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-xl font-extrabold transition hover:-translate-y-0.5 hover:bg-[#ee6326] hover:text-white ${
                          darkMode
                            ? "border-[#ee9537] bg-[#24130E] text-[#FFB36B]"
                            : "border-[#ee6326] bg-white text-[#9b3e18]"
                        }`}
                      >
                        ←
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* لا توجد منتجات */
          <div
            className={`rounded-3xl border-2 p-8 text-center shadow-md sm:p-12 ${cardStyle}`}
          >
            <p className="mb-3 text-2xl font-extrabold">
              مفيش منتجات مطابقة
            </p>

            <p className={`mb-6 font-semibold ${mutedText}`}>
              جربي تغيّري كلمة البحث أو تختاري تصنيف تاني.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="cursor-pointer rounded-full bg-[#ee6326] px-6 py-3 font-extrabold text-white transition hover:bg-[#d94f18]"
            >
              عرض كل المنتجات
            </button>
          </div>
        )}

        {/* رابط المفضلة والسلة */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/wishlist"
            className="rounded-full border-2 border-[#ee6326] px-6 py-3 font-extrabold text-[#ee6326] transition hover:bg-[#ee6326] hover:text-white"
          >
            ❤️ قائمة المفضلة
          </Link>

          <Link
            to="/cart"
            className="rounded-full bg-[#ee6326] px-6 py-3 font-extrabold text-white transition hover:bg-[#d94f18]"
          >
            عرض سلة التسوق 
          </Link>
        </div>
      </div>
    </main>
  );
}