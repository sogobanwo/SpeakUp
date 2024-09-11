'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useVote } from '../hooks/useVote'

export default function YesNoPoll({question, id}: any) {
    const vote = useVote()
  const [votes, setVotes] = useState({ yes: 0, no: 0 })
  const [userVoted, setUserVoted] = useState(false)

  

  const handleVote1 = () => {
    vote(id, true)
  }

  const handleVote2 = () => {
    vote(id, false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Poll Question</CardTitle>
        <CardDescription>{question}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button 
            onClick={() => handleVote1()} 
            className="w-full bg-black text-white" 
            disabled={userVoted}
            variant={userVoted && votes.yes > votes.no ? "default" : "outline"}
          >
            Yes
          </Button>
          <Button 
            onClick={() => handleVote2()} 
            className="w-full bg-black text-white" 
            disabled={userVoted}
            variant={userVoted && votes.no > votes.yes ? "default" : "outline"}
          >
            No
          </Button>
        </div>
      </CardContent>
    
    </Card>
  )
}