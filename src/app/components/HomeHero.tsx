import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const HomeHero = (props: Props) => {
  return (
    <div className='flex my-4 flex-col-reverse lg:flex-row '>
    <div>
        <h1 className='text-6xl text-[#111111]'>
        SpeakUp – Your Voice, Anonymous and Free
        </h1>
        <p>
        A decentralized platform for truly anonymous conversations. Create topics, share your thoughts, and engage in open dialogue without fear of censorship or exposure.
        </p>
        <Button>
            Get Started
        </Button>
    </div>
    </div>
  )
}

export default HomeHero