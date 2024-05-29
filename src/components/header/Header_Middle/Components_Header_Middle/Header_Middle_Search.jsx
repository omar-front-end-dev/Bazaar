/* eslint-disable react-refresh/only-export-components */
import { Divider, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Header_Middle_Search_Category_List } from "./Header_Middle_Search_Category_List";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Header_Middle_Search = () => {
  return (
    <Search
      className={"Header-Middle_Search"}
      sx={{
        bgcolor: "#2b344514",
        borderRadius: "5px",
        justifyContent: "space-between",
        flexGrow: 1,
        transition: ".5s",
        overflow: "hidden",
        display: {xs: "none", lg: "flex"}
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
        <Divider orientation="vertical" flexItem variant="middle" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        sx={{ minWidth: "500px" }}
      />
      <Divider orientation="vertical" flexItem />
        <div className={"Header_Middle_Search_Category_List"}>
            <Header_Middle_Search_Category_List />
        </div>
    </Search>
  );
};
