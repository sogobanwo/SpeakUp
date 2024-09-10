import Image from "next/image";
import HomeHero from "./components/HomeHero";
import About from "./components/About";
import JoinCommunity from "./components/JoinCommunity";

export default function Home() {
  return (
   <>
   <HomeHero />
   <About />
   <JoinCommunity />
   </>
  );
}
