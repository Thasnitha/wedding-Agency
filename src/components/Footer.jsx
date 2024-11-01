import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px' ,background:'#266a4d',width:'100%',paddingTop:'50px'}} className='mt-5 '>
        <div className='d-flex justify-content-evenly '>
            <div className='d-flex flex-column  '>
                <h5 style={{color:'white'}}>yourstory</h5>
                <Link className='text-light text-decoration-none'  to={'/about'}>About</Link>
                <Link className='text-light text-decoration-none' to={'/services'}>Services</Link>
                <Link className='text-light text-decoration-none' to={'/couples'}>Couples</Link>


          

            </div>
            <div className='d-flex flex-column'>
                <h5 style={{color:'white'}}>Follow us</h5>
           <a className='text-light text-decoration-none' href="">Instagram</a>
           <a className='text-light text-decoration-none' href="">Facebook</a>
           <a className='text-light text-decoration-none' href="">pinterest</a>



          

            </div>
            <div className='d-flex flex-column'>
                <h5 style={{color:'white'}}>Contacts</h5>
                <a className='text-light text-decoration-none' href="">+375 111 333 33 77</a>
                <a className='text-light text-decoration-none' href="">+375 111 077 33 77</a>

              


          

            </div>
         

        </div>
        <hr style={{color:'white',marginTop:'100px',marginLeft:'80px',marginRight:'80px'}} />
        <p style={{marginLeft:'500px',color:'white'}}>All rights reserved &copy; YourStory 2020</p>
    </div>

  )
}

export default Footer