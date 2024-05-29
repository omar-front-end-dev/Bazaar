import { Box, Container, Stack } from "@mui/material";
import "./Hero_Section.css";
import { Hero_Section_Right } from "./components_Hero_Section/Hero_Section_Right";
import { Hero_Section_Slider } from "./components_Hero_Section/Hero_Section_Slider";
export const Hero_Section = () => {
  
  return (
    <Container maxWidth="xl">
      <Box
        className="Hero-Section"
        sx={{ py: "30px",}}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            alignItems : {lg: "center"}
          }}
        >
          
          <Hero_Section_Slider/>


          <Box className="Hero-Section__Images">
            <Hero_Section_Right />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
