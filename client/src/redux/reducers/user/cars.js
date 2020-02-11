import {FETCH_USER_CARS, FETCH_USER_CARS_SUCCESS, FETCH_USER_CARS_FAIL, USER_ADD_CAR,USER_ADD_SUCCESS, USER_ADD_CAR_FAIL} from '../../consts/index';

const initialState={
    pending:false,
    err:false,
    data:[],
    add:{
        pending:false,
        err:false
    }
}

export const userCarsReducer=(state=initialState, {type, payload})=>{
  switch(type){
    case FETCH_USER_CARS:
        return{
            ...state,
            pending:true
        }
    case FETCH_USER_CARS_SUCCESS:
        return{
            ...state,
            data:[...payload],
            err:false,
            pending:false,
            add:{
                pending:false,
                err:false
            }
        }
    case FETCH_USER_CARS_FAIL:
        return{
            ...state,
            err:true
        }
    case USER_ADD_CAR:
        return{
            ...state,
            add:{
                pending:true
            }
        }
    case USER_ADD_SUCCESS:
        return{
            ...state,
            data:[...state.data, payload],
            add:{
                pending:false,
                err:false
            }
        }
    case USER_ADD_CAR_FAIL:
        return{
            ...state,
            add:{
              pending:false,
              err:true
            }
        }
    default:
        return{
            ...state
        }
  }
}