
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

export default function Footer() {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? "#24150f" : "#fce1ce";
  const textColor = darkMode ? "#fce1ce" : "#662714";
  const mutedColor = darkMode ? "#d5b8a8" : "#805744";

  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "المنتجات", path: "/products" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
    { name: "المفضلة", path: "/wishlist" },
    { name: "سلة المشتريات", path: "/cart" },
    { name: "طلباتي", path: "/orders" },
  ];

  return (
    <footer
      dir="rtl"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="mt-0 border-t-0 px-6 pt-12 pb-5 transition-colors duration-300"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* العلامة التجارية */}
        <div>
          <Link to="/" className="text-2xl font-extrabold">
            <span style={{ color: "#ee6326" }}>تمرة</span>
            <span> Healthy Bites</span>
          </Link>

          <p
            style={{ color: mutedColor }}
            className="mt-4 max-w-sm leading-7"
          >
            أكلات صحية، لحياة سعيدة!
            <br />
            اكتشف اختيارات لذيذة تناسب يومك.
          </p>

          <div className="mt-5 flex gap-3">
            <span role="img" aria-label="تمر" className="text-2xl">
              🌴
            </span>
            <span role="img" aria-label="مكسرات" className="text-2xl">
              🥜
            </span>
            <span role="img" aria-label="تفاح" className="text-2xl">
              🍎
            </span>
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="mb-4 text-lg font-bold">روابط سريعة</h3>

          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{ color: mutedColor }}
                  className="transition-colors duration-200 hover:font-semibold hover:text-orange-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* تواصل معنا */}
        <div>
          <h3 className="mb-4 text-lg font-bold">تواصلوا معنا</h3>

          <p
            style={{ color: mutedColor }}
            className="mb-3 leading-7"
          >
            عندك أي استفسار؟ يسعدنا نسمع منك.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-lg px-5 py-3 font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#ee6326" }}
          >
            تواصل معنا
          </Link>

          <p style={{ color: mutedColor }} className="mt-5 text-sm">
            اختيارات طازجة لحياة أكثر صحة.
          </p>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mx-auto mt-10 max-w-6xl pt-5 text-center">
        <p style={{ color: mutedColor }} className="text-sm">
          © {new Date().getFullYear()} تمرة Healthy Bites. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

