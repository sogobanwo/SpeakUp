# SpeakUp

## Overview
SpeakUp is a decentralized platform for open discussions and polls, built on the Ethereum blockchain. It allows users to create topics, add comments, participate in polls, and earn badges based on their engagement.

## Contract Description
The SpeakUp contract includes the following functionality:
* Topic Management: Create, view, and comment on topics.
* Poll Management: Create, view, and participate in polls.
* Badge System: Earn badges based on engagement (Bronze, Silver, Gold).
* Commenting: Add comments to topics.

## Frontend Description
The SpeakUp frontend is built using Next.JS and provides a user-friendly interface for interacting with the contract. Features include:
* Topic Dashboard: View and create new topics.
* Poll Dashboard: View and create new polls.
* Commenting System: Add comments to topics.
* Badge Display: View earned badges.

## Getting Started

### Contract Deployment
Clone the repository: git clone https://github.com/sogobanwo/SpeakUp.git
Install dependencies: npm install
Compile the contract: npx hardhat compile
Deploy the contract: npx hardhat deploy

### Frontend Setup
Install dependencies: ```npm install```
Start the frontend: ```npm run dev```

## Contract Address
* SpeakUp Contract Address: 0x3D9775D7D4A6Fc7A6BD4393df459AB05c8d91b61

## Functions
### createTopic
* Access: Public
* Description: creates a new topic.

### createPoll
* Access: Public
* Description: Creates a new poll.

### addComment
* Access: Public
* Description: Adds a comment to a topic.

### vote
* Access: Public
* Description: Participates in a poll.

### getBadge
* Access: Public View
* Description: Returns the badge earned by a user.

### Events
#### NewTopic
* Description: Emitted when a new topic is created.

#### NewPoll
* Description: Emitted when a new poll is created.

#### NewComment
* Description: Emitted when a new comment is added.

#### NewVote
* Description: Emitted when a user participates in a poll.

## Authors
Banwo Olorunsogo
Victor Kenneth

## License
This project is licensed under the MIT License
