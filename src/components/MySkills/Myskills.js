import React from 'react'
import { Box,styled,Typography } from '@mui/material'
import Skills from './Skills'
import Projects from './Projects'
const MySkills = styled(Box)(({theme})=>({
  fontSize:'56px',
  display:'flex',
  justifyContent:'end',
  paddingTop:'40px',
  [theme.breakpoints.down('sm')]:{
    justifyContent:'start'
  }
}))

const SkillBox = styled(Box)(({theme})=>({
  margin:'40px 200px 0px 200px',
  [theme.breakpoints.down('md')]:{
    margin:'40px 0px 0px 0px',
    padding:'0px 10px'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    margin: '40px 100px 0px 100px',
  },
  
}))
const Container = styled(Box)(({theme})=>({
  display:'flex',
  margin:'40px 0px 3px 0px',
  [theme.breakpoints.down('sm')]:{
    display:'block',
  }
}))
const SkillChart = styled(Box)(({theme})=>({
  maxWidth:'50%',
  [theme.breakpoints.down('sm')]:{
    maxWidth:'100%',
  }
}))
const Distribution = styled(Box)(({theme})=>({
  fontSize:'47px',
  marginBottom:'30px',
  // display:'flex',
  [theme.breakpoints.down('sm')]:{
    fontSize:'44px'
  }
}))
const RightContainer = styled(Box)(({theme})=>({
  fontSize:'47px',
  width:'100%',
  marginLeft:'10%',
  [theme.breakpoints.down('sm')]:{
    fontSize:'44px',
    marginLeft:'0px'
  }
}))
const StyledProject = styled(Box)(({theme})=>({
  [theme.breakpoints.down('sm')]:{
    fontSize:'44px',
    paddingLeft:'20px'
  }
}))
function Myskills() {
  return (
    <div id='banner' style={{marginTop:'80px'}}>
      <SkillBox id='skills'>
        <MySkills>My Skills</MySkills>
        <Container>
          <SkillChart>
            <Distribution>Skill Distribution</Distribution>
            <Typography display="flex" justifyContent="center" fontSize="10px">(Touch each portion for information)</Typography>
            <Skills/>
          </SkillChart>
          <RightContainer>
            <StyledProject>Projects in each field</StyledProject>
            <Box>
               <Projects/>
            </Box>
          </RightContainer>
        </Container>
      </SkillBox>
    </div>
  )
}

export default Myskills
