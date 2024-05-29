import { useContext } from "react";
import { ColorModeContext } from "../../../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

export const Header_Top_Button_ThemeMode = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          sx={{ borderRadius: 0, py: 1.5 }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
        >
          <DarkModeOutlined sx={{ color: "#fff" }} fontSize="small" />
        </IconButton>
      ) : (
        <IconButton
          sx={{ borderRadius: 0, py: 1.5 }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined sx={{ color: "#fff" }} fontSize="small" />
        </IconButton>
      )}
    </div>
  );
};
