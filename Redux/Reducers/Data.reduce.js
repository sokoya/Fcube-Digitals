import { AIRTIME_VENDING_ERROR, AIRTIME_VENDING_LOADING, AIRTIME_VENDING_SUCCESS, BANK_TRANSFER_ERROR, BANK_TRANSFER_LOADING, BANK_TRANSFER_SUCCESS, CLEAR_ERROR, DATA_VENDING_ERROR, DATA_VENDING_LOADING, DATA_VENDING_SUCCESS, FETCH_SUCCESS, NOTIFICATION_SUCCESS, VERIFY_PAYSTACK_ERROR, VERIFY_PAYSTACK_SUCCESS } from "../constants/index";


const INITIAL_STATE = {
  Dataplan:[],
  errorMgs:'',
  datasuccess:false,
  airtimesuccess:false,
  airtimeloading:false,
  dataloading:false,
  paystackerror:false,
  paystacksuccess:false,
  BankTransferloading:false,
  BankTransfersuccess:false,
 Notification:'',
 Notificationsuccess:false
}


export default function( state= INITIAL_STATE, action) {
    
    switch(action.type){


      case NOTIFICATION_SUCCESS:
        return{
          ...state,
 Notificationsuccess:true,
 Notification:action.payload

        };
  case CLEAR_ERROR:

  return{
    ...state,
    datasuccess:false,
    airtimesuccess:false,
    errorMgs:'',
    BankTransfersuccess:false,
  };
      case DATA_VENDING_LOADING:

      return{
        ...state,
        dataloading:true,
        errorMgs:''
      }

      case DATA_VENDING_ERROR:
        return{
          ...state,
    dataloading:false,
    errorMgs:action.payload


        }
      case DATA_VENDING_SUCCESS:

      return{

        ...state,
        dataloading:false,
        datasuccess:true
      };

      case AIRTIME_VENDING_LOADING:

      return{
        ...state,
        errorMgs:'',
        airtimeloading:true,
      
      };
      case AIRTIME_VENDING_ERROR:
        return{
          ...state,
          airtimeloading:false,
          errorMgs:action.payload,
        };
      case AIRTIME_VENDING_SUCCESS:
        return{

          ...state,
          airtimesuccess:true,
          airtimeloading:false,
          
        };

 case  FETCH_SUCCESS:

     return {
      ...state,
        Dataplan:action.payload
     };

     case VERIFY_PAYSTACK_ERROR:
      return{
   ...state,
   paystackerror:true
          }

    case VERIFY_PAYSTACK_SUCCESS:
      return{
           ...state,
           paystacksuccess:true,
      }

      case BANK_TRANSFER_ERROR:
      return{
        ...state,
        BankTransferloading:false
      };

      case BANK_TRANSFER_LOADING:
        return{
          ...state,
          BankTransferloading:true,
          BankTransfersuccess:false
        };

       case BANK_TRANSFER_SUCCESS:
         return{

          ...state,
          BankTransferloading:false,
          BankTransfersuccess:true
         }; 

     default: return state;

    };

    
    
}