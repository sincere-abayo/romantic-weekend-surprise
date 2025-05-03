import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const StoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const StoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${props => props.theme.colors.secondary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 10px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    &::after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TimelineDate = styled.div`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TimelineText = styled.p`
  line-height: 1.6;
`;

const TimelineImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12.5px;
  background-color: white;
  border: 4px solid ${props => props.theme.colors.primary};
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  
  ${TimelineItem}:nth-child(even) & {
    left: -12.5px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: 18px;
    
    ${TimelineItem}:nth-child(even) & {
      left: 18px;
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  color: ${props => props.theme.colors.primary};
  margin: 0 0.5rem;
`;

const LoveNote = styled(motion.div)`
  background-color: ${props => props.theme.colors.light};
  padding: 2rem;
  border-radius: 15px;
  max-width: 800px;
  margin: 4rem auto;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 2px dashed ${props => props.theme.colors.secondary};
`;

const LoveNoteText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
`;

const OurStory = () => {
  const timelineItems = [
    {
      date: "2 Years Ago",
      title: "When We First Met",
      text: "I still remember the first time I saw you. There was something special about you that caught my attention immediately. Your smile, your eyes, the way you carried yourself - everything about you was captivating.",
      image: "/images/first-meeting.jpg"
    },
    {
      date: "Our First Date",
      title: "Beginning of Something Beautiful",
      text: "Our first date was magical. We talked for hours, laughed together, and I knew then that I wanted to spend more time with you. The connection we felt was undeniable.",
      image: "/images/first-date.jpg"
    },
    {
      date: "6 Months Together",
      title: "Growing Closer",
      text: "As we spent more time together, my feelings for you grew stronger. Every moment with you was precious, and I found myself falling deeper in love with you each day.",
      image: "/images/six-months.jpg"
    },
    {
      date: "Our First Trip",
      title: "Creating Memories",
      text: "Our first trip together was an adventure I'll never forget. Exploring new places with you, sharing new experiences - it brought us even closer together.",
      image: "/images/first-trip.jpg"
    },
    {
      date: "1 Year Anniversary",
      title: "Celebrating Our Love",
      text: "Our first year together was filled with beautiful moments, growth, and deepening love. Celebrating this milestone reminded me how lucky I am to have you in my life.",
      image: "/images/one-year.jpg"
    },
    {
      date: "Today",
      title: "Still Falling in Love",
      text: "After more than two years together, I find myself still falling in love with you every day. Your kindness, your strength, your beautiful spirit - everything about you continues to amaze me.",
      image: "/images/today.jpg"
    }
  ];

  return (
    <StoryContainer>
      <StoryHeader>
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Love Story
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The beautiful journey of us, from the first hello to forever
        </Subtitle>
      </StoryHeader>
      
      <Timeline>
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <TimelineDot />
            <TimelineContent>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineText>{item.text}</TimelineText>
              <TimelineImage>
                <img src={item.image} alt={item.title} />
              </TimelineImage>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      
      <LoveNote
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <HeartIcon size={30} />
        <LoveNoteText>
          Diane, these past two years with you have been the most beautiful chapter of my life. 
          Your love has transformed me, inspired me, and brought me immeasurable joy. 
          I cherish every moment we've shared, every laugh, every tear, every adventure. 
          You are my best friend, my confidant, my love. I can't wait to create more memories with you, 
          to grow with you, to dream with you. Thank you for being you, and for loving me.
        </LoveNoteText>
        <HeartIcon size={30} />
      </LoveNote>
    </StoryContainer>
  );
};

export default OurStory;