import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useToggle } from "../../../../Hooks/useToggle";
import { useTheme } from "@emotion/react";
import logo from "../../../../assets/images/logo/react.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

export const Header_Middle_Login_User = () => {
  const theme = useTheme();
  const { state, toggleDrawer } = useToggle();
  return (
    <>
      <IconButton
        sx={{
          color: theme.palette.text.primary,
          "&:hover": { color: "#D23F57" },
        }}
        onClick={toggleDrawer("right", true)}
      >
        <PermIdentityOutlinedIcon />
      </IconButton>
      <Dialog open={state.right} onClick={toggleDrawer("right", false)}>
        <Typography sx={{ textAlign: "end", p: 1 }}>
          <IconButton
            className={"Close__Drawer"}
            onClick={toggleDrawer("right", false)}
            sx={{ "&:hover": { color: "#D23F57" } }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
        <DialogTitle sx={{ textAlign: "center", p: 0 }}>

          <Typography>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </Typography>

          <Typography component={"p"} sx={{ fontSize: "18px" }}>
            Welcome To Bazaar
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ width: { xs: "300px", sm: "500px" } }}>
          <Box component={"form"}>
            <TextField
              position="end"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#D23F57",
                  },
                },
                mt: "20px",
              }}
              label="Email"
              placeholder="Exmple@mail.com"
              id="outlined-multiline-flexible"
              type="email"
              fullWidth
            />
            
            

            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#D23F57",
                  },
                },
                mt: "20px",
              }}
              label="Password"
              placeholder="**********"
              id="outlined-multiline-flexible"
              type="password"
              fullWidth
            />

            <Button
              sx={{
                bgcolor: "#D23F57",
                mt: "30px",
                py: "10px",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: "15px",
                transition: "0.3s",
                "&:hover": { bgcolor: "#2B3445" },
              }}
              type="submit"
              variant="button"
              disableElevation
              fullWidth
            >
              Login
            </Button>
          </Box>
          <Divider sx={{ fontSize: "13px", my: "20px" }}>or</Divider>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: theme.palette.text.primary,
            }}
            variant="p"
            component={"p"}
          >
            {"Don't"} have account?{" "}
            <span style={{ fontWeight: "900" }}>
              <Link style={{ color: theme.palette.text.primary }} to={"rr"}>
                Register
              </Link>
            </span>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
