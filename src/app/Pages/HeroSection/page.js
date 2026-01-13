"use client";

import Image from "next/image";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Carousel } from "react-bootstrap";

const HeroSection = () => {
  const router = useRouter();

  return (
    <Box as="section" role="banner" pt={{ base: 24, md: 32 }} style={{ marginTop: "5%"}}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: 6, md: 16 }}
        gap={10}
      >
        {/* LEFT CONTENT – SEO */}
        <Box maxW="600px">
          <Heading
            as="h1"
            fontSize={{ base: "30px", md: "52px" }}
            fontWeight="700"
            color="teal.600"
            lineHeight="1.2"
          >
            Best Speech Language Therapy Centre in Bangaluru
          </Heading>

          <Text mt={4} fontSize="lg" color="gray.600">
          Vardhan Speech Therapy is a trusted speech therapy clinic for children and adults, delivering personalized treatment for speech delay, language development issues, autism, ADHD, stuttering, voice disorders, and neurological speech conditions using proven, evidence-based therapy approaches.
          </Text>

          <Flex mt={6} gap={4} flexWrap="wrap">
            <Button
              colorScheme="teal"
              size="lg"
              href="tel:+919741871457"
              //onClick={() => router.push("/contact")}
            >
              Call Us : +91 97418 71457
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push("/appointment")}
            >
              Make an Appointment
            </Button>
          </Flex>
        </Box>

        {/* RIGHT IMAGE SLIDER */}
        <Box w={{ base: "100%", md: "520px" }}>
          <Carousel
            controls={false}
            indicators={false}
            fade
            pause={false}
          >
            <Carousel.Item interval={3000}>
              <Image
                src="/b1.png"
                alt="Speech therapist consulting a patient at Vardhan Speech Therapy Clinic"
                width={520}
                height={520}
                priority
                sizes="(max-width: 768px) 90vw, 520px"
                style={{ objectFit: "contain" }}
              />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <Image
                src="/b2.png"
                alt="Child receiving speech therapy session at Vardhan Speech Therapy Centre"
                width={520}
                height={520}
                sizes="(max-width: 768px) 90vw, 520px"
                style={{ objectFit: "contain" }}
              />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <Image
                src="/b3.png"
                alt="Speech language pathologist working with a child on communication skills"
                width={520}
                height={520}
                sizes="(max-width: 768px) 90vw, 520px"
                style={{ objectFit: "contain" }}
              />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <Image
                src="/b4.png"
                alt="Professional speech therapy consultation for adults at Vardhan Speech Therapy"
                width={520}
                height={520}
                sizes="(max-width: 768px) 90vw, 520px"
                style={{ objectFit: "contain" }}
              />
            </Carousel.Item>
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
