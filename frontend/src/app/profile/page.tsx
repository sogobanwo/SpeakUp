import Image from "next/image";
import React from "react";
import banner from "../../assets/profile-banner.png";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopicProfile from "../components/TopicProfile";
import CommentProfile from "../components/CommentProfile";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <Image src={banner} alt="banner" />
      <div className="flex justify-end">

     
      <Card className="flex flex-col items-center py-1 -mt-20 w-60">
        <div className="flex gap-3 bg-white p-4 items-baseline">
          <h1 className="text-6xl font-bold">14</h1>
          <p className="text-sm font-bold">Points</p>
        </div>
        <p className="text-sm text-[#868686]">Popularity score</p>
      </Card>
      </div>
      <Tabs defaultValue="topics" className="w-full">
        <TabsList>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>
        <TabsContent value="topics">
          <TopicProfile />
        </TabsContent>
        <TabsContent value="comments">
          <CommentProfile />
        </TabsContent>
        <TabsContent value="badges">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
