import dark from "../assets/dark.svg";
import white from "../assets/white.svg";
import imge1 from "../assets/imge1.jpeg";
import heroVideo from "../assets/hero.mp4";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";

import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

const products = [
  {
    id: 1,
    name: "بار التمر واللوز",
    category: "وجبات صحية",
    price: 35,
    image: product1,
  },
  {
    id: 2,
    name: "براونيز كيتو",
    category: "خالي من الجلوتين",
    price: 55,
    image: product3,
  },
  {
    id: 3,
    name: "زبدة فول سوداني طبيعية",
    category: "مكونات طبيعية",
    price: 95,
    image: product2,
  },
  {
    id: 4,
    name: "صندوق الوجبات المدرسية",
    category: "للأطفال",
    price: 300,
    image: product4,
  },
];

export default function Home() {
  const { darkMode } = useTheme();

  const pageStyle = darkMode
    ? "text-[#FFE2C6]"
    : "text-[#662714]";

  const mutedText = darkMode
    ? "text-[#FFE2C6]"
    : "text-[#4b2a1f]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fff4eb]"
    : "bg-white text-[#662714]";

  const animatedWord = (word, index) => (
    <span
      key={`${word}-${index}`}
      className="inline-block opacity-0"
      style={{
        animation: "wordReveal 0.6s ease-out forwards",
        animationDelay: `${index * 0.18}s`,
      }}
    >
      {word}
    </span>
  );

  return (
    <main
      dir="rtl"
      className={`min-h-screen transition-colors duration-300 ${pageStyle}`}
      style={{
        backgroundImage: `url(${darkMode ? dark : white})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
      }}
    >
      <style>{`
        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[600px] items-center justify-center overflow-hidden md:min-h-[700px] lg:min-h-[760px]">
        {/* الفيديو من فولدر public/videos/hero.mp4 */}
       <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster={imge1}
  className="absolute inset-0 z-0 h-full w-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>

        <div className="absolute inset-0 z-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8">
          <span
            className="mb-6 inline-block rounded-full border border-[#ee9537]/70 bg-[#662714]/60 px-5 py-2 text-sm font-bold text-[#fce1ce] sm:text-base"
            style={{
              animation: "wordReveal 0.8s ease-out both",
            }}
          >
            طعم طبيعي... وحياة أفضل
          </span>

          <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {["صحتك", "تستاهل"].map((word, index) =>
              animatedWord(word, index)
            )}

            <span className="flex flex-wrap justify-center gap-x-3 text-[#ee9537]">
              {["حاجة", "حلوة!"].map((word, index) =>
                animatedWord(word, index + 2)
              )}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-9 text-white/95 sm:text-lg md:text-xl">
            {[
              "اكتشفي",
              "عالم",
              "من",
              "الوجبات",
              "الصحية",
              "اللذيذة،",
              "بمكونات",
              "طبيعية",
              "وطعم",
              "يخلي",
              "كل",
              "لحظة",
              "أحلى",
              "مع",
              "تمرة.",
            ].map((word, index) => (
              <span key={`${word}-${index}`}>
                {animatedWord(word, index + 4)}{" "}
              </span>
            ))}
          </p>

          <div
            className="mt-9 flex flex-wrap justify-center gap-4"
            style={{
              animation: "wordReveal 0.8s ease-out 3.5s both",
            }}
          >
            <Link
              to="/products"
              className="rounded-full bg-[#ee6326] px-7 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ee9537] sm:px-8 sm:py-4"
            >
              اكتشفي منتجاتنا ←
            </Link>

            <a
              href="#featured-products"
              className="rounded-full border border-white/70 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#662714] sm:px-8 sm:py-4"
            >
              اعرفي أكتر
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-white sm:text-base"
            style={{
              animation: "wordReveal 0.8s ease-out 3.8s both",
            }}
          >
            <span>✓ مكونات طبيعية</span>
            <span>✓ طعم يستاهل التجربة</span>
            <span>✓ اختيارات تناسبك</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 h-2 w-full bg-gradient-to-l from-[#ee6326] via-[#ee9537] to-[#fce1ce]" />
      </section>

      {/* Featured Products Section */}
      <section
        id="featured-products"
        className="mx-auto max-w-7xl rounded-3xl px-6 py-16 transition-colors duration-300 md:px-12 md:py-24"
      >
        <div className="mb-12 text-center">
          <p
            className={`font-extrabold ${
              darkMode ? "text-[#FFB36B]" : "text-[#ee6326]"
            }`}
          >
            اختيارات مخصوصة ليكي
          </p>

          <h2
            className={`mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl ${
              darkMode ? "text-[#ee6326]" : "text-[#662714]"
            }`}
          >
            منتجاتنا المميزة
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-base font-medium leading-8 ${mutedText}`}
          >
            سناكس صحية ولذيذة تساعدك تستمتعي بيومك باختيارات ألذ، من غير ما
            تتنازلي عن أسلوب حياتك.
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

                <span className="absolute right-3 top-3 rounded-full bg-[#ee9537] px-4 py-2 text-xs font-extrabold text-[#451a03]">
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
                    className="rounded-full bg-[#ee6326] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-[#662714]"
                  >
                    شوفي المنتج
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-9 py-3 font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#d94f18] hover:shadow-lg"
          >
            عرض كل المنتجات ←
          </Link>
        </div>
      </section>

      {/* Final CTA Section - Fixed Brown Background */}
      <section className="px-6 pb-16 md:px-12 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#451a03] px-6 py-12 text-center text-white shadow-2xl sm:px-12 md:py-16">
          <h2 className="text-3xl font-black leading-relaxed text-white sm:text-4xl md:text-5xl">
            خلي اختياراتك ألذ مع تمرة
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-9 text-white sm:text-lg">
            اختاري السناكس اللي بتحبيها، واكتشفي منتجاتنا وخلي يومك مليان
            طاقة وطعم حلو.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-full bg-[#ffc247] px-8 py-4 text-base font-extrabold text-[#451a03] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffdb8a] sm:text-lg"
          >
            ابدئي التسوق دلوقتي ←
          </Link>
        </div>
      </section>
    </main>
  );
}