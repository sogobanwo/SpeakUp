import { ethers } from "ethers";
import contractABI from "../constants/contractABI.json"


export const getContract = (providerOrSigner)=>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractABI,
        providerOrSigner
    )

