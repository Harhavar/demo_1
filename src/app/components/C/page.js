import AboutSection from "@/app/Pages/About/page";
import Appoinment from "@/app/Pages/Appoinment/page";
import BetterHelathCare from "@/app/Pages/BetterHelathCare/page";
import ConsultentSection from "@/app/Pages/ConsultentSection/page";
import FooterSection from "@/app/Pages/FooterSection/page";
import GallerySection from "@/app/Pages/GallerySection/page";
import HeaderLogo from "@/app/Pages/HeaderLogo/page";
import HeroSection from "@/app/Pages/HeroSection/page";
import Services from "@/app/Pages/Services/Page";
import Contcat from "@/app/Pages/Contcat/page"
import "bootstrap/dist/css/bootstrap.min.css";

const HomeSection = () => {
  return (
    <>
      <HeaderLogo />
      <HeroSection />
      <AboutSection />
      <Services />
      <GallerySection />
      <Appoinment />
      <ConsultentSection />
      <BetterHelathCare />
      <Contcat />
      <FooterSection />
    </>
  );
};

export default HomeSection;
