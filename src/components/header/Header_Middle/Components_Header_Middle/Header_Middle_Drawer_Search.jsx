import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../../../assets/images/logo/react.svg";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IoSearch } from "react-icons/io5";
import { useToggle } from "../../../../Hooks/useToggle";
import { Divider, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Header_Middle_Drawer_Search = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.Light_Gray.main,
    "&:hover": {
      backgroundColor: theme.palette.favColor.main,
    },
    "&:focus": {
      outline: "4px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(1.5, 1.5, 1.5),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1.5, 1.5),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
    },
  }));

  return (
    <>
      <IconButton
        sx={{
          color: theme.palette.text.primary,
          "&:hover": { color: "#D23F57" },
          display: { lg: "none" },
        }}
        onClick={toggleDrawer("left", true)}
      >
        <IoSearch fontWeight={"bold"} />
      </IconButton>
      <Drawer anchor={"left"} open={state.left}>
        <Box
          sx={{
            mx: "auto",
            height: "100vh",
            mt: "20px",
            px: "30px",
            width: "100vw",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component={"h6"} variant="h6" sx={{ fontSize: "17px" }}>
              Search to Bazaar
            </Typography>
            <Typography onClick={toggleDrawer("left", true)}>
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </Typography>
            <IconButton
              className={"Close__Drawer"}
              onClick={toggleDrawer("left", false)}
              sx={{ "&:hover": { color: "#D23F57" } }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <form>
            <Search
              sx={{
                borderRadius: "5px",
                justifyContent: "space-between",
                transition: ".5s",
                display: "flex",
                ".MuiInputBase-root": { width: "100%" },
                my: 5,
                mx: "auto",
                width: { md: "70%" },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
                <Divider orientation="vertical" variant="middle" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <Divider orientation="vertical" />

              <Button
                sx={{
                  bgcolor: "#d23f57",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  px: "40px",
                  textTransform: "capitalize",
                  "&:hover": { bgcolor: "#d23f57" },
                }}
                type="submit"
                aria-label="search"
              >
                Search
              </Button>
            </Search>
          </form>
        </Box>
      </Drawer>
    </>
  );
};
