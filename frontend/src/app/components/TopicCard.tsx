import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  topic: string;
  image: any;
  url: string;
};

const TopicCard = (props: Props) => {
  return (
    <div className="bg-[#F3F3F3] dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[400px]">
      <Image
        alt="Asset Image"
        className="w-full h-48 object-cover"
        height={300}
        src={props.image}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="bg-[#c5c5c5] p-4">
        <h3 className="text-lg font-semibold truncate hover:underline">
          {props.topic}
        </h3>
        <Link href={`${props.url}`} className="flex justify-end">
          <Button className="w-44" size="sm">join</Button>
        </Link>
      </div>
    </div>
  );
};

export default TopicCard;
