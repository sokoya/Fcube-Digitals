//Import React
import React, {useState, useCallback } from 'react';
import {widthPercentageToDP as wp ,  heightPercentageToDP as hp} from 'react-native-responsive-screen'
//Import all required component
import { View, Text,TextInput,Keyboard, TouchableOpacity,StyleSheet,  SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//import { useDispatch, useSelector } from 'react-redux';
//import { UpdateUserPassword } from '../../Redux/Actions/Athentication.action';
//import Loader from '../Components/Loader';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useDispatch, useSelector } from 'react-redux';
import { ValidateEmptyField, ValidatePassword } from '../../_helper/Validation';
import { changepassword } from '../../Redux/Actions/Athentication.action';
import Loader from '../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';

import MonthPicker from 'react-native-month-year-picker';
const ChangepasswordScreen = (props) => {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const[bd,setbd] = useState(new Date());

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
    
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  const getParsedDate = (date) =>{
    date = String(date).split(' ');
    var year = String(date[3])
    var month = String(date[1])
  var result = (month + "-"+ year);
 return result;
  }

  console.log(getParsedDate(date))
  let [oldPassword, setoldPassword] = useState('');
  let [newPassword, setnewPassword] = useState('');
  let [confirmPassword, setconfirmPassword] = useState('');
 
  let [errortext, setErrortext] = useState('');

const dispatch = useDispatch();

const loading =useSelector(state=>state.auth.Changepasswordloading);
const success =useSelector(state=>state.auth.Changepasswordsuccess);
const errorMgs =useSelector(state=>state.auth.errorMessage)


const    Hide= ()=>{


  props.navigation.navigate('LoginScreen'); 
 
 }
  const handleSubmitPress = async () => {
    setErrortext('');
   const Response =   ValidateEmptyField(" Current Password",oldPassword);
   if(Response.isError== true){
  
    setErrortext(Response.Errormgs);
    return;

   }
   const Response1 =   ValidateEmptyField("New Password",newPassword);
   if(Response1.isError== true){
     
    setErrortext(Response1.Errormgs);
    return;

   }
   const Response2 =   ValidateEmptyField("Confirm Password",confirmPassword);
   if(Response2.isError== true){
     
    setErrortext(Response2.Errormgs);
    return;

   }



    if(newPassword !== confirmPassword){
      setErrortext('Password Do Not Match')
      return false
    }

    const id = await AsyncStorage.getItem('id')
            dispatch(changepassword(id,oldPassword,newPassword,confirmPassword))
     success?  setTimeout(
     
      async () => { 
   
        props.navigation.navigate('LoginScreen'); 
  
    }, 5000):''

  }
  global.currentScreenIndex = 'PasswordScreen';
  return (
    <View style={styles.mainBody}>


<SafeAreaView>
      <Text>Month Year Picker Example</Text>
      
      <TouchableOpacity onPress={() => showPicker(true)}>
        <Text>OPEN {getParsedDate(date)}</Text>
      </TouchableOpacity>
      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
        
         
        />
      )}
    </SafeAreaView>
<Loader message="Updating Your Security Settings " loading={loading}/>

      
      <Text style={{ fontSize: 20, textAlign:"center", marginTop:hp('5'),marginBottom:hp('5') }}>Security Settings </Text>
    
<Text style={{textAlign:'center', color:'red'}}>{errortext}{errorMgs}</Text>
      <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={oldPassword => setoldPassword(oldPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Enter Old Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>


            <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={UserPassword => setnewPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Enter New Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>

            <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={UserPassword => setconfirmPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Confirm New Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>
 
            <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Change Password</Text>
            </TouchableOpacity></View>


            <View>
    <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'green'}, 
    }}
      show={success}
      
      showProgress={true}
      useNativeDriver={true}
    
      customView={ <View>
        <Text>
          <Feather 
        style={{color:'green', padding:10}} 
                   name="check-circle"
                   color="green"
                   size={50}
             />
              </Text>
              
              </View>}
      message="Update Successfull"
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={true}
    
      fontSize = {20}
      messageStyle= {{  color:'green', textAlign:'center', fontSize:18, padding:10}}
      titleStyle={{fontSize:25, padding:0, margin:0}}
      
    
      contentContainerStyle={{width:400 }}
      cancelText="No, cancel"
      confirmText="OK, Proceed"
      confirmButtonColor="green"

      onConfirmPressed={() => {
        Hide()
      }}
    />
    </View>
    </View>
  );
};
export default ChangepasswordScreen;


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
   width:wp('100'),
   backgroundColor: 'white',
   
  },
  SectionStyle: {
    width:wp('90'),
    height:hp('7'),
    backgroundColor: 'white',
    margin:wp('5')
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    
  },
  inputStyle: {
  
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    width:wp('77'),
    height:hp('7'),
    borderColor: 'black',
  },
  icon: {
    width:wp('13'),
   height:hp('7'),
    color: 'black',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    borderWidth: 0.5,
    paddingTop:10,
    padding:10,
    
    borderColor: 'black',
  },
  registerTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    backgroundColor: '#282828',
    borderWidth: 0,
    color: '#FFFFFF',
    borderRadius:10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
  textAlign:"center",
  padding:hp('1.5'),
  borderRadius:10,
    fontSize: 14,
  },
});
