/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          navColor: {
            main: "#f6f9fc",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          Light_Gray: {
            main: "#2b34451a",
          },
          favColor: {
          main: grey[300],
          },
        }
      : {
          navColor: {
            main: "#2b2b2b",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          Light_Gray: {
            main: "#2f3133",
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
