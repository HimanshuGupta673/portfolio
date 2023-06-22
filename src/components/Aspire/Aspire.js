import React from 'react'
import { Box,styled,Typography } from '@mui/material'

const AspireBox = styled(Box)(({theme})=>({
    margin:'0px 220px 30px 220px',
    padding:'30px 0px',
    fontSize:'60px',
    [theme.breakpoints.down('md')]:{
        margin:'0px 0px',
        fontSize:'45px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
        margin:'0px 170px 30px 170px'
    },
}))
const Title = styled(Box)`
font-size:30px
`
const Container = styled(Box)(({theme})=>({
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        display:'block'
    }
}))

const InBox = styled(Box)(({theme})=>({
    padding:'0px 60px',
    [theme.breakpoints.down('md')]:{
        padding:'20px 20px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        padding:'20px 20px',
    },
    
}))
const Heading = styled(Box)(({theme})=>({
    paddingBottom:'15px',
    [theme.breakpoints.down('sm')]:{
        padding:'20px 20px 0px 20px',

    }
}))
function Aspire() {
  return (
    <div id='banner' >
      <AspireBox id='aspiration'>
        <Heading marginBottom="25px">What I aspire to be!</Heading>
        <Container>
            <InBox>
                <Title>Front-end Engineer</Title>
                <Typography>Looking for opportunity in improvising front end components in a corporate.</Typography>
            </InBox>
            <InBox>
                <Title>Backend-end Engineer</Title>
                <Typography>Want to simulate backend properties of server and would like to increase its efficiency too</Typography>
            </InBox>
            <InBox>
                <Title>Full-stack Developer</Title>
                <Typography>Ready to group both front-end and back-end under one hood.</Typography>
            </InBox>
        </Container>
      </AspireBox>
    </div>
  )
}

export default Aspire
