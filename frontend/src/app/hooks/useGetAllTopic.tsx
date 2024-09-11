import { useState, useEffect } from "react";
import { readOnlyProvider } from "../../constants/provider.js";
import { getContract } from "../../constants/contracts.js";

interface UseGetAllTopicsResponse {
  loading: boolean;
  data: any[];
  error?: string;
}

const useGetAllTopics = (): UseGetAllTopicsResponse => {
  const [data, setData] = useState<UseGetAllTopicsResponse>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const contract = getContract(readOnlyProvider);
        const allTopics = await contract.getTopics();
        const unwrappedTopics = [...allTopics];
        setData({ loading: false, data: unwrappedTopics });
      } catch (error) {
        console.error(error);
        setData({ loading: false, data: [], error: "Failed to fetch topics" });
      }
    };

    fetchTopics();
  }, [readOnlyProvider]);

  return data;
};

export default useGetAllTopics;