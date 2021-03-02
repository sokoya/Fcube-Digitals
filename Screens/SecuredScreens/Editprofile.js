
import React, { Component, useEffect, useState } from "react";
import {widthPercentageToDP as wp ,  heightPercentageToDP as hp} from 'react-native-responsive-screen'
//Import all required component
import { View, Text,TextInput,Keyboard, TouchableOpacity,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';
import { clearLoginErrorMessage, GetloginUser, UpdateUser } from '../../Redux/Actions/Athentication.action';
//import Loader from "../Components/Loader";
import { validateEmail, ValidateEmptyField } from "../../_helper/Validation";
import AsyncStorage from "@react-native-community/async-storage";

const EditprofileScreen = (props)=>{

  const [Phone, setPhone] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  /////////////////

  const [PhoneError, setPhoneError] = useState('');
  const [FirstNameError, setFirstNameError] = useState('');
  const [LastNameError, setLastNameError] = useState('');
  const [EmailError, setEmailError] = useState('');
  /////////////////////////////////

  const [phoneHasError, setPhoneHasError] = useState(false);
  const [FirstNameHasError, setFirstNameHasError] = useState(false);
  const [LastNameHasError, setLastNameHasError] = useState(false);
  const [EmailHasError, setEmailHasError] = useState(false);
  ////////////////////
  
  const dispatch = useDispatch();

const User= useSelector(state=>state.auth.user);

const loading =useSelector(state=>state.auth.userupdateloading);
const success =useSelector(state=>state.auth.userupdatesuccess);
const errorMgs =useSelector(state=>state.auth.errorMessage);

const usersuucess =useSelector(state=>state.auth.loginsuccess);

useEffect( () => {

  dispatch(clearLoginErrorMessage())
  //dispatch(GetloginUser());
    const getuser= async ()=>{
        const us = await AsyncStorage.getItem('userName');
      const user = await AsyncStorage.getItem('user');
   
      const User = JSON.parse(user);
 console.log(User)
  setFirstName(User.name);
  setEmail(User.email);
  setLastName(User.LastName);
  setPhone(User.phone)
    }

    getuser();


}, [dispatch])
const    Hide= ()=>{

  // this.setState({showsuccess:false})
   
   props.navigation.navigate('First');
   props.navigation.navigate('HomeScreen');
 //  NavigationService.navigate('First')
   
 
 }

 const handleEmail =(value)=>{
 setEmailError('')
 setEmailHasError(false)
  const EResponse1 = validateEmail(value);
  if(EResponse1.isError === true){
    
    setEmailError(EResponse1.Errormgs)
  setEmailHasError(true)
    return false;
  }
setEmail(value)
}
 const handlefirtname=(firstname)=>{
  setFirstNameError('')
  setFirstNameHasError(false)
  const Response1 = ValidateEmptyField('FirstName',firstname);
  if(Response1.isError === true){
    
    setFirstNameError(Response1.Errormgs);
  setFirstNameHasError(true)
    return false;
  }

 setFirstName(firstname)
};

const handlelastname=(value)=>{
 setLastNameError('')
  setLastNameHasError(false)
  const Response = ValidateEmptyField('Last Name',value);
  if(Response.isError === true){
    
    setLastNameError(Response.Errormgs);
   setLastNameHasError(true);
    return false;
  }

setLastName(value)

};

const SaveUpdate = ()=>{

    setEmailError('')
    setEmailHasError(false)
    setLastNameError('')
    setLastNameHasError(false)
    setFirstNameError('')
     setFirstNameHasError(false)
     const EResponse4 = validateEmail(Email);
     if(EResponse4.isError === true){
       
       setEmailError(EResponse4.Errormgs)
     setEmailHasError(true)
       return false;
     }

 
     const Response = ValidateEmptyField('Last Name',LastName);
     if(Response.isError === true){
       
       setLastNameError(Response.Errormgs);
      setLastNameHasError(true);
       return false;
     }
     
     
     const Response3 = ValidateEmptyField('FirstName',FirstName);
     if(Response3.isError === true){
       
       setFirstNameError(Response3.Errormgs);
     setFirstNameHasError(true)
       return false;
     }
   
     dispatch(UpdateUser(FirstName, LastName,Email))


}

        return (
    
            <ScrollView style={styles.mainBody}>
             
          <View>
  
     
              <View style={styles.Profile}> 
          <Feather  name="user" color="black" size={30} />
          <Text style={{color:'black',fontSize:25, textAlign:"center", fontWeight:"bold" }}>{FirstName}</Text>
                          <Text style={{color:'black', fontSize:15 }}> Email: {Email}</Text>
                          <Text style={{color:'black', fontSize:15 }}> Phone Number: {Phone}</Text>


</View>
          </View>

             
          <Text style={{color:'red',textAlign:"center",padding:10}}></Text>
        
              <View style={styles.SectionStyle}>

              <Text style={styles.Label}>Email</Text>
                    <View style={{flex:1, flexDirection:"row"}} >
                    <Feather style={styles.icon} 
                                name="mail"
                            
                                color="#05375a"
                                size={25}
                          />
                      <TextInput style={styles.inputStyle}
                       
                        underlineColorAndroid="#FFFFFF"
                        //onChangeText={(email)=>handleEmail(email)}
                        onChangeText={em=>setEmail(em)}
                       // placeholder="Enter Old Password" //12345
                        placeholderTextColor="grey"
                        keyboardType="default"
                       value={Email}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                       
                      />
                      </View>
                   
                  
                    </View>
        
        
                    <View style={styles.SectionStyle}>
                    <Text style={styles.Label}>First Name</Text>
                    <View style={{flex:1, flexDirection:"row"}} >
                    <Feather style={styles.icon} 
                                name="user"
                                color="#05375a"
                                size={25}
                          />
                      <TextInput
        
                      
        style={styles.inputStyle}
                    
                        underlineColorAndroid="#FFFFFF"
                        //onChangeText={(fname)=>handlefirtname(fname)}
                        onChangeText ={fn=>setFirstName(fn)}
                       value={FirstName}
                        placeholderTextColor="grey"
                        keyboardType="default"
                       
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                     
                      />
                      </View>
                    </View>
        



                    <View style={styles.SectionStyle}>
                    <Text style={styles.Label}>Phone Number</Text>
                    <View style={{flex:1, flexDirection:"row"}} >
                    <Feather style={styles.icon} 
                                name="smartphone"
                                color="#05375a"
                                size={20}
                          />
                      <TextInput

                      
        style={styles.inputStyle}
                       
                        underlineColorAndroid="#FFFFFF"
                        editable={false}
                       // placeholder="Confirm New Password" //12345
                        placeholderTextColor="grey"
                        keyboardType="default"
                       value={Phone}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                       
                      />
                      </View>
                    </View>
         
                    <View style={[styles.SectionStyle,{marginBottom:200}]}>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={SaveUpdate}
                    >
                      <Text style={styles.buttonTextStyle}>Save Update</Text>
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

           </ScrollView>
          );
        };
    
        export default EditprofileScreen;
        
        
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
            height:hp('6'),
            borderColor: 'black',
          },
          icon: {
            width:wp('13'),
           height:hp('6'),
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
            backgroundColor: 'red',
            borderWidth: 0,
            color: '#FFFFFF',
            borderRadius:10,
            marginTop:30,
            marginBottom:100,
            
          },
          buttonTextStyle: {
            color: '#FFFFFF',
          textAlign:"center",
          padding:hp('2'),
          borderRadius:10,
            fontSize: 16,
          },
          Profile:{ alignContent:"center", alignItems:"center", backgroundColor:'lightgrey', padding:10},
          Label:{ marginBottom:10, fontSize:14}
        });


