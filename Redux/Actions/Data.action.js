import { errorParser } from "../../_services/apiErrorParser";
import { userService } from "../../_services/userService";
import { AIRTIME_VENDING_ERROR, AIRTIME_VENDING_LOADING, AIRTIME_VENDING_SUCCESS, BANK_TRANSFER_ERROR, BANK_TRANSFER_LOADING, BANK_TRANSFER_SUCCESS, CLEAR_ERROR, DATA_VENDING_ERROR, DATA_VENDING_LOADING, DATA_VENDING_SUCCESS, FETCH_AIRTIME_SUCCESS, FETCH_ELE_SUCCESS, FETCH_SUCCESS, FETCH_TV_SUCCESS, NOTIFICATION_SUCCESS, VERIFY_PAYSTACK_SUCCESS } from "../constants/index";
import { SetStartimeerror } from "./Satallite.action";


 export const GetMtndata = () => async (dispatch)=>{

    userService.GetdataPlan(8).then( async (response)=>{
     // console.log(response.data.message.details)
      dispatch(FethcData(response.data.message.details));
            
            })
            .catch((err)=>{
             
          
              console.log(err.message)
            });
 };

 export const GetAirtelndata = () =>  async (dispatch)=>{

  userService.GetdataPlan(7).then( async (response)=>{
    // console.log(response.data.message.details)
    dispatch(FethcData(response.data.message.details));
          
          })
          .catch((err)=>{
           
        
            console.log(err.message)
          });

 };

 export const GetGlodata = () =>  async (dispatch)=>{
  userService.GetdataPlan(6).then( async (response)=>{
    // console.log(response.data.message.details)
    dispatch(FethcData(response.data.message.details));
          
          })
          .catch((err)=>{
           
        
            console.log(err.message)
          });
 };

 export const GetEtisalatdata = () =>  async (dispatch)=>{
  userService.GetdataPlan(13).then( async (response)=>{
    // console.log(response.data.message.details)
    dispatch(FethcData(response.data.message.details));
          
          })
          .catch((err)=>{
           
        
            console.log(err.message)
          });
 };



 export const BuyAirtime=(network,user_id,amount,phone_number)=> async(dispatch)=>{
  dispatch(setAirtimeLoading())
  userService.BuyAirtime(network,user_id,amount,phone_number)
  .then( async (response)=>{
     //console.log(response.data.message.details)
    dispatch(setAirtimesuccess())
  })
  .catch((err)=>{
   // dispatch(setAirtimesuccess())
    dispatch(setAirtimeError(errorParser.parseLoginError(err).message))
  });

 };


 export const BuyData=(phone_number,network,plan,user_id)=> async(dispatch)=>{
    dispatch(setDataLoading())
  userService.Buydata(phone_number,network,plan,user_id) 
  .then( async (response)=>{
     console.log(response.data.message.details)
    dispatch(setDatasuccess())

  })
  .catch((err)=>{
   // dispatch(setDatasuccess())
     console.log(err);
    dispatch(setDataError(errorParser.parseLoginError(err).message))
  });

}


export const VerifyPaystack=(amount,reference,user_id)=> async(dispatch)=>{

userService.VerifyPaystack( amount,user_id, reference) 
.then( async (response)=>{
   dispatch(verifypaystacksuccess())
   console.log(response.data.message.details)


})
.catch((err)=>{

   console.log(err.response.data.message.description);

});

}

export const GetUserBalance=(user_id)=> async(dispatch)=>{

  userService.GetBalance(user_id) 
  .then( async (response)=>{
     console.log(response.data.message.details)
  
  
  })
  .catch((err)=>{
  dispatch(VerifyPaystack())
     console.log(err);
  
  });
  
  }

export const BankTransfer=(amount,bank,user_id)=> async(dispatch)=>{
     dispatch(BankTransferloading())
  userService.initiateBanktransfer(amount,user_id,  bank,) 
  .then( async (response)=>{
   //  console.log(response.data.message)
       dispatch(BankTransfersuccess())
  
  })
  .catch((err)=>{
  
    dispatch(BankTransfererror())
  
  });
  
  }

  export const  Notification =()=> async(dispatch)=>{

    userService.getnotification() 
    .then( async (response)=>{
  //   console.log(response.data.message[0].content)
     await  dispatch(notificationsuccess(response.data.message[0].content))
    
    })
    .catch((err)=>{
    
      // console.log(err);
    
    });
    
    }

    export const FetchAirtime=(network_type, user_id)=> async(dispatch)=>{

   userService.ListAirtime(network_type, user_id) 
   .then( async (response)=>{
      //console.log(response.data.message)
      dispatch(FethAirtime(response.data.message.details))
   
   })
   .catch((err)=>{
   
     dispatch(BankTransfererror())
   
   });
   
   }


   export const FetchElectricity=(network_type, user_id)=> async(dispatch)=>{

    userService.ListAirtime(network_type, user_id) 
    .then( async (response)=>{
    
       dispatch(Fethelectricity(response.data.message.details))
    
    })
    .catch((err)=>{
    
      dispatch(BankTransfererror())
    
    });
    
    }
   export const FetchTv=(network_type, user_id)=> async(dispatch)=>{

    userService.ListAirtime(network_type, user_id) 
    .then( async (response)=>{
     
       dispatch(FethTV(response.data.message.details))
    
    })
    .catch((err)=>{
    
      dispatch(BankTransfererror())
    
    });
    
    }

 export const FethcData = data =>({
     type: FETCH_SUCCESS,
     payload:data
 });

 export const FethAirtime = data =>({
  type: FETCH_AIRTIME_SUCCESS,
  payload:data
});

export const Fethelectricity = data =>({
  type: FETCH_ELE_SUCCESS,
  payload:data
});

export const FethTV = data =>({
  type: FETCH_TV_SUCCESS,
  payload:data
});

 export const setDataError = data =>({
  type: DATA_VENDING_ERROR,
  payload:data
});

export const setAirtimeError = data =>({
  type: AIRTIME_VENDING_ERROR,
  payload:data
});



export const setDataLoading = () =>({
  type: DATA_VENDING_LOADING
});


export const ClearErrorMgs = () =>({
  type: CLEAR_ERROR
});

export const setAirtimeLoading = () =>({
  type: AIRTIME_VENDING_LOADING
});


export const setDatasuccess = () =>({
  type: DATA_VENDING_SUCCESS
});

export const setAirtimesuccess = () =>({
  type: AIRTIME_VENDING_SUCCESS
});


//////////////////////

export const verifypaystacksuccess = () =>({
  type: VERIFY_PAYSTACK_SUCCESS
  
});

export const paystackError = () =>({
  type: VERIFY_PAYSTACK_SUCCESS
});

//////////////////////////

export const BankTransferloading = ()=>({

  type:BANK_TRANSFER_LOADING
})

export const BankTransfererror  = ()=>({
  type:BANK_TRANSFER_ERROR
})

export const BankTransfersuccess  = ()=>({
  type:BANK_TRANSFER_SUCCESS
})

export const notificationsuccess  = data=>({
  type:NOTIFICATION_SUCCESS,
  payload:data
})

