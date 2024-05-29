import { Box } from "@mui/material";
import { Features } from "../../components/Features/Features";
import { Hero_Section } from "../../components/hero/Hero_Section";
import { useTheme } from "@emotion/react";
import { Services } from "../../components/Services/Services";
import { Main } from "../../components/main/Main";
export const Home = () => {
  const theme = useTheme();
  return (
    <Box className="home" sx={{bgcolor: theme.palette.Light_Gray.main}}>
      <Hero_Section />

      <Features/>

      <Services/>

      <Main/>
    </Box>
  );
};
