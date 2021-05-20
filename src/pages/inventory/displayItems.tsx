/* eslint-disable camelcase */
import React from "react";
import { Text, Flex } from "rebass";

import { InventoryItem } from ".";

const fontSize = ["25px", "25px", "25px", "50px", "50px"];

export const DisplayItems: React.FC<InventoryItem> = ({
  ...props
}): JSX.Element => {
  const { name, art_id, stock } = props;

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
        <Text sx={{ width: ["100%"], textAlign: "center", fontSize }}>
          {name.toUpperCase()}
        </Text>

        <Text sx={{ width: ["100%"], textAlign: "center", fontSize }}>
          art_id: {art_id}
        </Text>
        <Text sx={{ width: ["100%"], textAlign: "center", fontSize }}>
          stock: {stock}
        </Text>
      </Flex>
    </>
  );
};
