

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
    name: "Date & Almond Energy Bar",
    nameAr: "بار التمر واللوز",
    price: 35,
    category: "High Protein",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Keto Brownies",
    nameAr: "براونيز كيتو خالي من الجلوتين",
    price: 55,
    category: "Gluten-Free",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Natural Peanut Butter",
    nameAr: "زبدة فول سوداني بدون سكر",
    price: 95,
    category: "Vegan",
    image:
      "https://images.unsplash.com/photo-1505576633757-0ac1084af824?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Kids School Box",
    nameAr: "صندوق المدارس للأطفال",
    price: 300,
    category: "Healthy Snacks",
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

  const imageBackground = darkMode
    ? "bg-[#662714]"
    : "bg-[#fce1ce]";

  return (
    <main
      className={`${pageStyle} min-h-screen transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        <div className="text-center md:text-left">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[#ee6326]">
            Healthy Bites, Happy Life
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Healthy Never
            <span className="block text-[#ee6326]">
              Tasted This Good!
            </span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-lg text-base leading-8 md:mx-0 md:text-lg ${mutedText}`}
          >
            Discover delicious, feel-good snacks made with
            natural ingredients. A little bite, a better you!
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-full bg-[#ee6326] px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#662714]"
          >
            Shop Now →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-4 rounded-full bg-[#ee9537]/30 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
            alt="Delicious chocolate brownies"
            className="relative h-320px w-full rounded-2rem object-cover shadow-xl sm:h-420px"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured-products"
        className="mx-auto max-w-7xl px-6 py-16 md:px-12"
      >
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-[#ee6326]">
            Made for Your Happy Moments
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Our Featured Products
          </h2>

          <p className={`mx-auto mt-4 max-w-xl ${mutedText}`}>
            Delicious snacks to make your healthy lifestyle
            a little sweeter.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className={`group overflow-hidden rounded-3xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${cardStyle}`}
            >
              <div
                className={`relative overflow-hidden ${imageBackground}`}
              >
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#ee9537] px-3 py-1 text-xs font-bold text-[#662714]">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold">
                  {product.nameAr}
                </h3>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  {product.name}
                </p>

                <div className="mt-5 flex items-center justify-between gap-2">
                  <p className="text-xl font-extrabold text-[#ee6326]">
                    {product.price} EGP
                  </p>

                  <Link
                    to="/products"
                    className="rounded-full bg-[#ee6326] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ee9537]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Products */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className={`inline-block rounded-full border-2 px-8 py-3 font-bold transition hover:bg-[#ee6326] hover:text-white ${
              darkMode
                ? "border-[#fce1ce]"
                : "border-[#662714]"
            }`}
          >
            View All Products →
          </Link>
        </div>
      </section>
    </main>
  );
}
