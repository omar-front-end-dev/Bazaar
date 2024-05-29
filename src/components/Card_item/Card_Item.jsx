import { Link } from "react-router-dom";
import "./Card_item.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Show_Card } from "./Components_Card/Show_Card";
import { useBgBtn } from "../../Hooks/useBgBtn";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
export const Card_Item = ({ product }) => {
  
  const { bgButton } = useBgBtn();
  const theme = useTheme();

  let img = product.attributes.productImg.data[0].attributes.url;

  return (
    <Card
      component={motion.div}
      layout
      initial={{transform: "scale(0)"}}
      animate={{transform: "scale(1)"}}
      transition={{duration: ".5", type: "spring", stiffness: 40}}
      className="card-item"
      sx={{
        width: "100%",
        borderRadius: "2px",
        position: "relative",
        "&:hover": {
          transition: ".5s",
          border: `1px solid ${theme.palette.text.primary}`,
        },
      }}
    >
      <Link
        className="card-item__link"
        style={{
          display: "block",
          width: "100%",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
        to={`/${product.id}`}
      >
        <CardMedia
          className="card-item__image"
          sx={{ mx: "auto", py: "20px" }}
          component="img"
          image={`${import.meta.env.VITE_BASE_URL}${img}`}
          alt="card image"
        />
      </Link>
      <CardContent>
        <Typography
          sx={{ userSelect: "none" }}
          gutterBottom
          variant="body2"
          component="p"
        >
          {product.attributes.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: product.attributes.sale
              ? "space-between"
              : "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", userSelect: "none" }}
            variant="p"
            component={"p"}
          >
            {product.attributes.sale ? `$${product.attributes.sale}` : ""}
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              userSelect: "none",
              textDecoration: product.attributes.sale ? "line-through" : "none",
            }}
            variant="p"
            component={"p"}
          >
            ${product.attributes.price}
          </Typography>
        </Box>

        <Typography variant="p" component={"p"}>
          <Rating
            sx={{ fontSize: "15px" }}
            name="half-rating-read"
            defaultValue={product.attributes.rating}
            precision={0.5}
            readOnly
          />
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          sx={{
            color: "#fff",
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
        <Show_Card product={product} />
      </CardActions>
    </Card>
  );
};

Card_Item.propTypes = {
  product: PropTypes.object,
};
