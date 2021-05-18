
import { CLEAR_SATALLITE_ERROR, FETCH_MULTICHOICE, FETCH_STARTTIMES, FETCH_SUCCESS, LOADING_SATALLITE, MULTICHOICE_VENDING_ERROR, MULTICHOICE_VENDING_LOADING, MULTICHOICE_VENDING_SUCCESS, SET_MULTICHOICE_ERROR, SET_SATALLITE_ERROR, SET_STARTIMES_ERROR, STARTIME_VENDING_ERROR, STARTIME_VENDING_LOADING, STARTIME_VENDING_SUCCESS } from "../constants/index";



const INITIAL_STATE = {
  multichoice_plan:[],
  multichoice_plan_success:false,
  startime_plan:[],
  startime_plan_success:false,
  multichoice_error:"",
  startime_error:'',
  loading:false,
  paymentloading:false,
  multichoice_vending_success:false,
  startimes_vending_success:false
}


export default function( state= INITIAL_STATE, action) {
    
    switch(action.type){


     case STARTIME_VENDING_LOADING:
       return{
...state,
       paymentloading:true,
 startime_error:''
       };


       case STARTIME_VENDING_SUCCESS:
         return{
           ...state,
 paymentloading:false,
 startimes_vending_success:true


         };

         case STARTIME_VENDING_ERROR:
           return{

            paymentloading:false,
            startime_error:action.payload

           }

      case MULTICHOICE_VENDING_LOADING:
        return{
          ...state,
          multichoice_error:'',
          paymentloading:true
        }

      case MULTICHOICE_VENDING_SUCCESS:
        return{
      ...state,
      multichoice_vending_success:true,
      paymentloading:false,

        }

      case LOADING_SATALLITE:
        return{
          ...state,
          loading:true
        };

      case FETCH_STARTTIMES:
        return{
          ...state,
          loading:false,
          startime_plan:action.payload,
          startime_plan_success:true
        };


 case  FETCH_MULTICHOICE:

     return {
        ...state,
        loading:false,
        multichoice_plan:action.payload,
       multichoice_plan_success:true
     };

     case CLEAR_SATALLITE_ERROR:
       return{
         ...state,
         loading:false,
         
         multichoice_error:'',
         startime_error:'',
         multichoice_plan_success:false,
         multichoice_plan:[],
         startime_plan:[],
         startime_plan_success:false
        };

        case MULTICHOICE_VENDING_ERROR:

        return{
          ...state,
          paymentloading:false,
          multichoice_error:action.payload,
        }

        case SET_MULTICHOICE_ERROR:
          return{
            ...state,
          //  paymentloading:false,
            loading:false,
            multichoice_error:action.payload,
            

          };

          case SET_STARTIMES_ERROR:
            return{
              ...state,
              loading:false,
              startime_error:action.payload,
              
  
            };

            case CLEAR_SATALLITE_ERROR:
            
            return {
              ...state, 
              loading:false,


              multichoice_vending_success:false,
              startimes_vending_success:false
            }

     default: return state;

    }

    
}