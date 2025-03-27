import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Navbar from "../../components/Navbar";

const CompanyDetail = () => {
  const { id } = useParams();

  const mockCompanies = [
    {
      id: 1,
      name: "Google",
      image: "https://logo.clearbit.com/google.com",
      description:
        "Google is a global leader in internet services and products, including search, cloud computing, and advertising.",
    },
    {
      id: 2,
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      description:
        "Amazon is a multinational technology company focusing on e-commerce, cloud computing, and AI.",
    },
    {
      id: 3,
      name: "Netflix",
      image: "https://logo.clearbit.com/netflix.com",
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, and more.",
    },
  ];

  const company = mockCompanies.find((c) => c.id === parseInt(id));

  if (!company) {
    return (
      <>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h6">Company not found.</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={company.image}
            alt={company.name}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {company.name}
            </Typography>
            <Typography variant="body1">{company.description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CompanyDetail;
