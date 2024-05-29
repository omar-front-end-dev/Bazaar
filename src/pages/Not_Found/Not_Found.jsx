import { Box } from "@mui/material";
import NotFoundImage from "../../assets/images/not-found.svg";
import { NavLink } from "react-router-dom";

export const Not_Found = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          style={{ width: "300px", marginBottom: "20px" }}
          src={NotFoundImage}
          alt=""
        />
        <Box>
          <NavLink
            
            style={{
              textDecoration: "none",
              color: "#213b6b",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "1px solid #213b6b",
            }}
            to={"/"}
          >
            Back to home
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};
