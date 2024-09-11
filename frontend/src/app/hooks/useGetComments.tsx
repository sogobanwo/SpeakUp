"use client";

import { useState, useEffect } from "react";
import { readOnlyProvider } from "../../constants/provider.js";
import { getContract } from "../../constants/contracts.js";

interface UseGetCommentsResponse {
  loading: boolean;
  data: any[];
  error?: string;
}

const useGetComments = (id: number): UseGetCommentsResponse => {
  const [data, setData] = useState<UseGetCommentsResponse>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const contract = getContract(readOnlyProvider);
        const comments = await contract.getComments(id);
        setData({ loading: false, data: comments });
      } catch (error) {
        console.error(error);
        setData({ loading: false, data: [], error: "Failed to fetch comments" });
      }
    };

    fetchComments();
  }, [id]);

  return data;
};

export default useGetComments;