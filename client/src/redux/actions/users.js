import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL} from '../consts/index';

// FETCH USERS

export const fetchUsers=()=>{
    return{
      type:FETCH_USERS
    }
}

export const fetchUsersSuccess=(data)=>{
  return{
      type:FETCH_USERS_SUCCESS,
      payload:[...data]
  }
}

export const fetchUsersFail=()=>{
    return{
        type:FETCH_USERS_FAIL
    }
}