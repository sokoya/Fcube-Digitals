import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../_helper/config';

const headers = {
  'Accept-Language': 'es-ES,es;q=0.8',
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
  rejectUnauthorized: false
};

function login(username, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/login`, {
      username,
      password,
    }).then( async(response) => {
      // console.log(response.data.message.description.account_details)
     await  AsyncStorage.setItem('user', JSON.stringify(response.data.message.description.user))
     await  AsyncStorage.setItem('account', JSON.stringify(response.data.message.description.account_details))
     await  AsyncStorage.setItem('userName',response.data.message.description.user.name)
     await  AsyncStorage.setItem('id',response.data.message.description.user.id)
        .then( async() => {
          resolve(response);
        //  console.log(response.data.message.description)
          await  AsyncStorage.setItem('userName',response.data.message.description.user.name);
          await  AsyncStorage.setItem('id',response.data.message.description.user.id);
        });
    }).catch(err => reject(err));
  });
}

function Register(phone, email, fullname, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/signup`, {
      phone, email, fullname, password
    }).then( async(response) => {
      resolve(response)
      // console.log(response.data)
    
    }).catch(err => reject(err));
  });
}

async function logout(getState) {
  return new Promise(async (resolve, reject) => {
    const currentState = await getState();
    const { token } = currentState.auth;
    axios.post(`${API_URL}/logout`, {}, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      resolve(response);
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('user');
    }).catch(err => reject(err));
  });
}

async function CreateUser(phone, email, fullname, password){
  return new Promise((resolve, reject)=>{
axios.post(`${API_URL}/signup`,{phone, email, fullname, password})
.then( async(response) => {

  console.log(response.data)
}).catch(err => reject(err));
 });

};

async function GetdataPlan(network_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/get_plans`,{network_id})
    .then(async(response)=> {
     // console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function Validatemultichoice(multichoice_type,smart_card_no){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/validate/multichoice`,{multichoice_type,smart_card_no})
    .then(async(response)=> {
     // console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

}

async function multichoiceVending(multichoice_type,smart_card_no,product_code,productCode,user_id,amount){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/multichoice/payment`,{multichoice_type,smart_card_no,product_code, amount, productCode,user_id})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err =>{ reject(err); console.log(err) });


});


};

async function StartimesVending(multichoice_type,smart_card_no,product_code,productCode,user_id,amount){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/startimes/payment`,{multichoice_type,smart_card_no,product_code, amount, productCode,user_id})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err =>{ reject(err); console.log(err) });


});


};
async function Validatestartimes(smart_card_no){              

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/validate/startimes`,{smart_card_no})
    .then(async(response)=> {
     //console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function Validateie(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/ie`,{meter_type, meter_number})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function Validateeko(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/ekedc`,{meter_type, meter_number})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};


async function GetTransaction(user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/transactions`,{user_id})
    .then(async(response)=> {
     // console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function ValidateAbuja(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/abuja`,{meter_type, meter_number})
    .then(async(response)=> {
     // console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};
async function ValidateIbadan(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/ibedc`,{meter_type, meter_number})
    .then(async(response)=> {
    //  console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function ValidateEnugu(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/eedc`,{meter_type, meter_number})
    .then(async(response)=> {
    //  console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function ValidateePh(meter_type, meter_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/validate/phed`,{meter_type, meter_number})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err),  );


});

};


async function Buydata(phone_number,network,plan,user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/data`,{user_id,network,plan,network,phone_number},headers)
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err =>{ reject(err); console.log(err.response.data) });


});


};

async function BuyAirtime(network,user_id,amount,phone_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/airtime`,{network, amount,phone_number,user_id},headers)
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err =>{ reject(err); });


});


};


async function VendElectricity(network,user_id,amount,phone_number){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/airtime`,{network, amount,phone_number,user_id},headers)
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err =>{ reject(err); });


});


};



async function PayAbuja(meter_type, meter_number, amount,user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/a22c`,{meter_type, meter_number, amount,user_id})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};
async function PayIbadan(meter_type, meter_number, amount,user_id,product_code){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/ibedc`,{meter_type, meter_number, amount,user_id,product_code})
    .then(async(response)=> {
    //  console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function PayEnugu(meter_type, meter_number, amount,user_id, product_code){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/eedc`,{meter_type, meter_number, amount,user_id, product_code})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function PayPh(meter_type, meter_number, amount,user_id,product_code){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/phed`,{meter_type, meter_number,amount,user_id,product_code})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err) );


});

};

async function Payie(meter_type, meter_number, amount,user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/ie`,{meter_type, meter_number, amount,user_id})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function Payeko(meter_type, meter_number, amount,user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/electricity/payment/ekedc`,{meter_type, meter_number, amount,user_id})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};


async function GetBalance(user_id){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/account`,{user_id})
    .then(async(response)=> {
    //  console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function  VerifyPaystack(amount,user_id, reference){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/verify_paystack`,{amount,reference,user_id,})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};


async function initiateBanktransfer(amount,user_id, bank){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/initiate_bank_transfer`,{amount,user_id, bank})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};


async function getnotification(){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/notifications`,{})
    .then(async(response)=> {
    //  console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

async function changepassword(user_id,current_password,
  password,
  confirm_password){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/change_password`,{user_id,current_password,
      password,
      confirm_password})
    .then(async(response)=> {
      console.log(response.data.message)
      resolve(response);
    })
    .catch(err => reject(err));


});

};

export const userService = {
  login,Validatemultichoice,Validatestartimes, Validateie,initiateBanktransfer,getnotification,
  logout, ValidateAbuja,multichoiceVending,PayEnugu, Payeko, PayPh, PayIbadan, Payie, PayAbuja,
  CreateUser,StartimesVending,BuyAirtime, Buydata,GetBalance,VerifyPaystack,changepassword,
GetdataPlan, ValidateePh, ValidateIbadan, ValidateEnugu, Validateeko, GetTransaction, Register
};
