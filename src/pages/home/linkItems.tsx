import React from "react";
import { Text, Flex } from "rebass";

interface LinkItemsProps {
  text: string;
  funct: () => void;
}

const fontSize = ["1", "2", "2", "3", "3", "4"];

export const LinkItems: React.FC<LinkItemsProps> = ({
  text,
  funct,
}): JSX.Element => {
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
