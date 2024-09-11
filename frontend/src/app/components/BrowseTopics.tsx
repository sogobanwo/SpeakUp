"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import TopicCard from "./TopicCard";
import baby from "../../assets/baby-image.png";
import useGetallTopics from "../hooks/useGetAllTopic";

type Props = {};

const BrowseTopics = (props: Props) => {
  const { loading, data, error } = useGetallTopics();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="my-3 font-bold text-4xl text-center">
        Browse through Topics
      </h1>
      <div className="flex justify-end w-full">
        <Select>
          <SelectTrigger className="w-[270px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="w-[270px]">
            <SelectItem value="Adulthood">Adulthood</SelectItem>
            <SelectItem value="Society">Society</SelectItem>
            <SelectItem value="Politics">Politics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-8">
        {data.map((topic: { id: any; title: string }) => (
          <TopicCard key={topic.id} url={`/topics/${topic.id}`} topic={topic.title} image={baby} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTopics;