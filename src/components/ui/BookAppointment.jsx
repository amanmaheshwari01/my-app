"use client";
import { useState } from "react";

const services = [
  "Pregnancy Care",
  "Fertility Care",
  "Prenatal Care",
  "Menstrual & Hormonal Care",
];

export default function BookAppointment() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", age: "", preferredDate: "", preferredSlot: "", service: "", firstVisit: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[6-9]\d{9}$/.test(form.phone)) newErrors.phone = "Enter a valid 10-digit number.";
    if (!form.age) newErrors.age = "Age is required.";
    if (!form.preferredDate) newErrors.preferredDate = "Please select a date.";
    if (!form.preferredSlot) newErrors.preferredSlot = "Please select a slot.";
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.firstVisit) newErrors.firstVisit = "Please select an option.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
  };

  const inputClass = (field) =>
    `w-full mt-2 rounded-lg bg-background border ${errors[field] ? "border-red-400" : "border-border"} px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary`;

  return (
    <div className="relative isolate bg-surface px-6 py-14 sm:py-24 lg:px-8">

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-primary-strong sm:text-6xl">Book Appointment</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="firstName" className="block text-md font-medium text-text-secondary">First name</label>
            <input id="firstName" type="text" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} />
            {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-md font-medium text-text-secondary">Last name</label>
            <input id="lastName" type="text" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} />
            {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-md font-medium text-text-secondary">Phone Number</label>
            <input id="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="age" className="block text-md font-medium text-text-secondary">Age</label>
            <input id="age" type="number" min={1} max={120} value={form.age} onChange={handleChange} className={inputClass("age")} />
            {errors.age && <p className="mt-1 text-xs text-red-400">{errors.age}</p>}
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-md font-medium text-text-secondary">Preferred Date</label>
            <input id="preferredDate" type="date" value={form.preferredDate} min={new Date().toISOString().split("T")[0]} onChange={handleChange} className={inputClass("preferredDate")} />
            {errors.preferredDate && <p className="mt-1 text-xs text-red-400">{errors.preferredDate}</p>}
          </div>

          <div>
            <label htmlFor="preferredSlot" className="block text-md font-medium text-text-secondary">Preferred Slot</label>
            <select id="preferredSlot" value={form.preferredSlot} onChange={handleChange} className={inputClass("preferredSlot")}>
              <option value="">Select a slot</option>
              <option value="morning">Morning — 9:00 AM to 2:00 PM</option>
              <option value="evening">Evening — 5:00 PM to 8:00 PM</option>
            </select>
            {errors.preferredSlot && <p className="mt-1 text-xs text-red-400">{errors.preferredSlot}</p>}
          </div>

          <div>
            <label htmlFor="service" className="block text-md font-medium text-text-secondary">Select Service</label>
            <select id="service" value={form.service} onChange={handleChange} className={inputClass("service")}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-md font-medium text-text-secondary mb-2">First Visit?</label>
            <div className="flex gap-6">
              {["Yes, first time", "No, returning patient"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-text-primary cursor-pointer">
                  <input type="radio" name="firstVisit" value={opt} checked={form.firstVisit === opt}
                    onChange={() => { setForm({ ...form, firstVisit: opt }); setErrors({ ...errors, firstVisit: "" }); }}
                    className="accent-primary" />
                  {opt}
                </label>
              ))}
            </div>
            {errors.firstVisit && <p className="mt-1 text-xs text-red-400">{errors.firstVisit}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-md font-medium text-text-secondary">Message</label>
            <textarea id="message" rows={4} placeholder="Write your message here..." value={form.message} onChange={handleChange} className={`${inputClass("message")} resize-none`} />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

        </div>

        <div className="mt-10 flex justify-center ">
          <button type="submit" className=" px-13 bg-primary hover:bg-primary-strong text-background py-3 rounded-full text-base font-medium cursor-pointer transition-colors">
            Book
          </button>
        </div>
      </form>

    </div> 
  );
}