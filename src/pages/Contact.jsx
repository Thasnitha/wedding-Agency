import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <h1 style={{marginLeft:'500px',color:'#3a7d61',marginBottom:'60px',marginTop:'100px',fontSize:'50px'}}> <span>CONTACTS</span></h1>
        </div>
        <div className='d-flex justify-content-evenly '>
        <div className='d-flex flex-column'>
          <h5 style={{color:'black'}}>Phones</h5>
          <h6 style={{color:'black'}}>Consultation</h6>
          <a style={{textDecoration:'none',color:'black'}} href="">+375 11 333 33 77</a>
          <a style={{textDecoration:'none',color:'black'}} href="">+375 11 877 33 77</a>
          <h6 style={{color:'black'}}>organizers</h6>
          <a style={{textDecoration:'none',color:'black'}} href="">+375 11 333 33 88(EVA)</a>
          <a style={{textDecoration:'none',color:'black'}} href="">+371 11 877 33 88 (Karoline)</a>
          <a style={{textDecoration:'none',color:'black'}} href="">+375 11 877 33 88(catherine)</a>
          <h5 style={{color:'black'}}>Our office</h5>
          <a style={{textDecoration:'none',color:'black'}} href="">103/2 kensington Palace,London</a>






        </div>
        <div className='d-flex flex-column'>
          <h5 style={{color:'black'}}>Emails</h5>
          <a style={{textDecoration:'none',color:'black'}} href="">yourstory@stories.com</a>
          <a  style={{textDecoration:'none',color:'black'}} href="">yourstory_budget@stories.com</a>
          <h5 style={{color:'black'}}>Social media</h5>
          <a style={{textDecoration:'none',color:'black'}} href="">@yourstory</a>
          <a style={{textDecoration:'none',color:'black'}} href="">YourStory Wedding Agency</a>
          <a style={{textDecoration:'none',color:'black'}} href="">@yourStory_wed</a>

        </div>
        <div>
          <img style={{width:'300px',height:'200px'}}  src="https://m.media-amazon.com/images/I/81RsihaWlUL._AC_UF894,1000_QL80_.jpg" alt="" />
        </div>

        </div>

    </div>

  )
}

export default Contact