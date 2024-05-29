import { Box, Container, Stack } from "@mui/material";
import {
  Header_Top_Menu_Lang,
  Header_Top_Button_ThemeMode,
  Header_Top_Social_Icons,
  Header_top_Text_Left,
} from "./Components_ Header_Top";

export const Header_Top = () => {
  return (
    <Box
      className={"Header-Top"}
      sx={{
        bgcolor: "#2B3445",
      }}
    >
      <Container maxWidth="xl">
        <Stack direction={"row"} alignItems={"center"}>
          
          <Box className={"Header-Top__Text-Left"} sx={{ display: "flex", flexGrow: 1 }}>
            <Header_top_Text_Left />
          </Box>

          <Box className={"Header-Top__Button_Theme-Mode"} sx={{ display: "flex" }}>
            <Header_Top_Button_ThemeMode />
          </Box>

          <Box className={"Header-Top__Menu-Lang"} sx={{ display: "flex" }}>
            <Header_Top_Menu_Lang />
          </Box>

          <Box className={"Header-Top__Social-Icons"} sx={{ display: "flex" }}>
            <Header_Top_Social_Icons />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};
