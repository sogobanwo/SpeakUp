"use client";

import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import { readOnlyProvider } from "../../constants/provider.js";
import { getContract } from "../../constants/contracts.js";

interface UseGetUserPointsResponse {
  loading: boolean;
  data: number;
  error?: string;
}

const useGetUserPoints = (): UseGetUserPointsResponse => {
const {address} = useWeb3ModalAccount()
  const [data, setData] = useState<UseGetUserPointsResponse>({
    loading: true,
    data: 0,
  });

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const contract = getContract(readOnlyProvider);
        const score = await contract.opinionScores(address);
        setData({ loading: false, data: score });
      } catch (error) {
        console.error(error);
        setData({ loading: false, data: 0, error: "Failed to fetch user points" });
      }
    };

    fetchUserPoints();
  }, [address]);

  return data;
};

export default useGetUserPoints;