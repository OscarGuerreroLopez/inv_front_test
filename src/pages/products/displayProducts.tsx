/* eslint-disable camelcase */
import React from "react";
import { Text, Flex, Button } from "rebass";
import { v4 as uuidv4 } from "uuid";
import { Product } from ".";
import { ProductItems } from "./productItems";

const fontSize = ["25px", "25px", "25px", "50px", "50px"];

interface DisplayProducts extends Product {
  deleteProduct: (name: string) => void;
}

export const DisplayProducts: React.FC<DisplayProducts> = ({
  ...props
}): JSX.Element => {
  const { name, contain_articles, deleteProduct } = props;

  return (
    <>
      <Flex
        sx={{
          flexWrap: "wrap",
          width: ["100%"],
          marginTop: "2",
          marginBottom: "2",
          justifyContent: "center",
        }}
      >
        <Text sx={{ width: ["100%"], textAlign: "center", fontSize }}>
          {name.toUpperCase()}
        </Text>
        {contain_articles.map((item) => {
          return (
            <Flex
              sx={{
                flexWrap: "wrap",
                width: ["100%"],
                marginTop: "2",
                marginBottom: "2",
              }}
              key={uuidv4()}
            >
              <ProductItems name="art_id" value={item.art_id} />
              <ProductItems name=" art_name" value={item.name} />
              <ProductItems name="amount_of" value={item.amount_of} />
            </Flex>
          );
        })}
        <Button
          backgroundColor="blue"
          onClick={(): void => deleteProduct(name)}
        >
          Delete
        </Button>
      </Flex>
    </>
  );
};
