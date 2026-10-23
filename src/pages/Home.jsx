

// export default function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
//       <p>This is the home page.</p>
//     </div>
//   );
// }





import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

const products = [
  {
    id: 1,
    name: "بار التمر واللوز",
    category: "وجبات صحية",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "براونيز كيتو",
    category: "خالي من الجلوتين",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "زبدة فول سوداني طبيعية",
    category: "مكونات طبيعية",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1505576633757-0ac1084af824?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "صندوق الوجبات المدرسية",
    category: "للأطفال",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  const { darkMode } = useTheme();

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const mutedText = darkMode
    ? "text-[#fce1ce]/75"
    : "text-[#662714]/75";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  return (
    <main
      dir="rtl"
      className={`${pageStyle} min-h-screen transition-colors duration-300`}
    >
      {/* القسم الرئيسي بالفيديو */}
      <section className="relative flex min-h-560px items-center overflow-hidden bg-[#281713] md:min-h-650px">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1600&q=85"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* طبقة فوق الفيديو لتوضيح الكلام */}
        <div className="absolute inset-0 [bg-gradient-to-l] from-[#281713]/95 via-[#281713]/70 to-[#281713]/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
          <div className="max-w-2xl animate-[fadeIn_1s_ease-out]">
            <span className="mb-6 inline-block rounded-full border border-[#ee9537]/60 bg-[#662714]/50 px-5 py-2 text-sm font-bold text-[#ee9537] sm:text-base">
              طعم طبيعي... وحياة أفضل
            </span>

            <h1 className="text-4xl font-extrabold leading-1.5 text-white sm:text-5xl md:text-6xl lg:text-7xl">
              صحتك تستاهل
              <span className="block text-[#ee9537]">
                حاجة حلوة!
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-9 text-white/90 sm:text-lg md:text-xl">
              اكتشفي عالم من الوجبات الصحية اللذيذة، بمكونات طبيعية
              وطعم يخلي كل لحظة أحلى مع تمرة.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-full bg-[#ee6326] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ee9537]"
              >
                اكتشفي منتجاتنا ←
              </Link>

              <a
                href="#featured-products"
                className="rounded-full border border-white/70 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#662714]"
              >
                اعرفي أكتر
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-white/90 sm:text-base">
              <span>✓ مكونات طبيعية</span>
              <span>✓ طعم يستاهل التجربة</span>
              <span>✓ اختيارات تناسبك</span>
            </div>
          </div>
        </div>

        {/* شكل زخرفي أسفل الفيديو */}
        <div className="absolute bottom-0 left-0 h-2 w-full [bg-gradient-to-l] from-[#ee6326] via-[#ee9537] to-[#fce1ce]" />
      </section>

      {/* المنتجات المميزة */}
      <section
        id="featured-products"
        className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mb-12 text-center">
          <p className="font-bold text-[#ee6326]">
            اختيارات مخصوصة ليكي
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            منتجاتنا المميزة
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-base leading-8 ${mutedText}`}
          >
            سناكس صحية ولذيذة تساعدك تستمتعي بيومك باختيارات
            ألذ، من غير ما تتنازلي عن أسلوب حياتك.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className={`group overflow-hidden rounded-3xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${cardStyle}`}
            >
              <div className="relative overflow-hidden bg-[#fce1ce]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute right-3 top-3 rounded-full bg-[#ee9537] px-4 py-2 text-xs font-bold text-[#662714]">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-extrabold">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-2">
                  <p className="text-xl font-extrabold text-[#ee6326]">
                    {product.price} جنيه
                  </p>

                  <Link
                    to="/products"
                    className="rounded-full bg-[#ee6326] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#662714]"
                  >
                    شوفي المنتج
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-block rounded-full border-2 border-[#662714] px-9 py-3 font-bold transition hover:border-[#ee6326] hover:bg-[#ee6326] hover:text-white"
          >
            عرض كل المنتجات ←
          </Link>
        </div>
      </section>

      {/* دعوة للتسوق */}
      <section className="px-6 pb-16 md:px-12 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2rem in-[]:bg-gradient-to-l] from-[#662714] to-[#9b4523] px-6 py-12 text-center text-white shadow-xl sm:px-12 md:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            خلي اختياراتك ألذ مع تمرة
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-white/85">
            اختاري السناكس اللي بتحبيها، واكتشفي منتجاتنا
            وخلي يومك مليان طاقة وطعم حلو.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-full bg-[#ee9537] px-8 py-4 font-bold text-[#662714] transition hover:-translate-y-1 hover:bg-[#fce1ce]"
          >
            ابدئي التسوق دلوقتي
          </Link>
        </div>
      </section>
    </main>
  );
}
