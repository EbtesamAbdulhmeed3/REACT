
import { useState } from "react";
import { useTheme } from "../ThemeContext.jsx";

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

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const messages = JSON.parse(
      localStorage.getItem("tamra-messages") || "[]"
    );

    const newMessage = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "tamra-messages",
      JSON.stringify([...messages, newMessage])
    );

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className={`min-h-screen px-4 py-12 md:px-10 ${pageStyle}`}>
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-bold uppercase tracking-widest text-[#ee6326]">
            Get In Touch
          </p>

          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl leading-7 opacity-75">
            Have a question about our products? Send us a message!
            We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">

          {/* Contact Information */}
          <section className="rounded-3xl bg-[#662714] p-7 text-[#fce1ce] md:col-span-2 md:p-9">
            <h2 className="mb-4 text-2xl font-bold">
              Let's Talk!
            </h2>

            <p className="mb-8 leading-7 opacity-80">
              We are happy to hear your questions, feedback, and
              suggestions about Tamra.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📩</span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="mt-1 break-all text-sm opacity-80">
                    Send us your message using the form.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h3 className="font-bold">Availability</h3>
                  <p className="mt-1 text-sm opacity-80">
                    Leave your message anytime.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🌴</span>
                <div>
                  <h3 className="font-bold">Tamra Healthy Bites</h3>
                  <p className="mt-1 text-sm opacity-80">
                    Good Choices, Great Taste.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-sm opacity-80">
                We appreciate your interest in Tamra ❤️
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className={`rounded-3xl p-7 shadow-lg md:col-span-3 md:p-9 ${cardStyle}`}>
            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-xl bg-green-100 p-4 font-semibold text-green-800"
              >
                Your message has been saved successfully! ❤️
              </div>
            )}

            <h2 className="mb-6 text-2xl font-bold">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor="name" className="mb-2 block font-semibold">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  minLength={3}
                  className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#ee6326]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-semibold">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#ee6326]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block font-semibold">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="w-full rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#ee6326]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-semibold">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  minLength={10}
                  rows={5}
                  className="w-full resize-y rounded-xl border border-[#ee9537] bg-transparent px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#ee6326]"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-[#ee6326] px-6 py-4 font-bold text-white transition hover:bg-[#ee9537]"
              >
                Send Message →
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
}
