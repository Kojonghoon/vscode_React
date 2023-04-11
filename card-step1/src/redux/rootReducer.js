import { combineReducers } from "redux";
import  userAuth  from "./userAuth/reducer";
import  toastStatus from "./toastStatus/reducer";

const rootReducer = combineReducers({
   userAuth,//인증처리 관련 props 이슈
   toastStatus,//메시징 처리 방법 - 소개 
})

export default rootReducer;