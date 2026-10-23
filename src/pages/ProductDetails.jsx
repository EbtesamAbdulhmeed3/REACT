

import { Link, useParams } from "react-router-dom";
import { products } from "./Products";
import { useTheme } from "../ThemeContext.jsx";
import { useCart } from "../CartContext.jsx";

import dark from "../assets/dark.svg";
import white from "../assets/white.svg";

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

const categoryNames = {
  "High Protein": "غني بالبروتين",
  "Healthy Snacks": "سناكس صحية",
  Keto: "كيتو",
  "Gluten-Free": "خالي من الجلوتين",
  Vegan: "نباتي",
};

export default function ProductDetails() {
  const { id } = useParams();
  const { darkMode } = useTheme();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));
  const details = productDetails[Number(id)];

  const pageStyle = darkMode ? "text-white" : "text-[#3B1608]";

  const cardStyle = darkMode
    ? "border border-[#754331] bg-[#24130E] text-white"
    : "border border-[#D6B5A2] bg-white text-[#3B1608]";

  const mutedText = darkMode
    ? "text-[#F0D8CA]"
    : "text-[#4A2113]";

  const infoBoxStyle = darkMode
    ? "border border-[#754331] bg-[#38221A]"
    : "border border-[#E7C8B4] bg-[#FFF4EB]";

  if (!product || !details) {
    return (
      <main
        dir="rtl"
        className={`relative min-h-screen overflow-hidden px-4 py-16 ${pageStyle}`}
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

        <div className="relative z-10 mx-auto max-w-xl text-center">
          <h1 className="mb-4 text-3xl font-extrabold">
            المنتج غير موجود
          </h1>

          <Link
            to="/products"
            className="font-extrabold text-[#ee6326] underline"
          >
            الرجوع إلى المنتجات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className={`relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 md:px-10 ${pageStyle}`}
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
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* الرجوع للمنتجات */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 font-extrabold text-[#ee6326] transition hover:text-[#d94f18]"
        >
          <span>→</span>
          الرجوع إلى المنتجات
        </Link>

        {/* تفاصيل المنتج */}
        <div
          className={`grid overflow-hidden rounded-3xl shadow-xl md:grid-cols-2 ${cardStyle}`}
        >
          {/* صورة المنتج */}
          <div
            className={`flex min-h-[300px] items-center justify-center p-5 sm:p-8 md:min-h-[520px] ${
              darkMode ? "bg-[#1D100C]" : "bg-[#FFF4EB]"
            }`}
          >
            <img
              src={product.image}
              alt={product.nameAr}
              className="block h-auto max-h-[420px] w-full max-w-[420px] rounded-2xl object-contain"
            />
          </div>

          {/* معلومات المنتج */}
          <div className="p-5 sm:p-7 md:p-10">
            <p className="mb-3 text-sm font-extrabold tracking-wide text-[#ee6326]">
              تمرة — سناكس صحية
            </p>

            <h1 className="mb-3 text-2xl font-extrabold leading-relaxed sm:text-3xl md:text-4xl">
              {product.nameAr}
            </h1>

            <p className={`mb-5 text-base font-bold ${mutedText}`}>
              {product.name}
            </p>

            {/* التصنيفات */}
            <div className="mb-5 flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <span
                  key={category}
                  className={`rounded-full px-3 py-2 text-sm font-extrabold ${
                    darkMode
                      ? "bg-[#503025] text-[#FFE1CC]"
                      : "bg-[#FFF0E5] text-[#542313]"
                  }`}
                >
                  {categoryNames[category] || category}
                </span>
              ))}
            </div>

            {/* السعر */}
            <p className="mb-6 text-3xl font-extrabold text-[#ee6326]">
              {product.price} جنيه
            </p>

            {/* المواصفات */}
            <h2 className="mb-3 text-xl font-extrabold">
              تفاصيل المنتج
            </h2>

            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className={`rounded-xl p-4 ${infoBoxStyle}`}>
                <p className={`mb-2 text-sm font-bold ${mutedText}`}>
                  الوزن
                </p>
                <p className="font-extrabold">{details.weight}</p>
              </div>

              <div className={`rounded-xl p-4 ${infoBoxStyle}`}>
                <p className={`mb-2 text-sm font-bold ${mutedText}`}>
                  السعرات الحرارية للعبوة
                </p>
                <p className="font-extrabold">
                  {details.calories.toLocaleString("en-US")} سعرة
                </p>
              </div>

              <div className={`rounded-xl p-4 ${infoBoxStyle}`}>
                <p className={`mb-2 text-sm font-bold ${mutedText}`}>
                  حجم الحصة
                </p>
                <p className="font-extrabold">{details.serving}</p>
              </div>

              {details.servingCalories && (
                <div className={`rounded-xl p-4 ${infoBoxStyle}`}>
                  <p className={`mb-2 text-sm font-bold ${mutedText}`}>
                    السعرات في الحصة
                  </p>
                  <p className="font-extrabold">
                    {details.servingCalories} سعرة
                  </p>
                </div>
              )}
            </div>

            {/* وصف المنتج */}
            <section className="mb-7">
              <h2 className="mb-3 text-xl font-extrabold">
                عن المنتج
              </h2>

              <p className={`text-base font-medium leading-8 ${mutedText}`}>
                {details.description}
              </p>
            </section>

            {/* مميزات المنتج */}
            <section className="mb-7">
              <h2 className="mb-4 text-xl font-extrabold">
                مميزات المنتج
              </h2>

              <ul className="space-y-3">
                {details.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-base font-semibold leading-7"
                  >
                    <span className="font-extrabold text-[#ee6326]">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* طريقة الحفظ */}
            <section className="mb-7">
              <h2 className="mb-3 text-lg font-extrabold">
                طريقة الحفظ
              </h2>

              <p className={`text-base font-medium leading-7 ${mutedText}`}>
                {details.storage}
              </p>
            </section>

            {/* الأزرار */}
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-4 font-extrabold text-white shadow-md transition hover:bg-[#d94f18]"
            >
              أضيفي إلى السلة 🛒
            </button>

            <Link
              to="/products"
              className="mt-4 block w-full rounded-full border-2 border-[#ee6326] px-6 py-3 text-center font-extrabold text-[#ee6326] transition hover:bg-[#ee6326] hover:text-white"
            >
              متابعة التسوق
            </Link>
          </div>
        </div>

        {/* تنبيه السعرات */}
        <p className={`mt-6 text-center text-sm font-semibold leading-7 ${mutedText}`}>
          قيم السعرات الحرارية تقديرية وفق بيانات المشروع. يُرجى مراجعة
          ملصق العبوة للتأكد من المعلومات الغذائية ومسببات الحساسية.
        </p>
      </div>
    </main>
  );
}
