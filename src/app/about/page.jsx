import AboutUsHero from "@/components/ui/aboutUsHero";
import { Achievements } from "@/components/ui/drAchievements";
import { Certificates } from "@/components/ui/drCertification";
import Experience from "@/components/ui/experience";
import GetInTouch from "@/components/ui/BookAppointment";
import MeetDoctor from "@/components/ui/meetDoctor";
import Philosophy from "@/components/ui/philosophy";
import ServiceHero from "@/components/ui/serviceHero";


export default function About() {
  return (
    <div>
      <ServiceHero
        title="Personalized Women’s Health Care"
        subtitle="Comprehensive, compassionate care for every stage of a woman’s life — from menstrual health to pregnancy and beyond."
        imageSrc="/aboutHero.jpg"
      />
      <MeetDoctor
        name="Meet Dr. Pratishtha"
        title="Board-Certified OB/GYN with Over 20 Years of Experience"
        description="Dr. Pratishtha completed her M.S. in Obstetrics & Gynaecology from SMS Hospital, Jaipur, followed by an advanced fellowship in Reproductive Medicine. With over 10,000 patients treated and a 99% satisfaction rate, she specialises in high-risk pregnancies, infertility, laparoscopic surgery, and adolescent gynaecology — always delivering care that is thorough, honest, and deeply personal."
        imageSrc="/DrVaishaliSharma.jpg"
        imageAlt="Dr. Vaishali Sharma"
        tags={["High-Risk Pregnancy", "Infertility & IVF", "Laparoscopic Surgery", "PCOS", "Menopause Care", "Adolescent Gynaecology"]}
      />    
      <Achievements items={[
        {
          year: "2024",
          heading: "Best Gynaecologist — Jaipur",
          body: "Awarded by the Rajasthan Healthcare Excellence Council for outstanding contribution to women's health in the region.",
        },
        {
          year: "2022",
          heading: "10,000 Patients Milestone",
          body: "Crossed a decade of consistent practice with over ten thousand women treated across obstetrics, gynaecology, and fertility.",
        },
        {
          year: "2020",
          heading: "Compassionate Doctor Award",
          body: "Recognised by the IMA Rajasthan Chapter for exceptional patient care during the COVID-19 pandemic without interrupting critical OPD services.",
        },
        {
          year: "2017",
          heading: "Distinguished Service — SMS Medical College",
          body: "Honoured by her alma mater for continued mentorship of postgraduate students and contribution to academic gynaecology.",
        },
      ]} />

      <Certificates items={[
        {
          title: "M.S. Obstetrics & Gynaecology",
          issuer: "SMS Hospital, Jaipur",
          year: "2001",
          note: "Postgraduate degree with specialisation in surgical and obstetric management.",
        },
        {
          title: "Diplomate — National Board of Examinations",
          issuer: "National Board of Examinations in Medical Sciences",
          year: "2002",
          note: "DNB certification in Obstetrics & Gynaecology — one of the highest national credentials.",
        },
        {
          title: "Fellowship in Reproductive Medicine & ART",
          issuer: "National Fertility Centre, Jaipur",
          year: "2003",
          note: "Advanced training in IUI, IVF, and ICSI assisted reproductive technology protocols.",
        },
        {
          title: "Advanced Laparoscopic Gynaecology",
          issuer: "Indian Association of Gynaecological Endoscopists (IAGE)",
          year: "2004",
          note: "Certified for complex minimally invasive procedures including endometriosis excision and myomectomy.",
        },
        {
          title: "Menopause & HRT Practitioner",
          issuer: "Indian Menopause Society (IMS)",
          year: "2009",
          note: "Certified in evidence-based hormone replacement therapy and long-term menopausal management.",
        },
        {
          title: "Colposcopy & Cervical Pathology",
          issuer: "Indian Society for Colposcopy & Cervical Pathology (ISCCP)",
          year: "2012",
          note: "Certified in early detection and management of pre-cancerous cervical lesions.",
        },
      ]} />
      <Philosophy />
      <Experience />
      <GetInTouch />
    </div>
  )
}