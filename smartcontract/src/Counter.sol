// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract speakUp {
    mapping (string => uint[]) public categories;

    mapping (uint => Topic) public topics;

    mapping (uint => Poll) public polls;

    mapping (address => uint) public opinionScores;
    uint public topicCounter=1;
    
    uint public pollCounter=1;

    uint public bronzeThreshold = 10;
    uint public silverThreshold = 50;
    uint public goldThreshold = 100;

    uint public topicIdCounter;

    uint public pollIdCounter;

    event NewTopic(uint topicId, string category, string title);

    event NewComment(uint topicId, address user, string comment, uint score);

    event NewPoll(uint pollId, string category, string question);

    event NewVote(uint pollId, address user, bool choice);

    struct Topic {
        uint id;
        string category;
        string title;
        string[] comments;
    }

    struct Poll {
        uint id;
        string category;
        string question;
        uint yesCount;
        uint noCount;
    }

    mapping (uint => mapping (address => bool)) public pollVotes;


    function addComment(uint _topicId, string memory _comment) public {
        require(topics[_topicId].id != 0, "Topic does not exist");
        topics[_topicId].comments.push(_comment);
        uint score = generateScore(msg.sender);
        opinionScores[msg.sender] += score;
        emit NewComment(_topicId, msg.sender, _comment, score);
    }

    function generateScore(address _user) internal returns (uint) {
        return 1;
    }


    function vote(uint _pollId, bool _choice) public {
        require(polls[_pollId].id != 0, "Poll does not exist");
        require(!pollVotes[_pollId][msg.sender], "You have already voted");
        pollVotes[_pollId][msg.sender] = true;
        if (_choice) {
            polls[_pollId].yesCount++;
        } else {
            polls[_pollId].noCount++;
        }
        emit NewVote(_pollId, msg.sender, _choice);
    }

    function getVoteCount(uint _pollId) external view returns (uint, uint) {
        require(polls[_pollId].id != 0, "Poll does not exist");
        return (polls[_pollId].yesCount, polls[_pollId].noCount);
    }

    function getBadge(address _user) public view returns (string memory) {
        uint score = opinionScores[_user];
        if (score >= goldThreshold) {
            return "Gold";
        } else if (score >= silverThreshold) {
            return "Silver";
        } else if (score >= bronzeThreshold) {
            return "Bronze";
        } else {
            return "Newbie";
        }
    }



    function createTopic(string memory _category, string memory _title) public {
        topics[topicCounter] = Topic(topicCounter, _category, _title, new string[](0));
        categories[_category].push(topicCounter);
        topicCounter++;
        emit NewTopic(topicCounter - 1, _category, _title);
    }

    function createPoll(string memory _category, string memory _question) public {
        polls[pollCounter] = Poll(pollCounter, _category, _question,  0, 0);
        pollCounter++;
        emit NewPoll(pollCounter - 1, _category, _question);
    }


    function getTopics() external view returns (Topic[] memory) {
        Topic[] memory result = new Topic[](topicCounter);
        for (uint i = 0; i < topicCounter; i++) {
            result[i] = topics[i];
        }
        return result;
    }

    function getPolls() external view returns (Poll[] memory) {
        Poll[] memory result = new Poll[](pollCounter);
        for (uint i = 0; i < pollCounter; i++) {
            result[i] = polls[i];
        }
        return result;
    }
    function getComments(uint _topicId) external view returns (string[] memory) {
        return topics[_topicId].comments;
    }


}