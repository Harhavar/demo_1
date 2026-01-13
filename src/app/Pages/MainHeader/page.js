"use client";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  FaPhone,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaEmail,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Link from "next/link";

const MainHeader = () => {
  return (
    <Box  width="100%" bg={"white"}  zIndex={9999} position={"fixed"} border={'1px solid red'}>
      <Box
        bg="#00A3C8"
        color="white"
        textAlign="center"
        py="4"
      >
        <Flex mx={100} >
          <Box display={"flex"} my={5} >
            <Text mt={3} fontSize={"10px"} >
              <FaPhone />
            </Text>
            <Text mx={10}>( +91) 9741871457</Text>
          </Box>
          <Box display={"flex"} my={5}>
            <Text mt={3} fontSize={"13px"}>
              <MdOutlineEmail />
            </Text>
            <Text mx={10}>murli@gmail.com</Text>
          </Box>
          <Spacer />
          <Flex ml="auhref" gap="50px" mt="5px" color={"white"} marginTop={"10"}>
            <Link href="http://www.google.com" className="googleicon">
              <FaGoogle />
            </Link>
            <Link
              href="https://www.linkedin.com/company/97418395"
              className="linkedinicon"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://twitter.com/" className="twittericon">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.facebook.com/search/"
              className="facebookicon"
            >
              <FaFacebookF />
            </Link>
            <Link href="https://wa.me/+919741871457" className="facebookicon">
              <FaWhatsapp />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainHeader;
