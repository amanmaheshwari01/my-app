import GetInTouch from "@/components/ui/getInTouch";
import Philosophy from "@/components/ui/philosophy";
import WhyChooseUs from "@/components/ui/whyChooseUs";
import { HeartCrack, Shield, StethoscopeIcon, UserRoundCheck } from "lucide-react";
import ServiceHero from "@/components/ui/serviceHero";
import FAQ from "@/components/ui/faq";

const faqs = [
  { q: "When should I see a fertility specialist?", a: "After 12 months of trying to conceive if under 35, or after 6 months if over 35." },
  { q: "What are the most common causes of infertility?", a: "Ovulation disorders, blocked fallopian tubes, low sperm count, and age-related factors are the most common causes." },
  { q: "What fertility tests will I need?", a: "Blood tests to check hormone levels, an ultrasound for ovarian reserve, and a semen analysis for your partner." },
  { q: "What is IVF and how does it work?", a: "IVF involves retrieving eggs, fertilizing them in a lab, and transferring the resulting embryo into the uterus." },
  { q: "How many IVF cycles does it typically take?", a: "Success varies, but many women achieve pregnancy within 2 to 3 cycles. Your doctor will guide you based on your profile." },
  ];

export default function Page() {
 const gynecologyServices = [
  {
    title: "Parental Care",
    description:
      `Comprehensive care during pregnancy including regular checkups, fetal monitoring,
      nutritional guidance, and emotional support to ensure a healthy journey for both mother
      and baby. Our experienced team of obstetricians and midwives work closely with you 
      throughout every trimester, tracking your baby's development and addressing any concerns 
      with prompt, expert attention. From your first prenatal visit to postpartum recovery, 
      we are committed to making your pregnancy experience as safe, informed, and empowering 
      as possible.`,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309"
  },
  {
    title: "Menstrual Disorders",
    description:
      `Diagnosis and treatment of irregular periods, heavy bleeding, painful cramps, and 
      hormonal imbalances using personalized medical approaches. We conduct thorough 
      evaluations to identify the root cause of your symptoms, whether it's PCOS, 
      endometriosis, fibroids, or thyroid-related conditions. Our team then designs a 
      targeted treatment plan — which may include medication, hormonal therapy, or minimally 
      invasive procedures — to restore balance and significantly improve your quality of life.`,
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12"
  },
  {
    title: "Menopause Care",
    description:
      `Supportive care for women during menopause with symptom management, 
      hormonal treatments, and lifestyle advice to maintain overall well-being. 
      We understand that menopause affects every woman differently, which is why 
      our approach is fully individualized — addressing hot flashes, mood changes, 
      sleep disturbances, and bone health with evidence-based therapies. Our 
      compassionate team walks alongside you during this transition, helping you 
      feel confident, informed, and in control of your health.`,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    title: "Gynecological Checkups",
    description:
      `Routine examinations and screenings to detect issues early, maintain 
      reproductive health, and provide preventive care tailored to every stage 
      of life. Our comprehensive checkups include pelvic exams, Pap smears, breast 
      examinations, STI screenings, and HPV testing to give you a complete 
      picture of your health. We believe that prevention is the foundation of 
      lasting wellness, and our team takes the time to educate and empower 
      you with the knowledge you need to make confident health decisions.`,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67"
  }
];

const features =  [
    {
      title: "Experienced Gynecologists",
      desc: "Our specialists provide expert care for women at every stage of life with years of clinical experience.",
      icon: <UserRoundCheck size={40} />,
    },
    {
      title: "Advanced Medical Technology",
      desc: "We use modern diagnostic tools and equipment to ensure accurate diagnosis and effective treatments.",
      icon: <StethoscopeIcon size={40} />,
    },
    {
      title: "Personalized Care",
      desc: "Every patient receives compassionate and individualized care tailored to her health needs.",
      icon: <HeartCrack size={40} />,
    },
    {
      title: "Comfortable & Private Environment",
      desc: "Our clinic ensures a safe, welcoming, and confidential space for all consultations and treatments.",
      icon: <Shield size={40} />,
    },
  ];

  return (
    <>
    <ServiceHero
      title="Fertility Services"
      subtitle="Whether you are just beginning your fertility journey or have been trying for a while, our specialists offer compassionate care, advanced treatments, and personalized plans to help you achieve the dream of parenthood."
      imageSrc="/fertility-care.jpg"
    />
    <div>
      {gynecologyServices.slice(0,2).map((data, index) => (
        <Philosophy key={index} data={data} index={index} />
      ))}
    </div>
    <WhyChooseUs  data = {features} />
    <div>
      {gynecologyServices.slice(2,8).map((data, index) => (
        <Philosophy key={index} data={data} index={index} />
      ))}
    </div>
    <GetInTouch />
    <FAQ data = {faqs} />
    </>
    
  )
}