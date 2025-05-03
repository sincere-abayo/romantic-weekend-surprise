import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaHeart, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import Celebration from '../components/Celebration';

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 400;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const HeroImage = styled(motion.div)`
  width: 30%; /* Adjusted to fit three images */
  max-width: 500px;
  max-height: 550px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 80%;
    margin-bottom: 2rem;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Message = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 800px;
  text-align: center;
  margin: 0rem 0;
  line-height: 1.8;
`;

// const FeaturesSection = styled.section`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 2rem;
//   width: 100%;
//   max-width: 1200px;
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeatureCard = styled(motion.div)`
//   background-color: white;
//   padding: 2rem;
//   border-radius: 15px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const FeatureIcon = styled.div`
//   font-size: 2.5rem;
//   color: ${props => props.theme.colors.primary};
//   margin-bottom: 1rem;
// `;

// const FeatureTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const FeatureDescription = styled.p`
//   font-size: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const FeatureLink = styled(Link)`
//   display: inline-block;
//   padding: 0.5rem 1.5rem;
//   background-color: ${props => props.theme.colors.primary};
//   color: white;
//   border-radius: 30px;
//   font-weight: 500;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: ${props => props.theme.colors.secondary};
//   }
// `;

const Home = ({ location, celebrationMessage }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  
  useEffect(() => {
    // Show celebration only when the component mounts
    setShowCelebration(true);
    
    // Clean up function
    return () => {
      setShowCelebration(false);
    };
  }, []);

  return (
    <>
      {showCelebration && <Celebration message={celebrationMessage} />}
      <HomeContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Dearest ISHIMWE DIANE
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Three beautiful years and counting...
          </Subtitle>
          
          <ImageGallery>
            <HeroImage
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/main.jpeg" alt="Us together" />
            </HeroImage>
            
            <HeroImage
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/images/couple-2.jpeg" alt="Our special moment" />
            </HeroImage>
            
            <HeroImage
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="/images/couple-3.jpeg" alt="Another beautiful memory" />
            </HeroImage>
          </ImageGallery>
          
          <Message
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Diane, every moment with you has been a blessing. Your smile lights up my world, 
            and your love gives me strength. I've planned a special weekend just for us, 
            to celebrate our journey together and create more beautiful memories.
          </Message>
        </HeroSection>
        
        {/* <FeaturesSection>
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <FeatureIcon>
              <FaHeart />
            </FeatureIcon>
            <FeatureTitle>Our Story</FeatureTitle>
            <FeatureDescription>
              Relive our beautiful journey together, from our first meeting to where we are now.
            </FeatureDescription>
            <FeatureLink to="/our-story">Read Our Story</FeatureLink>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FeatureIcon>
              <FaCamera />
            </FeatureIcon>
            <FeatureTitle>Photo Gallery</FeatureTitle>
            <FeatureDescription>
              Browse through our favorite moments captured in photographs.
            </FeatureDescription>
            <FeatureLink to="/gallery">View Gallery</FeatureLink>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <FeatureIcon>
              <FaCalendarAlt />
            </FeatureIcon>
            <FeatureTitle>Weekend Plans</FeatureTitle>
            <FeatureDescription>
              Discover the special weekend I've planned for us to celebrate our love.
            </FeatureDescription>
            <FeatureLink to="/weekend-plans">See Plans</FeatureLink>
          </FeatureCard>
        </FeaturesSection>
      */}
      </HomeContainer>
    </>
  );
};

export default Home;
