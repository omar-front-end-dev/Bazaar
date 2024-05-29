import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const options = ["AR", "EN"];


export const Header_Top_Menu_Lang = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="nav" aria-label="Device settings" sx={{ py: 0 }}>
        <ListItemButton
          sx={{ p: 1 }}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{ ".MuiTypography-root": { color: "#fff" } }}
          />
          <KeyboardArrowDownIcon sx={{ color: "#fff", fontSize: "15px" }} />
        </ListItemButton>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{ fontSize: "12px", p: "5px 15px" }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
