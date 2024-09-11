import React from 'react'
import YesNoPoll from './PollCard';
import useGetAllPolls from '../hooks/useGetAllPolls';

type Props = {}

const PollSection = (props: Props) => {
  const { loading, data, error } = useGetAllPolls();

  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex gap-8">
        {data.map((poll: { id: any; question: string }, index) => (
          <YesNoPoll key={poll.id} question={poll.question} id={poll.id}/>
        ))}
      </div>
  )
}

export default PollSection