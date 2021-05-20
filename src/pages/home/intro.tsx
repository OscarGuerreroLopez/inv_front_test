import React from "react";
import { Text, Flex } from "rebass";
import { useHistory } from "react-router-dom";

import { CustomCard } from "../../components";

const fontSize = ["1", "2", "2", "3", "3", "4"];

interface ILinkItemsProps {
  text: string;
  funct: () => void;
}

const LinkItems: React.FC<ILinkItemsProps> = ({ text, funct }): JSX.Element => {
  return (
    <Flex
      sx={{
        width: ["100%", "100%", "50%", "50%", "50%"],
        justifyContent: "center",
        marginTop: "2",
        marginBottom: "2",
      }}
    >
      <Text
        sx={{
          fontSize,
          color: "blue",
          cursor: "pointer",
        }}
        onClick={(): void => funct()}
      >
        {text}
      </Text>
    </Flex>
  );
};

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
          Some text goes here...
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
