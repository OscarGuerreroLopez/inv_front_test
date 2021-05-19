import React from "react";
import { BarLoader, BounceLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loader: React.FC<Record<string, unknown>> = () => {
  return (
    <>
      <BounceLoader css={override} size={300} color="#3383FF" />
      <br />
      <br />
      <BarLoader css={override} color="#3383FF" width={300} />
    </>
  );
};
