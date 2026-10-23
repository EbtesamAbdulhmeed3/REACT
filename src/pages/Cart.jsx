import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { useTheme } from "../ThemeContext.jsx";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  const { darkMode } = useTheme();

  const cardStyle = darkMode
    ? "bg-[#45251c] border border-[#fce1ce]/10"
    : "bg-white border border-[#662714]/10";

  return (
    <div
      dir="rtl"
      className={`min-h-screen p-5 md:p-8 ${
        darkMode
          ? "bg-[#281713] text-[#fce1ce]"
          : "bg-[#fce1ce] text-[#662714]"
      }`}
    >
      {/* عنوان الصفحة */}
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-black md:text-4xl">
          سلة التسوق 🛒
        </h1>

        <p className="mt-2 font-semibold opacity-75">
          راجعي اختياراتك الصحية قبل إتمام الطلب.
        </p>
      </div>

      {cart.length === 0 ? (
        /* السلة فارغة */
        <div
          className={`mx-auto max-w-6xl rounded-2xl p-8 text-center md:p-12 ${cardStyle}`}
        >
          <div className="mb-4 text-6xl">🛍️</div>

          <h2 className="mb-3 text-2xl font-black">
            سلتك لسه فاضية
          </h2>

          <p className="mb-6 font-semibold opacity-75">
            لسه مضفتيش أي منتجات للسلة.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-7 py-3 font-bold text-white transition hover:bg-[#ee9537]"
          >
            تصفحي المنتجات
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* المنتجات الموجودة في السلة */}
          <div className="space-y-5 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col gap-5 rounded-2xl p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center ${cardStyle}`}
              >
                {/* صورة المنتج */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.nameAr || item.name}
                    className="h-36 w-full rounded-xl object-cover sm:h-32 sm:w-32"
                  />
                )}

                {/* بيانات المنتج */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-black md:text-xl">
                    {item.nameAr || item.name}
                  </h2>

                  {item.nameAr && (
                    <p className="mt-1 text-sm font-semibold opacity-75">
                      {item.name}
                    </p>
                  )}

                  <p className="mt-2 font-bold text-[#ee6326]">
                    {item.price} جنيه للقطعة
                  </p>

                  <p className="mt-1 text-sm font-semibold opacity-75">
                    الإجمالي: {item.price * item.quantity} جنيه
                  </p>
                </div>

                {/* التحكم في الكمية */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                    aria-label="تقليل الكمية"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ee9537] text-xl font-bold text-white transition hover:bg-[#ee6326] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>

                  <span
                    className="min-w-6 text-center text-lg font-black"
                    aria-live="polite"
                  >
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label="زيادة الكمية"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ee9537] text-xl font-bold text-white transition hover:bg-[#ee6326]"
                  >
                    +
                  </button>
                </div>

                {/* حذف المنتج */}
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="self-start font-bold text-red-500 transition hover:text-red-700 sm:self-center"
                >
                  🗑️ حذف
                </button>
              </div>
            ))}

            <Link
              to="/products"
              className="inline-block font-bold text-[#ee6326] transition hover:underline"
            >
              ← متابعة التسوق
            </Link>
          </div>

          {/* ملخص الطلب */}
          <div
            className={`rounded-2xl p-6 shadow-md lg:sticky lg:top-36 ${cardStyle}`}
          >
            <h2 className="mb-5 text-2xl font-black">
              ملخص الطلب
            </h2>

            <div className="flex items-center justify-between gap-3 border-b border-current/15 pb-4">
              <span className="font-semibold opacity-75">
                عدد القطع
              </span>

              <span className="font-bold">
                {cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-current/15 py-4">
              <span className="font-semibold opacity-75">
                المجموع الفرعي
              </span>

              <span className="font-bold">
                {totalPrice} جنيه
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 py-5">
              <span className="text-lg font-black">
                الإجمالي
              </span>

              <span className="text-2xl font-black text-[#ee6326]">
                {totalPrice} جنيه
              </span>
            </div>

            <Link
              to="/checkout"
              className="block w-full rounded-full bg-[#ee6326] px-6 py-4 text-center font-black text-white transition hover:bg-[#ee9537]"
            >
              إتمام الطلب ←
            </Link>

            <p className="mt-4 text-center text-sm font-semibold leading-7 opacity-70">
              شكرًا لاختيارك تمرة — لقمة صحية وطعم مميز ❤️
            </p>
          </div>
        </div>
      )}
    </div>
  );
}