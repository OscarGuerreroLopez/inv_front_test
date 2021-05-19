import React from "react";
import { Flex } from "rebass";
import { Intro } from "./intro";

const Home = (): JSX.Element => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
    </Flex>
  );
};

export default Home;
