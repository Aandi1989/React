import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState={
      id: null,
      email: null,
      login: null,
      isAuth:false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;

    }
}

export const setAuthUserData=(id, email, login, isAuth)=>({type:SET_USER_DATA, payload:{id, email, login, isAuth}});

export const setAuthThunk=()=>{
    return (dispatch)=>{
       return authAPI.me()
        .then(data=>{
          if(data.resultCode === 0){
            let{id,email,login}=data.data;
            dispatch(setAuthUserData(id,email,login,true))
          }
        })
    }
}

export const login=(email, password, rememberMe=false)=>{
      return (dispatch)=>{
        authAPI.login(email, password, rememberMe)
        .then(data=>{
          if(data.resultCode === 0){
            dispatch(setAuthThunk())
          }else{
            let message=data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
          }
        })
    }
}

export const logout=()=>{
    return (dispatch)=>{
        authAPI.logout()
        .then(data=>{
          if(data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false))
          }
        })
    }
}


export default authReducer;