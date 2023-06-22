import React from 'react'
import image from '../images/himanshu2.jpg'
import image2 from '../images/gp3 (1).jpeg'
import image3 from '../images/gp3 (4).jpeg'
import image4 from '../images/gp3 (3).jpeg'
import image5 from '../images/gp3 (4).jpeg'
import image6 from '../images/gp3 (5).jpeg'
function ImageAnimate() {
  return (
    <div className='content'>
      <span style={{'--i':1}}><img src={image} alt="" /></span>
      <span style={{'--i':2}}><img src={image2} alt="" /></span>
      <span style={{'--i':3}}><img src={image6} alt="" /></span>
      <span style={{'--i':4}}><img src={image4} alt="../images/WhatsApp Image 2023-06-18 at 9.45.38 PM.jpeg" /></span>
      <span style={{'--i':5}}><img src={image5} alt="../images/IMG20220529125704.jpg" /></span>
      <span style={{'--i':6}}><img src={image6} alt="../images/IMG20230103173216.jpg" /></span>
      <span style={{'--i':7}}><img src={image4} alt="../images/himanshu2.jpg" /></span>
      <span style={{'--i':8}}><img src={image3} alt="../images/himanshu2.jpg" /></span>
    </div>
  )
}

export default ImageAnimate
