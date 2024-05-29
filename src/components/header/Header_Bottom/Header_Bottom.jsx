import { Box, Container, Stack } from "@mui/material";
import { Header_Bottom_Nav } from "./Components_Header_Bottom";
import { Header_Menu_Shared } from "../Header_Menu_Shared";
import "./Header_Bottom.css"
import { useTheme } from "@emotion/react";
export const Header_Bottom = () => {
  const theme = useTheme()


  return (
    <Box
      className={"Header-Bottom"}
      sx={{
        py: 1,
        display: { xs: "none", lg: "block" },
        bgcolor: theme.palette.navColor.main
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box className={"Header-Bottom__Categories"}>
            <Header_Menu_Shared />
          </Box>

          <Box className={"Header-Bottom__Nav"}>
            <Header_Bottom_Nav/>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
