import {
    AUTH_LOGGING_IN,
    AUTH_LOGGED_IN,
    AUTH_ERR_LOG_IN,
    AUTH_LOGOUT,
    AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
    CHANGE_PASSWORD_LOADING,
    CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_SUCCESS,
    GET_BALANCE_LOADING,
    GET_BALANCE_SUCCESS,
    GET_BALANCE_ERROR,
  } from '../constants/auth';
 import {userService } from '../../_services/userService';
  //import { userService } from '../../_services/user.service';
  import { errorParser } from '../../_services/apiErrorParser';
  import navigationService from '../../_services/Navigation.service';
  import React, { useState } from 'react';
import NavigationService from '../../_services/Navigation.service';
  
  export const loggedIn = data => ({
    type: AUTH_LOGGED_IN,
    payload: data,
  });
  
  export const clearLoginErrorMessage = () => ({
    type: AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
  });
  
  export const errorLogIn = errorMessage => ({
    type: AUTH_ERR_LOG_IN,
    payload: errorMessage,
  });
  
  export const loggingIn = () => ({
    type: AUTH_LOGGING_IN,
  });
  
  export const loggedOut = () => ({
    type: AUTH_LOGOUT,
  });
  
  export const logout = () => async (dispatch, getState) => {
    
    await userService.logout(getState).then((res) => {
      dispatch(loggedOut());
    }).catch((err) => { });
  };
  
  export const login =  (username, password) => (dispatch, props) =>{
    dispatch(loggingIn());
    userService.login(username, password).then(async (res) => {
      dispatch(loggedIn(res.data));
     dispatch(clearLoginErrorMessage())
      NavigationService.navigate('SecuredScreen')

  
    }).catch((err) => {
      dispatch(errorLogIn(errorParser.parseLoginError(err).message));
      console.log(err);
    });
  };
  

  export const changepassword =  (user_id,current_password, password,confirm_password) => (dispatch, props) =>{
    dispatch(clearLoginErrorMessage())
    dispatch(Changepasswordloading());
    userService.changepassword(user_id,current_password, password, confirm_password).then(async (res) => {
      dispatch(Changepasswordsuccess(res.data));
 
    }).catch((err) => {
      dispatch(Changepassworderror(errorParser.parseLoginError(err).message));
      console.log(err);
    });
  };


  export const getbalance =  (user_id) => (dispatch, props) =>{
  //  dispatch(clearLoginErrorMessage())
    dispatch(getbalanceloading());
    userService.GetBalance(user_id).then(async (res) => {
      dispatch(getbalancesuccess(res.data));
 //  console.log(res.data);
    }).catch((err) => {
       dispatch(getbalanceerror(errorParser.parseLoginError(err).message));
      console.log(err);
    });
  };

  export const Changepasswordloading = ()=>({

    type:CHANGE_PASSWORD_LOADING,
    
  });

  export const Changepassworderror = (data)=>({

    type:CHANGE_PASSWORD_ERROR,
    payload:data
  });

  export const Changepasswordsuccess = (data)=>({
    type:CHANGE_PASSWORD_SUCCESS,
    payload:data
  });

  /////////////////
  export const getbalanceloading = ()=>({

    type:GET_BALANCE_LOADING,
    
  });



  export const getbalancesuccess = (data)=>({
    type:GET_BALANCE_SUCCESS,
    payload:data
  });


  export const getbalanceerror = (data)=>({
    type:GET_BALANCE_ERROR,
    payload:data
  });