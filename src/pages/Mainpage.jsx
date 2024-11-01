import React from 'react'
import maincouple2 from '../assets/couple1.jpg'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'



const Mainpage = () => {
  return (
    <div>
    <div className='bg'>
      <h1 style={{marginLeft:'500px', paddingTop:'100px',color:'white',fontSize:'30px'}}> <span style={{marginLeft:'100px',fontWeight:'600px'}}>your</span> <br /><span style={{color:'#3a7d61',fontSize:'100px',marginLeft:'-100px',fontWeight:'600px'}}>WEDDING <br /> <span style={{marginLeft:'-50px',fontWeight:'600px'}}>AGENCY</span></span> </h1> 
      
    </div>
    <div style={{marginTop:'100px',}} className='d-flex justify-content-evenly ' >
        <div className='d-flex flex-column'>
        <h1 style={{color:'black',fontSize:'60px',color:'#3a7d61'}}> <span>ABOUT</span> <br /><span>AGENCY</span></h1> 

        </div>
        <div className='d-flex flex-column'> 
          <p style={{color:'black'}}>We are a full service wedding agency that will organize your <br />
          dream wedding.We dont just throw a celebration ,we help to tell <br />
          a story.Your love and life story.We will help you to make this day <br />
          perfect and remember it for a lifetime.We will write your <br />
          personal wedding story !.</p>

          <button style={{marginBottom:'50px',width:'150px',padding:'10px 15px',color:'#3a7d61',background:"white",outline:'none',borderRadius:'10px'}}>READ MORE</button>

         

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
      <div className='main'>
        {/* <img src="https://cdn2.momjunction.com/wp-content/uploads/2016/10/Marriage-is-a-gift-from-God-to-us.-The-quality-of-our-marriage-is-our-gift-to-Him..jpg.webp" alt="" /> */}
     <div className='box'>
      <h1 className='font' style={{color:'black',marginLeft:'400px',paddingTop:'200px',fontSize:'70px'}}> <span>YOUR PERFECT</span> <br /><span style={{marginLeft:'100px'}}>WEDDING <br /></span><span style={{marginLeft:'-5px'}}>WILL COME TRUE</span></h1>

     </div>

      </div>
      <div>
      <h1 style={{color:'black',fontSize:'60px',color:'#3a7d61', marginLeft:'200px'}}> <span>LOVE</span> <br /><span>STORIES</span></h1> 
     
      
      <div style={{marginLeft:'200px'}} className='grid'>
        <div id='grid1'>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/736x/7e/b9/46/7eb946fbf6f11e4b01bdcba3cac05117.jpg" alt="" />
          <button style={{marginBottom:'30px',width:'150px',padding:'10px 15px',color:'#3a7d61',background:"white",outline:'none',borderRadius:'10px',marginTop:'20px'}}>WATCH MORE</button>
        </div>
        <div className='main2' id='grid2'>
       
        <div className='box2'>
        <h3 style={{marginLeft:'80px',paddingTop:'80px',color:'black'}}>Anny <br  /> <span style={{marginLeft:'20px'}}>&</span> <br /> MARK</h3>
        <Link  style={{marginLeft:'100px',paddingTop:'50px',color:'#3a7d61',fontWeight:'600px'}}>Watch </Link>
        </div>


        </div>
        <div id='grid3'>
        <img style={{height:'400px',width:'250px'}} src="https://www.marthastewart.com/thmb/nVTL2kpV8Y9fUWtJsNX22Y9TiQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/madeline-james-wedding-couple-0422-71c410b79316461997eb0c63de0d4aa6.jpg" alt="" />

        </div>

      </div>

     
      </div>
      <div style={{marginLeft:'50px'}} className='grid1'>
        <div>
          <img style={{height:'400px',width:'250px',marginTop:"-30px"}} src="https://samanthajayphotoblog.com/wp-content/uploads/2022/07/samantha-jay-photography-summer-glen-foerd-philadelphia-wedding_0088-1.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Wedding Coordination</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://smp-is.stylemepretty.com/wp-content/gallery/ibb/lauren.megerdichian/ibb-1687371762.6309.29846$!600x.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Wedding Ceremony</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px',marginTop:"-30px"}} src="https://i.pinimg.com/564x/dc/be/4d/dcbe4dcfd9c5792a29a55b0c974905f4.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Decor for Celebration</p>
        </div>
        <div>
          <img style={{height:'400px',width:'250px'}} src="https://i.pinimg.com/236x/18/7d/0e/187d0e5a51cc452d2f323b3a413d112c.jpg" alt="" />
          <p style={{marginLeft:'25px',color:'black'}}>Choice the style of <br />the wedding</p>
        </div>
      </div>
      <div style={{marginLeft:'87%',marginTop:'-250px'}}>
        <h3 style={{color:'black',color:'#3a7d61'}} >SERVICES</h3>
        <Link>Watch</Link>
        
      </div>
      <div className='reserve'style={{marginLeft:'400px',marginTop:'100px'}}>
        <h2 style={{color:'#3a7d61'}}> <span>RESERVE A CONSULTATION</span></h2>
        <form className='form' action="">
          
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />

          <button style={{padding:'10px 20px',border:'none',borderRadius:'5px',background:'#3a7d61',color:'white',fontSize:'1rem',cursor:'ponter',}} type='submit'>Send</button>
        </form>

      </div>
      
    </div>
  
  )
}

export default Mainpage