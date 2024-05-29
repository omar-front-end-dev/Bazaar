import { Box, Typography, Stack } from "@mui/material";
import logoImage from "../../../assets/images/logo/logo.svg";
import googlePlayImg from "../../../assets/images/google-play.png";
import appStoreImg from "../../../assets/images/App-Store.svg";
export const Footer_Logo = () => {
  return (
    <>
      <Box className="footer__logo">
        <img style={{marginBottom: "20px"}} src={logoImage} alt="" />
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "1.7",
            color: "#AEB4BE",
            mb: "20px",
          }}
          component={"p"}
          variant="p"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          laboriosam fugit voluptatum rem. Neque odio excepturi nihil similique
          modi quisquam,
        </Typography>

        <Stack sx={{ flexDirection: "row", gap: "20px" }}>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#161d2b",
              padding: "6px 15px",
              borderRadius: "5px",
            }}
            href="#"
          >
            <Box>
              <img style={{ width: "20px" }} src={googlePlayImg} alt="" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "10px" }} component={"p"}>
                Get it no
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} component={"p"}>
                Google Play
              </Typography>
            </Box>
          </a>
          <a
            style={{
              display: "flex",
              borderRadius: "5px",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#161d2b",
              padding: "6px 15px"
            }}
            href="#"
          >
            <Box>
              <img
                style={{ width: "20px", borderRadius: "4px" }}
                src={appStoreImg}
                alt=""
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "10px" }} component={"p"}>
                Download on the
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} component={"p"}>
                App Store
              </Typography>
            </Box>
          </a>
        </Stack>
      </Box>
    </>
  );
};
