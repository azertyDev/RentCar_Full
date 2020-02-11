import {
  FETCH_USER_CARS,
  FETCH_USER_CARS_SUCCESS,
  FETCH_USER_CARS_FAIL,
  USER_ADD_CAR,
  USER_ADD_SUCCESS,
  USER_ADD_CAR_FAIL
} from "../consts/index";

export const fetchUserCars = () => {
  return {
    type: FETCH_USER_CARS
  };
};

export const fetchUserCarsSuccess = data => {
  return {
    type: FETCH_USER_CARS_SUCCESS,
    payload: [...data]
  };
};

export const fetchUserCarsFail = () => {
  return {
    type: FETCH_USER_CARS_FAIL
  };
};

// USER ADD CAR

export const userAddCar=()=>{
    return{
        type:USER_ADD_CAR
    }
}

export const userAddCarSuccess=(car)=>{
    return{
        type:USER_ADD_SUCCESS,
        payload:car
    }
}

export const userAddCarFail=()=>{
    return{
        type:USER_ADD_CAR_FAIL
    }
}