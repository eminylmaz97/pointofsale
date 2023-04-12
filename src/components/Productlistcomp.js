import { Component } from 'react'
import { connect } from 'react-redux'
import { addFood } from '../Actions/ProductAction'
import {foodReducer} from '../foodReducer';


 

class Productandlistcomp extends Component {
  
   onAddFood = () => {
    const Name = 'burger';
    const Price = 10;
    this.props.addFood(Name,Price);
};

    
    render() {

        
      

    return (
      <div>Productlistcomp
        <button onClick={this.onAddFood}>sepete yolla</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
     state:foodReducer
     
  }
}


const mapDispatchToProps = {
   addFood
}



export default connect(mapStateToProps,mapDispatchToProps)(Productandlistcomp)