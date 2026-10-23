
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

export default function About() {
  const { darkMode } = useTheme();

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  const features = [
    {
      icon: "🌿",
      title: "Natural Ingredients",
      description:
        "We focus on simple ingredients and delicious snacks for everyday life.",
    },
    {
      icon: "🥜",
      title: "Variety of Choices",
      description:
        "Explore snacks for different preferences, including vegan and keto options.",
    },
    {
      icon: "❤️",
      title: "Made with Care",
      description:
        "We believe that choosing a snack should be an enjoyable experience.",
    },
  ];

  return (
    <main className={pageStyle}>
      {/* Hero Section */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[0.25em] text-[#ee6326]">
              About Tamra
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              A Little Taste of
              <span className="block text-[#ee6326]">
                Happiness 🌴
              </span>
            </h1>

            <p className="mb-5 text-lg leading-8 opacity-80">
              Welcome to Tamra Healthy Bites, where delicious snacks
              meet everyday convenience.
            </p>

            <p className="mb-8 leading-8 opacity-80">
              Our goal is to make exploring tasty snack options simple
              and enjoyable. From date and almond energy bars to
              peanut butter and keto brownies, there is something
              for different tastes and lifestyles.
            </p>

            <Link
              to="/products"
              className="inline-block rounded-full bg-[#ee6326] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ee9537]"
            >
              Explore Our Products →
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-2rem bg-[#ee9537]/30 rotate-3" />

            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
              alt="A selection of healthy snacks and fresh food"
              className="relative h-320px w-full rounded-2rem object-cover shadow-xl md:h-480px"
            />

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#ee6326] px-5 py-4 text-white shadow-lg md:-left-5">
              <p className="text-xl font-extrabold">Tamra.</p>
              <p className="text-sm">Good Choices, Great Taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-5 py-16 md:px-10">
        <div
          className={`mx-auto max-w-5xl rounded-3xl p-8 shadow-md md:p-12 ${cardStyle}`}
        >
          <p className="mb-3 text-center font-bold uppercase tracking-widest text-[#ee6326]">
            Our Story
          </p>

          <h2 className="mb-6 text-center text-3xl font-extrabold md:text-4xl">
            Why Tamra?
          </h2>

          <p className="mx-auto max-w-3xl text-center leading-8 opacity-80">
            Tamra is built around a simple idea: snacks can be
            enjoyable, convenient, and full of variety. We bring
            together a selection of products designed for different
            preferences, whether you are looking for a quick snack
            during your day or something to share with your family.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-[#ee6326]">
              What Makes Us Special
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              The Tamra Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`rounded-3xl p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${cardStyle}`}
              >
                <div className="mb-5 text-5xl">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-7 opacity-75">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-5 py-16 md:px-10 rounded-b-md">
        <div className="mx-auto max-w-7xl rounded-2rem bg-[#662714] px-6 py-12 text-center text-[#fce1ce] md:px-12 md:py-16">
          <p className="mb-4 text-4xl">🥜 🌴 🍫</p>

          <h2 className="mb-5 text-3xl font-extrabold md:text-5xl  ">
            Find Your New Favorite Snack
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 opacity-80">
            Explore our collection and discover something delicious
            for your next snack break.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-8 py-4 font-bold text-white transition hover:bg-[#ee9537]"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
