import {DECREMENT,INCREMENT,INC_BY_VALUE,DEC_BY_VALUE,INC} from "./type";

export const I_Action= async(dispatch)=>{
    return dispatch({type: INCREMENT})
}
export const D_Action= async(dispatch)=>{
    return dispatch({type: DECREMENT})
}
export const DBV_Action= async(dispatch)=>{
    return dispatch({type: DEC_BY_VALUE})
}
export const IBV_Action= async(dispatch)=>{
    return dispatch({type: INC_BY_VALUE})
}
export const INC_Action=async(vl,dispatch)=>{
    return dispatch({type: INC,value: vl})
}