
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

import dark from "../assets/dark.svg";
import white from "../assets/white.svg";
import imge1 from "../assets/imge1.jpeg";

export default function About() {
  const { darkMode } = useTheme();

  const pageStyle = darkMode
    ? "text-white"
    : "text-[#3B1608]";

  const cardStyle = darkMode
    ? "border border-[#754331] bg-[#24130E] text-white"
    : "border border-[#D6B5A2] bg-white text-[#3B1608]";

  const mutedText = darkMode
    ? "text-[#F0D8CA]"
    : "text-[#4A2113]";

  const features = [
    {
      icon: "🌿",
      title: "مكونات بسيطة",
      description:
        "نهتم بتقديم سناكس بمكونات بسيطة وطعم لذيذ يناسب يومك.",
    },
    {
      icon: "🥜",
      title: "اختيارات متنوعة",
      description:
        "اكتشفي سناكس تناسب تفضيلات مختلفة، بما فيها الخيارات النباتية ومنتجات الكيتو.",
    },
    {
      icon: "❤️",
      title: "اهتمام في كل تفصيلة",
      description:
        "نؤمن إن اختيار السناك المناسب لازم يكون تجربة ممتعة وسهلة.",
    },
  ];

  return (
    <main
      dir="rtl"
      className={`min-h-screen ${pageStyle}`}
      style={{
        backgroundImage: `url(${darkMode ? dark : white})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
      }}
    >
      {/* القسم الرئيسي */}
      <section className="px-5 py-12 sm:py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-extrabold text-[#ee6326]">
              اكتشفي عالم تمرة
            </p>

            <h1 className="mb-6 text-3xl font-extrabold leading-relaxed sm:text-4xl md:text-6xl">
              طعم لذيذ
              <span className="block text-[#ee6326]">
                وسعادة في كل لقمة 🌴
              </span>
            </h1>

            <p className={`mb-5 text-lg font-semibold leading-8 ${mutedText}`}>
              أهلًا بيكي في تمرة للسناكس الصحية، المكان اللي بيجمع بين
              الطعم اللذيذ والاختيارات المناسبة ليومك.
            </p>

            <p className={`mb-8 text-base font-medium leading-8 ${mutedText}`}>
              هدفنا نخلي اختيار السناكس تجربة سهلة وممتعة. من بار التمر
              واللوز إلى زبدة الفول السوداني والبراونيز، عندنا اختيارات
              متنوعة تناسب أذواق مختلفة وأوقات يومك.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#ee6326] px-7 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#d94f18]"
            >
              اكتشفي منتجاتنا
              <span>←</span>
            </Link>
          </div>

          {/* صورة تمرة */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-[#ee9537]/30" />

            <div className="relative overflow-hidden rounded-3xl border-2 border-[#ee9537]/50 bg-white p-2 shadow-xl">
              <img
                src={imge1}
                alt="منتجات تمرة"
                className="block h-auto max-h-480px min-h-[80px w-full rounded-2xl object-contain sm:min-h-360px"
              />
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl bg-[#662714] px-5 py-4 text-white shadow-lg sm:-left-5">
              <p className="text-xl font-extrabold">تمرة 🌴</p>
              <p className="text-sm font-semibold">
                اختيارات حلوة وطعم أحلى
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* حكايتنا */}
      <section className="px-5 py-12 sm:py-16 md:px-10">
        <div
          className={`mx-auto max-w-5xl rounded-3xl p-6 shadow-lg sm:p-8 md:p-12 ${cardStyle}`}
        >
          <p className="mb-3 text-center font-extrabold text-[#ee6326]">
            حكايتنا
          </p>

          <h2 className="mb-6 text-center text-3xl font-extrabold md:text-4xl">
            ليه تمرة؟
          </h2>

          <p className={`mx-auto max-w-3xl text-center text-base font-semibold leading-8 ${mutedText}`}>
            بدأت فكرة تمرة من رغبتنا في تقديم اختيارات متنوعة من السناكس
            تجمع بين الطعم اللذيذ وسهولة الاختيار. سواء كنتِ محتاجة
            سناك سريع خلال اليوم أو حاجة تشاركيها مع عيلتك، هتلاقي
            عندنا منتجات تناسب أذواق واحتياجات مختلفة.
          </p>
        </div>
      </section>

      {/* مميزات تمرة */}
      <section className="px-5 py-12 sm:py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
  <p className="mb-3 inline-block rounded-full border-2 border-[#ee9537] bg-[#662714] px-6 py-3 text-lg font-black text-white shadow-md">
    إيه اللي بيميزنا؟
  </p>

  <h2 className="text-3xl font-extrabold md:text-4xl">
    تجربة تمرة
  </h2>
</div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`rounded-3xl p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${cardStyle}`}
              >
                <div className="mb-5 text-5xl">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-xl font-extrabold">
                  {feature.title}
                </h3>

                <p className={`font-semibold leading-8 ${mutedText}`}>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للتسوق */}
      <section className="px-5 py-12 sm:py-16 md:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#662714] px-6 py-12 text-center text-white shadow-xl sm:px-10 md:py-16">
          <p className="mb-4 text-4xl">🥜 🌴 🍫</p>

          <h2 className="mb-5 text-2xl font-extrabold leading-relaxed sm:text-3xl md:text-5xl">
            اكتشفي السناك المفضل عندك
          </h2>

          <p className="mx-auto mb-8 max-w-2xl font-semibold leading-8 text-[#FFF0E5]">
            شوفي مجموعة منتجاتنا واختاري حاجة لذيذة تستمتعي بيها
            في أي وقت من يومك.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#ee6326] px-8 py-4 font-extrabold text-white transition hover:bg-[#d94f18]"
          >
            تسوقي دلوقتي
            <span>←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}


