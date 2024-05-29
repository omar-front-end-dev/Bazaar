import { useState } from "react";

export function useToggle() {
  const [state, setState] = useState({
    top: false,
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ [anchor]: open });
  };
  return { state, toggleDrawer };
}
