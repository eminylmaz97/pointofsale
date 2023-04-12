export const ADD_FOOD = 'ADD_FOOD';


export const addFood = (Name,Price)=> {
    console.log("action",Name,Price)
    return{
        type:ADD_FOOD,
        payload:{ 
             Name,
             Price,
             
        
    }
}
};

export default addFood;

