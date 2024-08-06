import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1.9rem;
  justify-content: center;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcon = styled.a`
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Email = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-size: 1.0rem;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const PhoneNumber = styled.p`
  margin: 0;
  font-size: 1.0rem;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Tharushi Ranasinghe</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certification">Certifications</NavLink>
        </Nav>
        <ContactInfo>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedInIcon />
          </SocialMediaIcon>
          <ContactItem>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <Email href="mailto:tharushinethma2002@gmail.com">tharushinethma2002@gmail.com</Email>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
            <PhoneNumber>(+94) 742737597</PhoneNumber>
          </ContactItem>
        </ContactInfo>
        <Copyright>
          &copy; 2024 Tharushi Ranasinghe. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;