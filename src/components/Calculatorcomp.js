import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Changeandsubmit from './Changesubmitcomp'
import UrunFiyatiToplamaAraci from './Fiyattopcomp'
import Sepet from './Sepetcomp'


class Calculatorcomp extends Component {
  render() {
    return (
        <div style={{
            float: "right",
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            marginRight: '10px',
            border: 'none',
            height: '635px',
            width: '28%',
            marginTop: '-50px',
            borderRadius: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}>
         
         <Sepet></Sepet>
            <Icon style={{marginTop:"170px", color:'#90a4ae'}}  name='cart' size='huge' />
            <h3  style={{color:'#90a4ae'}}>CARD EMPTY</h3>
            <div style={{marginTop:'80px'}}>
            <UrunFiyatiToplamaAraci ></UrunFiyatiToplamaAraci>
            
            </div>
            <div>
            <Changeandsubmit></Changeandsubmit>
            </div>
          </div>
         
          
    )
  }
}
export default Calculatorcomp 