import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';

function Projects() {
  const [chartData] = useState({
    series: [{
      name: 'Servings',
      data: [5, 8, 8, 5, 5, 10, 8, 1, 4],
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      
      plotOptions: {
        bar: {
          columnWidth: '80%',
          distributed: true,
          states: {
            hover: {
              filter: {
                type: 'darken',
                value: 0.8, // Adjust the darken value for desired transparency
              },
              brightness: 0, // Adjust the brightness value for desired transparency
              borderColor: '#FFFFFF', // Set border color to white
            }
          },
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#FFFFFF'], // Set data label color to white
        }
      },
      xaxis: {
        labels: {
          rotate: -45,
          style: {
            colors: ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3'] // Set X-axis label color to white
          }
        },
        categories: ['MERN', 'React js', 'Express Js', 'Javascript', 'MongoDB', 'HTML5', 'CSS', 'Tailwind', 'Mui'],
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#D3D3D3'] // Set Y-axis label color to white
          }
        }
      },
      colors: ['#8B8989', '#ADACAC', '#79858C', '#CDC9C9', '#606C73', '#E4E3E3', '#606C73', '#79858C', '#B0A6A4'],
      grid: {
        showLines: false
      }
    }
  });

  return (
    <div className='chart'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
}

export default Projects;
