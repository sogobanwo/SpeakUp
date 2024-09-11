"use client"
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { useState, useEffect } from "react";
import {readOnlyProvider} from "../../constants/provider"
import {getContract} from "../../constants/contracts"

const useGetAllPoll = () => {
  const [data, setData] = useState({loading: true, data: []});

  useEffect(() => {
    let allPoll;
     (async () => {
      try {
        const contract = getContract(readOnlyProvider);
        allPoll = await contract.getPolls()
        setData({loading: false, data: allPoll});
    } catch (error) {
        console.error(error);
      } finally {
        // setData({loading: false, data: allPoll});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetAllPoll;