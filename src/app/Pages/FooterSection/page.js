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
    <Box margin={10}>
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <Box flex="1 1 100%" mb={{ base: 8, md: 0 }} >
          <Box mb={{ base: 8, md: 40 }}>
            <Image src="/vst-logo.png" height="105" width="230" alt="Vardhan Speech Therapy Clinic Bangalore logo"
            />
            <Text
              fontFamily="Poppins, sans-serif"
              margin={5}
              my={{ base: 10, md: 50 }}
              color="#333"
              fontWeight="300"
              fontSize={{ base: "14px", md: "17px" }}
              textAlign="justify"
            >
              Vardhan Speech Therapy Clinic in Bangalore provides expert speech therapy,
              language therapy, voice therapy, occupational therapy, and developmental
              rehabilitation for children and adults. Our certified therapists deliver
              personalized, evidence-based treatment programs to improve communication,
              mobility, confidence, and overall quality of life.
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
          <Box mb={{ base: 8 }}>
            <Text
              fontFamily="Poppins, sans-serif"
              fontSize="sm"
              fontWeight="bold"
            >
              Our Locations
            </Text>
            <Text fontFamily="Poppins, sans-serif">
              Bangalore – Speech Therapy & Rehabilitation Center
            </Text>
            <Text fontFamily="Poppins, sans-serif">
              Karnataka, India
            </Text>
            <Text fontFamily="Poppins, sans-serif">
              More locations coming soon
            </Text>

            <Text fontFamily="Poppins, sans-serif" mt="20">
              Email:{" "}
              <Link href="mailto:vardhanslp@gmail.com">
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
        <Box flex={{ base: "1 1 100%", md: "1 1 33.333333%" }} mb={{ base: 8 }}>
          <Box mb={{ base: 8 }}>
            <Text
              fontFamily="Poppins, sans-serif"
              fontSize="sm"
              fontWeight="bold"
            >
              About Clinic
            </Text>
            <UnorderedList paddingLeft={0}>
              <ListItem><Link href="/about">About Vardhan Speech Therapy</Link></ListItem>
              <ListItem><Link href="/mission">Our Mission & Values</Link></ListItem>
              <ListItem><Link href="/careers">Careers</Link></ListItem>
              <ListItem><Link href="/media">Press & Media</Link></ListItem>
              <ListItem><Link href="/login">Patient Login</Link></ListItem>
            </UnorderedList>

          </Box>
        </Box>
        <Box flex={{ base: "1 1 100%", md: "1 1 33.333333%" }} mb={{ base: 8 }}>
          <Box mb={{ base: 8 }}>
            <Text
              fontFamily="Poppins, sans-serif"
              fontSize="sm"
              fontWeight="bold"
            >
              Discover
            </Text>
            <UnorderedList paddingLeft={0}>
              <ListItem><Link href="/privacy-policy">Privacy Policy</Link></ListItem>
              <ListItem><Link href="/terms">Terms & Conditions</Link></ListItem>
              <ListItem><Link href="/faq">FAQs</Link></ListItem>
              <ListItem><Link href="/sitemap.xml">Sitemap</Link></ListItem>
            </UnorderedList>

          </Box>
        </Box>
      </Flex>
      <Box borderTop="1px solid #b0a3a3" >
        <Text fontFamily="Poppins, sans-serif" fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Vardhan Speech Therapy Clinic. All Rights Reserved.
        </Text>

      </Box>
    </Box>
  );
};

export default FooterSection;
