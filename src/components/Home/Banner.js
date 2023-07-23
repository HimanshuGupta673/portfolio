import React from 'react';
import { Box,Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mern from '../images/mern.png'
import instagram from '../images/instalogo.png'
import linkedIn from '../images/linked-black.png'
import github from '../images/gitlogo.png'
const QuoteContainer = styled('div')(({theme})=>({
  position: 'relative',
  top: '50%',
  left: '22%',
  marginTop:'2.7%',
  height:'500px',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]:{
    paddingLeft:'14px',
    height:'400px',
    top:'60%',
    left:'50%',
    textAlign:'start',
    marginTop:'-20px'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height:'500px',
    top:'60%',
    left:'40%',
    textAlign:'start',
    marginTop:'-20px'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    height:'500px',
    top:'60%',
    left:'53%',
    textAlign:'start',
    marginTop:'-20px'
  },
  
}))
const QuoteContainer1 = styled('div')(({theme})=>({
  position: 'relative',
  top: '50%',
  left: '57%',
  marginTop:'2.7%',
  height:'500px',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  display:'flex',
  [theme.breakpoints.down('sm')]:{
    paddingLeft:'14px',
    height:'400px',
    top:'60%',
    left:'50%',
    textAlign:'start',
    marginTop:'-20px',
    display:'block',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height:'500px',
    top:'60%',
    left:'54%',
    textAlign:'start',
    marginTop:'-20px'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    height:'500px',
    top:'60%',
    left:'53%',
    textAlign:'start',
    marginTop:'-20px'
  },
  
}))


const QuoteText = styled('h3')(({theme})=>({
  fontSize: '64px',
  marginBottom: '10px',
  fontWeight:'400',
[theme.breakpoints.down('md')]:{
  fontSize: '60px',
  fontWeight: '600',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},
[theme.breakpoints.down('sm')]:{
  fontSize: '50px',
}
}))
const Mern = styled(Box)(({theme})=>({
  marginLeft:'30%',
  [theme.breakpoints.down('sm')]:{
    marginLeft:'46%'
  },
[theme.breakpoints.between('sm','md')]:{
  marginLeft:'10%'
}
}))


const QuoteAuthor = styled('p')(({theme})=>({

  position:'relative',
  fontSize: '16px',
  left:'-100px',
  [theme.breakpoints.down('sm')]:{
    left:'6%'
  },
  [theme.breakpoints.between('sm', 'md')]: {
   left:'20%'
  },
  [theme.breakpoints.between('md', 'lg')]: {
   left:'3%'
  },
}))
const MarginQuote = styled(Typography)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    padding:'10px 0px 0px 0px',
    [theme.breakpoints.down('md')]:{
        margin:'0px 30px'
    }
}))
const MernImg = styled('img')(({theme})=>({
  width:"80%",
   height:"60%",
    [theme.breakpoints.down('sm')]:{
      width:"50%",
      height:"40%",
    }
}))

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  
  return (
   <div id='banner'>
     <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={false}
      showDots={true}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <QuoteContainer1>
        <Box>
            <QuoteText className='webD'>Web Developer</QuoteText>
            <QuoteAuthor>Started with amazing path</QuoteAuthor>
        </Box>
        <Mern>
          <MernImg  src={mern} alt="" />
        </Mern>
      </QuoteContainer1>
      
      <QuoteContainer>
        <QuoteText>Java Programmer</QuoteText>
        <QuoteAuthor>Turning ideas into reality</QuoteAuthor>
      </QuoteContainer>

      <QuoteContainer>
        <QuoteText style={{fontSize:"54px"}}>React Native Developer</QuoteText>
        <QuoteAuthor>Building crossplatfom UI</QuoteAuthor>
      </QuoteContainer>
    </Carousel>
    <MarginQuote>
    "The only way to do great work is to love what you do." - Steve Jobs
    </MarginQuote>
    <MarginQuote>
        <a target='_target' href='https://www.instagram.com/himanshugupta.673/'><img style={{width:'30px',background:'white',margin:'0px 3px',cursor:'pointer',borderRadius:'2px'}} src={instagram} alt="error" /></a>
        <a target='_target' href='https://www.linkedin.com/in/himanshu-gupta-85858014b'><img style={{width:'30px',background:'white',margin:'0px 3px',cursor:'pointer',borderRadius:'2px'}} src={linkedIn} alt="error" /></a>
        <a target='_target' href='https://github.com/HimanshuGupta673'><img style={{width:'31px',objectFit:'cover',height:'31px',background:'white',margin:'0px 3px',cursor:'pointer',borderRadius:'2px'}} src={github} alt="error" /></a>
    </MarginQuote>
   </div>
  );
}

export default Banner;
