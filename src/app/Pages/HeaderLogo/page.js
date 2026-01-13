"use client";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <>
      <Box
        width="100%"
        bg={"white"}
        zIndex={9999}
        position={{ base: "none", md: "fixed" }}
        top={0}
        left={0}
        margin={0}
        padding={0}
        display={"flex"}
        flexDirection={"column"}
      >

        <Flex
          bg="#00A3C8"
          color="white"
          align="center"
          justify="space-between"
          px={{ base: 4, md: 10 }}
          py={2}
          fontSize="sm"
        >
          {/* Contact */}
          <Flex gap={6} align="center" _hover={{ transform: "scale(1.1)", color: "#335555" }}
            transition="0.2s">
            <Link href="tel:+919741871457">
              <Flex align="center" gap={2}>
                <FaPhone />
                <Text href="tel:+919741871457" >(+91) 97418 71457</Text>
              </Flex>
            </Link>

            <Link href="mailto:vardhanslp@gmail.com">
              <Flex align="center" gap={2}>
                <MdOutlineEmail />
                <Text >vardhanslp@gmail.com</Text>
              </Flex>
            </Link>
          </Flex>

          {/* Social */}
          <Flex gap={4} _hover={{ transform: "scale(1.1)", color: "#E6F7FB" }}
            transition="0.2s">
            <Link href="https://www.google.com/search?q=vardhan+speech+therapy+clinic" target="_blank" aria-label="Google Reviews">
              <FaGoogle />
            </Link>
            <Link href="https://www.linkedin.com/company/97418395" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://wa.me/919741871457" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </Link>
            <Link href="https://instagram.com/vardhan_speech_therapy" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </Flex>
        </Flex>
        <Box
          mx={5} // Adjust this value as needed
          px={{ base: "10px", md: "0" }}
          position="relative"
          bg="##e0afaf"
        >
          <Flex

            justifyContent={{ base: "space-between", md: "space-around" }}
            alignItems="center"
            direction={{ base: "column", md: "row" }}
            _hover={{ transform: "scale(1.1)", color: "#E6F7FB" }}
            transition="0.2s"
          >
            <Box bg="white">
              <Flex justify="center" align="center">
                <Link href="/" aria-label="Vardhan Speech Therapy Home">
                  <Image
                    src="/vst-logo.png"
                    alt="Vardhan Speech Therapy Clinic Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </Flex>
            </Box>

            <Box
              as="nav"
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              gap={8}
              fontSize="15px"
              fontWeight="600"
              color="gray.700"
            >
              <Link href="/" passHref>
                <Text
                  cursor="pointer"
                  _hover={{ color: "#0E8EAB" }}
                  transition="0.2s"
                >
                  Home
                </Text>
              </Link>

              <Link href="/#about" scroll={true}>
                <Text
                  cursor="pointer"
                  _hover={{ color: "#0E8EAB" }}
                  transition="0.2s"
                >
                  About
                </Text>
              </Link>


              <Link href="/#services" passHref>
                <Text
                  cursor="pointer"
                  _hover={{ color: "#0E8EAB" }}
                  transition="0.2s"
                >
                  Services
                </Text>
              </Link>

              <Link href="/#gallery" passHref>
                <Text
                  cursor="pointer"
                  _hover={{ color: "#0E8EAB" }}
                  transition="0.2s"
                >
                  Gallery
                </Text>
              </Link>

              <Link href="/#contact" passHref>
                <Text
                  cursor="pointer"
                  _hover={{ color: "#0E8EAB" }}
                  transition="0.2s"
                >
                  Contact
                </Text>
              </Link>

              <Button
                bg="#0E8EAB"
                color="white"
                borderRadius="full"
                px={6}
                py={5}
                fontSize="14px"
                _hover={{ bg: "#0B6F86" }}
                onClick={() => router.push("/appointment")}
              >
                Make an Appointment
              </Button>
            </Box>

          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HeaderLogo;
