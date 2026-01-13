
import { Box, Text, Image, Table, Tbody, Tr, Td } from "@chakra-ui/react";

const Appoinment = () => {
  return (
    <Box
      justifyContent="space-between"
      mx={{ base: 4, md: 8 }}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      py={{ base: 6, md: 12 }}
      pb={{ base: 6, md: 4 }}
    >
      {/* First Box */}
      <Box w={{ base: "100%", md: "100%" }} mb={{ base: 8, md: 0 }} display={"flex"}>
        <Box
          className="abox-4 mb-40 wow fadeInUp"
          visibility="visible"
          animationDelay="0.4s"
          animationName="fadeInUp"
        >
          <Image
            src="/15Oral placement therapy.png"
            height="250"
            width="600"
            alt="Oral placement therapy"
          />
          <Box className="abox-4-txt">

            <Text
              as="h2"
              color="#004861"
              mb="15px"
              fontSize={{ base: "26px", md: "30px" }}
              mt={5}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Highest Quality Speech & Rehabilitation Care
            </Text>

            <Text
              fontSize={{ base: "14px", md: "1rem" }}
              textAlign="center"
              fontFamily="sans-serif"
            >
              At Vardhan Speech Therapy, we deliver high-quality, evidence-based speech,
              language, and rehabilitation services for children and adults. Our
              patient-centered approach ensures effective therapy outcomes, improved
              communication skills, and long-term wellbeing.
            </Text>

          </Box>
        </Box>
      </Box>

      {/* Second Box */}
      <Box w={{ base: "100%", md: "100%" }} mb={{ base: 8, md: 0 }}>
        <Box
          className="abox-4 mb-40 wow fadeInUp"
          visibility="visible"
          animationDelay="0.6s"
          animationName="fadeInUp"
        >
          <Image
            src="/22swallowing Therapy.png"
            height="250"
            width="600"
            alt="Speech and Swallowing Therapy"
          />
          <Box className="abox-4-txt">
            <Text
              as="h2"
              color="#004861"
              mb="15px"
              fontSize={{ base: "26px", md: "30px" }}
              mt={5}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Comprehensive Medical Stroke Rehabilitation Services
            </Text>

            <Text
              fontSize={{ base: "14px", md: "1rem" }}
              textAlign="center"
              fontFamily="sans-serif"
            >
              Our medical rehabilitation programs support recovery from stroke, neurological
              conditions, speech disorders, and developmental delays. We focus on restoring
              physical, cognitive, and communication abilities to help individuals regain
              independence and improve their quality of life.
            </Text>

          </Box>
        </Box>
      </Box>

      {/* Third Box */}
      <Box
        w={{ base: "100%", md: "100%" }}
        mb={{ base: 8, md: 0 }}
        p={{ base: 4, md: 6 }}
        rounded={"10"}
        mx={{ base: 0, md: 4 }}
        backgroundColor={"#00A3C8"}

      >
        <Box
          visibility="visible"
          animationDelay="0.6s"
          animationName="fadeInUp"

        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} mb="15px" color={"white"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            Working Time
          </Text>
          <Text mt="0" color={"white"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            We work hard to give you the best services
          </Text>
          <Table className="table" >
            <Tbody backgroundColor={"#00A3C8"}>
              <Tr backgroundColor={"#00A3C8"}>
                <Td>Monday – Saturday</Td>
                <Td>-</Td>
                <Td textAlign={{ base: "center", md: "right" }}>10:00 AM - 9:00 PM</Td>
              </Tr>
              <Tr>
                <Td>Sunday</Td>
                <Td>-</Td>
                <Td textAlign={{ base: "center", md: "right" }}>Closed</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Appoinment;
