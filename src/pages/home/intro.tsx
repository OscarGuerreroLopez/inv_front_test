import React from "react";
import { Text, Flex } from "rebass";

import { CustomCard } from "../../components";

const fontSize = ["1", "2", "2", "3", "3", "4"];

export const Intro = (): JSX.Element => {
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
          Some text goes here
        </Text>
      </Flex>
    </CustomCard>
  );
};
