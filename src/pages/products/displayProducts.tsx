/* eslint-disable camelcase */
import React from "react";
import { Text, Flex } from "rebass";
import { v4 as uuidv4 } from "uuid";
import { Product } from ".";

const fontSizeTitle = ["25px", "25px", "25px", "50px", "50px"];
const fontSizeItem = ["20px", "20px", "20px", "30px", "30px"];

export const DisplayProducts: React.FC<Product> = ({
  ...props
}): JSX.Element => {
  const { name, contain_articles } = props;

  return (
    <>
      <Flex
        sx={{
          flexWrap: "wrap",
          width: ["100%"],
          marginTop: "2",
          marginBottom: "2",
        }}
      >
        <Text
          sx={{ width: ["100%"], textAlign: "center", fontSize: fontSizeTitle }}
        >
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
              <Text
                sx={{
                  width: ["100%"],
                  textAlign: "center",
                  fontSize: fontSizeItem,
                }}
              >
                art_id: {item.art_id}
              </Text>
              <Text
                sx={{
                  width: ["100%"],
                  textAlign: "center",
                  fontSize: fontSizeItem,
                }}
              >
                amount_of: {item.amount_of}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};
