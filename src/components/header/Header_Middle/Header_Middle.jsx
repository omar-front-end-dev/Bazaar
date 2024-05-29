import { Box, Container, Stack } from "@mui/material";
import {
  Header_Middle_Logo,
  Header_Middle_Search,
  Header_Middle_Icons,
  Header_Middle_Menu
} from "./Components_Header_Middle";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import "./Header_Middle.css"


export const Header_Middle = () => {
  const theme = useTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box
      className="Header-Middle"
      py={1.5}
      sx={{
        bgcolor: theme.palette.navColor.main,
        position: isSticky ? "fixed" : "relative",
        animationName: isSticky ? "top" : false,
        boxShadow: isSticky ? "4px 4px 15px #333333" : false,
        top: 0,
        left: 0,
        zIndex: "111",
        width: "100%"
      }}
    >
      <Container maxWidth="xl">
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box sx={{ display: { lg: "none" } }}>
            <Header_Middle_Menu />
          </Box>

          <Box
            className={"Header-Middle_logo"}
            sx={{ 
              textAlign: { xs: "center", lg: "start" }, 
              flexGrow: {xs: 1, lg: 0}
            }}
          >
            <Header_Middle_Logo />
          </Box>

          <Box>
            <Header_Middle_Search />
          </Box>

          <Box className={"Header-Middle_Icons"}>
            <Header_Middle_Icons />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
