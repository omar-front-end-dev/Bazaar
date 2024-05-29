import { Box, Typography } from "@mui/material";

export const Footer_Customer = () => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "18px", mb: "10px" }}
        component={"h6"}
        variant="h6"
      >
        Customer Care
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
        Help Center
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
        Track Your Order
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
        Corporate & Bulk Purchasing
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
        Returns & Refunds
      </a>
    </Box>
  );
};
