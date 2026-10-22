
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

export default function Orders() {
  const { darkMode } = useTheme();

  const [orders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tamra-orders")) || [];
    } catch {
      return [];
    }
  });

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("ar-EG");
  };

  return (
    <div
      className={`min-h-screen px-4 py-10 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-[#fce1ce] text-[#662714]"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-center text-3xl font-bold">
          My Orders | طلباتي
        </h1>

        <p className="mb-8 text-center opacity-75">
          تابعي طلباتك السابقة من تمرة
        </p>

        {orders.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-[#662714] shadow">
            <h2 className="mb-3 text-xl font-bold">
              لسه مفيش طلبات 🍪
            </h2>

            <p className="mb-5">
              لما تعملي طلب، هتلاقي تفاصيله هنا.
            </p>

            <Link
              to="/products"
              className="inline-block rounded-full bg-[#ee6326] px-6 py-3 font-bold text-white hover:bg-[#ee9537]"
            >
              تصفحي المنتجات
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className={`rounded-2xl p-6 shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold">
                      طلب رقم: {order.orderNumber}
                    </h2>

                    <p className="mt-1 text-sm opacity-70">
                      التاريخ: {formatDate(order.createdAt)}
                    </p>
                  </div>

                  <span className="rounded-full bg-[#fce1ce] px-4 py-2 text-sm font-bold text-[#662714]">
                    {order.status || "قيد المراجعة"}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 font-bold">المنتجات:</h3>

                  {order.items?.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between gap-3 border-b border-gray-200 py-2"
                    >
                      <span>
                        {item.name || item.title} × {item.quantity}
                      </span>

                      <span>
                        {item.price * item.quantity} جنيه
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <strong>الاسم:</strong>{" "}
                    {order.customer?.name}
                  </p>

                  <p>
                    <strong>رقم الهاتف:</strong>{" "}
                    {order.customer?.phone}
                  </p>

                  <p>
                    <strong>العنوان:</strong>{" "}
                    {order.customer?.address}
                  </p>

                  <p>
                    <strong>طريقة الدفع:</strong>{" "}
                    {order.paymentMethod || "الدفع عند الاستلام"}
                  </p>
                </div>

                <div className="mt-5 border-t border-gray-300 pt-4 text-right">
                  <p>سعر المنتجات: {order.subtotal} جنيه</p>
                  <p>التوصيل: {order.deliveryFee} جنيه</p>

                  <p className="mt-2 text-xl font-bold text-[#ee6326]">
                    الإجمالي: {order.total} جنيه
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
