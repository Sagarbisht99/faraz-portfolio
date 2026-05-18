import Herosection from "./components/Herosection";
import SkillsSlider from "./components/SkillsSlider";
import AboutSection from "./components/About";
import ServicesPage from "./components/Service";
import WorkSection from "./components/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div className="min-h-full w-full overflow-x-hidden">
      <Header />
      <main>
        <Herosection />
        <SkillsSlider />
        <AboutSection />
        <ServicesPage />
        <WorkSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default page;
