import GetInTouch from "@/components/ui/GetInTouch";
import Philosophy from "@/components/ui/philosophy";
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

 const fertilityServices = [
  
  {
    title: "IVF Treatment",
    description:
      `In Vitro Fertilization (IVF) is an advanced fertility treatment where eggs and sperm 
      are combined outside the body in a controlled laboratory environment. The resulting 
      embryos are carefully monitored and the healthiest one is transferred into the uterus 
      to achieve pregnancy. Our clinic uses state-of-the-art technology, precise embryo 
      grading, and individualized stimulation protocols to improve success rates. From 
      ovarian stimulation and egg retrieval to embryo transfer and post-procedure care, we 
      guide you at every step with complete transparency, safety, and emotional support.`,
    image: "/fertilityServiceIvfTreatment.jpg"
  },
  {
    title: "Infertility Evaluation",
    description:
      `A detailed fertility assessment is the first step toward successful treatment. 
      We conduct comprehensive evaluations for both partners, including hormonal profiling, 
      ultrasound imaging, ovulation tracking, semen analysis, and other diagnostic tests 
      to identify the root cause of infertility. Whether the issue is related to ovulation 
      disorders, fallopian tube blockage, low sperm count, or unexplained infertility, 
      our specialists design a personalized treatment plan that addresses your specific 
      condition and maximizes your chances of conception.`,
    image: "/fertilityServiceInfertilityEvaluation.jpeg"
  },
  {
    title: "IUI Treatment",
    description:
      `Intrauterine Insemination (IUI) is a simple and minimally invasive fertility 
      procedure recommended for couples with mild infertility issues. During this process, 
      specially prepared and concentrated sperm is directly placed into the uterus around 
      the time of ovulation, increasing the chances of fertilization. The procedure is 
      quick, relatively painless, and cost-effective compared to IVF. Our team carefully 
      monitors your cycle and timing to ensure optimal results while providing a comfortable 
      and stress-free experience.`,
    image: "/fertilityServiceIuiTreatment.jpeg"
  },
  {
    title: "Ovulation Induction",
    description:
      `Ovulation induction is a treatment used for women who experience irregular ovulation 
      or do not ovulate regularly. Through carefully prescribed medications and continuous 
      monitoring using ultrasound and hormonal tests, we stimulate the ovaries to produce 
      and release healthy eggs. This treatment can be used alone or in combination with 
      procedures like IUI to enhance success rates. Our approach focuses on achieving 
      effective results while minimizing risks and ensuring hormonal balance.`,
    image: "/fertilityServiceOvulationInduction.jpg"
  },
  {
    title: "Fertility Counselling & Support",
    description:
      `Fertility challenges can be emotionally overwhelming, and we believe that support is 
      just as important as medical treatment. Our fertility counseling services provide 
      guidance, clarity, and reassurance throughout your journey. We help you understand 
      treatment options, set realistic expectations, and manage stress and anxiety. With 
      a compassionate approach, our team ensures you feel informed, confident, and supported 
      at every stage of your fertility care experience.`,
    image: "/fertilityServiceCounselling.jpg"
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
      {fertilityServices.map((data, index) => (
        <Philosophy key={index} data={data} index={index} />
      ))}
    </div>
    
    <GetInTouch />
    <FAQ data = {faqs} />
    </>
    
  )
}