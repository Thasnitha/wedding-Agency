import { TextField } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <div style={{marginTop:'100px',}} className='d-flex justify-content-evenly ' >
        <div className='d-flex flex-column'>
        <h1 style={{color:'black',fontSize:'60px',color:'#3a7d61'}}> <span>ABOUT </span><br /><span>AGENCY</span></h1> 

        </div>
        <div className='d-flex flex-column'> 
          <p style={{color:'black'}}>We are a full service wedding agency that will organize your <br />
          dream wedding.We dont just throw a celebration ,we help to tell <br />
          a story.Your love and life story.We will help you to make this day <br />
          perfect and remember it for a lifetime.We will write your <br />
          personal wedding story !.We dont just throw a celebration ,we <br />
          hep to tell a story .Your love and life story.We will help you to <br />
          make this day perfect and remember it for a lifetime.</p>

          <h1 style={{color:'#3a7d61',fontSize:'80px',fontFamily:''}}> <span>80+</span></h1>
          <p style={{color:'black'}}>projects</p>

        </div>
      </div>
      <div style={{marginLeft:'200px'}} className='grid'>
        <div id='grid1'>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/736x/57/d8/a6/57d8a6a724adea2346b6d563a0490d20.jpg" alt="" />
        </div>
        <div id='grid2'>
        <img style={{height:'400px',marginTop:'40px',width:'250px'}} src="https://fetch.getnarrativeapp.com/static/905e3978-9904-44b8-a7c3-bcc0bb016515/Stacy%20+%20Sean%20Tranquility%20Farm%20Wedding-110.jpg?w=1000" alt="" />


        </div>
        <div id='grid3'>
        <img style={{height:'400px',width:'250px'}} src="https://i0.wp.com/glamourandgraceblog.com/wp-content/uploads/2022/10/english-garden-bridal-style-Anastasiya-Photography-004.jpg?w=1100" alt="" />

        </div>

      </div>
      <div >
      <h1 style={{color:'#3a7d61',fontSize:'80px',marginTop:'-200px',marginLeft:'250px'}}> <span>50+</span></h1>
      <p style={{color:'black',marginTop:'-10px',marginLeft:'280px'}}>reviews</p>
      </div>
      <div className='reserve'style={{marginLeft:'400px',marginTop:'100px'}}>
        <h2 style={{color:'#3a7d61'}}> <span>RESERVE A CONSULTATION </span></h2>
        <form className='form' action="">
          
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />

          <button style={{padding:'10px 20px',border:'none',borderRadius:'5px',background:'#3a7d61',color:'white',fontSize:'1rem',cursor:'ponter',}} type='submit'>Send</button>
        </form>

      </div>
    </div>
  )
}

export default About