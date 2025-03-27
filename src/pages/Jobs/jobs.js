import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockJobs = [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Tech Solutions Inc.",
          description: "React developer with 2+ years experience.",
        },
        {
          id: 2,
          title: "Backend Engineer",
          company: "DataWorks",
          description: "Node.js and MongoDB developer needed.",
        },
        {
          id: 3,
          title: "UI/UX Designer",
          company: "Creative Minds",
          description: "Design intuitive user interfaces.",
        },
      ];
      setJobs(mockJobs);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading job listings...
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Job Listings
        </Typography>
        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <Link to={`/jobs/${job.id}`} style={{ textDecoration: "none" }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {job.company}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {job.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Jobs;
