import { errorParser } from "../../_services/apiErrorParser";
import { userService } from "../../_services/userService";
import { CLEAR_SATALLITE_ERROR, FETCH_MULTICHOICE, FETCH_STARTTIMES, FETCH_SUCCESS, LOADING_SATALLITE, MULTICHOICE_VENDING_ERROR, MULTICHOICE_VENDING_LOADING, MULTICHOICE_VENDING_SUCCESS, SET_MULTICHOICE_ERROR, SET_SATALLITE_ERROR, SET_STARTIMES_ERROR, STARTIME_VENDING_ERROR, STARTIME_VENDING_SUCCESS } from "../constants/index";


 export const ValidateStartimes = (account) =>  async (dispatch)=>{
  dispatch(Clearsatalliteerror());
  dispatch(LoadingData());
  userService.Validatestartimes(account).then( async (response)=>{
    //console.log(response.data.message.details)
    dispatch(DispatchStartime(response.data.message.details));
          
          })
          .catch((err)=>{
         // console.log(err);
          dispatch(SetStartimeerror(errorParser.parseStartimesError(err).message));
           
          });

 };


 export const multichoiceVending =(multichoice_type,smart_card_no, productToken,productCode,user_id, plan,phone)=> async (dispatch)=>{
  
  dispatch(Loadingmultichiocepament())
  
  userService.multichoiceVending(multichoice_type,smart_card_no, productToken,productCode,user_id,plan,phone).
   then( async(response)=>{

    dispatch(DispatchMultichoicevendingsuccess("ok"))


   }).catch((err)=>{

    dispatch(SetmultichoiceVendingerror(errorParser.parseLoginError(err).message));
   })


 };


 export const StartimesVending =(
    phone,
  plan,
  productToken,
  productCode,
  user_id,
  amount,)=> async (dispatch)=>{

  dispatch(Loadingmultichiocepament())
 
  userService.StartimesVending( phone,
    plan,
    productToken,
    productCode,
    user_id,
    amount,).
   then( async(response)=>{

    dispatch(Dispatchstartimesvendingsuccess('good'));


   }).catch((err)=>{

    dispatch(SetstatimesVendingerror(errorParser.parseLoginError(err).message));
   })


 };

 export const ValidateDstv = (smart_card_no) =>  async (dispatch)=>{
  dispatch(Clearsatalliteerror());
  dispatch(LoadingData());
  userService.Validatemultichoice("dstv",smart_card_no).then( async (response)=>{
    console.log(response.data.message);
    dispatch(DispatchMultichoice(response.data.message.details));
          
          })
          .catch((err)=>{
           
           dispatch(Setmultichoiceerror(errorParser.parseLoginError(err).message));
           
          });
 };

 export const ValidateGotv = (smart_card_no) =>  async (dispatch)=>{
   dispatch(Clearsatalliteerror());
   dispatch(LoadingData());
  userService.Validatemultichoice("gotv",smart_card_no).then( async (response)=>{
    console.log(response.data.message);
    dispatch(DispatchMultichoice(response.data.message.details));
          
          })
          .catch((err)=>{
            dispatch(Setmultichoiceerror(errorParser.parseLoginError(err).message));
        
          });
 };


 export const DispatchStartime = data =>({

  type:FETCH_STARTTIMES,
  payload:data
 });

 export const DispatchMultichoice = data =>({

  type:FETCH_MULTICHOICE,
  payload:data
 });


 export const DispatchMultichoicevendingsuccess = data =>({

  type:MULTICHOICE_VENDING_SUCCESS,
  payload:data
 });

 ////
 export const Dispatchstartimesvendingsuccess = data =>({

  type:STARTIME_VENDING_SUCCESS,
  payload:data
 });
 ///


 export const Setmultichoiceerror = data =>({

  type:SET_MULTICHOICE_ERROR,
  payload:data
 });


 export const SetmultichoiceVendingerror = data =>({

  type:MULTICHOICE_VENDING_ERROR,
  payload:data
 });


 ////

 export const SetstatimesVendingerror = data =>({

  type:STARTIME_VENDING_ERROR,
  payload:data
 });

 ///
 export const SetStartimeerror = data =>({

  type:SET_STARTIMES_ERROR,
  payload:data
 });

 export const Clearsatalliteerror = () =>({

  type:CLEAR_SATALLITE_ERROR,
  
 });


 export const LoadingData = () =>({

  type:LOADING_SATALLITE,
  
 });

 export const Loadingmultichiocepament = () =>({

  type:MULTICHOICE_VENDING_LOADING
  
 });