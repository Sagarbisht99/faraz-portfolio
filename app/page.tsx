import Herosection from "./components/Herosection";
import SkillsSlider from "./components/SkillsSlider";
import AboutSection from "./components/About";
import ServicesPage from "./components/Service";
import WorkSection from "./components/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      </main>
      <Footer />
    </div>
  );
};

export default page;
