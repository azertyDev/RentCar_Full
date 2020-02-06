import { loginUser, loginUserSuccess, loginUserFail } from "../actions/login";
import {fetchUsers, fetchUsersSuccess, fetchUsersFail} from '../actions/users';
import {fetchCars, fetchCarsSuccess, fetchCarsFail} from '../actions/cars';
import axios from "axios";

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
      if (responce.status === 200) {
        dispatch(loginUserSuccess(responce.data));
        
      }
    } catch (error) {
      console.log(error);
      dispatch(loginUserFail());
    }
  };
};

// FETCH USERS

export const fetch=()=>{
    return async dispatch=>{
        try {
            dispatch(fetchUsers())
            const responce= await axios({
                url:'/users',
                method:'GET'
            })
        if(responce.status === 200){
            dispatch(fetchUsersSuccess(responce.data))
        }
        } catch (error) {
            dispatch(fetchUsersFail())
        }
    }
}

// FETCH CARS

export const cars=()=>{
    return async dispatch=>{
        try {
            dispatch(fetchCars())
            const responce= await axios({
                url:'/cars',
                method:'GET'
            })
        if(responce.status === 200){
            dispatch(fetchCarsSuccess(responce.data))
        }
        } catch (error) {
            dispatch(fetchCarsFail())
        }
    }
}