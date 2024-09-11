import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send, ThumbsUp, Award, Zap, Trophy, Users, Heart, Star } from "lucide-react"

// Achievement data related to comments and posts
const achievements = [
  {
    title: "First Comment",
    description: "Left your first comment",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-blue-500"
  },
  {
    title: "Debut Post",
    description: "Created your first post",
    icon: <Send className="h-6 w-6" />,
    color: "bg-green-500"
  },
  {
    title: "Comment Streak",
    description: "Commented for 7 days in a row",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-yellow-500"
  },
  {
    title: "Popular Post",
    description: "Your post received 100 likes",
    icon: <ThumbsUp className="h-6 w-6" />,
    color: "bg-red-500"
  },
  {
    title: "Conversation Starter",
    description: "Started a thread with 20+ replies",
    icon: <Users className="h-6 w-6" />,
    color: "bg-purple-500"
  },
  {
    title: "Top Commenter",
    description: "Left 500 comments",
    icon: <Award className="h-6 w-6" />,
    color: "bg-indigo-500"
  },
  {
    title: "Prolific Poster",
    description: "Created 100 posts",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-orange-500"
  },
  {
    title: "Helpful Contributor",
    description: "Received 1000 total likes on comments",
    icon: <Heart className="h-6 w-6" />,
    color: "bg-pink-500"
  },
  {
    title: "Content Creator",
    description: "10 of your posts were featured",
    icon: <Star className="h-6 w-6" />,
    color: "bg-teal-500"
  }
]

export default function CommentPostAchievements() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Your Commenting & Posting Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className={`${achievement.color} text-white`}>
              <div className="flex items-center space-x-4">
                {achievement.icon}
                <CardTitle>{achievement.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription>{achievement.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}