
import { Link, useParams } from "react-router-dom";
import { products } from "./Products";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

const productDetails = {
  1: {
    calories: 205,
    weight: "50 جم",
    serving: "قطعة واحدة",
    description:
      "بار طاقة بالتمر واللوز، مناسب كسناك خفيف خلال اليوم أو بين الوجبات.",
    highlights: [
      "حجم مناسب للتنقل",
      "يجمع بين التمر واللوز",
      "اختيار عملي للوجبات الخفيفة",
    ],
    storage: "يُحفظ في مكان بارد وجاف وفقًا لتعليمات العبوة.",
  },
  2: {
    calories: 220,
    weight: "50 جم",
    serving: "قطعة واحدة",
    description:
      "براونيز بالشوكولاتة لمحبي الحلويات، بحجم مناسب للاستمتاع بقطعة صغيرة.",
    highlights: [
      "طعم الشوكولاتة",
      "حجم مناسب كسناك",
      "مصنف ضمن منتجات الكيتو والخالي من الجلوتين حسب بيانات المشروع",
    ],
    storage: "يُحفظ وفقًا لتعليمات العبوة.",
  },
  3: {
    calories: 1475,
    weight: "250 جم",
    serving: "ملعقة 16 جم",
    servingCalories: 95,
    description:
      "زبدة فول سوداني يمكن إضافتها إلى التوست أو الشوفان أو استخدامها مع السناكس.",
    highlights: [
      "عبوة بحجم 250 جم",
      "مناسبة للإفطار والسناكس",
      "يمكن استخدامها مع وصفات متنوعة",
    ],
    storage: "تُحفظ وفقًا لتعليمات العبوة.",
  },
  4: {
    calories: 1230,
    weight: "300 جم",
    serving: "قطعة واحدة 30 جم",
    servingCalories: 123,
    description:
      "صندوق سناكس للأطفال يحتوي على 10 قطع، مناسب للتجهيز للمدرسة وتقسيم السناكس.",
    highlights: [
      "10 قطع في الصندوق",
      "وزن القطعة 30 جم",
      "إجمالي الوزن 300 جم",
    ],
    storage: "يُحفظ وفقًا لتعليمات العبوة.",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const { darkMode } = useTheme();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));
  const details = productDetails[Number(id)];

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  const mutedText = darkMode
    ? "text-[#fce1ce]/70"
    : "text-[#662714]/70";

  if (!product || !details) {
    return (
      <main className={`min-h-screen px-4 py-16 ${pageStyle}`}>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="font-bold text-[#ee6326] underline"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen px-4 py-10 md:px-10 ${pageStyle}`}>
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="mb-8 inline-block font-bold text-[#ee6326] hover:underline"
        >
          ← Back to Products
        </Link>

        <div
          className={`grid overflow-hidden rounded-3xl shadow-lg md:grid-cols-2 ${cardStyle}`}
        >
          <img
            src={product.image}
            alt={product.nameAr}
            className="h-80 w-full object-cover md:h-full md:min-h-420px"
          />

          <div className="p-6 md:p-10">
            <p className="mb-3 font-semibold uppercase tracking-wider text-[#ee6326]">
              Tamra Healthy Bites
            </p>

            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              {product.name}
            </h1>

            <p className={`mb-5 text-lg ${mutedText}`}>
              {product.nameAr}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#ee9537]/20 px-3 py-1 text-sm font-semibold text-[#ee6326]"
                >
                  {category}
                </span>
              ))}
            </div>

            <p className="mb-6 text-3xl font-bold text-[#ee6326]">
              {product.price} EGP
            </p>

            {/* Product specifications */}
            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#ee9537]/15 p-4">
                <p className={`mb-1 text-sm ${mutedText}`}>
                  Weight
                </p>
                <p className="font-bold">{details.weight}</p>
              </div>

              <div className="rounded-xl bg-[#ee9537]/15 p-4">
                <p className={`mb-1 text-sm ${mutedText}`}>
                  Calories
                </p>
                <p className="font-bold">
                  {details.calories.toLocaleString("en-US")} kcal
                </p>
              </div>

              <div className="rounded-xl bg-[#ee9537]/15 p-4">
                <p className={`mb-1 text-sm ${mutedText}`}>
                  Serving Size
                </p>
                <p className="font-bold">{details.serving}</p>
              </div>

              {details.servingCalories && (
                <div className="rounded-xl bg-[#ee9537]/15 p-4">
                  <p className={`mb-1 text-sm ${mutedText}`}>
                    Calories per Serving
                  </p>
                  <p className="font-bold">
                    {details.servingCalories} kcal
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <section className="mb-6">
              <h2 className="mb-2 text-xl font-bold">
                About This Product
              </h2>
              <p className={`leading-7 ${mutedText}`}>
                {details.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-6">
              <h2 className="mb-3 text-xl font-bold">
                Product Highlights
              </h2>
              <ul className="space-y-2">
                {details.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="font-bold text-[#ee6326]">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Storage */}
            <section className="mb-6">
              <h2 className="mb-2 text-lg font-bold">
                Storage Instructions
              </h2>
              <p className={`text-sm leading-6 ${mutedText}`}>
                {details.storage}
              </p>
            </section>

            <button
              type="button"
              onClick={() => addToCart(product)}
              className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white transition hover:bg-[#ee9537]"
            >
              Add to Cart
            </button>

            <Link
              to="/products"
              className="mt-4 block w-full rounded-full border border-[#ee6326] px-6 py-3 text-center font-bold text-[#ee6326] transition hover:bg-[#ee6326] hover:text-white"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <p className={`mt-6 text-center text-sm ${mutedText}`}>
          Note: Calorie values are approximate estimates for this project.
          Please check the actual product label for verified nutritional
          and allergen information.
        </p>
      </div>
    </main>
  );
}
