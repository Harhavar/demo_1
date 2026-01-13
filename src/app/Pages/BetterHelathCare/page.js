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
            <Text mt={4} color="black" fontWeight={600}>
              ADVANCED SPEECH & REHABILITATION CARE
            </Text>

            <Heading fontSize={{ base: 30, md: 60 }} fontWeight={700} mt={2}>
              Better Technology for Effective Speech Therapy & Rehabilitation
            </Heading>

            <Text mt={4} fontSize="17px">
              At Vardhan Speech Therapy, we use modern therapy techniques and
              evidence-based rehabilitation approaches to deliver effective speech,
              language, voice, and developmental therapy for children and adults.
              Our goal is to improve communication, independence, and overall quality
              of life through personalized care.
            </Text>

            <Button
              color="white"
              borderRadius={5}
              p={2}
              border="1px solid white"
              mt={4}
            >
              Explore Our Speech Therapy Services
            </Button>

          </Box>
        </Box>
      </Box>
      
    </>
  );
};

export default BetterHelathCare;
