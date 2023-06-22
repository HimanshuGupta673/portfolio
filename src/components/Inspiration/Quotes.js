import React from 'react'
import Carousel from 'react-multi-carousel';
import { Box,styled,Typography } from '@mui/material';


const QuoteText =  styled(Typography)(({theme})=>({
    padding:'4px 6px',
    fontSize:'15px',
    borderLeft:'4px solid #F75D59',
    [theme.breakpoints.down('sm')]:{
        fontSize:'11px'
    }
}))
    
const QuoteBox = styled(Box)(({theme})=>({
    width:'50%',
    marginTop:'40px',
    [theme.breakpoints.down('sm')]:{
        width:'90%',
        margin:'40px auto'
    }
}))

function Quotes() {
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
  return (
    <QuoteBox>
      <Carousel
      swipeable={false}
      responsive={responsive}
      draggable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={false}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <Box>
        <QuoteText>“Our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy, or unfulfilled. Such moments push us to step out of our ruts and start searching for different ways or true answers.” — M. Scott Peck</QuoteText>
      </Box>
      
      <Box>
        <QuoteText>"The only thing that stands between us and our dream is the will to try and the belief that it is actually possible." - Joel Brown</QuoteText>
      </Box>

      <Box>
        <QuoteText>"Success is not the key to happiness. Happiness is the key to success. If we love what we are doing, we will be successful." - Albert Schweitzer</QuoteText>
      </Box>
    </Carousel>
    </QuoteBox>
  )
}

export default Quotes
