/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex } from "rebass";
import { withRouter } from "react-router";

import { axiosFetcher, Source } from "../../utils/http";
import { CustomCard } from "../../components";
import { DisplayProducts } from "./displayProducts";

export interface Product {
  name: string;
  contain_articles: {
    art_id: string;
    name: string;
    amount_of: string;
  }[];
}

const Products = withRouter((): JSX.Element => {
  const [productsData, setproductsData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchInventory = async (): Promise<void> => {
      const result = (await axiosFetcher("products", {
        method: "GET",
      })) as Product[];

      setproductsData(result);
    };
    setIsLoading(true);
    searchInventory();
    setIsLoading(false);

    return (): void => {
      Source.cancel("Dont need you anymore thanks");
    };
  }, []);

  const deleteProduct = async (prodName: string): Promise<void> => {
    const deleteResult = await axiosFetcher(
      `products?where[0][name]=${prodName}`,
      { method: "DELETE" },
    );

    if (deleteResult.message) {
      const newProductsData = productsData.filter((item) => {
        return item.name !== prodName;
      });

      setproductsData(newProductsData);
    }
  };

  return (
    <>
      {!isLoading && (
        <Flex justifyContent="center" flexWrap="wrap">
          <CustomCard>
            <Flex flexWrap="wrap" justifyContent="center">
              {productsData?.map((item: Product) => {
                return (
                  <DisplayProducts
                    {...item}
                    deleteProduct={deleteProduct}
                    key={uuidv4()}
                  />
                );
              })}
            </Flex>
          </CustomCard>
        </Flex>
      )}
    </>
  );
});

export default Products;
