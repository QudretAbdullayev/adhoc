"use client";

import 'swiper/css';
import Hero from "./containers/Hero/Hero";
import WhyUs from "./containers/WhyUs/WhyUs";
import Blog from "./containers/Blog/Blog";
import Testimonials from "./containers/Testimonials/Testimonials";
import Faq from "./containers/Faq/Faq";
import ContactForm from './containers/ContactForm/ContactForm';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Blog />
      <Faq />
    </main>
  );
};

export default HomePage;
