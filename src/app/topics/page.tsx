import React from 'react'
import TopicsHero from '../components/TopicsHero'
import BrowseTopics from '../components/BrowseTopics'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <TopicsHero />
    <BrowseTopics />
    </>
  )
}

export default page