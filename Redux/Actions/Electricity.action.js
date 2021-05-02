/* eslint-disable prettier/prettier */
import {errorParser} from '../../_services/apiErrorParser';
import {userService} from '../../_services/userService';
import {
  CLEAR_ERROR,
  ELECTRICITY_VALIDATION_LOADING,
  FETCH_SUCCESS,
  FETCH_TRANS,
  PAYMENT_LOADING,
  PAYMENT_SUCCESS,
  SET_ERROR,
} from '../constants/index';

export const loadingvalidation = () => ({
  type: ELECTRICITY_VALIDATION_LOADING,
});

export const paymentloading = () => ({
  type: PAYMENT_LOADING,
});

export const seterror = (errorMessage) => ({
  type: SET_ERROR,
  payload: errorMessage,
});

export const clearLoginErrorMessage = () => ({
  type: CLEAR_ERROR,
});

export const FectchTransaction = (user_id) => async (dispatch) => {
  dispatch(clearLoginErrorMessage());
  dispatch(loadingvalidation());
  userService
    .GetTransaction(user_id)
    .then(async (response) => {
      console.log(response.data.message.details);
      // dispatch(FethcData(response.data.message.details));
      dispatch(dispatchTransaction(response.data.message.details));
    })
    .catch((err) => {
      dispatch(seterror(errorParser.parseLoginError(err).message));
      console.log(err.message.description);
    });
};

export const validate_electricity = (
  meter_type,
  meter_number,
  disco,
  amount,
) => async (dispatch) => {
  dispatch(clearLoginErrorMessage());
  dispatch(loadingvalidation());
  userService
    .ValidateElectricity(meter_type, meter_number, disco, amount)
    .then(async (response) => {
     // console.log(response.data.message.details);
      dispatch(FethcData(response.data.message.details));
    })
    .catch((err) => {
      dispatch(seterror(errorParser.parseLoginError(err).message));
      //  alert(err.message)
    });
};



export const Pay_Electricity = (
  user_id,
  phone,
  productCode,
 
  productToken,
) => async (dispatch) => {

  dispatch(clearLoginErrorMessage());
  dispatch(paymentloading());
  
 
  userService
    .Pay_Electricity(user_id,phone,productCode,productToken)
    .then(async (response) => {
       console.log(response.data.message.details);
      dispatch(paymentsuccess(response.data.message.details));
    })
    .catch((err) => {
      dispatch(seterror(errorParser.parseLoginError(err).message));
      console.log(err.message);
    });
};

export const FethcData = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const paymentsuccess = (data) => ({
  type: PAYMENT_SUCCESS,
  payload: data,
});

export const dispatchTransaction = (data) => ({
  type: FETCH_TRANS,
  payload: data,
});
