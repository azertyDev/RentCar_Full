import {
  fetchUserCars,
  fetchUserCarsSuccess,
  fetchUserCarsFail,
  userAddCar,
  userAddCarFail,
  userAddCarSuccess
} from "../actions/userCars";
import {
  CLIENT_RENT_CAR,
  CLIENT_RENT_CAR_SUCCESS,
  CLIENT_RENT_CAR_FAIL
} from "../consts/index";
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
export const add = ({ model, cost }) => {
  return async dispatch => {
    try {
      dispatch(userAddCar());
      const responce = await axios({
        url: `/users/${JSON.parse(localStorage.getItem("user"))._id}/cars`,
        method: "POST",
        data: {
          model,
          cost
        }
      });
      dispatch(userAddCarSuccess(responce.data));
    } catch (error) {
      dispatch(userAddCarFail());
    }
  };
};

// ! CLIENT RENT CAR

export const rent = (id, isRent) => {
  console.log(JSON.parse(localStorage.getItem("user"))._id, id)
  return async dispatch => {
    try {
      dispatch({ type: CLIENT_RENT_CAR });
      const respoce = await axios({
        url: `/users/${JSON.parse(localStorage.getItem("user"))._id}/cars`,
        method: "POST",
        data: {
          car_id: id,
          rent:isRent
        }
      });
      console.log(respoce);
    } catch (error) {
      dispatch({ type: CLIENT_RENT_CAR_FAIL });
    }
  };
};
