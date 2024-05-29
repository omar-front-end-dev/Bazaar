import { Typography } from "@mui/material";

export const Header_top_Text_Left = () => {
  return (
    <>
      <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "300",
              color: "#fff",
            }}
          >
            free Express Shopping
          </Typography>
    </>
  )
}
