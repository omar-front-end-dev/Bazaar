import SlideImg1 from "../../../assets/images/banner/banner-15.jpg";
import SlideImg2 from "../../../assets/images/banner/banner-25.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
export const Hero_Section_Slider = () => {
  return (
    <Swiper
      style={{ flex: 1 }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="swiper"
    >
      <SwiperSlide className="Hero-swiper__slide">
        <img
          className="swiper-slide img"
          style={{ objectFit: "cover", width: "100%", height: "508px" }}
          src={SlideImg1}
          alt="slider image"
        />
        <Box
          className="swiper-slide__text"
          sx={{
            position: "absolute",
            top: "50%",
            transform: { lg: "translateY(-50%)", xs: "translate(-50%, -50%)" },
            left: { lg: "80px", xs: "50%" },
            color: "#fff",
            textAlign: { lg: "start", xs: "center" },
            zIndex: 12,
            userSelect: "none",
          }}
        >
          <Typography
            component={"h4"}
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontSize: "26px",
              color: "#2B3445",
            }}
          >
            Lifestyle collection
          </Typography>
          <Typography
            component={"h1"}
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontSize: { md: "60px", xs: "40px" },
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            Men
          </Typography>
          <Typography
            component={"h4"}
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontSize: { md: "30px", xs: "24px" },
              fontWeight: "600",
            }}
          >
            sale up to <span style={{ color: "#D23F57" }}>30% 0ff</span>
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{
              textTransform: "capitalize",
              fontSize: { md: "18px", xs: "14px" },
              fontWeight: "400",
              mb: "32px",
            }}
          >
            Get Free Shipping on orders over $99.00
          </Typography>
          <NavLink
            className="hero-section__button"
            to={"products"}
            style={{
              padding: "11px 35px",
              backgroundColor: "#2B3445",
              color: "#fff",
              textDecoration: "none",
              transition: "0.3s"
            }}
          >
            Shop Now
          </NavLink>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="Hero-swiper__slide">
        <img
          className="swiper-slide img"
          style={{ objectFit: "cover", width: "100%", height: "508px" }}
          src={SlideImg2}
          alt=""
        />
        <Box
          className="swiper-slide__text"
          sx={{
            position: "absolute",
            top: "50%",
            transform: { lg: "translateY(-50%)", xs: "translate(-50%, -50%)" },
            left: { lg: "80px", xs: "50%" },
            color: "#fff",
            textAlign: { lg: "start", xs: "center" },
            zIndex: 12,
            userSelect: "none",
          }}
        >
          <Typography
            component={"h4"}
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontSize: "26px",
              color: "#2B3445",
            }}
          >
            Lifestyle collection
          </Typography>
          <Typography
            component={"h1"}
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontSize: { md: "60px", xs: "40px" },
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            Women
          </Typography>
          <Typography
            component={"h4"}
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontSize: { md: "30px", xs: "24px" },
              fontWeight: "600",
            }}
          >
            sale up to <span style={{ color: "#D23F57" }}>35% 0ff</span>
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{
              textTransform: "capitalize",
              fontSize: { md: "18px", xs: "14px" },
              fontWeight: "400",
              mb: "32px",
            }}
          >
            Get Free Shipping on orders over $99.00
          </Typography>
          <NavLink
            className="hero-section__button"
            to={"products"}
            style={{
              padding: "11px 35px",
              backgroundColor: "#2B3445",
              color: "#fff",
              textDecoration: "none",
              transition: "0.3s"
            }}
          >
            Shop Now
          </NavLink>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
