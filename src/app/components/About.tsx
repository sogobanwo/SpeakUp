import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import FreeSpeech from "../../assets/free-speech.png";
import DecentralisedControl from "../../assets/decentralized-control.png";
import TamperProof from "../../assets/tamper-proof.png";
import FullTransparency from "../../assets/full-transparency.png";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="my-3 font-bold text-4xl text-center"> About Speak up</h1>
      <div className="flex gap-6">
        <Card className="rounded-xl h-80 flex w-1/2 gap-3 items-center py-3 px-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-black text-2xl font-bold">
              The Power of Blockchain for Free Speech
            </h2>
            <p className="text-[#868686] text-lg font-normal">
              Secured conversations, immutable records, and complete
              transparency define SpeakUp, fostering a trusted environment where
              every voice is valued.
            </p>
          </div>
          <Image src={FreeSpeech} alt="image" />
        </Card>
        <Card className="rounded-xl h-80 flex w-1/2 gap-3 bg-[#1F1F1F] items-center py-3 px-8">
          <div className="flex flex-col gap-3">
            <h2 className="bg-[#1F1F1F] text-2xl  font-bold text-white">
              Decentralized Control
            </h2>
            <p className="text-[#DFDFDF] text-lg font-normal">
              No central authority to control or suppress speech. The power is
              in the hands of the community.
            </p>
          </div>
          <Image src={DecentralisedControl} alt="image" />
        </Card>
      </div>
      <div className="flex gap-6">
        <Card className="rounded-xl h-80 flex gap-3 w-1/2 bg-[#1F1F1F] items-center py-3 px-8">
          <div className="flex flex-col gap-3">
            <h2 className="bg-[#1F1F1F] text-2xl  font-bold text-white">
              Tamper-Proof
            </h2>
            <p className="text-[#DFDFDF] text-lg font-normal">
              All data is stored on-chain, ensuring that no one – not even us –
              can alter or delete your contributions.
            </p>
          </div>
          <Image src={TamperProof} alt="image" />
        </Card>
        <Card className="rounded-xl h-80 flex gap-3 w-1/2 items-center py-3 px-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-black text-2xl font-bold">Full Transparency</h2>
            <p className="text-[#868686] text-lg font-normal">
              Every action, vote, or moderation decision is visible and
              verifiable, creating trust across the platform.
            </p>
          </div>
          <Image src={FullTransparency} alt="image" />
        </Card>
      </div>
    </div>
  );
};

export default About;
