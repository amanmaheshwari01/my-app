import Carousel from "@/components/ui/carousel";
import FAQ from "@/components/ui/faq";
import ServiceHero from "@/components/ui/serviceHero";
import TrimesterGuide from "@/components/ui/trimesterGuide";

const slideData = [
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800",
    title: "Quality Time Together",
    button: "Learn More",
  },
  {
    src: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800",
    title: "Nurturing Early Development",
    button: "Explore",
  },
  {
    src: "https://images.unsplash.com/photo-1560328055-e938bb2ed50a?w=800",
    title: "Reading & Storytelling",
    button: "Discover",
  },
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
    title: "Outdoor Adventures",
    button: "Get Started",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
    title: "Healthy Habits at Home",
    button: "Read More",
  },
];

const faqs = [
  { q: "At what age should I start prenatal visits?", a: "As soon as you find out you're pregnant, ideally in the first 8 weeks." },
  { q: "How often should I have prenatal check-ups?", a: "Monthly until 28 weeks, then every 2 weeks until 36 weeks, then weekly until delivery." },
  { q: "What should I eat during pregnancy?", a: "A balanced diet rich in folic acid, iron, calcium, and protein. Avoid raw fish, alcohol, and excess caffeine." },
  { q: "When should I start taking prenatal vitamins?", a: "Ideally before conception, but starting as soon as you know you're pregnant is still very beneficial." },
  { q: "How soon after birth should my newborn see a doctor?", a: "Within 3 to 5 days of birth, then at 1 month, 2 months, and so on per the pediatric schedule." },
  ];
  
export default function Page() {
  return (
    <div>
        <ServiceHero
          title="Parental Care"
          subtitle="From your newborn's first days to every milestone ahead, we provide dedicated medical support, nurturing guidance, and expert advice to help you raise a healthy and happy child with confidence."
          imageSrc="/parental-care.jpg"
        />
      <TrimesterGuide />
      <div className="my-10 lg:my-20">
      <Carousel slides={slideData} /></div>
      <FAQ data = {faqs} />
    </div>
  )
}