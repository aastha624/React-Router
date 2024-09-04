import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
     <div> About Page</div>
      <button onClick={() => {
        navigate("/support")
      }}>Go to Support</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default About
