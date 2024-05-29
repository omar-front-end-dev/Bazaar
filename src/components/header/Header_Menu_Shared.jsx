import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FaMotorcycle } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { MdOutlineToys } from "react-icons/md";
import { useTheme } from "@emotion/react";

export const Header_Menu_Shared = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotateEle, setRotateEle] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    rotateEleHandler();
  };
  const handleClose = () => {
    setAnchorEl(null);
    rotateEleHandler();
  };

  const rotateEleHandler = () => {
    if (!open) {
      setRotateEle("90deg");
    } else {
      setRotateEle("0deg");
    }
  };

  const menuItem = [
    { menuItemName: "Fashion", menuItemIcon: <GiAmpleDress /> },
    { menuItemName: "Motors", menuItemIcon: <FaMotorcycle /> },
    { menuItemName: "Electronics", menuItemIcon: <MdElectricalServices /> },
    { menuItemName: "Toys", menuItemIcon: <MdOutlineToys /> },
  ];

  return (
    <>
      <Button
        sx={{
          color: theme.palette.text.primary,
          bgcolor: theme.palette.Light_Gray.main,
          width: "280px",
          textTransform: "capitalize",
          fontWeight: "600",
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <WidgetsIcon
          sx={{
            fontSize: "20px",
            rotate: rotateEle,
            transition: "0.3s",
            mr: 1,
          }}
        />
        Categories
        <Box flexGrow={1} />
        <KeyboardArrowRightIcon
          sx={{
            fontSize: "20px",
            rotate: rotateEle,
            transition: "0.3s",
          }}
        />
      </Button>

      <Menu sx={{ p: 0 }} anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItem.map((item, index) => {
          return (
            <MenuItem key={index} sx={{ width: "280px", py: 0.4 }} onClick={handleClose}>
              <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                {item.menuItemIcon}
              </ListItemIcon>
              <ListItemText>{item.menuItemName}</ListItemText>
              <Typography>
                <KeyboardArrowRightIcon sx={{ fontSize: "20px" }} />
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
