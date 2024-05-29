import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import imageCart from "../../../../assets/images/imagCard.png";
import { Link } from "react-router-dom";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";

export const Header_Middle_Drawer_Cart_items = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ px: "15px", py: "15px" }}>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
          className="Drawer-cart__item"
        >
          <Stack
            alignItems={"center"}
            gap={0.5}
            className="Drawer-cart__item__actions"
          >
            <IconButton
              sx={{
                p: 0.5,
                border: "1px solid #D23F57",
                transition: "0.2s",
                color: "#D23F57",
                "&:hover": { bgcolor: "#2B3445", color: "#fff" },
              }}
            >
              <AddIcon sx={{ fontSize: "19px" }} />
            </IconButton>
            <Typography component={"span"}>{1}</Typography>
            <IconButton
              sx={{
                p: 0.5,
                border: "1px solid #D23F57",
                transition: "0.2s",
                color: "#D23F57",
                "&:hover": { bgcolor: "#2B3445", color: "#fff" },
              }}
            >
              <RemoveIcon sx={{ fontSize: "19px" }} />
            </IconButton>
          </Stack>
          <Box sx={{ width: "75px", bgcolor: "#fff" }}>
            <Link to={"single_Product"}>
              <img style={{ width: "100%" }} src={imageCart} alt="cart image" />
            </Link>
          </Box>
          <Stack className="Drawer-cart__item__info">
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", mb: "3px" }}
              component={"h6"}
            >
              <Link
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
                to={"single_product"}
              >
                Silver High Neck Sweater
              </Link>
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: theme.palette.text.primary,
                mb: "3px",
                fontWeight: "600",
              }}
              component={"p"}
            >
              $210.00 x 1
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "600", color: "#D23F57" }}
              component={"span"}
            >
              $210.00
            </Typography>
          </Stack>

          <IconButton sx={{ "&:hover": { color: "#D23F57" } }}>
            <CloseIcon sx={{ fontSize: "19px" }} />
          </IconButton>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};
