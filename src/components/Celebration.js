import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const CelebrationMessage = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  width: 400px;
`;

const MessageTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const MessageText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const HeartIcon = styled(FaHeart)`
  margin: 0 0.5rem;
`;

const Celebration = ({ message = "To the love of my life, Diane, I wish you a weekend as beautiful as you are." }) => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 15000);

    const messageTimer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#ff6b6b', '#f06595', '#cc5de8', '#5c7cfa', '#4dabf7']}
        />
      )}
      
      <AnimatePresence>
        {showMessage && (
          <CelebrationMessage
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageTitle>
              <HeartIcon /> Surprise Love! <HeartIcon />
            </MessageTitle>
            <MessageText>{message}</MessageText>
          </CelebrationMessage>
        )}
      </AnimatePresence>
    </>
  );
};

export default Celebration;