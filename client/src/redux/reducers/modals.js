import {MODAL_VISIBLE, SLIDE_MODAL_VISIBLE, USER_CAR_MODAL_VISIBLE} from '../consts/index';

const initialState={
    visibles:false,
    slides:{
        id:null,
        visible:false
    },
    userCarModal:false
}

export const modalReducer=(state=initialState, {type, payload})=>{
  switch(type){
      case MODAL_VISIBLE:
          return{
              ...state,
              visibles:{...payload}
          }
    case SLIDE_MODAL_VISIBLE:
        return{
            ...state,
            slides:{
                ...payload
            }
        }
    case USER_CAR_MODAL_VISIBLE:
        return{
            ...state,
            userCarModal:payload
        }
        default:
            return{
                ...state
            }
  }
}