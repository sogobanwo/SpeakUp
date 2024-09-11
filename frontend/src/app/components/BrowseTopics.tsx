import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import TopicCard from "./TopicCard";
import baby from "../../assets/baby-image.png"

type Props = {};



const BrowseTopics = (props: Props) => {
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
        <TopicCard url="/" topic="Child Support Crisis" image={baby}/>
      </div>
    </div>
  );
};

export default BrowseTopics;
