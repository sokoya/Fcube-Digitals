import React, { Component }  from "react";
import { View, Text, StyleSheet,  TextInput,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    ToastAndroid, } from "react-native";
    import Feather from 'react-native-vector-icons/Feather';
import Loader from "../../Component/Loader";
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from "react-redux";
import {login, clearLoginErrorMessage} from "../../Redux/Actions/Athentication.action";
import { ValidateEmptyField } from '../../_helper/Validation';
import SuccessAlert from "../../Component/SuccessAlert";


class ForgotpasswordScreen extends   Component{

    constructor(props){

        super(props)

    };


    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
     
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };
     
      
    
     state = {
        showAlert: false,
      PhoneError:'', 
      phoneHasError:false,
      passwordHasError:false,
      userPhone:'',
      userPassword:'',
      ErrorMgs:'' ,
      passwordError:''};
    
      showErrorToast= (mgs)=>{

        ToastAndroid.showWithGravityAndOffset(mgs,ToastAndroid.LONG, ToastAndroid.CENTER, 25,50);
      };
      signInAsync = async () => {
    Alert.alert("hi")
      //  const { loading, loginSuccess,loginError, errortext} = this.props;
    
        this.props.navigation.navigate('ResetpasswordScren');
         try{
          this.props.clearLoginErrorMessage();
          this.setState({phoneHasError:false});
          this.setState({passwordHasError:false});
          this.setState({PhoneError:''});
          this.setState({passwordError:''});
          this.setState({ErrorMgs:''});
          const { userPhone, userPassword } = this.state;
      
       
          if(ValidateEmptyField('Phone Number',userPhone).isError === true){
            this.setState({phoneHasError:true});
          this.setState({PhoneError:ValidateEmptyField("Phone Number",userPhone).Errormgs})  
         this.showErrorToast(ValidateEmptyField("Phone Number",userPhone).Errormgs)
            return false;
        }
          if(ValidateEmptyField("Password",userPassword).isError === true) {
            this.setState({passwordHasError:true});
            this.setState({passwordError:ValidateEmptyField("Password",userPassword).Errormgs})  
            this.showErrorToast(ValidateEmptyField("Password",userPassword).Errormgs)
           return false;
          }
          this.props.navigation.navigate("SecuredScreen")
          await this.props.login(userPhone, userPassword);
     
       //  this.props.loginSuccess? this.props.navigation.navigate("SecuredScreen"):this.props.navigation.navigate("RegisterScreen");
          
        
         }
         catch(error){
      
      
          
            }
        };
      
           render(){
      
return(
       
    <View style={styles.mainBody}>
      <Loader message='Retriving Your Email' loading={false} />

      <Text style={{color:'red', fontSize:22,}}>  {this.props.errortext}  </Text>
     
      <View keyboardShouldPersistTaps="handled">
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                
                
                }}
              />
            </View>

            <View>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Account Recovery
                </Text>

            </View>
            <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"column"}} >
              
   
              <View style={{flex:1, flexDirection:"row"}} >
            <Feather
                        name="mail"
                        color="#05375a"
                        size={20}
                   style={[styles.icon,  this.state.phoneHasError ? styles.hasError : '']} />
              <TextInput
              style={[ styles.inputStyle, this.state.phoneHasError ? styles.hasError : '']}
           
                onChangeText={Phone => this.setState({userPhone:Phone})}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter Email " 
                placeholderTextColor="grey"
                autoCapitalize="none"
               
             
                blurOnSubmit={false}
              />
              </View>
              <Text style={{color:'red', marginTop:60, marginBottom:20}}>{this.state.PhoneError} </Text>
            </View>

            </View>
          
        
            <TouchableOpacity
            onPress={()=> this.signInAsync()}
              style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Find My Account</Text>
            </TouchableOpacity>
  
          </KeyboardAvoidingView>
        </View>
      </View>
   
     
      <View style={styles.container}>

 
        <AwesomeAlert style={{

          modalContainer:{backgroundColor:'red'}, 
        }}
          show={this.state.showAlert}
          showProgress={true}
          useNativeDriver={true}
       
          customView={ <View>
            <Text>
              <Feather 
            style={{color:'red', padding:10}} 
                       name="alert-circle"
                       color="#05375a"
                       size={50}
                 />
                  </Text>
                  </View>}
          message={this.state.ErrorMgs}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
        
          fontSize = {20}
          messageStyle= {{  color:'red', fontSize:18, padding:10}}
          titleStyle={{fontSize:25, padding:0, margin:0}}
          
        
          contentContainerStyle={{width:400 }}
          cancelText="No, cancel"
          confirmText="OK, Close"
          confirmButtonColor="red"
        
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    </View>
 
)

    };

}

function mapStateToProps(state){
 
  return {
    loading:state.auth.loggingIn,
    errortext:state.auth.errorMessage,
    loginSuccess:state.auth.loginsuccess,
    loginError:state.auth.loginError
  
  };
  
      }
export default ForgotpasswordScreen;
const Styles = StyleSheet.create({
    Container:{
        flex:1, flexDirection:"column",alignItems:"center"
    },
    Row:{
    height:500
    },
    Nextbutton:{ backgroundColor:"red", width:380, padding:15, borderRadius:10,marginTop:30},
    TextInput:{ borderWidth:0.5, width:280, padding:5, borderRadius:5},
    RowFlex:{flexDirection:"row"},
    PickerStyle:{borderWidth:0.5, width:100,marginRight:5,borderRadius:5},
    hasError:{ borderColor:'red',borderWidth:1},
    OPacity:{opacity:0.5}
    
    
    
    });

    
const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignItems:'center',
      
    },
    SectionStyle: {
      flexDirection: 'row',
      width:350,
      height: 40,
      marginBottom:20,
      
    },
    buttonStyle: {
      backgroundColor: '#fec107',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: 'red',
      paddingTop:5,
      alignItems: 'center',
      borderRadius: 10,
      height:50,
      marginTop: 80,
     
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
      height:60,
      borderWidth: 0.5,
      borderLeftWidth:0,
      borderTopRightRadius:5,
      borderBottomRightRadius:5,
      width:310,
      borderColor: 'black',
    },
    icon: {
     width:50,
      color: 'black',
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
      borderWidth: 0.5,
      paddingTop:15,
      height:60,
      padding:10,
      
      borderColor: 'black',
    },
    registerTextStyle: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },Registerbutton:{ textAlign:'center', marginTop:20,
    backgroundColor:'#282828',color:"white", height: 50,
    alignItems: 'center',borderRadius: 10, paddingTop:5,
  },
  hasError:{ borderColor:'red',borderWidth:1},
  noError:{ borderColor:'green',borderWidth:1}
  });