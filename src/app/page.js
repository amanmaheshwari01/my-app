import TestimonialSlider from "@/components/ui/testimonialSlider.jsx";
import WhyChooseUs from "@/components/ui/whyChooseUs";
import MeetDoctor from "@/components/ui/meetDoctor";
import { Clock, HeartCrackIcon, Scissors, ShieldAlertIcon, SmilePlus, StethoscopeIcon, UserRoundCheckIcon, Users } from "lucide-react";
import GetInTouch from "@/components/ui/GetInTouch";
import HomeHero from "@/components/ui/homeHero";
import FAQ from "@/components/ui/faq";
import ScrollToHash from "@/components/ui/scrollToHash";
import WorkingHours from "@/components/ui/workingHours";
export default function Home() {
  
const features =  [
    {
      title: "Experienced gyncecologist",
      desc: "Our specialists provide expert care for women at every stage of life with years of clinical experience.",
      icon: <UserRoundCheckIcon size={40} />,
    },
    {
      title: "Advanced Medical Technology",
      desc: "We use modern diagnostic tools and equipment to ensure accurate diagnosis and effective treatments.",
      icon: <StethoscopeIcon size={40} />,
    },
    {
      title: "Personalized Care",
      desc: "Every patient receives compassionate and individualized care tailored to her health needs.",
      icon: <HeartCrackIcon size={40} />,
    },
    {
      title: "Comfortable & Private Environment",
      desc: "Our clinic ensures a safe, welcoming, and confidential space for all consultations and treatments.",
      icon: <ShieldAlertIcon size={40} />,
    },
  ];

  const experience = [
  {
    icon: <Clock size={56} />,
    title: "Years of Experience",
    desc: "20+"
  },
  {
    icon: <SmilePlus size={56} />,
    title: "Patient Satisfaction",
    desc: "98%"
  },
  {
    icon: <Users size={56} />,
    title: "Patients Treated",
    desc: "10,000+" 
  },
  {
    icon: <Scissors size={56} />,
    title: "Successful Surgeries",
    desc: "5,000+"
  },
];
const faqs = [
  {
    q: "Is it normal to feel nervous before a gynecology appointment?",
    a: "Absolutely. Many women feel anxious, especially for the first time. Our team creates a calm, judgment-free environment so you feel comfortable from the moment you walk in.",
  },
  {
    q: "Can I come in if I am pregnant for the first time and not sure what to do?",
    a: "Yes, that is exactly what we are here for. We will walk you through every step — from confirming the pregnancy to setting up your full prenatal care plan.",
  },
  {
    q: "Do you offer telehealth or virtual consultations?",
    a: "Yes, we offer virtual visits for follow-ups, non-urgent concerns, and consultations so you can get expert care from the comfort of your home.",
  },
  {
    q: "How do I know if my symptoms need urgent attention vs a regular appointment?",
    a: "If you are experiencing heavy bleeding, severe pelvic pain, or unusual discharge with fever, call us right away. For anything else, a scheduled visit is usually the right step.",
  },
  {
    q: "Can I bring someone with me to my appointment?",
    a: "Of course. You are always welcome to bring a trusted friend or family member for support. Your comfort is our priority.",
  },
];

  return (
    <div>
      <HomeHero />
      <ScrollToHash />
      <MeetDoctor
        name="Meet Dr. Pratishtha"
        title="Board-Certified OB/GYN with Over 20 Years of Experience"
        description="Dr. Pratishtha has been serving women in Jaipur for over two decades, combining advanced medical care with a warm, patient-first approach."
        imageSrc="/DrVaishaliSharma.jpg"
        imageAlt="Dr. Vaishali Sharma"
        buttonLabel="Learn More About Dr. Pratishtha"
        buttonHref="/about"
      />
      <WhyChooseUs fontClass = "text-lg" data = {experience} />
      <WorkingHours />
      <section id = "get">
       <GetInTouch />
      </section>
      <TestimonialSlider />
      <FAQ data = {faqs} />
    </div>
  );
}
