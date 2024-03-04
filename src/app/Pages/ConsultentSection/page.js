 "use client";


import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const ConsultentSection = () => {
  const router = useRouter();
  return (
    <Box
      backgroundColor={"#FFFFFF"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        mx={{ base: 4, md: 50 }}
      >
        <Box width={{ base: "100%", md: "50%" }} padding={{ base: 4, md: 10 }}>
          <Heading color={"#00A3CF"} fontSize={{ base: "16px", md: "20px" }}>
            QUALIFIED CONSULTANTS{" "}
          </Heading>

          <Heading
            color={"#004861"}
            fontWeight={"700"}
            fontSize={{ base: "30px", md: "45px" }}
            mt={{ base: 2, md: 4 }}
          >
            Group of Certified and Experienced Consultants{" "}
          </Heading>
          <Button
            backgroundColor={"#00A3C8"}
            color={"white"}
            size="xs"
            width={{ base: "100%", md: "120px" }}
            padding={2}
            border={"none"}
            borderRadius={"15"}
            onClick={() => router.push("/components/Appointment")}
            mt={{ base: 4, md: 6 }}
          >
            Book Now!{" "}
          </Button>
        </Box>
        <Box
          width={{ base: "100%", md: "40%" }}
          padding={{ base: 4, md: 30 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Image src="/Doctor2.png" alt="Image" w={"50"} height={"80vh"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ConsultentSection;
