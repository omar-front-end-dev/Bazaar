import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card_Item } from "../../Card_item/Card_Item";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types"

export const Main_Products_Slides = ({ products }) => {
  return (
    <Box sx={{ py: "60px" }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroupSkip={1}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          769: { slidesPerView: 3, spaceBetween: 20 },
          991: { slidesPerView: 4, spaceBetween: 20 },
          1200: { slidesPerView: 5, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        navigation={true}
        className="swiper-swipe"
      >
        {products
          ? products.map((product) => {
              return (
                
                <SwiperSlide key={product.id} className="swiper-slides">
                  <Card_Item product={product} />
                </SwiperSlide>
              )
            })
          : false}
      </Swiper>
    </Box>
  );
};

Main_Products_Slides.propTypes = {
  products: PropTypes.array
}