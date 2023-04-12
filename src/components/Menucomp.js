import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Productandlistcomp from './Productlistcomp'


class Menucomp extends Component {
  render() {
    return (
      <div style={{ 
       width:"60%",
       overflowY:'scroll',
       marginLeft:"10%", 
       marginTop:"25px",  
       height:"592px",
      }}>
        
        

        
        <div style={{
          height:'580px',
          width:'99%',
          backgroundColor:'#cfd8dc',
          borderRadius:"20px",
          marginBottom:'12px',
          marginRight:'2px'
          }}>
    <div>
    <Productandlistcomp></Productandlistcomp>
    </div>
        <Icon style={{marginTop:'180px', color:'#90a4ae'}}  name='database' size='massive' />
        <h1 style={{color:'#90a4ae'}}>YOU DON'T HAVE</h1>
        <h1 style={{color:'#90a4ae'}}>ANY PRODUCTS TO SHOW</h1>
         
            
            
        </div>
        <div style={{height:'580px',width:'99%',backgroundColor:'#cfd8dc',borderRadius:"20px"}}>
        <Icon style={{marginTop:'180px',color:'#90a4ae'}}  name='database' size='massive' />
        <h1 style={{color:'#90a4ae'}}>YOU DON'T HAVE</h1>
        <h1 style={{color:'#90a4ae'}}>ANY PRODUCTS TO SHOW</h1>
        </div>
        </div>
    )
  }
}
export default Menucomp