import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero";
import ServiceSection from "@/components/ui/ServiceSection"
import TestimonialSlider from "@/components/ui/testimonialSlider.jsx";
import WhyChooseUs from "@/components/ui/whyChooseUs";
import MeetDoctor from "@/components/ui/meetDoctor";
import { HeartCrackIcon, ShieldAlertIcon, StethoscopeIcon, UserRoundCheckIcon } from "lucide-react";
import GetInTouch from "@/components/ui/getInTouch";
export default function Home() {
  
const features =  [
    {
      title: "aman",
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
  return (
    <div>
      <HeroSection />
      <MeetDoctor /> 
      <ServiceSection />
      <WhyChooseUs data = {features}/>
      <GetInTouch />
      <TestimonialSlider />
    </div>
  );
}
