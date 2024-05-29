import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import image from "../../../../assets/images/Header_Page_Menu.jpeg";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Header_Menu_Shared } from "../../Header_Menu_Shared";
import { useToggle } from "../../../../Hooks/useToggle";

export const Header_Middle_Menu = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();
  const MenuListLinks = [
    { path: "/", LinkName: "Home", linkIcon: "" },
    { path: "about", LinkName: "About", linkIcon: "" },
    { path: "shopping", LinkName: "Shopping", linkIcon: <KeyboardArrowDownIcon /> },
    { path: "contact", LinkName: "Contact", linkIcon: "" },
  ];

  return (
    <>
      <IconButton
        sx={{
          color: theme.palette.text.primary,
          "&:hover": { color: "#D23F57" },
        }}
        onClick={toggleDrawer("top", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"top"} open={state.top}>
        <Box
          sx={{
            mx: "auto",
            height: "100vh",
            mt: "20px",
            px: "10px",
            width: { xs: "100%", sm: "500px" },
          }}
        >
          <Typography sx={{ textAlign: "end" }}>
            <IconButton
              className={"Close__Drawer"}
              onClick={toggleDrawer("top", false)}
              sx={{ "&:hover": { color: "#D23F57" } }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ overflow: "hidden", textAlign: "center" }}>
              <NavLink to={"/"}>
                <img
                  style={{ width: "80%", borderRadius: "10px" }}
                  src={image}
                  alt="Pages image"
                />
              </NavLink>
            </Typography>
            <Typography
              sx={{
                py: "10px",
                display: { xs: "flex", lg: "none" },
                color: theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              <Header_Menu_Shared />
            </Typography>
            <MenuList>
              {MenuListLinks.map((link, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{ bgcolor: theme.palette.navColor.main, mb: 1, py: 0 }}
                  >
                    <NavLink
                      className={"Nav__Link"}
                      style={{
                        width: "100%",
                        height: "50px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                      }}
                      to={link.path}
                    >
                      {link.LinkName}
                      {link.linkIcon}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
