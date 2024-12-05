import { useEffect, useState } from "react";
import { instance } from "../config/config";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await instance.get(url);
        const data = response;
        setData(data.data.data);
        setIsLoading(false);
      } catch (e) {
        const errorMessage =
          typeof e.response?.data?.message === "string"
            ? e.response.data.message
            : "Internal Server Error";
        setError(errorMessage);

        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error, setIsLoading, setData, setError };
};
