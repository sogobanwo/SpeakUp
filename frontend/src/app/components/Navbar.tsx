"use client"

import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Image from "next/image";
import React from "react";
import logo from "../../assets/app-logo.png";
import Link from "next/link";
import ConnectButton from "../hooks/useConnectionButton";

type Props = {};

const Navbar = (props: Props) => {

  const { isConnected } = useWeb3ModalAccount();

  return (
    <div className="bg-[#1F1F1F] rounded-full my-4 py-4 px-24 flex justify-between items-center">
      <Image src={logo} width={180} height={34} alt={"logo"} />

      {isConnected && (
        <div className="flex gap-8">
          <Link href={"/topics"} className="text-white text-lg font-bold">Topics</Link>
          <Link href={"/profile"} className="text-white text-lg font-bold">Profile</Link>
        </div>
      )}

      <ConnectButton />
    </div>
  );
};

export default Navbar;
