
import { AUTH_LOGOUT } from "../constants/auth";
import { CLEAR_MESSAGE, REGISTERED, REGISTERING, REGISTER_FAILED, REGISTER_SUCCESS, SET_ERRORMESSAGE, SET_SUCCESSMESSAGE } from "../constants/Register.constants";


const INITIAL_STATE = {
    errormessage:'',
    register_suc:false,
    register_fail:false,
    loading:false,


}

export default function (state= INITIAL_STATE, action){
 


    switch(action.type){

        case AUTH_LOGOUT:

        return{
            ...INITIAL_STATE,
        };
case CLEAR_MESSAGE:
return{
    ...state,
    errormessage:'',
    loading:false,
    register_fail:false,
    register_suc:false
    
     };

case REGISTER_FAILED:
    return{
    ...state,
    register_fail:true,
    loading:false,
    register_suc:false

    };


case SET_ERRORMESSAGE:
    return{
        ...state,
        errormessage:action.payload,
        register_fail:true,
        loading:false,
        register_suc:false
        
    
    };
case REGISTERING:
    return{

        ...state,
        loading:true,
     
    
    };
    case REGISTER_SUCCESS:
        return{
            ...state,
            loading:false,
            register_suc:true,
          
            
      
            
         
        };

default:
    return state;


    }


}