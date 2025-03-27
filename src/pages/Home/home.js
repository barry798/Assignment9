import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h3">Welcome to the Job Portal!</Typography>
        <Button
          onClick={handleLogout}
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
};

export default Home;
