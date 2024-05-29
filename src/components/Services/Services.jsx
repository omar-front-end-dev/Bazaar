import { Box, Container, Grid, Typography } from "@mui/material";
import services1 from "../../assets/images/Services/cat-1.webp";
import services2 from "../../assets/images/Services/cat-2.webp";
import services3 from "../../assets/images/Services/cat-3.webp";
import services4 from "../../assets/images/Services/cat-4.webp";
import services5 from "../../assets/images/Services/cat-5.webp";
import services6 from "../../assets/images/Services/cat-6.webp";
import "./Services.css";
// import { useTheme } from "@emotion/react";

export const Services = () => {
  // const theme = useTheme()
  const servicesCard = [
    { image: services1, text: "Toys" },
    { image: services2, text: "Sports" },
    { image: services3, text: "Gaming" },
    { image: services4, text: "Furniture" },
    { image: services5, text: "Fashion" },
    { image: services6, text: "Cameras" },
  ];
  return (
    <Box className="services" sx={{ my: "4rem" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {servicesCard.map((card, index) => {
            return (
              <Grid key={index} item xs={6} sm={4} md={2}>
                <Box
                  className="services__box"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={card.image}
                    alt="services imag"
                  />
                  <Typography
                    className="services__text"
                    component={"div"}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: "#2B3445",
                      width: "100%",
                      py: 1.3,
                      textAlign: "center",
                      fontSize: "17px",
                      fontWeight: "600",
                      transition: "0.3s",
                      bgcolor: "#ffffffb0",
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
