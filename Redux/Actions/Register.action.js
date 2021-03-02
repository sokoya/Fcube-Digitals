import { Alert } from "react-native";
import { errorParser } from "../../_services/apiErrorParser";
import NavigationService from "../../_services/Navigation.service";
import { userService } from "../../_services/userService";
import { AUTH_LOGOUT } from "../constants/auth";
import {CLEAR_MESSAGE, REGISTERED, REGISTERING, REGISTER_FAILED, REGISTER_SUCCESS, SET_ERRORMESSAGE, SET_SUCCESSMESSAGE } from "../constants/Register.constants";


export const Register =  (phone,email,fullname,password) => (dispatch)=>{
  
    dispatch(Registering())

  
      userService.Register(phone,email,fullname,password).then( async (response)=>{
      //  Alert.alert("ok")
     dispatch(Registered(response.data))  //First
     console.log(response.data)
    })
    .catch((err)=>{
     
      dispatch(SetError(errorParser.parseLoginError(err).message) );
     // console.log(err.message)
    });
    
};

export const SetError=  message =>({

    type: SET_ERRORMESSAGE,
    payload: message
});



export const CLEARMESSAGE= ()=>({

    type: CLEAR_MESSAGE
   
});

export const Registering= ()=>({
    type:REGISTERING,
})

export const Registered= data =>({
    type: REGISTER_SUCCESS,
    payload:data
});

export const Registerlogout=()=>({

    type:AUTH_LOGOUT
});