import React from "react";
import { Text } from "rebass";

const fontSizeItem = ["20px", "20px", "20px", "30px", "30px"];

export const ProductItems: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}): JSX.Element => {
  return (
    <Text
      sx={{
        width: ["100%"],
        textAlign: "center",
        fontSize: fontSizeItem,
      }}
    >
      {name}: {value}
    </Text>
  );
};
