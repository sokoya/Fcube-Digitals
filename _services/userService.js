/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from '../_helper/config';

const headers = {
  'Accept-Language': 'es-ES,es;q=0.8',
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
  rejectUnauthorized: false,
};

function login(username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/login`, {
        username,
        password,
      })
      .then(async (response) => {
        // console.log(response.data.message.description.account_details)
        await AsyncStorage.setItem(
          'user',
          JSON.stringify(response.data.message.description.user),
        );
        await AsyncStorage.setItem(
          'account',
          JSON.stringify(response.data.message.description.account_details),
        );
        await AsyncStorage.setItem(
          'userName',
          response.data.message.description.user.name,
        );
        await AsyncStorage.setItem(
          'id',
          response.data.message.description.user.id,
        ).then(async () => {
          resolve(response);
          //  console.log(response.data.message.description)
          await AsyncStorage.setItem(
            'userName',
            response.data.message.description.user.name,
          );
          await AsyncStorage.setItem(
            'id',
            response.data.message.description.user.id,
          );
        });
      })
      .catch((err) => reject(err));
  });
}

function Register(phone, email, fullname, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/signup`, {
        phone,
        email,
        fullname,
        password,
      })
      .then(async (response) => {
        resolve(response);
        // console.log(response.data)
      })
      .catch((err) => reject(err));
  });
}
async function logout(getState) {
  return new Promise(async (resolve, reject) => {
    const currentState = await getState();
    const {token} = currentState.auth;
    axios
      .post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      .then(async (response) => {
        resolve(response);
        await AsyncStorage.removeItem('userName');
        await AsyncStorage.removeItem('user');
      })
      .catch((err) => reject(err));
  });
}

async function CreateUser(phone, email, fullname, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/signup`, {phone, email, fullname, password})
      .then(async (response) => {
        console.log(response.data);
      })
      .catch((err) => reject(err));
  });
}

async function GetdataPlan(network_id) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/get_plans`, {network_id})
      .then(async (response) => {
        // console.log(response.data.message)
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function Validatemultichoice(type, account) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/validate_multichoice`, {type, account})
      .then(async (response) => {
        console.log(response.data.message.details.productToken);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function multichoiceVending(
  multichoice_type,
  smart_card_no,
  productToken,
  productCode,
  user_id,
  plan,phone
) {

  console.log(multichoice_type)
  console.log(smart_card_no)
  console.log(productCode)

  console.log(productToken)

  console.log(user_id)
  console.log(plan)
  console.log(phone)



  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/pay_multichoice`, {
        multichoice_type,
        smart_card_no,
        productToken,
        plan,
        productCode,
        user_id,
        phone
      })
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
}

async function StartimesVending(
  phone,
  plan,
  productToken,
  productCode,
  user_id,
  cycle,
) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/pay_startimes`, {
        phone,
        plan,
        productToken,
        cycle,
        productCode,
        user_id,
      })
      .then(async (response) => {
      //  console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
}
async function Validatestartimes(account, amount) {
  //alert(account) amou

  amount ="0";
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/validate_startimes`, {account, amount})
      .then(async (response) => {
        console.log(response.data.message)
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function ValidateElectricity(meter_type, meter_number, disco, amount) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/validate_electricity`, {
        meter_type,
        meter_number,
        disco,
        amount,
      })
      .then(async (response) => {
        //console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}


async function GetTransaction(user_id) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/transactions`, {user_id})
      .then(async (response) => {
        // console.log(response.data.message)
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}


async function Buydata(phone_number, network, plan, user_id) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/data`,
        {user_id, network, plan, phone_number},
        headers,
      )
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
        console.log(err.response.data);
      });
  });
}

async function BuyAirtime(network, user_id, amount, phone_number) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/airtime`,
        {network, amount, phone_number, user_id},
        headers,
      )
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function Pay_Electricity(
  user_id,
  phone,
  productCode,
  productToken,
) {

  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/pay_electricity`,
        { phone, user_id, productCode, productToken},
        headers,
      )
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function GetBalance(user_id) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/account`, {user_id})
      .then(async (response) => {
        //  console.log(response.data.message)
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function VerifyPaystack(amount, user_id, reference) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/verify_paystack`, {amount, reference, user_id})
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function initiateBanktransfer(amount, user_id, bank) {
  return new Promise((resolve, reject) => {
    console.log(amount);
    console.log(user_id);
    console.log(bank);
    axios
      .post(`${API_URL}/initiate_bank_transfer`, {amount, user_id, bank})
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function ListAirtime(network_type, user_id) {
  return new Promise((resolve, reject) => {

    axios
      .post(`${API_URL}/networks`, {network_type})
      .then(async (response) => {
         resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function getnotification() {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/notifications`, {})
      .then(async (response) => {
        //  console.log(response.data.message)
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

async function changepassword(
  user_id,
  current_password,
  password,
  confirm_password,
) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/change_password`, {
        user_id,
        current_password,
        password,
        confirm_password,
      })
      .then(async (response) => {
        console.log(response.data.message);
        resolve(response);
      })
      .catch((err) => reject(err));
  });
}

export const userService = {
  login,
  Pay_Electricity,
  Validatemultichoice,
  Validatestartimes,
  initiateBanktransfer,
  getnotification,
  logout,
ListAirtime,
  multichoiceVending,
 
  CreateUser,
  StartimesVending,
  BuyAirtime,
  Buydata,
  GetBalance,
  VerifyPaystack,
  changepassword,
  GetdataPlan,

  GetTransaction,
  Register,
  ValidateElectricity,
};
