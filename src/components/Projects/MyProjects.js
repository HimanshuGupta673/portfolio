import React from 'react'
import { Box,styled } from '@mui/material'
import Projects from './Projects'

const  Proj = styled(Box)(({theme})=>({
    fontSize:'55px',
    marginBottom:'40px'
}))
const  ProjectBox = styled(Box)(({theme})=>({
    margin:'0px 220px',
    padding:'40px 5px',
    [theme.breakpoints.down('sm')]:{
      margin:'0px 10px'
    }
}))
function MyProjects() {
  return (
    <div id='projects'>
      <ProjectBox>
        <Proj>Projects</Proj>
        <Box fontSize="37px" marginBottom="20px">Web Development</Box>
        <Box display="flex" justifyContent="center">
            <Projects/>
        </Box>
      </ProjectBox>
    </div>
  )
}

export default MyProjects
