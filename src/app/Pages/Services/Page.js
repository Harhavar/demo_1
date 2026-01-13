"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  // Highlighted services with images
  const featuredServices = [
    {
      url: "Voice_Therapy.jpg",
      heading: "Voice Therapy",
      text: "Treatment for hoarseness, vocal strain, voice loss, pitch and voice modulation issues for children and adults.",
    },
    {
      url: "Speech_Therpy.jpg",
      heading: "Speech & Language Therapy",
      text: "Therapy for speech delay, articulation disorders, stammering, pronunciation difficulties, and communication challenges.",
    },
    {
      url: "stock.jpg",
      heading: "Stroke Rehabilitation",
      text: "Speech, swallowing, and cognitive rehabilitation for stroke and neurological conditions.",
    },
  ];

  // Full services list (from poster)
  const allServices = [
    "Speech & Language Therapy",
    "Oral Placement Therapy",
    "Stroke Rehabilitation",
    "Autism & Developmental Therapy",
    "Fluency Shaping Therapy (Stuttering & Cluttering)",
    "Voice Therapy",
    "Articulation Therapy",
    "Swallowing (Dysphagia) & Feeding Therapy",
    "Cognitive Communication Therapy",
    "Pragmatic (Social) Communication Therapy",
    "Play-Based Therapy for Early Intervention",
    "Literacy & Phonological Awareness Therapy",
    "Parent & Caregiver Training",
  ];

  return (
    <Box id="services" pt={20} px={{ base: 4, md: 16 }}>
      {/* SECTION HEADER */}
      <Center mb={10}>
        <Stack textAlign="center" spacing={4}>
          <Heading color="#004861" fontSize={{ base: "32px", md: "45px" }}>
            Our Therapy Services
          </Heading>
          <Text color="#333" fontSize="17px" maxW="900px">
            Vardhan Speech Therapy Clinic provides comprehensive assessment and
            evidence-based treatment for children and adults with speech,
            language, voice, feeding, and developmental challenges.
          </Text>
        </Stack>
      </Center>

      {/* FEATURED SERVICES */}
      <Center>
        <Flex flexWrap="wrap" justify="center">
          {featuredServices.map((item, index) => (
            <Card
              key={index}
              m={4}
              w={{ base: "100%", md: "300px" }}
              boxShadow="lg"
              bg="white"
            >
              <CardBody>
                <Image
                  src={item.url}
                  alt={`${item.heading} at Vardhan Speech Therapy Clinic`}
                  borderRadius="lg"
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <Stack mt={5} spacing={3} textAlign="center">
                  <Heading size="md" color="#00A3C8">
                    {item.heading}
                  </Heading>
                  <Text color="#555">{item.text}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Center>

      {/* ALL SERVICES LIST */}
      <Box mt={20}>
        <Center mb={6}>
          <Heading size="lg" color="#004861">
            We Specialise In
          </Heading>
        </Center>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={6}
        >
          {allServices.map((service, index) => (
            <Box
              key={index}
              p={5}
              bg="#F7FAFC"
              borderLeft="5px solid #0E8EAB"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="600" color="#333">
                {service}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Services;
