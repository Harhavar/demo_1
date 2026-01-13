"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Appointment = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_fzlhq19",
        "template_8b14wqr",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          appointmentDate: formData.appointmentDate,
          note: formData.note,
        },
        "ARigzdjhoEL6Pp9gD"
      );

      toast.success("Appointment request sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentDate: "",
        note: "",
      });
    } catch (error) {
      toast.error("Failed to send appointment. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* SEO Banner */}
      <Image
        src="/banner-2.jpg"
        alt="Book appointment at Vardhan Speech Therapy Clinic Bangalore"
        w="100%"
        h="220px"
        objectFit="cover"
      />

      {/* Heading Section */}
      <Box py={16} textAlign="center">
        <Heading color="#004861" fontSize={{ base: "32px", md: "45px" }}>
          Book an Appointment
        </Heading>
        <Text mt={4} maxW="800px" mx="auto" color="#333">
          Schedule an appointment with certified speech therapists at Vardhan
          Speech Therapy Clinic, Bangalore. We provide expert care for children
          and adults in speech, language, voice, and developmental therapy.
        </Text>
      </Box>

      {/* Form */}
      <Box
        maxW="800px"
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={5}
        px={6}
        pb={20}
      >
        <Input
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Patient Name"
        />

        <Input
          placeholder="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email Address"
        />

        <Input
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          aria-label="Phone Number"
        />

        <Input
          type="datetime-local"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          aria-label="Appointment Date and Time"
        />

        <Textarea
          placeholder="Tell us about the concern (speech delay, stammering, voice issue, etc.)"
          name="note"
          value={formData.note}
          onChange={handleChange}
          aria-label="Patient Concern"
        />

        <Button
          bg="#0E8EAB"
          color="white"
          size="lg"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Submit Appointment Request
        </Button>

        <Button variant="outline" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Appointment;
