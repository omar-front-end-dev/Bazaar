import { Box, Button, Container, Rating, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useBgBtn } from "../../Hooks/useBgBtn";
import { useState } from "react";
import { useGetProductByNameQuery } from "../../RTK/product";
import { useParams } from "react-router-dom";
import { Is_Loading } from "../../components/Is_Loading/Is_Loading";






export const Single_Product = () => {
  const { bgButton } = useBgBtn();
  const [image, setImage] = useState("");
  const { data, isLoading } = useGetProductByNameQuery("products?populate=*");
  const { id } = useParams();

  const findProduct = !isLoading
    ? data.data.find((item) => id == item.id)
    : null;

  return (
    <>
      {isLoading ? (
        <Is_Loading />
      ) : (
        <Box>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                mt: 5,
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
                    image ||
                    findProduct.attributes.productImg.data[0].attributes.url
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
                  {findProduct.attributes.title}
                </Typography>

                <Typography
                  component={"p"}
                  variant="p"
                  sx={{ fontSize: "14px", mb: 1, color: "#939393" }}
                >
                  CATEGORY: {findProduct.attributes.category}
                </Typography>

                <Typography
                  component={"h5"}
                  variant="h6"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    mb: 1,
                    color: "#d23f57",
                  }}
                >
                  $
                  {findProduct.attributes.sale
                    ? findProduct.attributes.sale
                    : findProduct.attributes.price}
                </Typography>

                <Rating
                  sx={{ mb: 2 }}
                  name="half-rating-read"
                  defaultValue={findProduct.attributes.rating}
                  precision={0.5}
                  readOnly
                />

                <Typography
                  component={"p"}
                  variant="p"
                  sx={{ fontSize: "14px", mb: 2 }}
                >
                  {findProduct.attributes.description}
                </Typography>

                <Button
                  sx={{
                    color: "#fff",
                    mt: "20px",
                    px: 7,
                    bgcolor: bgButton ? "#D23F57" : "#2B3445",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: bgButton ? "#d23f57bd" : "#2b3445e8",
                    },
                    gap: 1,
                  }}
                >
                  Add To Cart
                  <ShoppingCartIcon sx={{ fontSize: "20px" }} />
                </Button>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {findProduct.attributes.productImg.data.map((img, index) => {
                    return (
                      <img
                        onClick={() => setImage(img.attributes.url)}
                        key={index}
                        style={{
                          width: "70px",
                          cursor: "pointer",
                          margin: "10px 2px",
                        }}
                        src={`${import.meta.env.VITE_BASE_URL}${
                          img.attributes.url
                        }`}
                        alt={img.attributes.title}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
