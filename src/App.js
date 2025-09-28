import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"
import CountUpComponent from "./components/Count";
import Testimonials from "./components/Tesstimonial";
import VideoSection from "./components/VideoSection";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <NavbarComponent />
      <Hero />
      <CountUpComponent/> 
      <Features />
      <VideoSection/>
      <Gallery />
      <Testimonials/>
      <About />
      <Location />
      <Footer />
    </>
  );
}

export default App;
