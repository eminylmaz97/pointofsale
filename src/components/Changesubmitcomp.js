import React, { Component } from 'react'


class Changeandsubmit extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundColor:'#b2ebf2',
          margin:'10px',
          borderRadius:'15px',
          height:'50px',
          padding:'5px',
          paddingTop:'12px', 
          }}>
            
            <h3 style={{float:'left', color:'#00acc1' }}>CHANGE</h3>
            
        </div>
        <button style={{
            marginLeft:'2px',
            borderRadius:'15px',
            width:'345px',
            height:'60px',
            backgroundColor:'#90a4ae',
            color:'white',
            border:'none',
            }}>

            <h3>SUBMIT</h3></button>
      </div>
    )
  }
}
            


export default Changeandsubmit