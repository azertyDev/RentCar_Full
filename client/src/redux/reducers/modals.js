import {MODAL_VISIBLE, SLIDE_MODAL_VISIBLE} from '../consts/index';

const initialState={
    visibles:false,
    slides:{
        id:null,
        visible:false
    }
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
        default:
            return{
                ...state
            }
  }
}