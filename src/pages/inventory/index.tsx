/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex } from "rebass";
import { withRouter } from "react-router";

import { axiosFetcher, Source } from "../../utils/http";
import { CustomCard } from "../../components";
import { DisplayItems } from "./displayItems";

export interface InventoryItem {
  art_id: string;
  name: string;
  stock: string;
}

const Inventory = withRouter((): JSX.Element => {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchInventory = async (): Promise<void> => {
      const result = (await axiosFetcher("inventory", {
        method: "GET",
      })) as InventoryItem[];

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
                return <DisplayItems {...item} key={uuidv4()} />;
              })}
            </Flex>
          </CustomCard>
        </Flex>
      )}
    </>
  );
});

export default Inventory;
