import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Text, Flex } from "rebass";
import { withRouter } from "react-router";

import { axiosFetcher, Source } from "../../utils/http";
import { CustomCard } from "../../components";

export interface InventoryItem {
  artId: string;
  name: string;
  stock: string;
}

const fontSize = ["1", "2", "2", "3", "3", "4"];

const Inventory = withRouter((): JSX.Element => {
  const [inventoryData, setInventoryData] = useState<IObjectLiteral>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchInventory = async (): Promise<void> => {
      const result = await axiosFetcher("inventory", { method: "GET" });

      setInventoryData(result);
    };
    setIsLoading(true);
    searchInventory();
    setIsLoading(false);

    return (): void => {
      Source.cancel("Dont need you anymore thanks");
    };
  }, []);

  return (
    <>
      {!isLoading && (
        <Flex justifyContent="center" flexWrap="wrap">
          <CustomCard>
            <Flex flexWrap="wrap" justifyContent="center">
              {inventoryData?.map((item: InventoryItem) => {
                return (
                  <Flex
                    sx={{
                      flexWrap: "wrap",
                      mt: 2,
                      borderRadius: 2,
                      boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
                      justifyContent: "center",
                      width: "100%",
                    }}
                    key={uuidv4()}
                  >
                    <Text
                      sx={{
                        fontSize,
                      }}
                    >
                      {item.name}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </CustomCard>
        </Flex>
      )}
    </>
  );
});

export default Inventory;
