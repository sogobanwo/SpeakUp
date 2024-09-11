"use client";

import {  useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { configureWeb3Modal } from "../context/web3modal";

export default function ConnectButton() {
  configureWeb3Modal();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
    <>
      {isClient && isConnected ? (
        <w3m-account-button />
      ) : (
        <Button
          onClick={() => open()}
          variant={"outline"}
          className="w-40 text-base lg:w-60 bg-[#F3F3F3] text-black lg:text-xl font-semibold py-2 h-12"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}