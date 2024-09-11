import React from "react";
import TopicCard from "./TopicCard";
import baby from "../../assets/baby-image.png";

type Props = {};

const TopicProfile = (props: Props) => {
  return (
    <div className="flex gap-8">
      <TopicCard url="/" topic="Child Support Crisis" image={baby} />
    </div>
  );
};

export default TopicProfile;
