import { useState, useEffect } from "react";
import api from "./api";

export interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
}
export interface Data {
  products: Product[];
  totalRows: number;
  page: number;
  rows: number;
}

export function useGetData() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("products?page=1&rows=10&sortBy=id&orderBy=ASC")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return { data, loading };
}
