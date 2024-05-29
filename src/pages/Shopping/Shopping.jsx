import { Box, Container, Grid } from "@mui/material";
import { useGetProductByNameQuery } from "../../RTK/product";
import { useEffect, useState } from "react";
import { Card_Item } from "../../components/Card_item/Card_Item";
import { Is_Loading } from "../../components/Is_Loading/Is_Loading";
import { useTheme } from "@emotion/react";
import { Main_Buttons_Category } from "../../components/main/Components_Main/Main_Buttons_Category";

export const Shopping = () => {
  const { data, isLoading } = useGetProductByNameQuery("products?populate=*");
  const theme = useTheme();
  const [categories, setCategories] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      let filteredData = data.data;
      if (categories !== "All") {
        filteredData = data.data.filter(
          (item) => item.attributes.category === categories
        );
      }
      setProducts(filteredData);
    }
  }, [categories, data]);

  return (
    <Box sx={{ bgcolor: theme.palette.Light_Gray.main, py: 5 }}>
      <Container maxWidth="xl">
        <Main_Buttons_Category setCategories={setCategories} />
        {isLoading ? (
          <Is_Loading />
        ) : (
          <Grid
            container
            sx={{mt: 2}}
            rowSpacing={4}
            columnSpacing={3}
          >
            {products.map((product) => {
              return (
                <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
                  <Card_Item product={product} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};
