import { Box, Container } from "@mui/material";
import "./Main.css";
import { Main_Products_Slides } from "./Components_Main/Main_Products_Slides";
import { Main_Sale_Banner } from "./Components_Main/Main_Sale_Banner";
import { Main_Buttons_Category } from "./Components_Main/Main_Buttons_Category";
import { useGetProductByNameQuery } from "../../RTK/product";
import { useEffect, useState } from "react";
import { Is_Loading } from "../Is_Loading/Is_Loading";
export const Main = () => {
  const [products, setProducts] = useState([]);
  const { data, isLoading } = useGetProductByNameQuery("products?populate=*");
  const [categories, setCategories] = useState("All")
  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);

  const discountProducts = products.filter((item) => item.attributes.sale);
  const specialProducts = products.filter((item) => {
    if (categories == "All") {
      return item.attributes.featured
    }else if(categories){
      return item.attributes.featured && item.attributes.category == categories
    }
    
  });

  

  return (
    <Box className="main">
      <Container maxWidth="xl">
        {isLoading ? (
          <Is_Loading />
        ) : (
          <>
            <Main_Sale_Banner />
            <Main_Products_Slides products={discountProducts} />
            <Main_Buttons_Category setCategories={setCategories}/>
            <Main_Products_Slides products={specialProducts}/>
          </>
        )}
      </Container>
    </Box>
  );
};
