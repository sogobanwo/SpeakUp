import Comments from '@/app/components/Comments'
import CommentsHero from '@/app/components/CommentsHero'
import React from 'react'


const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <CommentsHero comm={params.id}/>
      <Comments id={Number(params.id)}/>
    </>
  )
}

export default page