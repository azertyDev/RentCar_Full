import {MODAL_VISIBLE, SLIDE_MODAL_VISIBLE, USER_CAR_MODAL_VISIBLE} from '../consts/index';

export function visibleAc(visible, id){
    return{
        type:MODAL_VISIBLE,
        payload:{
            id, 
            visible
        }
    }
}

export function visibleSlide(visible, id){
    return{
        type:SLIDE_MODAL_VISIBLE,
        payload:{
            id, 
            visible
        }
    }
}

export function userCarModal(visible){
  return{
      type:USER_CAR_MODAL_VISIBLE,
      payload:visible
  }
}