import { ADD_FOOD } from "./Actions/ProductAction";
 
 export const initialState = {
  names:'',
  prices:0
 
  
};

 export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        Name:action.payload.Name,
        Price:action.payload.Price,
      }
  default:
    return state;
  }
};

export default foodReducer;