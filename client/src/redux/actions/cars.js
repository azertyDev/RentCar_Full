import {FETCH_CARS, FETCH_CARS_SUCCESS, FETCH_CARS_FAIL} from '../consts/index';

// FETCH USERS

export const fetchCars=()=>{
    return{
      type:FETCH_CARS
    }
}

export const fetchCarsSuccess=(data)=>{
  return{
      type:FETCH_CARS_SUCCESS,
      payload:[...data]
  }
}

export const fetchCarsFail=()=>{
    return{
        type:FETCH_CARS_FAIL
    }
}