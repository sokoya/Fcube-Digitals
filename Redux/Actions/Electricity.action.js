import { errorParser } from "../../_services/apiErrorParser";
import { userService } from "../../_services/userService";
import { AUTH_LOGGING_IN } from "../constants/auth";
import { CLEAR_ERROR, ELECTRICITY_VALIDATION_LOADING, FETCH_SUCCESS, FETCH_TRANS, PAYMENT_LOADING, PAYMENT_SUCCESS, SET_ERROR } from "../constants/index";


export const loadingvalidation = () => ({
  type: ELECTRICITY_VALIDATION_LOADING
});

export const paymentloading = () => ({
  type: PAYMENT_LOADING
});


export const seterror = errorMessage => ({
  type: SET_ERROR,
  payload: errorMessage,

});


export const clearLoginErrorMessage = () => ({
  type: CLEAR_ERROR
});

export const FectchTransaction = (user_id) =>  async (dispatch)=>{

  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
   userService.GetTransaction(user_id).then( async (response)=>{
      console.log(response.data.message.details)
    // dispatch(FethcData(response.data.message.details));
     dispatch(dispatchTransaction(response.data.message.details))
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
             console.log(err.message.description)
           });

 };

 export const ValidateAbuja = (meter_type, meter_number) =>  async (dispatch)=>{

  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
   userService.ValidateAbuja(meter_type, meter_number).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(FethcData(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
           // console.log(err.message.description)
           });

 };
 export const ValidatePh = (meter_type, meter_number) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
   userService.ValidateePh(meter_type, meter_number).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(FethcData(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
             console.log(err.message)
           });
   };

 export const ValidateIbadan = (meter_type, meter_number) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
    userService.ValidateIbadan(meter_type, meter_number).then( async (response)=>{
       console.log(response.data.message.details)
      dispatch(FethcData(response.data.message.details));
            
            })
            .catch((err)=>{
            
          dispatch(seterror(errorParser.parseLoginError(err).message))
    
            });
 };

 export const ValidateEko = (meter_type, meter_number) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
   userService.Validateeko(meter_type, meter_number).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(FethcData(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseEkoError(err).message))
   
        // console.log(err)
           });
   };

 export const ValidateIkeja = (meter_type, meter_number) =>  async (dispatch)=>{
   dispatch(clearLoginErrorMessage())
   dispatch(loadingvalidation())
    userService.Validateie(meter_type, meter_number).then( async (response)=>{
       console.log(response.data.message.details)
      dispatch(FethcData(response.data.message.details));
            
            })
            .catch((err)=>{
            
          dispatch(seterror(errorParser.parseLoginError(err).message))
              console.log(err.message)
            });
   };
 export const ValidateEnugu = (meter_type, meter_number) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(loadingvalidation())
   userService.ValidateEnugu(meter_type, meter_number).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(FethcData(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
             console.log(err.message)
           });
 };

 export const FethcData = data =>({
     type: FETCH_SUCCESS,
     payload:data
 });

 export const paymentsuccess = data =>({
  type: PAYMENT_SUCCESS,
  payload:data
});

 export const dispatchTransaction = data=>({

  type:FETCH_TRANS,
  payload:data
 });


 export const PayAbuja = (meter_type, meter_number, amount,user_id) =>  async (dispatch)=>{

  dispatch(clearLoginErrorMessage())
  dispatch(paymentloading())
   userService.PayAbuja(meter_type, meter_number, amount,user_id).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(paymentsuccess(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
           //  console.log(err.message.description.response)
           });

 };
 export const PayPh = (meter_type, meter_number, amount,user_id,product_code) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(paymentloading())
   userService.PayPh(meter_type, meter_number, amount,user_id,product_code).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(paymentsuccess(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
           console.log(err.response.data)
           });
   };

 export const PayIbadan = (meter_type, meter_number, amount,user_id, product_code) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(paymentloading())
    userService.PayIbadan(meter_type, meter_number, amount,user_id, product_code).then( async (response)=>{
       console.log(response.data.message.details)
      dispatch(paymentsuccess(response.data.message.details));
            
            })
            .catch((err)=>{
            
          dispatch(seterror(errorParser.parseIbadan(err).message))
            //  console.log(err.message)
            });
 };

 export const PayEko = (meter_type, meter_number, amount,user_id) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(paymentloading())
   userService.Payeko(meter_type, meter_number, amount,user_id).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(paymentsuccess(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseEkoError(err).message))
   
        // console.log(err)
           });
   };

 export const PayIkeja = (meter_type, meter_number, amount,user_id) =>  async (dispatch)=>{
   dispatch(clearLoginErrorMessage())
   dispatch(paymentloading())
    userService.Payie(meter_type, meter_number, amount,user_id).then( async (response)=>{
       console.log(response.data.message.details)
      dispatch(paymentsuccess(response.data.message.details));
            
            })
            .catch((err)=>{
            
          dispatch(seterror(errorParser.parseLoginError(err).message))
              console.log(err.message)
            });
   };
 export const PayEnugu = (meter_type, meter_number, amount,user_id, product_code) =>  async (dispatch)=>{
  dispatch(clearLoginErrorMessage())
  dispatch(paymentloading())
   userService.PayEnugu(meter_type, meter_number, amount,user_id, product_code).then( async (response)=>{
      console.log(response.data.message.details)
     dispatch(paymentsuccess(response.data.message.details));
           
           })
           .catch((err)=>{
           
         dispatch(seterror(errorParser.parseLoginError(err).message))
             console.log(err.message)
           });
 };