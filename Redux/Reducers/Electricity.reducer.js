import { AUTH_LOGGING_IN } from "../constants/auth";
import { CLEAR_ERROR, ELECTRICITY_VALIDATION_LOADING, FETCH_SUCCESS, FETCH_TRANS, PAYMENT_LOADING, PAYMENT_SUCCESS, SET_ERROR } from "../constants/index";


const INITIAL_STATE = {
  name:'',
  token:'',
  paymentdata:'',
  fsuccess:false,
  loading:false,
  errormessage:'',
  transactionhistory:[],
  paymentloading:false,
  paymentsuccess:false,
  product_code:''

}


export default function( state= INITIAL_STATE, action) {
    
    switch(action.type){
      case CLEAR_ERROR:
        return{ 
          ...state, fsuccess:false,paymentloading:false,
          paymentsuccess:false, errormessage:''}

   case PAYMENT_LOADING:
     return{
       ...state,
      paymentloading:true,
    
     };

     case PAYMENT_SUCCESS:

     return{
      ...state, 
      paymentdata:action.payload,
      paymentloading:false,
      paymentsuccess:true}

      case SET_ERROR:
        return{
          ...state,
          
          name:'',
          token:'',
          fsuccess:false,
          loading:false,
          paymentloading:false,
          paymentsuccess:false,
          errormessage:action.payload
        }
       case ELECTRICITY_VALIDATION_LOADING:
         return{
...state,
loading:true,

         }
 case  FETCH_SUCCESS:

     return {
       ...state,
        loading:false,
        name:action.payload.customer_name,
        token:action.payload.token,
        fsuccess:true,
        product_code:action.payload.product_code
     };

     case FETCH_TRANS:
       return{
        ...state,
        loading:false,
        transactionhistory:action.payload,
      
        fsuccess:true

       };
     default: return state;

    }

    
}