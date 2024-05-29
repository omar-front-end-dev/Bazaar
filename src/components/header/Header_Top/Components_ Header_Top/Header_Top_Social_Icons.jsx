import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography } from "@mui/material";

export const Header_Top_Social_Icons = () => {
  return (
    <>
      <Typography sx={{ display: "flex" }} component={"a"} href="#">
        <FacebookIcon
          sx={{
            color: "#fff",
            fontSize: "16px",
            mx: 0.5,
          }}
        />
      </Typography>

      <Typography sx={{ display: "flex" }} component={"a"} href="#">
        <XIcon
          sx={{
            color: "#fff",
            fontSize: "16px",
            mx: 0.5,
          }}
        />
      </Typography>

      <Typography sx={{ display: "flex" }} component={"a"} href="#">
        <InstagramIcon
          sx={{
            color: "#fff",
            fontSize: "16px",
            mx: 0.5,
          }}
        />
      </Typography>
    </>
  );
};
