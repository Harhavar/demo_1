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
        position={{base:"none", md:"fixed"}}
        top={0}
        left={0}
        margin={0}
        padding={0}
        display={"flex"}
        flexDirection={"column"}
      >
        {/* <Flex
          bg="#00A3C8"
          color="white"
          flexDirection={"row"}
          alignItems={"center"}
          textAlign={"center"}
          fontFamily={"sans-serif"}
          justifyContent={"space-between"}
        >
          <Box my={2}>
            <Flex gap={4} justify="center" flexDirection={"row"} mx={10}>
              <Text>( +91) 9741871457</Text>
              <Text>vardhanslp@gmail.com</Text>
            </Flex>
          </Box>
          <Box>
            <Flex gap={8} justify="center" my={2} mx={10}>
              <Link href="http://www.google.com" target="_blank">
                <FaGoogle color="white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/97418395"
                target="_blank"
              >
                <FaLinkedin color="white" />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <FaTwitter color="white" />
              </Link>
              <Link href="https://www.facebook.com/search/" target="_blank">
                <FaFacebookF color="white" />
              </Link>
              <Link href="https://wa.me/+919741871457" target="_blank">
                <FaWhatsapp color="white" />
              </Link>
              <Link
                href="https://instagram.com/vardhan_speech_therapy?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <FaInstagram color="white" />
              </Link>
            </Flex>
          </Box>
        </Flex> */}
        <Flex
      bg="#00A3C8"
      color="white"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      textAlign="center"
      fontFamily="sans-serif"
      justifyContent="space-between"
      p={2}
    >
      <Box mb={{ base: 4, md: 0 }}>
        <Flex gap={4} justify="center" flexDirection={{ base: "column", md: "row" }} mx={{ base: 2, md: 10 }}>
          <Text>( +91) 9741871457</Text>
          <Text>vardhanslp@gmail.com</Text>
        </Flex>
      </Box>
      <Box>
        <Flex gap={8} justify={{ base: "center", md: "flex-end" }} my={2} mx={{ base: 2, md: 10 }}>
          <Link href="https://www.google.com/search?q=vardhan+speech+therapy+clinic&oq=vardhan&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg5MgcIARAuGIAEMgYIAhAjGCcyDQgDEC4YrwEYxwEYgAQyBwgEEC4YgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkxMDQ1NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank">
            <FaGoogle color="white" />
          </Link>
          <Link href="https://www.linkedin.com/company/97418395" target="_blank">
            <FaLinkedin color="white" />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <FaTwitter color="white" />
          </Link>
          <Link href="https://www.facebook.com/share/CfqUHB7ThQDJLfb6/?mibextid=qi2Omg" target="_blank">
            <FaFacebookF color="white" />
          </Link>
          <Link href="https://wa.me/+919741871457" target="_blank">
            <FaWhatsapp color="white" />
          </Link>
          <Link href="https://instagram.com/vardhan_speech_therapy?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
            <FaInstagram color="white" />
          </Link>
        </Flex>
      </Box>
    </Flex>

        <Box
        mx={5} // Adjust this value as needed
        px={{ base: "15px", md: "0" }}
        position="relative"
        bg="#fff"
      >
        <Flex
          py="3"
          justifyContent={{ base: "space-between", md: "space-around" }}
          alignItems="center"
          direction={{ base: "column", md: "row" }}
        >
          <Box mb={{ base: 4, md: 0 }} order={{ base: 2, md: 1 }}>
            <Link href="/">
              <Image src="/vlogo.png" alt="Logo" width={200} height={50} />
            </Link>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            gap={4}
            fontSize="15.5px"
            fontWeight="bold"
            color="#666"
            py={7}
            order={{ base: 1, md: 2 }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              About
            </Link>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Services
            </Link>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Contact
            </Link>
            <Button
              bg="#0E8EAB"
              color={"white"}
              mt={"-7px"}
              borderRadius={5}
              cursor={"pointer"}
              p={"8px"}
              border={"none"}
              onClick={() => router.push("/components/Appointment")}
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
