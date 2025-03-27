import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          For any inquiries or support, please email us at: support@jobportal.com
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
