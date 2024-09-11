import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import TopicHero from "../../assets/topics-hero.png";
type Props = {}

const TopicsHero = (props: Props) => {
  return (
    <div className='flex my-4 flex-col-reverse lg:flex-row items-center'>
    <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-6xl text-[#111111] font-bold'>
        Discover & Engage in Anonymous Conversations        </h1>
        <p className='text-[#868686] font-semibold text-xl'>
        Explore a wide range of topics, share your thoughts, and join discussions anonymously. Speak your mind freely and securely.        </p>
        <Button className='bg-[#1F1F1F] text-white rounded-sm max-w-60 py-6 text-xl font-semibold'>
            Create Topic
        </Button>
    </div>
    <div className='w-full lg:w-1/2'>
    <Image className='w-full' src={TopicHero} alt='hero-img'/>
    </div>
    </div>
  )
}

export default TopicsHero