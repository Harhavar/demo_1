"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const About = () => {
  const fakeImages = [
    {
      url: "Voice_Therapy.jpg",
      text: "Transform your voice with specialized therapy, enhancing clarity, strength, and expression for more effective communication and confidence.",
      link: "/page1",
      heading: "Voice Therapy",
    },

    {
      url: "Speech_Therpy.jpg",
      text: "Unlock your full potential with personalized speech therapy services, improving communication skills and boosting confidence!",
      link: "/page1",
      heading: "Speech Therapy",
    },
    {
      url: "stock.jpg",
      text: "Regain independence and mobility post-stroke with personalized rehabilitation programs, restoring function and improving quality of life.",
      link: "/page1",
      heading: "Stroke rehabilitation",
    },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const scrollCards = () => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % fakeImages.length);
    };

    const intervalId = setInterval(scrollCards, 500);

    return () => clearInterval(intervalId);
  },);
  return (
    <Box display={"flex"} flexDirection={"column"} pt={15}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        mx={{ base: 4, md: 50 }} // Responsive margin
      >
        <Box width={{ base: "100%", md: "40%" }} padding={4}>
          {" "}
          {/* Responsive width and padding */}
          <Image
            src="/AboutDoctor.png"
            alt="Image"
            w={"100%"}
            maxH={"80vh"}
          />{" "}
          {/* Responsive width and max height */}
        </Box>
        <Box width={{ base: "100%", md: "50%" }} padding={4}>
          {" "}
          <Heading color={"#00A3CF"} fontSize={"30px"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            WELCOME TO vardhan_speech_therapy
          </Heading>
          <Heading color={"#004861"} fontWeight={"700"} fontSize={"25px"} my={10} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            About Us
          </Heading>
          <Text color={"#333"} fontWeight={"300"} fontSize={"17px"} my={10} fontFamily={"sans-serif"}>
            We are a community of licensed multidisciplinary professionals.
            Established in 2019 and we have conducted more than 1000 online
            sessions and home visits within a span of 2 years. We are associated
            with professionals with following languages ( Kannada, English,
            Malayalam, Hindi, Tamil, Marathi, and Other Regional Languages)
          </Text>
          <Heading color={"#004861"} fontWeight={"700"} fontSize={"45px"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            Mission
          </Heading>
          <Text color={"#333"} fontWeight={"300"} fontSize={"17px"} my={10} fontFamily={"sans-serif"}>
            Our mission is to fulfill the aspirations of patients in need to
            find their specific therapists or pathologists for both Children and
            adults. Our motive is to deliver excellent rehabilitation services
            at your doorstep, sparing no expense, to ensure that the individual
            steps out with a rejuvenated spirit.
          </Text>
        </Box>
      </Box>
      <Center>
        <Box display={"flex"} flexDirection={"column"}>
          <Heading color={"#004861"} fontWeight={"700"} fontSize={"45px"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            Child Development Center
          </Heading>
          <Text
            color={"#333"}
            fontWeight={"300"}
            fontSize={"17px"}
            mt={"10"}
            alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}
          >
            The word health refers to a state of complete emotional and physical
            well-<br></br>being. Healthcare exists to help people maintain this
            optimal state of health.
          </Text>
        </Box>
      </Center>

      <Center>
        <Box display={"flex"} my={10} border={""}>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            {fakeImages.map((item, index) => (
              <Card
                key={index}
                m={4}
                w={{ base: "100%", md: "300px" }} // Responsive width
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
                display={"flex"}
                bg={"#FFFFFF"}
              >
                <CardBody>
                  <Image
                    src={item.url}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    width="100%"
                    height={"40vh"}
                  />
                  <Center>
                    <Stack mt="6" spacing="3" >
                      <Heading size="md" color={"#00A3C8"} align="center">
                        {item.heading}
                      </Heading>
                      <Text color={"#333"} textAlign="center">
                        {item.text}
                      </Text>
                    </Stack>
                  </Center>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default About;
