"use client";

import 'swiper/css';
import Hero from "./containers/Hero/Hero";
import Statement from "./containers/Statement/Statement";
import Marquee from "./containers/Marquee/Marquee";
import Journey from "./containers/Journey/Journey";
import Services from "./containers/Services/Services";
import Cases from "./containers/Cases/Cases";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Statement />
      <Marquee />
      <Journey />
      <Services />
      <Cases />
    </>
  );
};

export default HomePage;
