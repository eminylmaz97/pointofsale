

import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'





 class Searchcomp extends Component {
  

  
  render() {
  
    return (
      <div style={{ position: "relative", height:"50px",  width:"58.75%", marginLeft:"10%", border:"none",
      borderRadius:"20px",marginBottom:'20px'}}>
        
        <input
  style={{
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    marginTop: "10px",
    borderRadius: "20px",
    padding: "2px",
    paddingLeft: "40px",
    height: "50px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
  }}
  placeholder="Cari Menu..."
/>

        <Icon style={{ color:'#00bcd4',position: "absolute", left: "10px", top: "70%", transform: "translateY(-50%)" }} color=''name='search' size='large' />
     
</div> 
        
        
          
        
      
    )
    }
}
export default Searchcomp