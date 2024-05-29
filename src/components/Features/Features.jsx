import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { RiTruckLine } from "react-icons/ri";
import { BsPiggyBank } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";


export const Features = () => {
  const theme = useTheme();

  return (
    <Box className="Features">
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            bgcolor: theme.palette.navColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <Grid item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                textAlign: "center",
                my: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                borderRight: {sm: `1px solid ${theme.palette.neutral.main}` }
              }}
            >
              <Box className="Features__icon">
                <RiTruckLine fontSize={"38px"} />
              </Box>
              <Box className="Features__info">
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "17px", fontWeight: "600" }}
                >
                  Fast Delivery
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: "13px", textAlign: "start" }}
                >
                  Start from $10
                </Typography>
              </Box>
              
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                textAlign: "center",
                my: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                borderRight: {lg:`1px solid ${theme.palette.neutral.main}`}
              }}
            >
              <Box className="Features__icon">
                <BsPiggyBank fontSize={"38px"} />
              </Box>
              <Box className="Features__info">
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "17px", fontWeight: "600" }}
                >
                  Money Guarantee
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: "13px", textAlign: "start" }}
                >
                  7 Days Back
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                textAlign: "center",
                my: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                borderRight: {sm: `1px solid ${theme.palette.neutral.main}` }
              }}
            >
              <Box className="Features__icon">
                <MdOutlineAccessTime fontSize={"38px"} />
              </Box>
              <Box className="Features__info">
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "17px", fontWeight: "600" }}
                >
                  365 Days
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: "13px", textAlign: "start" }}
                >
                  For free return
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                textAlign: "center",
                my: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Box className="Features__icon">
                <MdOutlinePayments fontSize={"38px"} />
              </Box>
              <Box className="Features__info">
                <Typography
                  component={"h6"}
                  sx={{ fontSize: "17px", fontWeight: "600" }}
                >
                  Payment
                </Typography>
                <Typography
                  component={"p"}
                  sx={{ fontSize: "13px", textAlign: "start" }}
                >
                  Secure system
                </Typography>
              </Box>
            </Box>


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
