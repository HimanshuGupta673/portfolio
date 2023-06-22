import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import me from '../images/himanshu2.jpg'
import ImageAnimate from './ImageAnimate';

const StyledBox = styled(Box)(({theme})=>({
  margin: '20px 240px',
  [theme.breakpoints.down('md')]:{
    margin:'20px 2px'
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    margin: '20px 110px',
  },
}))
const Aboutme = styled(Box)({
  fontSize:'60px'

});
const StyledImage = styled('img')(({ theme }) => ({
    width: 'auto',
    height: 420,
    objectFit: 'cover',
    '&:hover': {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      },
      [theme.breakpoints.between('sm', 'lg')]: {
        height:290
      },
      [theme.breakpoints.down('sm')]: {
        height:320
      },
      
  }));
const StyledFlex = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-around',
    [theme.breakpoints.down('sm')]:{
     display:'block',
     justifyContent:'center'
    }
}))
const RightBox = styled(Box)(({theme})=>({
  width:'50%',
  [theme.breakpoints.down('md')]:{
    width:'90%',
    margin:'0px auto',
    marginTop:'15px'
  }
}))
const RightBox1 = styled(Box)({
    '&:hover': {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      },
})
const Description = styled(Typography)({
    color:'#808080',
    padding:'0px auto',
    textAlign:'justify'
    
})
const ImageBox = styled(Box)(({ theme }) => ({
  
  [theme.breakpoints.down('sm')]: {
    margin: '0px 20px',
  },
  
  [theme.breakpoints.between('sm', 'md')]: {
    margin: '0px 10%',
  },
}));
const StyledAnimate = styled(Box)(({theme})=>({
  marginTop:'110px',
  marginBottom:'30px',
  marginLeft:'180px',
  [theme.breakpoints.down('md')]:{
    margin:'40px 110px'
  },
  [theme.breakpoints.down('sm')]:{
    margin:'40px 110px'
  }
}))


function AboutMe() {
  return (

    <StyledBox id='about'>
      <Aboutme >About Me</Aboutme>
      <StyledFlex marginTop="40px" >
        <ImageBox>
            <Box><StyledImage src={me} alt="Himanshu" /></Box>
        </ImageBox>
        <RightBox>
            <RightBox1>
                <Box fontSize="24px" color="#808080" fontWeight="200" >How would I descrive myself ?</Box>
                <Description marginTop="20px" >Currently I am a Sophomore at National Institute of Technology, Kurukshetra pursueing B.tech in Electrical Engineering.</Description>
                <br />
                <Description> “I am passionate about my work, And this passion serves as a constant source of motivation for me because I truly enjoy what I do.Throughout my college journey, I have embraced opportunities to push myself beyond my limits and acquire new skills that enhance my performance.Apart from my passion for technology,I find great joy in connecting with people and exploring new places ”</Description>
            </RightBox1>  
            <StyledAnimate className='styledAnimate'>
              <ImageAnimate/>
            </StyledAnimate>  
        </RightBox>
      </StyledFlex>
    </StyledBox>
  );
}

export default AboutMe;
