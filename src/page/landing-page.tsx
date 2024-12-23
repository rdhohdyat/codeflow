import { Navbar } from "../components/Navbar";
import FAQ from "../components/fragment/FAQ";
import About from "../components/fragment/About";
import Service from "../components/fragment/Service";
import Contact from "../components/fragment/Contact";
import Home from "../components/fragment/Home";
import Docs from "../components/fragment/Docs";
import Footer from "../components/fragment/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Docs />
      <FAQ />
      <Contact />
      <Footer/>
    </>
  );
}

export default LandingPage;
