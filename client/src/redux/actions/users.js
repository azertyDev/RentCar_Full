import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  READ_USER_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../consts/index";
import store from '../store/store';
import _ from 'lodash';
// FETCH USERS

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};

export const fetchUsersSuccess = data => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: [...data]
  };
};

export const fetchUsersFail = () => {
  return {
    type: FETCH_USERS_FAIL
  };
};

// ADD USER

export const addUser = () => {
  return {
    type: ADD_USER
  };
};

export const addUserSuccess = user => {
  return {
    type: ADD_USER_SUCCESS,
    payload: user
  };
};

export const addUserFail = (id) => {
  return {
    type: ADD_USER_FAIL,
    payload:id
  };
};
// DELETE USER
export const deleteUser=(id)=>{
 
  return{
    type:DELETE_USER,
    payload:id
  }
}

export const deleteUserSuccess=(user)=>{
  return{
    type:DELETE_USER_SUCCESS,
    payload:user
  }
}

export const deleteUserFail=()=>{
  return{
    type:DELETE_USER_FAIL
  }
}

// EDIT USER

export const editUser=()=>{
  return{
    type:EDIT_USER
  }
}

export const editUserSuccess=(user)=>{
 return{
   type:EDIT_USER_SUCCESS,
   payload:user
 }
}

export const editUserFail=()=>{
  return{
    type:EDIT_USER_FAIL
  }
}

// READ USER
export const read=(id)=>{
  const users=[..._.get(store.getState(), 'users.data')];
  let findUser=users.find((item)=>{return item._id === id})
  return{
    type:READ_USER_SUCCESS,
    payload:{...findUser}
  }
}

// REGISTER

export const register=()=>{
  return{
    type:USER_REGISTER
  }
}

export const registerSuccess=(user)=>{
  return{
    type:USER_REGISTER_SUCCESS,
    payload:user
  }
}

export const registerFail=()=>{
  return{
    type:USER_REGISTER_FAIL
  }
}


