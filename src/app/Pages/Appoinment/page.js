// import {
//   Box,
//   Text,
//   Image,
//   Table,
//   Tbody,
//   Tr,
//   Td,
// } from "@chakra-ui/react";

// const Appoinment = () => {
  
//   return (
//     <Box
//       justifyContent="space-between"
//       mx={{ base: 4, md: 8 }}
//       flexDirection={{ base: "column",md: "row" }}
//       py={{ base: 6, md: 12 }}
//       pb={{ base: 6, md: 4 }}
//     >
//       {/* First Box */}
//       <Box w={{ base: "100%", md: "33%" }} mb={{ base: 8, md: 0 }}>
//         <Box
//           className="abox-4 mb-40 wow fadeInUp"
//           visibility="visible"
//           animationDelay="0.4s"
//           animationName="fadeInUp"
//         >
//           <Image
//             src="/Appoinment1.jpg"
//             height="250"
//             width="600"
//             alt="image-1"
//           />
//           <Box className="abox-4-txt">
//             <Text as="h5" color="#004861" mb="15px" fontSize={{ base: "16px", md: "20px" }}>
//               Highest Quality Care
//             </Text>
//             <Text fontSize={{ base: "14px", md: "1rem" }}>
//               In order to achieve universal health coverage, it is essential to
//               deliver health services that meet quality criteria.
//             </Text>
//           </Box>
//         </Box>
//       </Box>

//       {/* Second Box */}
//       <Box w={{ base: "100%", md: "33%" }} mb={{ base: 8, md: 0 }}>
//         <Box
//           className="abox-4 mb-40 wow fadeInUp"
//           visibility="visible"
//           animationDelay="0.6s"
//           animationName="fadeInUp"
//         >
//           <Image
//             src="/Appoinment2.jpg"
//             height="250"
//             width="600"
//             alt="image-2"
//           />
//           <Box className="abox-4-txt">
//             <Text
//               as="h5"
//               color="#004861"
//               mb="15px"
//               fontSize={{ base: "16px", md: "20px" }}
//             >
//               Medical Rehabilitation
//             </Text>
//             <Text fontSize={{ base: "14px", md: "1rem" }}>
//               Rehabilitation is a treatment designed to facilitate the process
//               of recovery from injury, illness, or disease to as normal a
//               condition as possible. Medical Rehabilitation helps a person
//               better in all his daily Physical and mental activities.
//             </Text>
//           </Box>
//         </Box>
//       </Box>

//       {/* Third Box */}
//       <Box
//         w={{ base: "100%", md: "33%" }}
//         mb={{ base: 8, md: 0 }}
//         p={{ base: 4, md: 6 }}
//         rounded={"10"}
//         mx={{ base: 0, md: 4 }}
//         backgroundColor={"#00A3C8"}
//         height={{ base: "auto", md: "50vh" }}
//       >
//         <Box
//           visibility="visible"
//           animationDelay="0.6s"
//           animationName="fadeInUp"
//         >
//           <Text fontSize={{ base: "1.5rem", md: "2rem" }} mb="15px" color={"white"}>
//             Working Time
//           </Text>
//           <Text mt="0" color={"white"}>
//             We work hard to give you the best services
//           </Text>
//           <Table className="table" >
//             <Tbody backgroundColor={"#00A3C8"}>
//               <Tr backgroundColor={"#00A3C8"}>
//                 <Td>Mon – Sat</Td>
//                 <Td>-</Td>
//                 <Td textAlign="right">9:00 AM - 7:00 PM</Td>
//               </Tr>
//               <Tr>
//                 <Td>Sun</Td>
//                 <Td>-</Td>
//                 <Td textAlign="right">Closed</Td>
//               </Tr>
//             </Tbody>
//           </Table>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Appoinment;
import { Box, Text, Image, Table, Tbody, Tr, Td } from "@chakra-ui/react";

const Appoinment = () => {
  return (
    <Box
      justifyContent="space-between"
      mx={{ base: 4, md: 8 }}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      py={{ base: 6, md: 12 }}
      pb={{ base: 6, md: 4 }}
    >
      {/* First Box */}
      <Box w={{ base: "100%", md: "100%" }} mb={{ base: 8, md: 0 }} display={"flex"}>
        <Box
          className="abox-4 mb-40 wow fadeInUp"
          visibility="visible"
          animationDelay="0.4s"
          animationName="fadeInUp"
        >
          <Image
            src="/Appoinment1.jpg"
            height="250"
            width="600"
            alt="image-1"
          />
          <Box className="abox-4-txt">
            <Text
              as="h3"
              color="#004861"
              mb="15px"
              fontSize={{ base: "26px", md: "30px" }}
              mt={5}
              alignItems={"center"}
              textAlign={"center"}
              fontFamily={"sans-serif"}
            >
              Highest Quality Care
            </Text>
            <Text fontSize={{ base: "14px", md: "1rem" }}  alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
              In order to achieve universal health coverage, it is essential to
              deliver health services that meet quality criteria.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Second Box */}
      <Box w={{ base: "100%", md: "100%" }} mb={{ base: 8, md: 0 }}>
        <Box
          className="abox-4 mb-40 wow fadeInUp"
          visibility="visible"
          animationDelay="0.6s"
          animationName="fadeInUp"
        >
          <Image
            src="/Appoinment2.jpg"
            height="250"
            width="600"
            alt="image-2"
          />
          <Box className="abox-4-txt">
            <Text
              as="h3"
              color="#004861"
              mb="15px"
              fontSize={{ base: "26px", md: "30px" }}
              mt={5}
              alignItems={"center"}
              textAlign={"center"}
              fontFamily={"sans-serif"}
            >
              Medical Rehabilitation
            </Text>
            <Text fontSize={{ base: "14px", md: "1rem" }}  alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
              Rehabilitation is a treatment designed to facilitate the process
              of recovery from injury, illness, or disease to as normal a
              condition as possible. Medical Rehabilitation helps a person
              better in all his daily Physical and mental activities.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Third Box */}
      <Box
        w={{ base: "100%", md: "100%" }}
        mb={{ base: 8, md: 0 }}
        p={{ base: 4, md: 6 }}
        rounded={"10"}
        mx={{ base: 0, md: 4 }}
        backgroundColor={"#00A3C8"}
       
      >
        <Box
          visibility="visible"
          animationDelay="0.6s"
          animationName="fadeInUp"
          
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} mb="15px" color={"white"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            Working Time
          </Text>
          <Text mt="0" color={"white"} alignItems={"center"}
            textAlign={"center"}
            fontFamily={"sans-serif"}>
            We work hard to give you the best services
          </Text>
          <Table className="table" >
            <Tbody backgroundColor={"#00A3C8"}>
              <Tr backgroundColor={"#00A3C8"}>
                <Td>Mon – Sat</Td>
                <Td>-</Td>
                <Td textAlign={{ base: "center", md: "right" }}>9:00 AM - 7:00 PM</Td>
              </Tr>
              <Tr>
                <Td>Sun</Td>
                <Td>-</Td>
                <Td textAlign={{ base: "center", md: "right" }}>Closed</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Appoinment;
