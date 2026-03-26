import FAQ from "@/components/ui/faq";
import BookAppointment from "@/components/ui/BookAppointment";

const faqs = [
  { q: "How often should I see a gynecologist?", a: "Once a year for a routine check-up is recommended for most women." },
  { q: "At what age should I start seeing a gynecologist?", a: "Between 13 and 15, or when you become sexually active." },
  { q: "What should I expect during my first visit?", a: "Mostly just a conversation about your health and medical history. Nothing to be nervous about." },
  { q: "Do you accept same day appointments?", a: "Yes, call us in the morning and we will do our best to fit you in." },
  { q: "What insurance do you accept?", a: "We accept most major insurance plans. Call us to confirm before your visit." },
];

export default function Contact() {
  return (
    <div>
      <BookAppointment />
      <FAQ data = {faqs} />
    </div> 
  )
}