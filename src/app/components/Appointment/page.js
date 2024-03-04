// "use client";
// import React, { useState, useEffect } from "react";
// import HeaderLogo from "@/app/Pages/HeaderLogo/page";
// import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
// import { format } from 'date-fns';

// const Appointment = () => {
//   const formattedDateTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSSSSS');
//   const [formData, setFormData] = useState({
//     appId: uuidv4(),
//     name: "",
//     email: "",
//     phoneNumber: "",
//     appointmentDate: "",
//     note: "",
//     createdDate: formattedDateTime,
//     updatedDate: formattedDateTime,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(e.target);
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     console.log("FORM DATA:", formData);

//     try {
//       // const response = await axios.post(
//       //   "https://20.204.99.128/docshift/api/Appointment",
//       //   formData
//       // );

//       const response = await axios({
//         url: "http://20.204.99.128/docshift/api/Appointment",
//         method: "post",
//         data: formData
//       })

//       console.log("API Response:", response.data);

//       setFormData({
//         appId: uuidv4(),
//         name: "",
//         email: "",
//         phoneNumber: "",
//         createdDate: new Date(),
//         note: "",
//         updatedDate: new Date(),
//         appointmentDate: "",
//       });
//       setSubmitSuccess(true);
//     } catch (error) {
//       console.error("Form submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     // Do something if needed when submitSuccess changes
//   }, [submitSuccess]);

//   return (
//     <>
//       <Box>
//         <Box>
//           <Image src="/banner-2.jpg" alt={"banner"} height={"200px"} w={"100%"} />
//         </Box>
//         <Box
//           display={"flex"}
//           flexDirection={"row"}
//           justifyContent={"space-evenly"}
//         >
//           <Box p={20}>
//             <Heading
//               color={"#004861"}
//               fontWeight={"700"}
//               fontSize={"45px"}
//               textAlign={"right"}
//             >
//               Make Your Appointment{" "}
//             </Heading>
//             <Text
//               color={"#333"}
//               fontWeight={"300"}
//               fontSize={"17px"}
//               mt={"20"}
//               alignItems={"center"}
//               textAlign={"right"}
//             >
//               Transform your communication skills. Make your appointment today
//               and start your journey towards confident, effective communication.
//               Dont wait!
//             </Text>
//           </Box>
//           <Box display={"flex"} flexDirection={"column"} gap={12} padding={30}>
//             <Input
//               placeholder="Name"
//               height={"5vh"}
//               width={"40vw"}
//               padding={5}
//               value={formData.name}
//               onChange={handleChange}
//               name="name"
//             />
//             <Input
//               placeholder="Email"
//               height={"5vh"}
//               width={"40vw"}
//               padding={5}
//               value={formData.email}
//               onChange={handleChange}
//               name="email"
//             />
//             <Input
//               placeholder="Phone Number"
//               height={"5vh"}
//               width={"40vw"}
//               padding={5}
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               name="phoneNumber"
//             />
//             <Input
//               placeholder="Select Date and Time"
//               size="md"
//               height={"5vh"}
//               width={"40vw"}
//               padding={5}
//               type="datetime-local"
//               value={formData.appointmentDate}
//               onChange={handleChange}
//               name="appointmentDate"
//             />
//             <Textarea
//               placeholder="Note......"
//               height={"10vh"}
//               width={"40vw"}
//               padding={5}
//               value={formData.note}
//               onChange={handleChange}
//               name="note"
//             />
//             <Button
//               bg="#0E8EAB"
//               color={"white"}
//               borderRadius={5}
//               cursor={"pointer"}
//               p={"8px"}
//               my={10}
//               border={"none"}
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Appointment;
"use client";
import React, { useState, useEffect } from "react";
import HeaderLogo from "@/app/Pages/HeaderLogo/page";
import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const Appointment = () => {
  const formattedDateTime = new Date().toISOString(); // Format date to ISO 8601
  const [formData, setFormData] = useState({
    appId: uuidv4(),
    name: "",
    email: "",
    phoneNumber: "",
    appointmentDate: "",
    note: "",
    createdDate: formattedDateTime,
    updatedDate: formattedDateTime,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://20.204.99.128/docshift/api/Appointment",
        formData
      );

      console.log("API Response:", response.data);

      setFormData({
        appId: uuidv4(),
        name: "",
        email: "",
        phoneNumber: "",
        createdDate: new Date().toISOString(), // Format date to ISO 8601
        note: "",
        updatedDate: new Date().toISOString(), // Format date to ISO 8601
        appointmentDate: "",
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Do something if needed when submitSuccess changes
  }, [submitSuccess]);

  return (
    <>
      <Box>
        <Box>
          <Image src="/banner-2.jpg" alt={"banner"} height={"200px"} w={"100%"} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
        >
          <Box p={20}>
            <Heading
              color={"#004861"}
              fontWeight={"700"}
              fontSize={"45px"}
              textAlign={"right"}
            >
              Make Your Appointment{" "}
            </Heading>
            <Text
              color={"#333"}
              fontWeight={"300"}
              fontSize={"17px"}
              mt={"20"}
              alignItems={"center"}
              textAlign={"right"}
            >
              Transform your communication skills. Make your appointment today
              and start your journey towards confident, effective communication.
              Dont wait!
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={12} padding={30}>
            <Input
              placeholder="Name"
              height={"5vh"}
              width={"40vw"}
              padding={5}
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            <Input
              placeholder="Email"
              height={"5vh"}
              width={"40vw"}
              padding={5}
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              placeholder="Phone Number"
              height={"5vh"}
              width={"40vw"}
              padding={5}
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              height={"5vh"}
              width={"40vw"}
              padding={5}
              type="datetime-local"
              value={formData.appointmentDate}
              onChange={handleChange}
              name="appointmentDate"
            />
            <Textarea
              placeholder="Note......"
              height={"10vh"}
              width={"40vw"}
              padding={5}
              value={formData.note}
              onChange={handleChange}
              name="note"
            />
            <Button
              bg="#0E8EAB"
              color={"white"}
              borderRadius={5}
              cursor={"pointer"}
              p={"8px"}
              my={10}
              border={"none"}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Appointment;
