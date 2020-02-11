import { loginUser, loginUserSuccess, loginUserFail } from "../actions/login";
import {UNFETCH_USERS, CLEAR_ALL_FAIL} from '../consts/index';
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail,
  addUser,
  addUserFail,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  deleteUserFail,
  editUser,
  editUserSuccess,
  editUserFail,
  register,
  registerSuccess,
  registerFail
} from "../actions/users";
import { fetchCars, fetchCarsSuccess, fetchCarsFail } from "../actions/cars";
import {visibleAc} from '../actions/modal';
import axios from "axios";
import _ from 'lodash';

// CLEAR ALL FAIL

export const visibleMidd=(visible, id)=>{
  return dispatch=>{
    dispatch({type:CLEAR_ALL_FAIL});
    dispatch(visibleAc(visible, id))
  }
}

// CLEAR ALL DATA

export const unfetch=()=>{
  return dispatch=>{
    dispatch(fetchUsersSuccess([]))
  }
}

// LOGIN USER

export const login = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch(loginUser());
      const responce = await axios({
        url: "/login",
        method: "POST",
        data: {
          email,
          password
        }
      });
      console.log(responce);
      if (responce.status === 200) {
        dispatch(loginUserSuccess(responce.data));
      }else if(responce.status === 400){
        dispatch(loginUserFail());
      }
    } catch (error) {
      console.log(error);
      dispatch(loginUserFail());
    }
  };
};

// FETCH USERS

export const fetch = () => {
  return async dispatch => {
    try {
      dispatch(fetchUsers());
      const responce = await axios({
        url: "/users",
        method: "GET"
      });
      if (responce.status === 200) {
        dispatch(fetchUsersSuccess(responce.data));
      }
    } catch (error) {
      dispatch(fetchUsersFail());
    }
  };
};

// FETCH CARS

export const cars = () => {
  return async dispatch => {
    try {
      dispatch(fetchCars());
      const responce = await axios({
        url: "/cars",
        method: "GET"
      });
      console.log('--------------', responce, '---------')
      if (responce.status === 200) {
        dispatch(fetchCarsSuccess(responce.data));
      }else{
        dispatch(fetchCarsFail());
      }
    } catch (error) {
      dispatch(fetchCarsFail());
    }
  };
};

// ADD USER
export const add = ({ name, email, password, role }) => {
  console.log("role: ", role);
  return async (dispatch, getState) => {
    try {
      dispatch(addUser());
      const responce = await axios({
        url: "/users",
        method: "POST",
        data: {
          name,
          email,
          password,
          role
        }
      });
      if (responce.status === 201) {
        dispatch(addUserSuccess(responce.data));
      }
    } catch (error) {
      dispatch(addUserFail());
    }
  };
};

// DELETE USER

export const deleteMIdd = id => {
  
  return async dispatch => {
    try {
      dispatch(deleteUser(id));
      const responce = await axios({
        url: `/users/${id}`,
        method: "POST"
      });
     
    if(responce.status === 200){
      dispatch(deleteUserSuccess(responce.data))
    }
    } catch (error) {
      dispatch(deleteUserFail());
    }
  };
};

// EDIT USER

export const edit = (id, { name, email, password, role }) => {
  return async (dispatch, getState) => {
    try {
      dispatch(editUser());
      const responce = await axios({
        url: `/users/${id}`,
        method: "PUT",
        data: {
          name,
          email,
          password,
          role
        }
      });
      let users=[..._.get(getState().users, 'data')];
      for(let i=0; i<users.length; i++){
        if(users[i]._id === id){
           users[i]={
             ...users[i],
             name,
             email,
             password,
             role
           }
        }
      }
    if(responce.status ===200){
      if(responce.data.success){
        dispatch(fetchUsersSuccess(users))
      }
    }else{
      dispatch(editUserFail())
    }
    } catch (error) {
      dispatch(visibleMidd());
       dispatch(editUserFail())
    }
  };
};

// USER REGISTER

export const registerMidd=(values)=>{
  const {name, email,password,client,seller} =values;
  return async dispatch=>{
    dispatch(register())
    try {
      const responce=await axios({
         url:'/reg',
         method:'POST',
         data:{
           name,
           email,
           password,
           client,
           seller
         }
      })
      if(responce.status === 200){
        dispatch(registerSuccess(responce.data))
      }else{
        dispatch(registerFail())
      }
    } catch (err) {
       dispatch(registerFail())
    }
  }
}
