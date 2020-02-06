import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../consts/index';

const initialState={
    pending:false,
    fail:false,
    user:{}
}

export const loginReducer=(state={...initialState}, {type, payload})=>{
    switch(type){
    case LOGIN_USER:
        return{
            ...state,
            pending:true
        }
    case LOGIN_USER_SUCCESS:
        return{
            ...state,
            user:{...payload},
            pending:false
        }
    case LOGIN_USER_FAIL:
        return{
            ...state,
            err:true
        }
    default:
        return{
            ...state
        }
    }
}
