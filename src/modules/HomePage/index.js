"use client";

import 'swiper/css';
import Hero from "./containers/Hero/Hero";
import WhyUs from "./containers/WhyUs/WhyUs";
// import News from "./containers/News/News";
import Testimonials from "./containers/Testimonials/Testimonials";
import Faq from "./containers/Faq/Faq";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyUs />
      {/* <News /> */}
      <Testimonials />
      <Faq />
    </main>
  );
};

export default HomePage;
