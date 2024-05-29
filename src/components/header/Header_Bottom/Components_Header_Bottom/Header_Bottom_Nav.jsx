import { useTheme } from "@emotion/react";
import { List, ListItem} from "@mui/material";
import { NavLink } from "react-router-dom";
export const Header_Bottom_Nav = () => {
  const theme = useTheme();

  const navLinks = [
    { path: "/", linkName: "Home" },
    { path: "about", linkName: "About" },
    { path: "shopping", linkName: "Shopping"},
    { path: "contact", linkName: "Contact" },
  ];

  return (
    <>
      <List sx={{ display: "flex", p: 0,}}>
        {navLinks.map((link, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                display: "block"
              }}
            >
              <NavLink
                className={"Nav__Link"}
                style={{
                  textDecoration: "none",
                  marginLeft: "auto",
                  color: theme.palette.text.primary,
                }}
                to={link.path}
              >
                {link.linkName}
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
