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
    <section id="getInTouch" className="w-full py-14 px-8">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-strong mb-3">
            Get In Touch
          </h2>
          <p className="sm:text-base font-semibold text-text-primary text-lg max-w-xl mx-auto">
            Have a question or want to book an appointment? Reach out to us and
            our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6 justify-center">

            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center border rounded-full h-12 w-12 shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text-secondary text-sm">Phone</p>
                <a href="tel:5613682005" className="text-sm text-text-primary hover:text-primary-strong transition-colors">
                  (561) 368-2005
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center border border-border rounded-full h-12 w-12 shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text-secondary text-sm">Email</p>
                <a href="mailto:drzann@comcast.net" className="text-sm text-text-primary hover:text-primary-strong transition-colors">
                  drzann@comcast.net
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center border border-border rounded-full h-12 w-12 shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text-secondary text-sm">Address</p>
                
                <a  href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/"
                  target="_blank"
                  className="text-sm text-text-primary hover:text-text-secondary transition-colors"
                >
                  660 Glades Rd. Suite 240 <br /> Boca Raton, FL 33431
                </a>
              </div>
            </div>

          </div>

          {/* Right — Form */}
          <div className="bg-background rounded-2xl border border-border p-8 flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-secondary">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="border border-border rounded-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-secondary bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-secondary">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(561) 000-0000"
                  className="border border-border rounded-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-secondary bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-text-secondary">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="border border-border rounded-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-secondary bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-text-secondary">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                className="border border-border rounded-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-secondary bg-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-background py-2.5 rounded-full text-sm font-semibold hover:bg-primary-strong transition-colors mt-2 cursor-pointer"
            >
              Send Message
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}