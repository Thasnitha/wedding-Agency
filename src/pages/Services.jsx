import React from 'react'
import { TextField } from '@mui/material'


const Services = () => {
  return (
    <div>
      <div>
      <h1 style={{marginLeft:'500px',color:'#3a7d61',marginBottom:'60px',marginTop:'100px',fontSize:'50px'}}>SERVICES</h1>

      </div>
      <div style={{marginLeft:'100px'}} className='grid1'>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://samanthajayphotoblog.com/wp-content/uploads/2022/07/samantha-jay-photography-summer-glen-foerd-philadelphia-wedding_0088-1.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Wedding Coordination</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://img.freepik.com/premium-photo/caucasian-happy-romantic-young-couple-celebrating-their-marriage_661495-29200.jpg?size=626&ext=jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Wedding Ceremony</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/564x/dc/be/4d/dcbe4dcfd9c5792a29a55b0c974905f4.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Decor for Celebration</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/236x/18/7d/0e/187d0e5a51cc452d2f323b3a413d112c.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Choice the style of <br />the wedding</p>
        </div>
      </div>
      <div style={{marginLeft:'100px'}} className='grid2'>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://cdn.shopify.com/s/files/1/0115/1578/9369/files/what-should-man-of-honor-wear_480x480.jpg?v=1726344079" alt="" />
          <p style={{marginLeft:'30px',color:'black'}}>Wedding Planning</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/736x/91/72/27/917227e5edf62819f4628aa80e099534.jpg" alt="" />
          <p style={{marginLeft:'30px',color:'black'}}>Wedding budgeting</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://www.maxeenkimphotography.com/wp-content/uploads/2021/03/english-garden-wedding-emily-james-0.jpg" alt="" />
          <p style={{marginLeft:'30px',color:'black'}}>Venue Selection</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://cdn.l-media.net/media/50/8722/229957-8722-l-56483QE2yqeS.jpg" alt="" />
          <p style={{marginLeft:'30px',color:'black'}}>Organization of<br /> photo and video</p>
        </div>
      </div>
      <div className='reserve'style={{marginLeft:'400px',marginTop:'100px'}}>
        <h2 style={{color:'#3a7d61'}}>RESERVE A CONSULTATION</h2>
        <form className='form' action="">
          
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />

          <button style={{padding:'10px 20px',border:'none',borderRadius:'5px',background:'#3a7d61',color:'white',fontSize:'1rem',cursor:'ponter',}} type='submit'>Send</button>
        </form>

      </div>
    </div>
  )
}

export default Services