import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useGetProductByNameQuery } from "../../../RTK/product";
import { PropTypes } from "prop-types";

export const Main_Buttons_Category = ( { setCategories } ) => {
  const [alignment, setAlignment] = useState("left");
  const { data } = useGetProductByNameQuery("products?populate=*");
  const [btnCategory, setBtnCategory] = useState([]);

  useEffect(() => {
    if (data) {
      const uniqueCategories = new Set();
      for (const product of data.data) {
        if (!uniqueCategories.has(product.attributes.category)) {
          uniqueCategories.add(product.attributes.category);
        }
      }
      setBtnCategory(Array.from(uniqueCategories));
    }
  }, [data]);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack
      className="main-header"
      sx={{
        flexDirection: { md: "row", sm: "column" },
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: { md: "start", xs: "center" },
      }}
    >
      <Box
        className="main-header__text"
        sx={{
          mb: { md: 0, xs: 3 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#d23f57", fontWeight: "600", fontSize: "23px" }}
        >
          Selected Products
        </Typography>
        <Typography fontWeight={300} variant="body1">
          All our new arrivals in a exclusive brand selection
        </Typography>
      </Box>

      <Box className="main-header__buttons">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            className="main-header__button"
            value="left"
            aria-label="left aligned"
            sx={{ fontSize: { md: "14px", xs: "12px" } }}
            onClick={() => setCategories("All")}
          >
            All Products
          </ToggleButton>
          {btnCategory.map((btn, index) => {
            return (
              <ToggleButton
                key={index}
                onClick={() => setCategories(btn)}
                className="main-header__button"
                value={btn}
                aria-label="centered"
                sx={{ fontSize: { md: "14px", xs: "12px" } }}
              >
                {btn} Products
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
};


Main_Buttons_Category.propTypes = {
  setCategories: PropTypes.string,
};