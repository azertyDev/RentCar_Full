import {MODAL_VISIBLE, SLIDE_MODAL_VISIBLE} from '../consts/index';

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