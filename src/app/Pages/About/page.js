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
      heading: "Voice Therapy",
      text: "Professional voice therapy services to treat hoarseness, vocal strain, voice loss, and voice modulation issues, helping children and adults achieve clear and healthy voice production."
    },
    {
      url: "Speech_Therpy.jpg",
      heading: "Speech Therapy",
      text: "Comprehensive speech therapy for children and adults addressing speech delay, articulation disorders, stammering, pronunciation difficulties, and communication challenges."
    },
    {
      url: "stock.jpg",
      heading: "Stroke Rehabilitation",
      text: "Specialized speech and rehabilitation therapy for stroke and neurological conditions, focusing on speech recovery, swallowing therapy, and cognitive communication skills."
    }
    ,
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
    <Box id="about" display={"flex"} flexDirection={"column"} pt={15}>
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
            WELCOME TO VARDHAN SPEECH THERAPY
          </Heading>
          <Heading color={"#004861"} fontWeight={"700"} fontSize={"25px"} my={10} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            About Us
          </Heading>
          <Text
            color="#333"
            fontWeight="400"
            fontSize="17px"
            my={6}
            fontFamily="sans-serif"
          >
            Vardhan Speech Therapy is a professional speech and language therapy clinic
            dedicated to providing high-quality, evidence-based therapy services for
            children and adults. Established in 2023, our center is supported by licensed
            and experienced speech-language pathologists and multidisciplinary
            rehabilitation professionals.
          </Text>

          <Text
            color="#333"
            fontWeight="400"
            fontSize="17px"
            my={4}
            fontFamily="sans-serif"
          >
            We specialize in the assessment and treatment of speech delay, language
            disorders, articulation and pronunciation difficulties, stammering,
            voice disorders, neurological speech conditions, autism spectrum disorders,
            ADHD, and developmental communication challenges.
          </Text>

          <Text
            color="#333"
            fontWeight="400"
            fontSize="17px"
            my={4}
            fontFamily="sans-serif"
          >
            Our therapists provide services in Kannada, English,Hindi,Tamil and Telugu, ensuring
            effective communication and culturally sensitive care for every individual.
          </Text>

          <Heading color={"#004861"} fontWeight={"700"} fontSize={"45px"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            Mission
          </Heading>
          <Text
            color="#333"
            fontWeight="400"
            fontSize="17px"
            my={6}
            fontFamily="sans-serif"
          >
            Our mission is to empower children and adults with communication challenges
            by delivering personalized, ethical, and evidence-based speech and language
            therapy services. We strive to help every individual achieve confident
            communication, independence, and improved quality of life.
          </Text>

          <Text
            color="#333"
            fontWeight="400"
            fontSize="17px"
            my={4}
            fontFamily="sans-serif"
          >
            We are committed to providing comprehensive rehabilitation services through
            clinic-based and home-based therapy programs, ensuring accessibility,
            consistency, and measurable outcomes for our clients.
          </Text>

        </Box>
      </Box>
      
    </Box>
  );
};

export default About;
