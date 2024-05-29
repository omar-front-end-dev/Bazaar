import { Box, Container, Grid, } from "@mui/material";
import { Footer_Logo } from "./components_Footer/Footer_Logo";
import { Footer_About } from "./components_Footer/Footer_About";
import { Footer_Customer } from "./components_Footer/Footer_Customer";
import { Footer_Contact } from "./components_Footer/Footer_Contact";

export const Footer = () => {
  return (
    <Box className="footer" sx={{bgcolor: "#2B3445", color: "#fff", py: "80px"}}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sx={6} lg={4}>
           <Footer_Logo/>
          </Grid>
          <Grid item xs={12} sx={6} lg={2}>
            <Box>
                <Footer_About/>
            </Box>
          </Grid>
          <Grid item xs={12} sx={6} lg={3}>
            <Box>
                <Footer_Customer/>
            </Box>
          </Grid>
          <Grid item xs={12} sx={6} lg={3}>
            <Box>
                <Footer_Contact/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
