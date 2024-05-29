import { Box, Typography } from "@mui/material";

export const Main_Sale_Banner = () => {
  return (
    <Box
      sx={{ textAlign: "center", py: "40px", position: "relative" }}
      className="Sale-Banner"
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography sx={{fontWeight: "600", color: "#2B3445"}} variant="h4" component={"h4"}>
          Up to <span style={{color:"#d23f57"}}> 35% </span> discount
        </Typography>
        <Typography>
          Only until the end of this week. Terms and conditions apply
        </Typography>
      </Box>
    </Box>
  );
};
