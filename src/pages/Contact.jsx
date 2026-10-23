
import { useState } from "react";
import { useTheme } from "../ThemeContext.jsx";
import dark from "../assets/dark.svg";
import white from "../assets/white.svg";

export default function Contact() {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const pageStyle = darkMode
    ? "text-[#fce1ce]"
    : "text-[#662714]";

  const cardStyle = darkMode
    ? "border border-[#ee9537]/30 bg-[#45251c] text-[#fce1ce]"
    : "border border-[#ee9537]/40 bg-white/95 text-[#662714]";

  const inputStyle = darkMode
    ? "border-[#ee9537]/60 bg-[#281713]/70 text-[#fce1ce] placeholder:text-[#fce1ce]/50"
    : "border-[#ee9537]/70 bg-[#fffaf6] text-[#662714] placeholder:text-[#662714]/50";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const savedMessages = JSON.parse(
        localStorage.getItem("tamra-messages") || "[]"
      );

      const newMessage = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "tamra-messages",
        JSON.stringify([...savedMessages, newMessage])
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("حصلت مشكلة أثناء حفظ الرسالة. حاولي مرة تانية.");
    }
  }

  return (
    <main
      dir="rtl"
      className={`relative min-h-screen overflow-hidden px-4 py-12 md:px-10 ${pageStyle}`}
    >
      {/* الخلفية بأوباسيتي 15% */}
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* عنوان الصفحة */}
        <div className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border-2 border-[#ee9537] bg-[#662714] px-6 py-2 text-lg font-black text-white shadow-md">
            إحنا هنا علشانك
          </p>

          <h1 className="mb-5 text-4xl font-black md:text-5xl">
            تواصل مع تمرة
          </h1>

          <p className="mx-auto max-w-2xl text-base font-semibold leading-8 md:text-lg">
            عندك سؤال عن منتجاتنا أو حابة تشاركينا رأيك؟
            ابعتي لنا رسالتك، ويسعدنا نسمع منك ❤️
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* معلومات التواصل */}
          <section className="rounded-3xl border border-[#ee9537]/40 bg-[#662714] p-7 text-[#fce1ce] shadow-xl md:col-span-2 md:p-9">
            <h2 className="mb-4 text-2xl font-black">
              خلينا نتكلم! ❤️
            </h2>

            <p className="mb-8 font-medium leading-8 text-[#fce1ce]/90">
              رأيك وأسئلتك واقتراحاتك بتهمنا، وإحنا دايمًا سعداء
              بتواصلك مع تمرة.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📩</span>
                <div>
                  <h3 className="text-lg font-extrabold">الرسائل</h3>
                  <p className="mt-2 font-medium leading-7 text-[#fce1ce]/85">
                    ابعتي لنا رسالتك من خلال النموذج الموجود جنبنا.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🕒</span>
                <div>
                  <h3 className="text-lg font-extrabold">متاحين ليكي</h3>
                  <p className="mt-2 font-medium leading-7 text-[#fce1ce]/85">
                    تقدري تسيبي رسالتك في أي وقت.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🌴</span>
                <div>
                  <h3 className="text-lg font-extrabold">
                    تمرة — أكلة صحية
                  </h3>
                  <p className="mt-2 font-medium leading-7 text-[#fce1ce]/85">
                    اختيارات صحية، وطعم مميز.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/25 pt-6">
              <p className="font-bold leading-7">
                شكرًا لاهتمامك بتمرة، وجودك يفرق معانا ❤️
              </p>
            </div>
          </section>

          {/* نموذج التواصل */}
          <section
            className={`rounded-3xl p-6 shadow-xl md:col-span-3 md:p-9 ${cardStyle}`}
          >
            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-2xl border border-green-300 bg-green-100 p-4 font-bold text-green-800"
              >
                تم حفظ رسالتك بنجاح، شكرًا لتواصلك معانا! ❤️
              </div>
            )}

            <h2 className="mb-2 text-2xl font-black md:text-3xl">
              ابعت لنا رسالة
            </h2>

            <p className="mb-7 font-medium leading-7 opacity-80">
              املأ البيانات دي، وإحنا هنكون سعداء نسمع منك.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-extrabold"
                >
                  الاسم بالكامل
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="اكتب اسمك هنا"
                  required
                  minLength={3}
                  className={`w-full rounded-xl border-2 px-4 py-3 font-semibold outline-none transition focus:border-[#ee6326] focus:ring-2 focus:ring-[#ee6326]/30 ${inputStyle}`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-extrabold"
                >
                  البريد الإلكتروني
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  dir="ltr"
                  className={`w-full rounded-xl border-2 px-4 py-3 font-semibold outline-none transition focus:border-[#ee6326] focus:ring-2 focus:ring-[#ee6326]/30 ${inputStyle}`}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-extrabold"
                >
                  موضوع الرسالة
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="الرسالة بخصوص إيه؟"
                  required
                  className={`w-full rounded-xl border-2 px-4 py-3 font-semibold outline-none transition focus:border-[#ee6326] focus:ring-2 focus:ring-[#ee6326]/30 ${inputStyle}`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-extrabold"
                >
                  رسالتك
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  required
                  minLength={10}
                  rows={5}
                  className={`w-full resize-y rounded-xl border-2 px-4 py-3 font-semibold leading-7 outline-none transition focus:border-[#ee6326] focus:ring-2 focus:ring-[#ee6326]/30 ${inputStyle}`}
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-4 text-lg font-black text-white shadow-md transition hover:bg-[#d95119] hover:shadow-lg"
              >
                إرسال الرسالة ←
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
