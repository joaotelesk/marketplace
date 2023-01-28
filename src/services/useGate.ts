import axios from "axios";
import { IProduct } from "../types/IProduct";
import api from "./api";

export const useGet = async (): Promise<IProduct[]> => {
  try {
    const { data } = await api.get(
      "products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );

    return data.products;
  } catch (error: any) {
    throw Error(error);
  }
};
