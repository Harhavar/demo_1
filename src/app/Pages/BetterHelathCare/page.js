import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { Button } from "react-bootstrap";

const BetterHelathCare = () => {
  return (
    <>
      <Box
        bgImage="url('./banner-2.jpg')"
        bgSize="cover"
        bgPos="center"
        bgAttachment="fixed"
        w="100%"
        p={4}
        overflow="hidden"
      >
        <Box
        
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display={{ base: "block", md: "flex" }}
          mx={{ base: 4, md: 50 }}
        >
          <Image
            src="/Healthcare.png"
            alt="Fixed Image"
            boxSize={{ base: "100%", md: "50%" }}
            objectFit="cover"
          />

          <Box
            p={{ base: 4, md: 50 }}
            color="white"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text mt={4} color="black" fontWeight={500}>
              MODERN MEDICINE
            </Text>
            <Heading fontSize={{ base: 30, md: 60 }} fontWeight={600} mt={2}>
              Better Technologies for Better Healthcare
            </Heading>
            <Text mt={4}>
              In Healthcare, digital technology could help transform
              unsustainable healthcare systems into sustainable ones, equalize
              the relationship between medical professionals and patients,
              provide cheaper, faster and more effective solutions for diseases.
            </Text>

            <Button
              color="white"
              borderRadius={5}
              p={2}
              border="1px solid white"
              mt={4}
            >
              View Our Services
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        bgImage="url('./banner-8.jpg')"
        bgSize="cover"
        bgPos="center"
        h="100vh"
        w="100%"
        p={4}
        overflowY="none"
      >
        <Center h="100vh">
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={{ base: "6", md: "10" }}
            textAlign="center"
            color="white"
            bg="rgba(0, 0, 0, 0.5)" // Add a semi-transparent background for better visibility
          >
            <Heading fontSize={{ base: "30px", md: "50px" }} mt={4}>
              Take the First Step to Help
            </Heading>
            <Heading fontSize={{ base: "25px", md: "40px" }} mt={4}>
              Call Us Now
            </Heading>
            <Heading
              fontSize={{ base: "40px", md: "60px" }}
              fontWeight={800}
              mt={4}
            >
              (+91) 9741871457
            </Heading>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default BetterHelathCare;
