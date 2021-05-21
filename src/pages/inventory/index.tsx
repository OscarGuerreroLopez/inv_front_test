/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex } from "rebass";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    const searchInventory = async (): Promise<void> => {
      await axiosFetcher("inventory", {
        method: "GET",
      })
        .then((result) => {
          setInventoryData(result);
        })
        .catch(() => {
          // There are better ways to handle and error
          // for simplicity I just redirect home
          // try and catch don`t really work well inside useEffect
          history.push(`/`);
        });
    };
    setIsLoading(true);
    searchInventory();
    setIsLoading(false);

    return (): void => {
      Source.cancel("Dont need you anymore thanks");
    };
  }, [history]);

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
