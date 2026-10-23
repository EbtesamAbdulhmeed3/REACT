import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { useTheme } from "../ThemeContext.jsx";

export default function Checkout() {
  const { cart, totalPrice, removeFromCart } = useCart();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const deliveryFee = cart.length > 0 ? 30 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const pageStyle = darkMode
    ? "bg-[#281713] text-[#fce1ce]"
    : "bg-[#fce1ce] text-[#662714]";

  const cardStyle = darkMode
    ? "bg-[#45251c] text-[#fce1ce]"
    : "bg-white text-[#662714]";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const order = {
      orderNumber: `TAM-${Date.now()}`,
      customer: formData,
      items: cart,
      subtotal: totalPrice,
      deliveryFee,
      total: finalTotal,
      paymentMethod: "Cash on Delivery",
      createdAt: new Date().toISOString(),
    };

    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("tamra-orders") || "[]"
      );

      localStorage.setItem(
        "tamra-orders",
        JSON.stringify([...savedOrders, order])
      );

      setOrderNumber(order.orderNumber);
      setOrderPlaced(true);

      // تفريغ السلة بعد حفظ الطلب
      cart.forEach((item) => removeFromCart(item.id));
    } catch (error) {
      console.error("Could not save the order:", error);
      alert("حصلت مشكلة أثناء حفظ الطلب. حاولي مرة تانية.");
    }
  }

  // تأكيد نجاح الطلب
  if (orderPlaced) {
    return (
      <main
        dir="rtl"
        className={`min-h-screen px-4 py-16 ${pageStyle}`}
      >
        <div
          className={`mx-auto max-w-xl rounded-2xl p-8 text-center shadow-lg ${cardStyle}`}
        >
          <div className="mb-4 text-6xl">✅</div>

          <h1 className="mb-3 text-3xl font-black">
            تم تأكيد طلبك بنجاح!
          </h1>

          <p className="mb-3 font-semibold">
            شكرًا لاختيارك تمرة — أكلة صحية وطعم مميز ❤️
          </p>

          <p className="mb-6">
            رقم طلبك هو:
            <strong
              dir="ltr"
              className="mr-2 inline-block text-[#ee6326]"
            >
              {orderNumber}
            </strong>
          </p>

          <p className="mb-6 text-sm font-semibold opacity-75">
            طريقة الدفع: الدفع عند الاستلام
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white hover:bg-[#ee9537]"
          >
            متابعة التسوق
          </Link>
        </div>
      </main>
    );
  }

  // لو السلة فارغة
  if (cart.length === 0) {
    return (
      <main
        dir="rtl"
        className={`min-h-screen px-4 py-16 ${pageStyle}`}
      >
        <div
          className={`mx-auto max-w-xl rounded-2xl p-8 text-center ${cardStyle}`}
        >
          <div className="mb-4 text-5xl">🛒</div>

          <h1 className="mb-3 text-2xl font-black">
            سلة التسوق فارغة
          </h1>

          <p className="mb-6 font-semibold opacity-75">
            ضيف بعض المنتجات للسلة قبل إتمام الطلب.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white hover:bg-[#ee9537]"
          >
            تصفح المنتجات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className={`min-h-screen px-4 py-10 md:px-10 ${pageStyle}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* عنوان الصفحة */}
        <div className="mb-8 text-center">
          <p className="mb-2 font-bold tracking-widest text-[#ee6326]">
            تمرة — أكلة صحية
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            إتمام الطلب
          </h1>

          <p className="mt-3 font-semibold opacity-75">
        كمّل بياناتك علشان نقدر نوصل طلبك ليك.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* بيانات العميل */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 rounded-2xl p-6 shadow-md lg:col-span-2 ${cardStyle}`}
          >
            <h2 className="text-2xl font-black">
              بيانات التوصيل
            </h2>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-bold"
              >
                الاسم بالكامل *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={3}
                value={formData.name}
                onChange={handleChange}
                placeholder="اكتب اسمك بالكامل"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-bold"
              >
                رقم الموبايل *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                dir="ltr"
                autoComplete="tel"
                required
                pattern="01[0125][0-9]{8}"
                title="اكتبي رقم موبايل مصري صحيح مكوّن من 11 رقمًا ويبدأ بـ 010 أو 011 أو 012 أو 015."
                value={formData.phone}
                onChange={handleChange}
                placeholder="01xxxxxxxxx"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 text-right outline-none focus:ring-2 focus:ring-[#ee6326]"
              />

              <p className="mt-1 text-sm opacity-70">
                اكتبي رقم موبايل مصري مكوّن من 11 رقمًا.
              </p>
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block font-bold"
              >
                عنوان التوصيل *
              </label>

              <textarea
                id="address"
                name="address"
                autoComplete="street-address"
                required
                minLength={8}
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder=" المنطقة، الشارع، رقم العمارة والشقة"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            <div>
              <label
                htmlFor="notes"
                className="mb-2 block font-bold"
              >
                ملاحظات على الطلب (اختياري)
              </label>

              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="أي تعليمات إضافية للتوصيل؟"
                className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[#ee6326]"
              />
            </div>

            {/* طريقة الدفع */}
            <div className="rounded-xl bg-[#ee9537]/15 p-4">
              <h3 className="mb-1 font-black">
                طريقة الدفع
              </h3>

              <p>💵 الدفع عند الاستلام</p>

              <p className="mt-1 text-sm font-semibold opacity-75">
                ادفع قيمة الطلب لما يوصلك.
              </p>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-4 font-black text-white transition hover:bg-[#ee9537]"
            >
              تأكيد الطلب · {finalTotal} جنيه
            </button>
          </form>

          {/* ملخص الطلب */}
          <aside
            className={`rounded-2xl p-6 shadow-md ${cardStyle}`}
          >
            <h2 className="mb-5 text-2xl font-black">
              ملخص الطلب
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3 border-b border-[#ee9537]/30 pb-4"
                >
                  <div>
                    <p className="font-bold">
                      {item.nameAr || item.name}
                    </p>

                    {item.nameAr && (
                      <p className="mt-1 text-sm opacity-70">
                        {item.name}
                      </p>
                    )}

                    <p className="mt-1 text-sm font-semibold opacity-70">
                      الكمية: {item.quantity}
                    </p>
                  </div>

                  <p className="whitespace-nowrap font-bold">
                    {item.price * item.quantity} جنيه
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex justify-between gap-3">
                <span>مجموع المنتجات</span>
                <span>{totalPrice} جنيه</span>
              </div>

              <div className="flex justify-between gap-3">
                <span>رسوم التوصيل</span>
                <span>{deliveryFee} جنيه</span>
              </div>

              <div className="flex justify-between gap-3 border-t border-[#ee9537]/40 pt-4 text-xl font-black">
                <span>الإجمالي</span>

                <span className="text-[#ee6326]">
                  {finalTotal} جنيه
                </span>
              </div>
            </div>

            <Link
              to="/cart"
              className="mt-6 inline-block cursor-pointer font-bold text-[#ee6326] underline"
            >
              الرجوع للسلة
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}