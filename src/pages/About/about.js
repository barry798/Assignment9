import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About This Portal
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This job portal is built with React, React Router, and Material UI. It allows users to log in, browse available jobs, view companies, and explore career opportunities.
        </Typography>
      </Box>
    </>
  );
};

export default About;
