import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const GallerySection = () => {
  const images = [
    "1g.jpg",
    "2g.jpg",
    "3g.jpg",
    "4g.jpg",
    "5g.jpg",
    "6g.jpg",
    "7g.jpg",
    "8g.jpg",
    "9g.png",
    
    "11g.png",
    "12Caregivertraining.png",
    "13child-rasing-hand-deafness-hearing-loss.png",
    "14Fluency shaping  stuttering  cluttering  voice therapy.png",
    "15Oral placement therapy.png",
    "16g.jpg",
    "17g.jpg",
    "18g.jpg",
    "19playbased therapy.png",
    "20g.png",
   
    "22swallowing therapy.png",
  ];

  return (
    <Box id="gallery">
      <Flex justifyContent="center">
        <Box>
          <Text
            color="steelblue"
            mb="4"
            textAlign="center"
            fontSize={{ base: "2rem", md: "3rem" }}
            my={5}
          >
            GALLERY
          </Text>
        </Box>
      </Flex>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        m="4"
       
        flexDirection={{ base: "column", md: "row" }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            position="relative"
            textAlign="center"
            mb={{ base: "4", md: "6" }}
            flexBasis={{ base: "100%", md: "25%" }}
          >
            <Box>
              <Image
                src={"/" + img}
                alt="Speech therapy images"
                width={290}
                height={200}
                objectFit="cover"
              />
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default GallerySection;


