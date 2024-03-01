import AboutSection from "@/app/Pages/About/page";
import Appoinment from "@/app/Pages/Appoinment/page";
import BetterHelathCare from "@/app/Pages/BetterHelathCare/page";
import ConsultentSection from "@/app/Pages/ConsultentSection/page";
import FooterSection from "@/app/Pages/FooterSection/page";
import GallerySection from "@/app/Pages/GallerySection/page";
import HeaderLogo from "@/app/Pages/HeaderLogo/page";
import HeroSection from "@/app/Pages/HeroSection/page";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeSection = () => {
  return (
    <>
      <HeaderLogo />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Appoinment />
      <ConsultentSection />
      <BetterHelathCare />
      <FooterSection />
    </>
  );
};

export default HomeSection;
