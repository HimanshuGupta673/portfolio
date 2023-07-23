import { Box,styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import campusmart from '../images/campus.png'
import flipkart from '../images/connectify.png'
import connectify from '../images/connectify2.png'
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
  const ProjectDimension = styled(Box)(({theme})=>({
    width:'80%',
  }))
function Projects() {
  return (
    <ProjectDimension >
      <Carousel
      swipeable={false}
      draggable={true}
      responsive={responsive}
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
       <a href="https://www.youtube.com/watch?v=BlNKp7itA_o" target='_blank'> <img width="100%" src={campusmart} alt="" /></a>
      </Box>
      <Box>
       <a href="https://www.youtube.com/watch?v=02yp3nTYP7g" target='_blank'> <img width="100%" src={flipkart} alt="" /></a>
      </Box>
      <Box>
       <a href="https://www.youtube.com/watch?v=02yp3nTYP7g" target='_blank'> <img width="100%" src={connectify} alt="" /></a>
      </Box>
    </Carousel>
    </ProjectDimension>
  )
}

export default Projects
