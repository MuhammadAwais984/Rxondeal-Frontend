"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function ContactForm({ title, subTitle, fields, button }) {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    const allFilled = fields?.every((f) => form[f.text]);
    if (!allFilled) return;

    try {
      const res = await fetch(`${BASE}/api/contact-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: form["Full Name"] ?? form["Name"] ?? "",
            email: form["Email"] ?? form["Email Address"] ?? "",
            message: form["Message"] ?? "",
          },
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({});
      }
    } catch (err) {
      console.error("Form submit error:", err);
    }
  };

  return (
    <section className="py-4 md:py-24 flex items-center justify-center">
      <div className="w-full lg:w-3/5 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-500 font-light mb-8">{subTitle}</p>

        {sent && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-light">
            ✓ Message sent! We'll be in touch within 24 hours.
          </div>
        )}

        {/* Dynamic fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {fields?.map((f, i) => (
            <div key={i} className={fields.length === 1 ? "sm:col-span-2" : ""}>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-light">
                {f.text}
              </label>
              {f.text?.toLowerCase().includes("message") ? (
                <textarea
                  rows={5}
                  value={form[f.text] ?? ""}
                  onChange={(e) =>
                    setForm({ ...form, [f.text]: e.target.value })
                  }
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition resize-none sm:col-span-2"
                />
              ) : (
                <input
                  type={
                    f.text?.toLowerCase().includes("email") ? "email" : "text"
                  }
                  value={form[f.text] ?? ""}
                  onChange={(e) =>
                    setForm({ ...form, [f.text]: e.target.value })
                  }
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-light text-gray-800 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                />
              )}
            </div>
          ))}
        </div>

        {/* Dynamic button */}
        {button?.map((btn, i) => (
          <button
            key={i}
            onClick={handleSubmit}
            className="flex items-center gap-2  hover:cursor-pointer text-white px-8 py-3.5 rounded-full font-normal transition hover:-translate-y-0.5 shadow-lg shadow-green-200"
            style={{
              background:
                "linear-gradient(to right in oklab, rgb(84, 169, 38) 0px, rgb(66, 175, 200) 100%) ",
            }}
          >
            <Send className="w-4 h-4" /> {btn.text}
          </button>
        ))}
      </div>
    </section>
  );
}
