import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockCompanies = [
        {
          id: 1,
          name: "Google",
          image: "https://logo.clearbit.com/google.com",
        },
        {
          id: 2,
          name: "Amazon",
          image: "https://logo.clearbit.com/amazon.com",
        },
        {
          id: 3,
          name: "Netflix",
          image: "https://logo.clearbit.com/netflix.com",
        },
      ];
      setCompanies(mockCompanies);
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
            Loading companies...
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
          Our Partner Companies
        </Typography>
        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid item xs={12} md={4} key={company.id}>
              <Link
                to={`/companies/${company.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={company.image}
                    alt={company.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{company.name}</Typography>
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

export default Companies;
