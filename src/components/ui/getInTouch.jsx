"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Message sent! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="w-full bg-warm-cream py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-saddle-brown mb-3">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-modern-earthy max-w-xl mx-auto">
            Have a question or want to book an appointment? Reach out to us and
            our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6 justify-center">

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full shrink-0">
                <Phone size={20} className="text-classy-red" />
              </div>
              <div>
                <p className="font-semibold text-saddle-brown text-sm">Phone</p>
                <a href="tel:5613682005" className="text-sm text-modern-earthy hover:text-saddle-brown transition">
                  (561) 368-2005
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full shrink-0">
                <Mail size={20} className="text-classy-red" />
              </div>
              <div>
                <p className="font-semibold text-saddle-brown text-sm">Email</p>
                <a href="mailto:drzann@comcast.net" className="text-sm text-modern-earthy hover:text-saddle-brown transition">
                  drzann@comcast.net
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full shrink-0">
                <MapPin size={20} className="text-classy-red" />
              </div>
              <div>
                <p className="font-semibold text-saddle-brown text-sm">Address</p>
                
                  <a href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/"
                  target="_blank"
                  className="text-sm text-modern-earthy hover:text-saddle-brown transition"
                >
                  660 Glades Rd. Suite 240 <br /> Boca Raton, FL 33431
                </a>
              </div>
            </div>

          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-saddle-brown">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-saddle-brown">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(561) 000-0000"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-saddle-brown">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-saddle-brown">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-pink-600 transition mt-2"
            >
              Send Message
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}