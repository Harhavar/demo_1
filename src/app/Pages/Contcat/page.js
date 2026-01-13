"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      bgImage="url('/banner-8.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      {/* Overlay */}
      <Box
        bg="rgba(0,0,0,0.65)"
        p={{ base: 6, md: 12 }}
        borderRadius="lg"
        textAlign="center"
        maxW="900px"
        w="100%"
        color="white"
      >
        {/* Headings */}
        <Heading fontSize={{ base: "28px", md: "48px" }}>
          Take the First Step Towards Better Communication
        </Heading>

        <Text fontSize={{ base: "16px", md: "18px" }} mt={4}>
          Speak to a certified speech therapist at Vardhan Speech Therapy Clinic.
          We provide compassionate, evidence-based care for children and adults.
        </Text>

        {/* Phone */}
        <Heading
          as="a"
          href="tel:+919741871457"
          fontSize={{ base: "30px", md: "44px" }}
          fontWeight="800"
          mt={8}
          display="block"
          _hover={{ color: "#00A3C8" }}
        >
          <FaPhoneAlt style={{ display: "inline", marginRight: "10px" }} />
          +91 97418 71457
        </Heading>

        <Text mt={2} fontSize="14px">
          Call or WhatsApp us for appointments & enquiries
        </Text>

        {/* Social Icons */}
        <Flex
          justify="center"
          gap={6}
          mt={10}
          flexWrap="wrap"
        >
          <Link
            href="https://www.google.com/search?q=vardhan+speech+therapy+clinic"
            target="_blank"
            aria-label="Google Reviews"
          >
            <IconButton
              icon={<FaGoogle />}
              aria-label="Google"
              size="lg"
              colorScheme="red"
              borderRadius="full"
            />
          </Link>

          <Link
            href="https://www.instagram.com/vardhan_speech_therapy/"
            target="_blank"
            aria-label="Instagram"
          >
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              size="lg"
              colorScheme="pink"
              borderRadius="full"
            />
          </Link>

          <Link
            href="https://wa.me/919741871457"
            target="_blank"
            aria-label="WhatsApp"
          >
            <IconButton
              icon={<FaWhatsapp />}
              aria-label="WhatsApp"
              size="lg"
              colorScheme="green"
              borderRadius="full"
            />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
