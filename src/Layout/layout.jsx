import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { Header_Top } from "../components/header/Header_Top/Header_Top";
import { Header_Middle } from "../components/header/Header_Middle/Header_Middle";
import { Header_Bottom } from "../components/header/Header_Bottom/Header_Bottom";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component={"div"}>
          <Box component={"header"}>
            <Header_Top />
            <Header_Middle />
            <Header_Bottom />
          </Box>

          <Box component={"main"}>
            <Outlet />
          </Box>
          <Box component={"footer"}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
