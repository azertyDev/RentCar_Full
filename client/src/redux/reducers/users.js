import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL} from '../consts/index';

const initialState={
    pending:false,
    fail:false,
    data:[]
}

export const usersReducer=(state=initialState, {type,payload})=>{
    switch(type){
       case FETCH_USERS:
           return{
               ...state,
               pending:true
           }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                pending:false,
                fail:false,
                data:[...payload]
            }
        case FETCH_USERS_FAIL:
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