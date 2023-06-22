import React from 'react'
import { Box,styled } from '@mui/material'
import insta from '../images/instalogo.png'
import linkin from '../images/linked-black.png'
import git from '../images/gitlogo.png'

const Socials = styled(Box)`
padding-top:20px;
display:flex;
justify-content:center;
`
const Developer = styled(Box)(({theme})=>({
paddingTop:'15px',
paddingBottom:'25px',
display:'flex',
justifyContent:'center',
fontSize:'25px',
color:'#FFFFFF',
[theme.breakpoints.down('sm')]:{
    fontSize:'18px'
}
}))
function Footer() {
  return (
    <div style={{background:"black"}} id='contact'>
      <Socials>
       <a target='_blank' href="https://www.instagram.com/himanshugupta.673/"><img style={{width:'30px',background:'white',margin:'0px 10px',cursor:'pointer',borderRadius:'2px'}} src={insta} alt="instagram" /></a>
       <a target='_blank' href="https://www.linkedin.com/in/himanshu-gupta-85858014b"><img style={{width:'30px',background:'white',margin:'0px 10px',cursor:'pointer',borderRadius:'2px'}} src={linkin} alt="linkedIn" /></a>
       <a target='_blank' href="https://github.com/HimanshuGupta673"><img style={{width:'31px',objectFit:'cover',height:'31px',background:'white',margin:'0px 10px',cursor:'pointer',borderRadius:'2px'}} src={git} alt="github" /></a>
      </Socials>
      <Developer>Developd By Himanshu Gupta</Developer>
    </div>
  )
}

export default Footer
