import Carousel from "@/components/ui/carousel";
import FAQ from "@/components/ui/faq";
import Philosophy from "@/components/ui/philosophy";
import ServiceHero from "@/components/ui/serviceHero";
import TrimesterGuide from "@/components/ui/trimesterGuide";

const prenatalServices = [
  {
    title: "First Trimester Care",
    description:
      `The first trimester is one of the most critical phases of pregnancy, and early 
      medical care makes a significant difference. We conduct your first prenatal visit 
      with a thorough health assessment, confirm the pregnancy through ultrasound, check 
      your blood group, haemoglobin, thyroid, and other essential parameters. We also 
      screen for chromosomal abnormalities through the NT scan and first trimester blood 
      tests. Our team guides you on nutrition, safe medications, warning signs to watch 
      for, and lifestyle adjustments to ensure a strong and healthy start to your pregnancy.`,
    image: "/prenatalCareFirstTrimester.png"
  },
  {
    title: "Second Trimester Monitoring",
    description:
      `The second trimester is when your baby grows rapidly and your body undergoes 
      significant changes. We monitor fetal growth, position, and movements through 
      regular ultrasounds including the anomaly scan at 18 to 20 weeks which checks 
      for structural abnormalities. Blood tests for gestational diabetes, anaemia, and 
      other conditions are carried out during this period. We also track your blood 
      pressure, weight gain, and overall well-being to ensure both you and your baby 
      are progressing well and any concerns are addressed without delay.`,
    image: "/prenatalCareSecondTrimester.png"
  },
  {
    title: "Third Trimester & Birth Preparation",
    description:
      `As your due date approaches, visits become more frequent and focused on preparing 
      you for a safe delivery. We monitor fetal position, growth, placental health, and 
      amniotic fluid levels through regular scans and check-ups. Our team discusses your 
      birth plan — whether you prefer a normal delivery or caesarean — and prepares you 
      for labour signs, hospital admission, and what to expect during delivery.`,
    image: "/prenatalCareThirdTrimester.png"
  },
  {
    title: "High-Risk Pregnancy Management",
    description:
      `Some pregnancies require closer attention due to pre-existing conditions such as 
      diabetes, hypertension, thyroid disorders, or previous pregnancy complications. 
      Dr. Pratishtha has extensive experience managing high-risk pregnancies with a 
      structured and vigilant approach. We create a customised monitoring plan with 
      more frequent visits, specialised tests, and timely interventions to protect both 
      mother and baby. Our goal is to minimise risk at every stage and ensure a safe 
      outcome even in the most complex situations.`,
    image: "/prenatalCareHighRisk.png"
  }
];

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
        title="Prenatal Care"
        subtitle="Comprehensive medical support throughout your pregnancy — from early check‑ups and screenings to expert guidance on health, nutrition, and fetal development — ensuring both you and your baby stay healthy each step of the way." 
        imageSrc= "/prenatalCare.jpg"      
      />
      <div>
        {prenatalServices.map((data, index) => (
          <Philosophy key={index} data={data} index={index} />
        ))}
      </div>
      <TrimesterGuide />
      <div className="my-10 lg:my-20">
      <Carousel slides={slideData} /></div>
      <FAQ data = {faqs} />
    </div>
  )
}