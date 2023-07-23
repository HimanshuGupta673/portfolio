import React from 'react';
import { Typography, Box, styled } from '@mui/material';

const StyledLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '18px 0px'
  },
}));

const MarginLinks = styled(Typography)(({ theme }) => ({
  marginLeft: '18px',
  fontSize: '15px',
  fontWeight: 'normal',
  fontFamily: 'inherit',
  cursor:'pointer',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
    marginLeft: '25px'
  }
}));

function CustomButtons() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const openResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };
  return (
    <StyledLinks>
      <MarginLinks onClick={openResume}>Resume</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('about')}>About me</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('skills')}>My Skills</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('projects')}>Projects</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('aspiration')}>Aspiration</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('inspiration')}>Inspiration</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('contact')}>Contact me</MarginLinks>
    </StyledLinks>
  );
}

export default CustomButtons;
