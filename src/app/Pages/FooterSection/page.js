import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <Box  margin={10}>
        <Flex  direction={{ base: "column", md: "row",lg:"row" }}>
          <Box flex="1 1 100%" mb={{ base: 8, md: 0 }} >
            <Box mb={{ base: 8, md: 40 }}>
              <Image src="/vlogo.png" height="105" width="230" alt="footer-logo" />
              <Text
                fontFamily="Poppins, sans-serif"
                margin={5}
                my={{ base: 10, md: 50 }}
                color={"#333"}
                fontWeight={"300"}
                fontSize={{ base: "14px", md: "17px" }}
                textAlign="justify"
              >
                At Vardhan Clinic we understand how debilitating Speech Language
                disorders and Physical can be and how they can impact on a
                person’s quality of life on a daily basis. Our Professional will
                work with each person to tailor a Treatment Program.
              </Text>
              <Flex mt={15} justify="center" wrap="wrap">
                <Box
                  as="ul"
                  className="foo-socials text-center clearfix"
                  style={{ listStyle: "none", padding: 1 }}
                >
                  <Box
                    as="li"
                    display="inline-block"
                    mx="3"
                    mb="3"
                    ml={0}
                    position="relative"
                    _hover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF
                        boxSize="60px"
                        borderRadius="full"
                        bg="blue.500"
                        color="black"
                        p="10px"
                      />
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    display="inline-block"
                    mx="3"
                    mb="3"
                    ml={15}
                    position="relative"
                    _hover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Link
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter
                        boxSize="60px"
                        borderRadius="full"
                        bg="blue.400"
                        color="black"
                        p="10px"
                      />
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    display="inline-block"
                    mx="3"
                    mb="3"
                    ml={15}
                    position="relative"
                    _hover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Link
                      href="https://www.google.com/search?q=vardhan+speech+therapy+clinic&oq=vardhan&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg5MgcIARAuGIAEMgYIAhAjGCcyDQgDEC4YrwEYxwEYgAQyBwgEEC4YgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkxMDQ1NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGoogle
                        boxSize="60px"
                        borderRadius="full"
                        bg="red.500"
                        color="black"
                        p="10px"
                      />
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    display="inline-block"
                    mx="3"
                    mb="3"
                    ml={15}
                    position="relative"
                    _hover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Link
                      href="https://www.instagram.com/vardhan_speech_therapy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        boxSize="60px"
                        borderRadius="full"
                        bg="pink.500"
                        color="black"
                        p="10px"
                      />
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    display="inline-block"
                    mx="3"
                    mb="3"
                    ml={15}
                    position="relative"
                    _hover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Link
                      href="https://wa.me/+919741871457"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp
                        boxSize="60px"
                        borderRadius="full"
                        bg="green.500"
                        color="black"
                        p="10px"
                      />
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "1 1 33.333333%" }} mb={{ base: 8 }} ml={{ base: 0, md: 5 }}>
            <Box mb={{ base: 8}}>
              <Text
                fontFamily="Poppins, sans-serif"
                fontSize="sm"
                fontWeight="bold"
              >
                Our Locations
              </Text>
              <Text fontFamily="Poppins, sans-serif">Bangalore</Text>
              <Text fontFamily="Poppins, sans-serif">....</Text>
              <Text fontFamily="Poppins, sans-serif">coming soon</Text>
              <Text fontFamily="Poppins, sans-serif" mt="20">
                Email:{" "}
                <Link
                  href="speechtherapy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vardhanslp@gmail.com
                </Link>
              </Text>
              <Text fontFamily="Poppins, sans-serif" >
                Phone:{" "}
                <Link
                  href="tel:9741871457"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9741871457
                </Link>
              </Text>
            </Box>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "1 1 33.333333%" }} mb={{ base: 8}}>
            <Box mb={{ base: 8 }}>
              <Text
                fontFamily="Poppins, sans-serif"
                fontSize="sm"
                fontWeight="bold"
              >
                About Clinic
              </Text>
              <UnorderedList paddingLeft={0}>
                <ListItem>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mission
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Press & Media
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    Login
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box flex={{ base: "1 1 100%", md: "1 1 33.333333%" }} mb={{ base: 8 }}>
            <Box mb={{ base: 8}}>
              <Text
                fontFamily="Poppins, sans-serif"
                fontSize="sm"
                fontWeight="bold"
              >
                Discover
              </Text>
              <UnorderedList paddingLeft={0} className="foo-links clearfix">
                <ListItem>
                  <Link href="#">Terms & Privacy</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">FAQs</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Site Map</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
        <Box borderTop="1px solid #b0a3a3" >
          <Text fontFamily="Poppins, sans-serif" fontSize="sm" textAlign="center">
            © 2023 <span>website</span>. All Rights Reserved
          </Text>
        </Box>
    </Box>
  );
};

export default FooterSection;
