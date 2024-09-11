"use client"

import { useCallback } from "react";
import { getProvider } from "../../constants/provider.js";
import { getContract } from "../../constants/contracts.js";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";

export const useVote = () =>{
    
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(_pollId: number, _choice: Boolean)=>{

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getContract(signer);

        const loadingToast1 = toast.loading('Casting Vote');

        try {
            
            const transaction = await contract.vote(_pollId, _choice);
            
            const receipt = await transaction.wait();
            

            console.log(receipt.status)

            toast.remove(loadingToast1)

            toast.success(`Vote Successful`)

            return receipt


        } catch (error) {

            console.error(error)

            toast.remove(loadingToast1)
            
            toast.error("an error occured")

            console.error(error)
        }
        
    }, [chainId, walletProvider]);
}