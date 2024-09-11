import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Join from "../../assets/join-community.png";
import { Button } from "@/components/ui/button";

type Props = {};

const JoinCommunity = (props: Props) => {
  return (
    <Card className="flex gap-12 bg-[#F3F3F3] h-[390px] p-4 items-center my-16">
      <Image src={Join} alt="image" />
      <div className="flex flex-col gap-10">
        <div>

        <h1 className="text-4xl text-[#111111] font-bold">
          Join our Community
        </h1>
        <h3 className="text-xl text-[#111111] font-bold">Speak Up for a Better Future</h3>
        </div>
        <p className="text-[#868686] font-semibold text-xl">
          Your voice deserves to be heard, and your privacy deserves to be
          respected. Join SpeakUp and be part of a global, anonymous community
          built for open dialogue.
        </p>
        <Button className="bg-[#1F1F1F] text-white rounded-sm max-w-60 py-6 text-xl font-semibold">
          Join Community
        </Button>
      </div>
    </Card>
  );
};

export default JoinCommunity;
