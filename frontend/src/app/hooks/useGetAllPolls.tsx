"use client";

import { useState, useEffect } from "react";
import { readOnlyProvider } from "../../constants/provider.js";
import { getContract } from "../../constants/contracts.js";

interface UseGetAllPollResponse {
  loading: boolean;
  data: any[];
  error?: string;
}

const useGetAllPolls = (): UseGetAllPollResponse => {
  const [data, setData] = useState<UseGetAllPollResponse>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const contract = getContract(readOnlyProvider);
        const polls = await contract.getPolls();
        setData({ loading: false, data: polls });
      } catch (error) {
        console.error(error);
        setData({ loading: false, data: [], error: "Failed to fetch polls" });
      }
    };

    fetchPolls();
  }, []);

  return data;
};

export default useGetAllPolls;