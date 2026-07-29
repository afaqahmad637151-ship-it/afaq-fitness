"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import BmiCalculator from "@/components/BmiCalculator";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <Loader onComplete={() => setRevealed(true)} />
      <div className="noise" />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero revealed={revealed} />
        <Marquee />
        <About />
        <Programs />
        <Membership />
        <Trainers />
        <BmiCalculator />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
