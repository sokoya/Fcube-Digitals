import {
    AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
    AUTH_ERR_LOG_IN,
    AUTH_LOGGED_IN,
    AUTH_LOGGING_IN,
    AUTH_LOGOUT,
    CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_LOADING,
    CHANGE_PASSWORD_SUCCESS,
    GET_BALANCE_ERROR,
    GET_BALANCE_LOADING,
    GET_BALANCE_SUCCESS,
  } from '../constants/auth';
  
  const INITIAL_STATE = {
    user: null,
    token: null,
    loggingIn: false,
    loginsuccess:false,
    loginError:false,
    errorMessage: '',
    Changepasswordloading:false,
    Changepasswordsuccess:false,
    balance:'0',
    getbalanceloading:false,
    getbalancesuccess:false,
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

       

      case GET_BALANCE_ERROR:
        return{
          ...state,
          getbalanceloading:false,
        }
      case GET_BALANCE_LOADING:
        return{
          ...state,
           getbalanceloading:true,
        }

        case GET_BALANCE_SUCCESS:
          return {
             ...state,
             getbalanceloading:false,
             balance:action.payload,
             getbalancesuccess:true
          }

      case CHANGE_PASSWORD_LOADING:
        return{
          ...state,
          Changepasswordloading:true,
        }

        case CHANGE_PASSWORD_ERROR:
          return{
            ...state,
            Changepasswordloading:false,
           errorMessage:action.payload,
          };

          case CHANGE_PASSWORD_SUCCESS:
            return{
              ...state,
              Changepasswordloading:false,
              Changepasswordsuccess:true
            }
      case AUTH_LOGOUT: {
        return {
          ...INITIAL_STATE,
        };
      }
      case AUTH_CLEAR_LOGIN_ERROR_MESSAGE: {
        return {
          ...state,
        loggingIn: false,
          errorMessage: '',
        };
      }
      case AUTH_LOGGING_IN:
        return {
          ...state,
          loginsuccess:false,
          loginError:false,
          loggingIn: true,
        };
      case AUTH_LOGGED_IN:
        return {
          ...state,
          user: action.payload.UserName,
          token: action.payload.token,
          loggingIn: false,
          loginError:false,
          loading:false,
          loginsuccess:true,
         
        };
      case AUTH_ERR_LOG_IN:
        return {
          ...state,
          loggingIn: false,
       
          loginError:true,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  }
  