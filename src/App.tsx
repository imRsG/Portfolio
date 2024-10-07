import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import Preloader from "./components/Preloader";
import video from "./assets/Preloader.mp4"
import CursorFollower from "./components/CursorFollower";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Preloader videoSrc={video} displayTime={4.2} animationDuration={1.5} />
      <CursorFollower />
          <Navbar />  
          <Hero />
          <Sponsors />
          <About />
          <Gallery />
          <HowItWorks />
          {/* <Features /> */}
          <Services />
          <Cta />
          <Testimonials />
          {/* <Team /> */}
          {/* <Pricing /> */}
          <Newsletter />
          <FAQ />
          <Footer />
          <ScrollToTop />
    </>
  );
}

export default App;
