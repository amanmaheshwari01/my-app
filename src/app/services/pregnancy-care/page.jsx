import WhatToExpect from "@/components/ui/whatToExpect"
import WhatWeOffer from "@/components/ui/whatWeOffer"
import Testimonial from "@/components/ui/patientsSay"
import ServiceHero from "@/components/ui/serviceHero";
import FAQ from "@/components/ui/faq";
import Philosophy from "@/components/ui/philosophy";

const faqs = [
  { q: "What are the earliest signs of pregnancy?", a: "Missed period, nausea, breast tenderness, fatigue, and frequent urination are among the earliest signs." },
  { q: "How soon should I schedule my first prenatal appointment?", a: "As soon as you get a positive test, ideally before 8 weeks to confirm the pregnancy and start care early." },
  { q: "What should I avoid during pregnancy?", a: "Avoid alcohol, smoking, raw or undercooked food, high-mercury fish, and certain medications without doctor approval." },
  { q: "How much weight should I gain during pregnancy?", a: "Typically 11 to 16 kg for a healthy BMI. Your doctor will give a personalized recommendation based on your starting weight." },
  { q: "Is it safe to exercise during pregnancy?", a: "Yes, moderate exercise like walking, swimming, and prenatal yoga is encouraged. Avoid contact sports and heavy lifting." },
  ];

const pregnancyServices = [
  {
    title: "Antenatal Checkups",
    description:
      `Regular antenatal visits are essential to monitor the health of both mother and baby throughout pregnancy. Our checkups include physical examinations, ultrasound scans, blood tests, and fetal growth tracking to ensure everything is progressing normally. We also provide personalized guidance on nutrition, lifestyle, and supplements so you stay healthy and confident during every stage of pregnancy.`,
    image: "/pregnancyServiceAntinatelCheckups.jpeg"
  },
  {
    title: "High-Risk Pregnancy Care",
    description:
      `Specialized care for pregnancies that require extra attention due to conditions such as high blood pressure, diabetes, multiple pregnancies, or previous complications. Our experienced team closely monitors both mother and baby using advanced diagnostics and frequent follow-ups, ensuring early detection and management of any risks for a safe and healthy delivery.`,
    image: "/pregnancyServiceHighRisk.jpg"
  },
  {
    title: "Ultrasound & Fetal Monitoring",
    description:
      `We provide advanced ultrasound imaging and fetal monitoring services to track your baby's development, heartbeat, and overall well-being. Regular scans help assess growth, detect any abnormalities early, and give you reassurance throughout your pregnancy journey. Our focus is on accurate diagnosis combined with a comfortable and stress-free experience.`,
    image: "/pregnancyServiceUltrasound.jpg"
  },
  {
    title: "Postnatal Care",
    description:
      `Comprehensive care after delivery to support the mother’s recovery and the baby’s well-being. We assist with physical recovery, breastfeeding guidance, emotional support, and newborn care. Our goal is to ensure a smooth transition into motherhood while addressing any health concerns promptly and effectively.`,
    image: "/pregnancyServicePostnatalCare.jpeg"
  }
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
      <div>
        {pregnancyServices.map((data, index) => (
          <Philosophy key={index} data={data} index={index} />
        ))}
      </div>
      <WhatWeOffer />
      <WhatToExpect />
      <Testimonial />
      <FAQ data={faqs} />
    </div>
  );
}