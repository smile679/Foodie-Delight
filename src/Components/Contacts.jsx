import { useState } from "react";
import ethiofood2 from "../image/ethiofood2.jpeg";
import Reveal from "./Reveal";

const contactInfo = [
  { label: "Address", value: "Bole Road, Addis Ababa, Ethiopia" },
  { label: "Phone", value: "+251 91 234 5678" },
  { label: "Email", value: "hello@foodiedelight.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this to a real endpoint once the backend exists
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contacts" className="w-full px-5 py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <p className="text-gray-500 text-sm mb-3">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mb-5">
              Questions?{" "}
              <span className="text-orange-500">We'd love to help</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              Whether it's a missing dish, a payment question, or feedback on
              the app drop us a message and we'll get back to you.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((c) => (
                <div
                  key={c.label}
                  className="border-l-2 border-orange-500 pl-3"
                >
                  <p className="text-xs text-gray-500">{c.label}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-md"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-5 py-3 text-sm rounded-full border border-gray-200 outline-none text-gray-800 focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-5 py-3 text-sm rounded-full border border-gray-200 outline-none text-gray-800 focus:border-orange-500"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={4}
                className="w-full px-5 py-3 text-sm rounded-2xl border border-gray-200 outline-none text-gray-800 focus:border-orange-500 resize-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-full w-fit"
              >
                Send message
              </button>
              {sent && (
                <p className="text-sm text-green-600 mt-1">
                  Thanks! We'll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        <div className="relative flex justify-center md:justify-end order-first md:order-last h-[280px] md:h-[380px]">
          <div className="absolute right-0 top-0 w-[80%] h-[90%] bg-orange-500 rounded-[60%_40%_40%_60%/40%_60%_40%_60%]" />
          <img
            src={ethiofood2}
            alt="Food ready for delivery"
            className="relative z-10 w-56 sm:w-64 h-full object-cover rounded-2xl"
          />
          <div className="hidden sm:block absolute z-20 bottom-6 -left-4 bg-white rounded-xl shadow-md px-5 py-3">
            <p className="text-sm font-semibold text-gray-800">We reply fast</p>
            <p className="text-[11px] text-gray-500">
              Usually within a few hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
