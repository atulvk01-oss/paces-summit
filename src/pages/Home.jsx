import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import OrganisingBody from "../components/OrganisingBody";
import RegistrationCTA from "../components/RegistrationCTA";
import Speakers from "../components/Speakers";
import HomeSlider from "../components/HomeSlider";
import Contact from "../components/Contact";

const Home = () => {
  return (
    // <div className="bg-[#] text-white min-h-screen">
      <div className="bg-[#02131F] text-white min-h-screen pt-[120px]">

      <Navbar />

       <HomeSlider/>

      <Hero />

      <About />

      <Speakers />

      <OrganisingBody/>

      <RegistrationCTA />

      <Contact/>

    </div>
  );
};

export default Home;