import React from "react";
import { Text, Flex } from "rebass";
import { useHistory } from "react-router-dom";

import { CustomCard } from "../../components";
import { LinkItems } from "./linkItems";

const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Intro = (): JSX.Element => {
  const history = useHistory();

  const clickedInventory = (): void => {
    history.push(`/inventory`);
  };

  const clickedProducts = (): void => {
    history.push(`/products`);
  };
  return (
    <CustomCard>
      <Flex justifyContent="center" flexWrap="wrap">
        <Text
          sx={{
            fontSize,
            fontWeight: "bold",
          }}
        >
          HOME INTRO
        </Text>
      </Flex>
      <Flex flexWrap="wrap">
        <Text
          sx={{
            fontSize,
          }}
        >
          Simple web app to play with the back end that I’ve done for this test.
          You can click on inventory to see the inventory in real time. If you
          delete a product, which you can do at the products page, the inventory
          will be updated when you go back to it. I didn’t have much time to
          make it look nice, but at least it is responsive
        </Text>
      </Flex>

      <Flex
        justifyContent="center"
        width="100%"
        flexWrap="wrap"
        marginBottom="4"
        marginTop="4"
      >
        <LinkItems text="Check Inventory" funct={clickedInventory} />
        <LinkItems text=" Check Products" funct={clickedProducts} />
      </Flex>
    </CustomCard>
  );
};
