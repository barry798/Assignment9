import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const JobDetail = () => {
  const { id } = useParams();

  const mockJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Build responsive UI using React and Material UI.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataWorks",
      description: "Develop Node.js APIs and manage databases.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      description: "Design modern web/mobile UIs and user flows.",
    },
  ];

  const job = mockJobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h6">Job not found.</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>{job.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{job.company}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>{job.description}</Typography>
      </Box>
    </>
  );
};

export default JobDetail;
