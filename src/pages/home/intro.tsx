import React from "react";
import { Text, Flex, Button } from "rebass";
import { useHistory } from "react-router-dom";

import { CustomCard } from "../../components";

const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Intro = (): JSX.Element => {
  const history = useHistory();
  const clickedDetails = (): void => {
    history.push(`/inventory`);
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
      <Flex flexWrap="wrap">
        <Button onClick={(): void => clickedDetails()}>Details</Button>
      </Flex>
    </CustomCard>
  );
};
