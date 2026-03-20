import WhatToExpect from "@/components/ui/whatToExpect"
import WhatWeOffer from "@/components/ui/whatWeOffer"
import Testimonial from "@/components/ui/patientsSay"
import ServiceHero from "@/components/ui/serviceHero";
import FAQ from "@/components/ui/faq";

const faqs = [
  { q: "What are the earliest signs of pregnancy?", a: "Missed period, nausea, breast tenderness, fatigue, and frequent urination are among the earliest signs." },
  { q: "How soon should I schedule my first prenatal appointment?", a: "As soon as you get a positive test, ideally before 8 weeks to confirm the pregnancy and start care early." },
  { q: "What should I avoid during pregnancy?", a: "Avoid alcohol, smoking, raw or undercooked food, high-mercury fish, and certain medications without doctor approval." },
  { q: "How much weight should I gain during pregnancy?", a: "Typically 11 to 16 kg for a healthy BMI. Your doctor will give a personalized recommendation based on your starting weight." },
  { q: "Is it safe to exercise during pregnancy?", a: "Yes, moderate exercise like walking, swimming, and prenatal yoga is encouraged. Avoid contact sports and heavy lifting." },
  ];

// PAGE
export default function PregnancyCare() {
  return (
    <div>
      <ServiceHero
        title="Pregnancy Care"
        subtitle="From your first trimester to delivery day, we provide expert medical care, emotional support, and personalized guidance to keep you and your baby healthy, safe, and confident every step of the way."
        imageSrc="/pregnancy-care.jpg"
      />
      <WhatWeOffer />
      <WhatToExpect />
      <Testimonial />
      <FAQ data={faqs} />
    </div>
  );
}