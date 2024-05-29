import { Badge } from "@mui/material";
import { Header_Middle_Drawer_Cart } from "./Header_Middle_Drawer_Cart";
import { Header_Middle_Login_User } from "./Header_Middle_Login_User";
import { Header_Middle_Drawer_Search } from "./Header_Middle_Drawer_Search";

export const Header_Middle_Icons = () => {
  return (
    <>
      <>
        <Header_Middle_Drawer_Search/>
      </>
      <>
        <Header_Middle_Login_User />
      </>
      <Badge badgeContent={9} color="error">
        <Header_Middle_Drawer_Cart />
      </Badge>
    </>
  );
};
