/* eslint-disable import/no-mutable-exports */

import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";

export let Source: CancelTokenSource;

const newCancelToken = (): void => {
  Source = axios.CancelToken.source();
};

export const axiosFetcher = async (
  url: string,
  config: AxiosRequestConfig = {},
  // token?: string | undefined,
): Promise<IObjectLiteral | IObjectLiteral[]> => {
  newCancelToken();
  try {
    const axiosConfig = { ...config, cancelToken: Source.token };

    const { method } = axiosConfig;

    const response = await axios({
      url: `http://localhost:5000/${url}`,
      responseType: "json",
      method,
      ...axiosConfig,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return { Response: "AxiosCancel" };
    }

    throw error;
  }
};
