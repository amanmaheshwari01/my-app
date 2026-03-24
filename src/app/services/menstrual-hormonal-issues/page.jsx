import DiagnosisProcess from "@/components/ui/diagonoseSection";
import FAQ from "@/components/ui/faq";
import IssuesSection from "@/components/ui/menstrualIssues";
import ServiceHero from "@/components/ui/serviceHero";

const faqs = [
  {
    q: "How do I know if my periods are irregular?",
    a: "A normal cycle is anywhere between 21 to 35 days. If your cycle is consistently shorter, longer, or unpredictable from month to month, that is worth discussing with a doctor.",
  },
  {
    q: "Is severe period pain normal?",
    a: "Mild cramping is normal. But if the pain disrupts your daily routine, requires strong painkillers, or has worsened over time — it could indicate endometriosis or fibroids and needs evaluation.",
  },
  {
    q: "How do I know if I have a hormonal imbalance?",
    a: "Common signs include irregular periods, unexplained weight changes, fatigue, acne, hair thinning, and mood swings. A simple blood test can confirm whether your hormones are out of range.",
  },
  {
    q: "Can stress affect both my periods and hormones?",
    a: "Yes. High stress raises cortisol which directly interferes with the hormones that regulate your cycle — causing delayed, missed, or irregular periods and worsening existing hormonal conditions like PCOS.",
  },
  {
    q: "Can menstrual or hormonal problems affect fertility?",
    a: "Conditions like PCOS, endometriosis, thyroid disorders, and uterine fibroids can all affect fertility. Early diagnosis and treatment significantly improves the chances of conception.",
  },
];

const menstrualIssues = [
  {
    title: "Irregular Periods",
    desc: "Cycles that are too short, too long, or unpredictable can signal hormonal imbalances, thyroid disorders, or PCOS.",
    icon: "Calendar"
  },
  {
    title: "Heavy Bleeding",
    desc: "Soaking through pads or tampons frequently during your period may indicate fibroids, adenomyosis, or clotting disorders.",
    icon: "Droplet"
  },
  {
    title: "Painful Periods",
    desc: "Severe cramping that disrupts daily life is not normal. It may point to endometriosis, fibroids, or pelvic inflammatory disease.",
    icon: "Activity"
  },
  {
    title: "Missed Periods",
    desc: "Absence of periods — outside of pregnancy — can result from extreme stress, low body weight, or hormonal disruption.",
    icon: "Clock"
  },
  {
    title: "Premenstrual Syndrome",
    desc: "Mood swings, bloating, and fatigue in the days before your period are signs of PMS that can be managed with the right care.",
    icon: "HeartPulse",
  },
  {
    title: "Intermenstrual Bleeding",
    desc: "Spotting or bleeding between periods should never be ignored — it can be linked to polyps, infection, or hormonal shifts.",
    icon: "AlertCircle"
  },
];

const hormonalIssues = [
  { title: "PCOS",
    desc: "Polycystic ovary syndrome causes irregular periods, excess androgens, and cysts — one of the most common hormonal disorders in women.",
    icon: "Zap"
  },

  { title: "Thyroid Disorders",
    desc: "An underactive or overactive thyroid disrupts metabolism, mood, weight, and menstrual regularity." ,
    icon: "Thermometer"
  }, 
  { title: "Estrogen Imbalance",
    desc: "Too much or too little estrogen affects bone density, mood, libido, and the regularity of your menstrual cycle." ,
    icon: "Scale"
  },       
  { title: "Adrenal Dysfunction",
    desc: "Overworked adrenal glands from chronic stress can suppress reproductive hormones and lead to fatigue and irregular cycles.",
    icon: "Brain"
  },       
  { title: "Sleep & Hormone Link",
    desc: "Poor sleep directly disrupts cortisol, melatonin, and reproductive hormones — worsening existing imbalances.",
    icon: "Moon"
  },        
  { title: "Perimenopause",
    desc: "Fluctuating hormones in the years before menopause cause hot flashes, mood changes, and cycle irregularities that need proper management.",
    icon: "Wind"
  }    
];

export default function MenstrualHormonalIssues() {
  return (
    <div>
      <ServiceHero
        title="Menstrual & Hormonal Care"
        subtitle="From irregular periods and painful cramps to hormonal imbalances and 
        conditions like PCOS, our specialists provide accurate diagnosis and personalized 
        treatment plans. We focus on restoring balance, improving comfort, and supporting 
        your overall reproductive health at every stage of life."
        imageSrc="/menstrual.png"
      />
        <IssuesSection
          eyebrow="You are not alone"
          heading="Menstrual Issues"
          subtext="Many women silently live with menstrual problems..."
          issues={menstrualIssues}
        />
        <IssuesSection
          eyebrow="Restore your balance"
          heading="Hormonal Issues"
          subtext="Hormonal imbalances affect far more than your cycle..."
          issues={hormonalIssues}
        />
       <DiagnosisProcess />
       <FAQ data = {faqs} />
    </div>
  )
}