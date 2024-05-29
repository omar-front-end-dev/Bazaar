import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

export function useBgBtn () {
    const theme = useTheme();
    const [bgButton, setColorButton] = useState(false);
  
    useEffect(() => {
      if (theme.palette.mode === "dark") {
        setColorButton(true);
      } else {
        setColorButton(false);
      }
    }, [theme.palette.mode]);

    return { bgButton }
  
}