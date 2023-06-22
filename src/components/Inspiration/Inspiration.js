import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import Quotes from './Quotes'
const AspireBox = styled(Box)(({theme})=>({
    margin:'20px 240px 30px 240px',
    padding:'30px 0px',
    [theme.breakpoints.down('md')]:{
        margin:'10px 0px',
        fontSize:'45px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      margin:'20px 0px 30px 0px'
  },
}))
const QuoteBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
        display:'block',
    }
}))
const Inspire = styled(Box)(({theme})=>({
    fontSize:'60px',
    paddingBottom:'15px'
}))
const Family = styled(Box)(({theme})=>({
    fontSize:'35px',
    display:'flex',
    justifyContent:'center',
    fontStyle:'italic',
    marginTop:'10px',
    paddingTop:'20px',
    paddingLeft:'10px',
    textAlign:'center',
    [theme.breakpoints.down('sm')]:{
        fontSize:'32px',
        textAlign:'center',
    }
}))

function Inspiration() {
  return (
    <AspireBox id='inspiration'>
      <Inspire className='inspire'>Inspiration</Inspire>
      <QuoteBox>
        <Quotes/>
      </QuoteBox>
      <Family>My family will always be my inspiration.</Family>
    </AspireBox>
  )
}

export default Inspiration
