"use client"
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { useState, useEffect } from "react";
import {readOnlyProvider} from "../../constants/provider"
import {getContract} from "../../constants/contracts"

const useGetallTopics = () => {
  const [data, setData] = useState({loading: true, data: []});

  useEffect(() => {
    let allTopics;
     (async () => {
      try {
        const contract = getContract(readOnlyProvider);
        allTopics = await contract.getTopics()
        setData({loading: false, data: allTopics});
    } catch (error) {
        console.error(error);
      } finally {
        // setData({loading: false, data: allTopics});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetallTopics;