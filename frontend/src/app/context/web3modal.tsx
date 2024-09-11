"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId: any = process.env.NEXT_PUBLIC_PROJECT_ID;

export const SUPPORTED_CHAIN = 4202;

export const SEPOLIA_ID = 4202;

const LiskSepolia: any = {
  chainId: SEPOLIA_ID,
  name: "Lisk sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-blockscout.lisk.com",
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
};

// 3. Create a metadata object
const metadata = {
  name: "SpeakUp",
  description: `SpeakUp`,
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  defaultChainId: SEPOLIA_ID,
});

export const configureWeb3Modal = () =>

createWeb3Modal({
  ethersConfig,
  chains: [LiskSepolia],
  projectId,
  enableAnalytics: true, 
});



export function AppKit({ children }: any) {
  return children;
}
