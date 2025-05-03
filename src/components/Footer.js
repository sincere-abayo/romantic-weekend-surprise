import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.light};
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterContact = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterCopyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
`;

const LoveMessage = styled.p`
  margin: 1rem 0;
  font-style: italic;
  max-width: 600px;
  line-height: 1.6;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo to="/">
          <FaHeart /> Diane & Sincere
        </FooterLogo>
        
        <LoveMessage>
          "Every moment with you is a blessing. I cherish our love story and look forward to creating more beautiful memories together."
        </LoveMessage>
        
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          {/* <FooterLink to="/our-story">Our Story</FooterLink> */}
          <FooterLink to="/gallery">Gallery</FooterLink>
          {/* <FooterLink to="/weekend-plans">Weekend Plans</FooterLink> */}
        </FooterLinks>
        
        <FooterContact>
          <ContactItem>
            <FaPhone /> 07867292
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> abayosincere11@gmail.com
          </ContactItem>
        </FooterContact>
        
        <FooterCopyright>
          © {currentYear} Made with <FaHeart style={{ color: '#ff6b6b' }} /> for ISHIMWE DIANE
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;