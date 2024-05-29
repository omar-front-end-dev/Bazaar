import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { BiShoppingBag } from "react-icons/bi";
import { useToggle } from "../../../../Hooks/useToggle";
import { Header_Middle_Drawer_Cart_items } from "./Header_Middle_Drawer_Cart_items";

export const Header_Middle_Drawer_Cart = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();

  return (
    <Box className="Drawer-cart">
      <IconButton
        sx={{
          color: theme.palette.text.primary,
          "&:hover": { color: "#D23F57" },
        }}
        onClick={toggleDrawer("right", true)}
      >
        <ShoppingBagOutlinedIcon />
      </IconButton>
      <Drawer anchor={"right"} open={state.right}>
        <Box
          sx={{
            height: "100vh",
            width: { xs: "100vw", sm: "380px" },
          }}
        >
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ py: "20px", px: "25px" }}
            className="Drawer-cart__top"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <BiShoppingBag size={25} />

              <Typography
                component={"span"}
                sx={{ fontWeight: "600", fontSize: "14px" }}
              >
                <span style={{ marginRight: "4px" }}>{2}</span>
                item
              </Typography>
            </Box>

            <Box>
              <CloseIcon
                className={"Close__Drawer"}
                onClick={toggleDrawer("right", false)}
                sx={{ "&:hover": { color: "#D23F57", cursor: "pointer" } }}
              />
            </Box>
          </Stack>
          <Divider />

          <Box className="Drawer-cart__items">
            <Header_Middle_Drawer_Cart_items/>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
