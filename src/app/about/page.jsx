import AboutUsHero from "@/components/ui/aboutUsHero";
import Community from "@/components/ui/community";
import Experience from "@/components/ui/experience";
import GetInTouch from "@/components/ui/getInTouch";
import Philosophy from "@/components/ui/philosophy";
import { Philosopher } from "next/font/google";

export default function About() {
  return (
    <div>
      <AboutUsHero />      
      <Community />
      <Philosophy />
      <Experience />
      <GetInTouch />
    </div>
  )
}