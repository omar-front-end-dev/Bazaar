import { Box, IconButton, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Footer_Contact = () => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "18px", mb: "10px" }}
        component={"h6"}
        variant="h6"
      >
        Contact Us
      </Typography>
      <Typography
        variant="p"
        component={"p"}
        sx={{ color: "#AEB4BE", fontSize: "14px", lineHeight: "1.7", mb: "15px" }}
      >
        70 Washington Square South, New York, NY 10012, United States
      </Typography>

      <Typography
        variant="p"
        component={"p"}
        sx={{ color: "#AEB4BE", fontSize: "14px", mb: "15px"}}
      >
        Email: uilib.help@gmail.com
      </Typography>

      <Typography
        variant="p"
        component={"p"}
        sx={{ color: "#AEB4BE", fontSize: "14px", mb: "30px"}}
      >
        Phone: +1 1123 456 780
      </Typography>
      <Box sx={{display: "flex", gap: "10px"}}>
        <IconButton sx={{bgcolor: "#161d2b", color: "#fff"}}>
            <FaFacebookF fontSize={"13px"}/>
        </IconButton>
        <IconButton sx={{bgcolor: "#161d2b", color: "#fff"}}>
            <FaXTwitter fontSize={"13px"}/>
        </IconButton>
        <IconButton sx={{bgcolor: "#161d2b", color: "#fff"}}>
            <CiYoutube fontSize={"13px"}/>
        </IconButton>
        <IconButton sx={{bgcolor: "#161d2b", color: "#fff"}}>
            <FaGoogle fontSize={"13px"}/>
        </IconButton>
        <IconButton sx={{bgcolor: "#161d2b", color: "#fff"}}>
            <FaInstagram fontSize={"13px"}/>
        </IconButton>
      </Box>
    </Box>
  );
};
