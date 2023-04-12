import React, { Component } from 'react'
import { connect} from 'react-redux';

class Sepet extends Component {
  render() {
  console.log("component",this.props)

    return (
      <div>
        <h2>sepet</h2>
        <h1>{this.props.name} {this.props.price}</h1>
        

      
        </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("state",state)
  return {
      name:state.Name,
      price:state.Price
     
  }
}



export default connect(mapStateToProps)(Sepet)