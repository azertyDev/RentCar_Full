import {FETCH_CARS, FETCH_CARS_FAIL, FETCH_CARS_SUCCESS} from '../consts/index';

const initialState={
    pending:false,
    fail:false,
    data:[]
}

export const carsReducer=(state={...initialState}, {type,payload})=>{
    switch(type){
       case FETCH_CARS:
           return{
               ...state,
               pending:true
           }
        case FETCH_CARS_SUCCESS:
            return{
                ...state,
                pending:false,
                fail:false,
                data:[...payload]
            }
        case FETCH_CARS_FAIL:
            return{
               ...state,
               fail:false
            }
        default:
            return{
                ...state
            }
    }
}