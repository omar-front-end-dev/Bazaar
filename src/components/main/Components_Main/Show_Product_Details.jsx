import { Box, Button, Rating, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useBgBtn } from "../../../Hooks/useBgBtn";
import { PropTypes } from "prop-types";
import { useState } from "react";

export const Show_Product_Details = ({ product }) => {
  const { bgButton } = useBgBtn();
  const [image, setImage] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        pb: "40px",
        px: "30px",
        flexDirection: { xs: "column", md: "row" },
      }}
      className="Show-Product-Details"
    >
      <Box
        sx={{ flexGrow: 1, width: { xs: "100%" } }}
        className="Show-Product-Details__image"
      >
        <img
          style={{ width: "100%" }}
          src={`${import.meta.env.VITE_BASE_URL}${
            image || product.attributes.productImg.data[0].attributes.url
          }`}
          alt=""
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography
          component={"h1"}
          variant="h5"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {product.attributes.title}
        </Typography>

        <Typography
          component={"p"}
          variant="p"
          sx={{ fontSize: "14px", mb: 1, color: "#939393" }}
        >
          CATEGORY: {product.attributes.category}
        </Typography>

        <Typography
          component={"h5"}
          variant="h6"
          sx={{ fontSize: "30px", fontWeight: "bold", mb: 1, color: "#d23f57" }}
        >
          $
          {product.attributes.sale
            ? product.attributes.sale
            : product.attributes.price}
        </Typography>

        <Rating
          sx={{ mb: 2 }}
          name="half-rating-read"
          defaultValue={product.attributes.rating}
          precision={0.5}
          readOnly
        />

        <Typography
          component={"p"}
          variant="p"
          sx={{ fontSize: "14px", mb: 2 }}
        >
          {product.attributes.description}
        </Typography>

        <Button
          sx={{
            color: "#fff",
            mt: "20px",
            width: "100%",
            bgcolor: bgButton ? "#D23F57" : "#2B3445",
            textTransform: "capitalize",
            "&:hover": { bgcolor: bgButton ? "#d23f57bd" : "#2b3445e8" },
            gap: 1,
          }}
        >
          Add To Cart
          <ShoppingCartIcon sx={{ fontSize: "20px" }} />
        </Button>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {product.attributes.productImg.data.map((img, index) => {
            return (
              <img
                onClick={() => setImage(img.attributes.url)}
                key={index}
                style={{ width: "70px", cursor: "pointer", margin: "10px 2px" }}
                src={`${import.meta.env.VITE_BASE_URL}${img.attributes.url}`}
                alt={img.attributes.title}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

Show_Product_Details.propTypes = {
  product: PropTypes.object,
};
