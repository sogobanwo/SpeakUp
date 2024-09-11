"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import TopicHero from "../../assets/topics-hero.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useCreateTopic } from "../hooks/useCreateTopic";
type Props = {};

const TopicsHero = (props: Props) => {
  const createTopic = useCreateTopic();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = ()=>{
    createTopic(category, title)
  }

  return (
    <div className="flex my-4 flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-6xl text-[#111111] font-bold">
          Discover & Engage in Anonymous Conversations{" "}
        </h1>
        <p className="text-[#868686] font-semibold text-xl">
          Explore a wide range of topics, share your thoughts, and join
          discussions anonymously. Speak your mind freely and securely.{" "}
        </p>

        <Dialog>
          <DialogTrigger className="bg-[#1F1F1F] text-white rounded-sm max-w-60 py-6 text-xl font-semibold">
            Create Topic
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a discussion anonymously</DialogTitle>
              <DialogDescription>
                <label htmlFor="Category" > Category</label>
                <Input
                className="p-4 my-4"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <label htmlFor="Title"> Title</label>
                <Input
                className="p-4 my-4"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </DialogDescription>
              <Button className="bg-[#1F1F1F] text-white rounded-sm max-w-32 py-6 text-lg font-semibold" onClick={()=>{handleSubmit()}}>
                Submit
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full lg:w-1/2">
        <Image className="w-full" src={TopicHero} alt="hero-img" />
      </div>
    </div>
  );
};

export default TopicsHero;
