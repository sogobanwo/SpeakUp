import Comments from '@/app/components/Comments'
import CommentsHero from '@/app/components/CommentsHero'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <CommentsHero />
      <Comments />
    </>
  )
}

export default page