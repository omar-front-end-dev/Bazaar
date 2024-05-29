import Image1 from "../../../assets/images/banner/banner-17.jpg";
import Image2 from "../../../assets/images/banner/pexels-photo-3568518.jpeg";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const Hero_Section_Right = () => {
  return (
    <Stack
      sx={{
        flexDirection: { lg: "column", sm: "row",  xs: "column"},
        ml: {lg: "10px"},
        mt: {xs: "10px" ,lg: 0}
      }}
    >
      <Box
        className="Hero-Section-Right__Content"
        sx={{
          position: "relative",
          width: "100%",
          height: "250px",
          mr: { sm: 0.5, lg: 0 },
          mb: { lg: 0.5, xs: 0.5, sm: 0  },
        }}
      >
        <img style={{ width: "100%", height:"100%" ,objectFit: "cover"}} src={Image1} alt="image banner" />
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            zIndex: 3
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#d23f57", fontSize: "15px", fontWeight: "bold", textTransform: "uppercase"}}
          >
            NEW ARRIVALS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              lineHeight: "25px",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            SUMMER
            <br />
            SALE <span style={{color: "#d23f57"}}>20% OFF</span>
          </Typography>

          <Typography>
            <Link
              className="show-More_Link"
              to={"sale"}
              style={{
                fontSize: "16px",
                color: "#2B3445",
                lineHeight: "2",
                fontWeight: "bold",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "105px",
                transition: "0.3s",
                position: "relative",
                marginTop: "10px",
              }}
            >
              Shop Now
              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            </Link>
          </Typography>
        </Stack>
      </Box>

      <Box
        className="Hero-Section-Right__Content"
        sx={{
          position: "relative",
          width: "100%",
          height: "250px",
          ml: { sm: .5, lg: 0 },
          mt: { lg: 0.5, xs: 0.5, sm: 0 },
        }}
      >
        <img style={{ width: "100%", height:"100%" ,objectFit: "cover"}} src={Image2} alt="image banner" />
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            zIndex: 3
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#d23f57", fontSize: "15px", fontWeight: "bold", textTransform: "uppercase"}}
          >
            {"Men's"} accessories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              lineHeight: "25px",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Watch & perfume
          </Typography>

          <Typography>
            <Link
              className="show-More_Link"
              to={"sale"}
              style={{
                fontSize: "16px",
                color: "#2B3445",
                lineHeight: "2",
                fontWeight: "bold",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "105px",
                transition: "0.3s",
                position: "relative",
                marginTop: "10px",
              }}
            >
              Shop Now
              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
