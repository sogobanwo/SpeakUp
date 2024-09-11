"use client"

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import baby from "../../assets/baby-image.png";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddComment } from "../hooks/useAddComment";


const CommentsHero = ({comm}:any) => {
  const addComment = useAddComment();

  const [comments, setComments] = useState("")
  const handleSubmit = ()=>{
    addComment(comm, comments)
  }
  return (
    <div className="flex my-4 flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-6xl text-[#111111] font-bold">
          Child Support Crisis{" "}
        </h1>
        <p className="text-[#868686] font-semibold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
          dapibus elementum. In condimentum laoreet elit vitae maximus.{" "}
        </p>
        <Dialog>
          <DialogTrigger className="bg-[#1F1F1F] text-white rounded-sm max-w-60 py-6 text-xl font-semibold">
            Join Conversation
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add your comment</DialogTitle>
              <DialogDescription>
                <label htmlFor="Category">Add Comment</label>
                <Input
                className="p-4 my-4"
                  onChange={(e) => {
                    setComments(e.target.value);
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
        <Image className="w-full h-64 rounded-3xl" src={baby} alt="hero-img" />
      </div>
    </div>
  );
};

export default CommentsHero;
