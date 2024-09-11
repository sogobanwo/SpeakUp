"use client"

import { useCallback } from "react";
import { getProvider } from "../../constants/provider";
import { getContract } from "../../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";



export const useAddComment = () =>{
    
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(_topicId: string, _comment: string)=>{

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getContract(signer);

        const loadingToast1 = toast.loading('Adding comment');

        try {
            
            const transaction = await contract.addComment(_topicId, _comment);
            
            const receipt = await transaction.wait();
            
            console.log(receipt.status)

            toast.remove(loadingToast1)

            toast.success(`Added Comment`)

            return receipt


        } catch (error) {

            console.error(error)

            toast.remove(loadingToast1)
            
            toast.error("an error occured")

            console.error(error)
        }
        
    }, [chainId, walletProvider]);
}