import React, { useState, useEffect } from 'react';import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import Celebration from '../components/Celebration';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const GalleryHeader = styled.div`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const GalleryItem = styled(motion.div)`
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxContent = styled(motion.div)`
  position: relative;
  width: 80%;
  height: 80%;
  max-width: 1000px;
`;

const LightboxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const LightboxNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &.prev {
    left: -80px;
  }
  
  &.next {
    right: -80px;
  }
`;

const LightboxCaption = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.2rem;
`;

const GalleryCategories = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.light};
  }
`;

const Gallery = ({ location, celebrationMessage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [showCelebration, setShowCelebration] = useState(false);
  
  useEffect(() => {
    // Show celebration only when the component mounts
    setShowCelebration(true);
    
    // Clean up function
    return () => {
      setShowCelebration(false);
    };
  }, []);
  
  const galleryImages = [
    {
      id: 1,
      src: "/images/couple-1.jpeg",
      caption: "One of our best selfies — a moment frozen in time, full of love and pure happiness.",
      category: "us"
    },
    {
      id: 2,
      src: "/images/diane-1.jpeg",
      caption: "A queen in purple, glowing with elegance and grace. (Your beautiful smile that stole my heart)",
      category: "diane"
    },
    {
      id: 3,
      src: "/images/couple-2.jpeg",
      caption: "Casual, radiant, and completely mine — your smile is all I see. (That day at the stadium)",
    //   caption: "Together in every crowd — your smile is all I see. (That day at the stadium)",
      category: "us"
    },
    {
      id: 4,
      src: "/images/diane-2.jpeg",
      caption: "Simple beauty that lights up even the plainest background.",
      category: "diane"
    },
    {
      id: 5,
      src: "/images/couple-3.jpeg",
      caption: "Because one photo could never capture how perfect we are together.",
      category: "us"
    },
    {
      id: 6,
      src: "/images/diane-3.jpeg",
      caption: "Simple beauty that lights up even the plainest background.",
      category: "diane"
    },
    {
      id: 7,
      src: "/images/couple-4.jpeg",
      caption: "Your embrace is my favorite place to be.",
      category: "us"
    },
    {
      id: 8,
      src: "/images/diane-4.jpeg",
      caption: "A pose so sweet, with a heart full of love.",
      category: "diane"
    },
    {
      id: 9,
      src: "/images/couple-5.jpeg",
      caption: "Wrapped in your arms, the world feels just right.",
      category: "us"
    },
    {
      id: 10,
      src: "/images/diane-5.jpeg",
      caption: "Your smile lights up every corner of my heart.",
      category: "diane"
    },
    {
      id: 11,
      src: "/images/couple-6.jpeg",
      caption: "Different day, same love — strong, true, and growing.",
      category: "us"
    },
    {
      id: 12,
      src: "/images/diane-6.jpeg",
      caption: "(Different day, same love — strong, true, and growing.)Your eyes tell stories",
      category: "diane"
    }
  ];
  
  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };
  
  return (
    <>
      {showCelebration && <Celebration message={celebrationMessage} />}
      <GalleryContainer>
        <GalleryHeader>
          <Title
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Moments Together
          </Title>
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A collection of our favorite memories captured in photographs
          </Subtitle>
        </GalleryHeader>
        
        <GalleryCategories>
          <CategoryButton 
            active={currentCategory === 'all'} 
            onClick={() => setCurrentCategory('all')}
          >
            All Photos
          </CategoryButton>
          <CategoryButton 
            active={currentCategory === 'us'} 
            onClick={() => setCurrentCategory('us')}
          >
            Us Together
          </CategoryButton>
          <CategoryButton 
            active={currentCategory === 'diane'} 
            onClick={() => setCurrentCategory('diane')}
          >
            My Beautiful Diane
          </CategoryButton>
        </GalleryCategories>
        
        <GalleryGrid>
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              onClick={() => openLightbox(image)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GalleryImage src={image.src} alt={image.caption} />
              <ImageOverlay className="overlay">
                <FaHeart size={30} />
              </ImageOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
        
        <AnimatePresence>
          {selectedImage && (
            <LightboxOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <LightboxContent
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <LightboxClose onClick={closeLightbox}>
                  <FaTimes />
                </LightboxClose>
                <LightboxImage src={selectedImage.src} alt={selectedImage.caption} />
                <LightboxNav className="prev" onClick={() => navigateImage('prev')}>
                  <FaChevronLeft />
                </LightboxNav>
                <LightboxNav className="next" onClick={() => navigateImage('next')}>
                  <FaChevronRight />
                </LightboxNav>
                <LightboxCaption>{selectedImage.caption}</LightboxCaption>
              </LightboxContent>
            </LightboxOverlay>
          )}
        </AnimatePresence>
      </GalleryContainer>
    </>
  );
};

export default Gallery;