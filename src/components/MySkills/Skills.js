import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { Box, styled } from '@mui/material';
const ColorBox = ({ color, label }) => (
  <span style={{ display: 'flex', alignItems: 'center', margin: '5px 6px' }}>
    <div style={{ width: '37px', height: '10px', backgroundColor: color, marginRight: '5px' ,border:'2px solid white'}}></div>
    <span style={{fontSize:'13px',color:'#D3D3D3'}}>{label}</span>
  </span>
);

const Pie = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '50%',
  paddingLeft:'70px',
  [theme.breakpoints.down('sm')]:{
    paddingLeft:'0px'
  }
}))
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'center'
}))


function Skills() {
  const series = [9, 8, 9 ,5, 9, 8, 8, 9, 7, 9, 6, 4, 8];
  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#8B8989','#ADACAC','#79858C','#606C73','#E4E3E3','#606C73','#B0A6A4','#F4F1F1','#8B7D7B','#AEA4A2','#D0CBCA','#CDC5BF','#041218'], // Modify the colors here
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    labels: ['React js', 'Node js', 'MongoDB', 'MySql', 'HTML5', 'CSS', 'TailwindCSS', 'Mui', 'Javascript', 'Java', 'Python', 'C++', 'Adobe Photoshop'], // Customize the legend labels here

    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%' // Adjust the size here (percentage value)
        }
      }
    }
  };

  const list = () =>{
    return options.labels.map((label, index) => (
      <ColorBox key={index} color={options.colors[index]} label={label} />
    ));

  }
  return ( 
    <Box>
      <Container>
          {list()}
      </Container>
      <Pie className='pie'>
        <ReactApexChart options={options} series={series} type="donut" />
      </Pie>
    </Box>
  )
}

export default Skills
