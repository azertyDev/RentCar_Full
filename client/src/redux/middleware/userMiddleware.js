import {
  fetchUserCars,
  fetchUserCarsSuccess,
  fetchUserCarsFail,
  userAddCar,
  userAddCarFail,
  userAddCarSuccess
} from "../actions/userCars";
import axios from "axios";
// FETCH
export const fetch = id => {
  return async dispatch => {
    try {
      dispatch(fetchUserCars());
      const responce = await axios({
        url: `/users/${id}/cars`,
        method: "GET"
      });
      console.log(responce);
      if (responce.status === 200) {
        dispatch(fetchUserCarsSuccess(responce.data));
      }
    } catch (error) {
      dispatch(fetchUserCarsFail());
    }
  };
};

// ADD CAR
export const add=({model,cost})=>{
 
  return async dispatch=>{
      try {
        dispatch(userAddCar());
        const responce=await axios({
            url:`/users/${JSON.parse(localStorage.getItem('user'))._id}/cars`,
            method:'POST',
            data:{
                model,
                cost
            }
        })
        dispatch(userAddCarSuccess(responce.data))
      } catch (error) {
          dispatch(userAddCarFail())
      }
    
  }
}