import { Card } from "@mui/material";
import FirstSection from "./First Section/FirstSection";
import HeroSection from "./Hero/HeroSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./Third Section/ThirdSection";
import Fourth from "./Fourth Section/Fourth";
import Fifth from "./Fifth Section/Fifth";
// import FAQAccordion from "./Sixth Section/FaqAccordion";
import FaqSection from "./Sixth Section/FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Fourth />
      <Fifth />
      <FaqSection />
    </>
  );
};
export default Home;
