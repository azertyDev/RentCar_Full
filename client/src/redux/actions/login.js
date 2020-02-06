import {LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from '../consts/index';

// LOGIN USER 

export const loginUser=()=>{
    return{
       type:LOGIN_USER
    }
}

export const loginUserSuccess=(user)=>{
  return{
      type:LOGIN_USER_SUCCESS,
      payload:user
  }
}

export const loginUserFail=()=>{
    return{
        type:LOGIN_USER_FAIL
    }
}