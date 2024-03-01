import { ChakraProvider } from "@chakra-ui/react";
import HeaderLogo from "./Pages/HeaderLogo/page";
import HomeSection from "./components/C/page";

const Home = () => {
  return (
    <>
    <ChakraProvider>
    <HomeSection/>
    </ChakraProvider>
      {/* <HeaderLogo/> */}
      
      
    </>
  );
};

export default Home;
