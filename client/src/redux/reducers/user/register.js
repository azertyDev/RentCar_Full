import {USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from '../../consts/index';

const initialState={
    pending:false,
    err:false,
    user:{}
}
 
export  const registerUser=(state=initialState, {type, payload})=>{
    switch(type){
        case USER_REGISTER:
            return{
                ...state,
                pending:true
            }
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                pending:false,
                err:false,
                user:{...payload}
            }
        case USER_REGISTER_FAIL:
            return{
                ...state,
                pending:false,
                err:true
            }
        default:
            return{
                ...state
            }
    }
}