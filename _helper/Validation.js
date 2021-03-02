import React, { Component } from 'react'
import { Value } from 'react-native-reanimated';
import { isEmpty, isNumber } from 'validate.js';


export  const ValidatePhone = (PhoneNumber)=>{

    var pattern = /^1?(\d{11})/;

        if(isEmpty(PhoneNumber)){ 
    
             const response = { isError:true, Errormgs:" * Phone Number  is Required " }
            return response;
        }

 
        var result = pattern.test(PhoneNumber);
        if(result == false){ 

            const response = { isError:true, Errormgs:"* Phone Must Be Number and 11 Characters " }
            return response;
        }
    
        const response = { isError:false, Errormgs:null }
        return response;
    };

export const  validateEmail = (email) => {


    if(isEmpty(email)){ 
    
        const response = { isError:true, Errormgs:" * Email Address  is Required " }
       return response;
   }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
      var result =  re.test(email);

      if(result == false){ 
    
        const response = { isError:true, Errormgs:" * Pls Enter a Valid Email Address " }
       return response;
   }

   const response = { isError:false, Errormgs:null }
   return response;

      };


export const ValidatePassword = (password)=>{

    var Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z].{8,}$/
       if(isEmpty(password)){ 
    
        const response = { isError:true, Errormgs:" * Password  is Required " }
       return response;
      }


      var result = Pattern.test(password);
      if(result == false)
      {
        const response = { isError:true, Errormgs:" * Password  Must contain one Upper case Letters \n\ * Password  must contain one Lowercase Leter, \n\ * Password must Contain one Number \n * Password can Not Less than 8 Characters " }
        return response;

      }   

      const response = { isError:false, Errormgs:null }
      return response;

  }

export const ValidateString = (fieldName, value)=>{

    var Pattern = /^[a-zA-Z ]+$/
    if(isEmpty(value)){ 
    
        const response = { isError:true, Errormgs:" * " + fieldName + " is Required " }
       return response;
      }

      if(Pattern.test(value)== false)
      {
        const response = { isError:true, Errormgs:" * " + fieldName + "  Must be Letters only " }
        return response;

      } 
    
      const response = { isError:false, Errormgs:null }
      return response;
  }
   
export const ValidateNumber =(fieldName, value)=>{

    var Pattern = /^[0-9 ]+$/
    if(isEmpty(value)){ 
    
        const response = { isError:true, Errormgs:" * " + fieldName + "  is Required " }
       return response;
      }

      if(Pattern.test(value)== false)
      {
        const response = { isError:true, Errormgs:" * " + fieldName + "  Must Digit only " }
        return response;

      }    
      const response = { isError:false, Errormgs:null }
      return response;

  }

export const ValidateEmptyField= (fieldName, Value)=>{

    if(isEmpty(Value)){ 
    
        const response = { isError:true, Errormgs:" * " + fieldName + "  is Required " }
       return response;
      } else{

        const response = { isError:false, Errormgs:null }
        return response;
  
      }



}  

