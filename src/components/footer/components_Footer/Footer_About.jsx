import { Box, Typography } from "@mui/material";

export const Footer_About = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "18px", mb: "10px",}} component={"h6"} variant="h6">
        About Us
      </Typography>
      <a
        style={{
          textDecoration: "none",
          display: "block",
          color: "#AEB4BE",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        href="#"
      >
        Careers
      </a>
      <a
        style={{
          textDecoration: "none",
          display: "block",
          color: "#AEB4BE",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        href="#"
      >
        Our Stores
      </a>
      <a
        style={{
          textDecoration: "none",
          display: "block",
          color: "#AEB4BE",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        href="#"
      >
        Our Cares
      </a>
      <a
        style={{
          textDecoration: "none",
          display: "block",
          color: "#AEB4BE",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        href="#"
      >
        Terms & Conditions
      </a>
      <a
        style={{
          textDecoration: "none",
          display: "block",
          color: "#AEB4BE",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        href="#"
      >
        Privacy Policy
      </a>
    </Box>
  );
};
