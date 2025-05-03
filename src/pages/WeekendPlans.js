import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaUtensils, FaHotel, FaWineGlassAlt, FaMapMarkedAlt, FaSpa, FaStar } from 'react-icons/fa';

const PlansContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PlansHeader = styled.div`
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

const IntroMessage = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const ItineraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DayCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const DayHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

const DayTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const DayDate = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const DayContent = styled.div`
  padding: 2rem;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Activity = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const ActivityIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ActivityDetails = styled.div`
  flex-grow: 1;
`;

const ActivityTime = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ActivityTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ActivityDescription = styled.p`
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`;
const SurpriseNote = styled(motion.div)`
  background-color: ${props => props.theme.colors.light};
  padding: 2rem;
  border-radius: 15px;
  max-width: 800px;
  margin: 3rem auto;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 2px dashed ${props => props.theme.colors.secondary};
`;

const SurpriseText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1rem;
`;

const SurpriseTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const HeartIcon = styled(FaHeart)`
  color: ${props => props.theme.colors.primary};
  margin: 0 0.5rem;
`;

const WeekendPlans = () => {
  return (
    <PlansContainer>
      <PlansHeader>
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Romantic Weekend
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A special getaway I've planned just for us
        </Subtitle>
      </PlansHeader>
      
      <IntroMessage
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <IntroText>
          Diane, I've planned a special weekend for us to celebrate our love and create new memories together. 
          Every detail has been arranged with you in mind, and I can't wait to see your smile as we enjoy these moments together.
          Here's what I have planned for our romantic getaway...
        </IntroText>
      </IntroMessage>
      
      <ItineraryContainer>
        <DayCard
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <DayHeader>
            <DayTitle>Day 1: Friday</DayTitle>
            <DayDate>Our Adventure Begins</DayDate>
          </DayHeader>
          <DayContent>
            <ActivityList>
              <Activity>
                <ActivityIcon>
                  <FaHotel />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>3:00 PM</ActivityTime>
                  <ActivityTitle>Check-in at Luxury Hotel</ActivityTitle>
                  <ActivityDescription>
                    We'll arrive at a beautiful boutique hotel I've booked for us. The room has a stunning view and special welcome amenities waiting for us.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaSpa />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>4:30 PM</ActivityTime>
                  <ActivityTitle>Couples Spa Treatment</ActivityTitle>
                  <ActivityDescription>
                    I've arranged for us to have a relaxing couples massage to help us unwind and start our weekend in the most peaceful way.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaUtensils />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>7:00 PM</ActivityTime>
                  <ActivityTitle>Dinner at Sunset Restaurant</ActivityTitle>
                  <ActivityDescription>
                    We'll enjoy a romantic dinner at a restaurant with panoramic views of the sunset. I've requested your favorite dishes and a special dessert.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaWineGlassAlt />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>9:30 PM</ActivityTime>
                  <ActivityTitle>Rooftop Cocktails</ActivityTitle>
                  <ActivityDescription>
                    We'll end our first night with drinks under the stars at the hotel's rooftop bar, where we can talk, laugh, and enjoy the night view.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
            </ActivityList>
          </DayContent>
        </DayCard>
        
        <DayCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <DayHeader>
            <DayTitle>Day 2: Saturday</DayTitle>
            <DayDate>A Day of Adventures</DayDate>
          </DayHeader>
          <DayContent>
            <ActivityList>
              <Activity>
                <ActivityIcon>
                  <FaUtensils />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>9:00 AM</ActivityTime>
                  <ActivityTitle>Breakfast in Bed</ActivityTitle>
                  <ActivityDescription>
                    We'll start our day with a delicious breakfast delivered to our room, so we can enjoy a lazy morning together.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaMapMarkedAlt />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>11:00 AM</ActivityTime>
                  <ActivityTitle>Scenic Hike & Picnic</ActivityTitle>
                  <ActivityDescription>
                    We'll take a gentle hike to a beautiful spot where I've arranged for a picnic lunch with all your favorites. The views will be breathtaking.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaStar />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>3:00 PM</ActivityTime>
                  <ActivityTitle>Surprise Activity</ActivityTitle>
                  <ActivityDescription>
                    This part is a surprise! All I can say is that it's something you've mentioned wanting to try, and I think you'll love it.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaUtensils />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>7:30 PM</ActivityTime>
                  <ActivityTitle>Fine Dining Experience</ActivityTitle>
                  <ActivityDescription>
                    I've made reservations at an exclusive restaurant known for its romantic atmosphere and exquisite cuisine. We'll have a private table for an unforgettable dining experience.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
            </ActivityList>
          </DayContent>
        </DayCard>
        
        <DayCard
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <DayHeader>
            <DayTitle>Day 3: Sunday</DayTitle>
            <DayDate>Sweet Memories</DayDate>
          </DayHeader>
          <DayContent>
            <ActivityList>
              <Activity>
                <ActivityIcon>
                  <FaUtensils />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>10:00 AM</ActivityTime>
                  <ActivityTitle>Brunch with a View</ActivityTitle>
                  <ActivityDescription>
                    We'll enjoy a leisurely brunch at a charming café with beautiful surroundings, savoring delicious food and each other's company.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaMapMarkedAlt />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>12:30 PM</ActivityTime>
                  <ActivityTitle>Stroll Through Gardens</ActivityTitle>
                  <ActivityDescription>
                    We'll take a romantic walk through botanical gardens, where we can admire the beauty of nature and take some lovely photos together.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
              
              <Activity>
                <ActivityIcon>
                  <FaHeart />
                </ActivityIcon>
                <ActivityDetails>
                  <ActivityTime>3:00 PM</ActivityTime>
                  <ActivityTitle>Special Moment</ActivityTitle>
                  <ActivityDescription>
                    I have a special gift for you and words I want to share. This will be a moment to reflect on our journey together and look forward to our future.
                  </ActivityDescription>
                </ActivityDetails>
              </Activity>
            </ActivityList>
          </DayContent>
        </DayCard>
      </ItineraryContainer>
      
      <SurpriseNote
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <SurpriseTitle>One More Surprise...</SurpriseTitle>
        <SurpriseText>
          Diane, there's one more special surprise waiting for you during our weekend together. 
          It's something I've been planning for a while, and I can't wait to see your reaction. 
          All I'll say is that it comes from the heart and is a token of my love and commitment to you.
        </SurpriseText>
        <HeartIcon size={30} />
      </SurpriseNote>
    </PlansContainer>
  );
};

export default WeekendPlans;