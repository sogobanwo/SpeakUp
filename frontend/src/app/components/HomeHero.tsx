import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import HeroImage from "../../assets/hero-image.png"

type Props = {}

const HomeHero = (props: Props) => {
  return (
    <div className='flex my-4 flex-col-reverse lg:flex-row items-center'>
    <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-6xl text-[#111111] font-bold'>
        SpeakUp – Your Voice, Anonymous and Free
        </h1>
        <p className='text-[#868686] font-semibold text-xl'>
        A decentralized platform for truly anonymous conversations. Create topics, share your thoughts, and engage in open dialogue without fear of censorship or exposure.
        </p>
        <Button className='bg-[#1F1F1F] text-white rounded-sm max-w-60 py-6 text-xl font-semibold'>
            Get Started
        </Button>
    </div>
    <div className='w-full lg:w-1/2'>
    <Image className='w-full' src={HeroImage} alt='hero-img'/>
    </div>
    </div>
  )
}

export default HomeHero