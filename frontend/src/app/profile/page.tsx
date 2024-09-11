"use client";

import Image from "next/image";
import React from "react";
import banner from "../../assets/profile-banner.png";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopicProfile from "../components/TopicProfile";
import CommentProfile from "../components/CommentProfile";
import useGetUserPoints from "../hooks/useGetUserPoints";
import CommentPostAchievements from "../components/BadgeProfile";

interface Props {}

const ProfilePage = (props: Props) => {
  const { loading, data, error } = useGetUserPoints();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full">
      <Image src={banner} alt="banner" />
      <div className="flex justify-end">
        <Card className="flex flex-col items-center py-1 -mt-20 w-60">
          <div className="flex gap-3 bg-white p-4 items-baseline">
            <h1 className="text-6xl font-bold">{data}</h1>
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
        <TabsContent value="badges">
          <CommentPostAchievements />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
