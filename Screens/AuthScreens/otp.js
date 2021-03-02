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

class otpScreen extends Component{

  constructor(props){

    super(props);
  
   
  }

  state = {
    otp:'',

 
    otpError:'',

     /////////////
     otpHasError:false,

  
  };

  handlephone= (value)=>{
    this.setState({otpError:''});
    this.setState({otpHasError:false});
    const Response3 =ValidateEmptyField("OTP ",value);
    if(Response3.isError === true){
      
      this.setState({otpError:Response3.Errormgs});
      this.setState({otpHasError:true});
      return false;
    } 

  };


Next =()=>{
  this.props.navigation.navigate('RegisterScreen');
const {otp} = this.state
this.setState({otpError:''});
this.setState({otpHasError:false});
const Response3 =ValidateEmptyField("OTP ",otp);
if(Response3.isError === true){
  
  this.setState({otpError:Response3.Errormgs});
  this.setState({otpHasError:true});
  return false;
} else{this.props.navigation.navigate('RegisterScreen');}


};


render(){
return (

    <View style={Styles.SectionStyle}>
      <View style={{height:100}}><RegistrationProgressbar activestep={1}/></View>
      
          <View>
          <View style={{ alignItems: 'center',marginBottom:50 }}>
          <Image
           source={require('../../assets/logo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
                <Text style={{  fontSize:20, marginBottom:50}}>
                    Please Help us Verify Your Account 
                </Text>
            </View>

     
        <KeyboardAvoidingView enabled>
          <View style={Styles.FormGroup}>

  <Text style={{color:'red', padding:10}}>

      Pls Enter the OTP sent to Your Phone Email
  </Text>

            <TextInput
              style={[Styles.TextInpute, this.state.otpHasError? Styles.hasError:'']}
              onChangeText={otp => this.setState({otp:otp}) }
              
              placeholder="Enter OTP"
              placeholderTextColor="grey"
              keyboardType="numeric"
              returnKeyType="next"
         
              blurOnSubmit={false}
            />
            <Text style={{color:'red'}}>{this.state.otpError}</Text>
          </View>


          <View style={Styles.FormGroup}>
          <TouchableOpacity
            style={Styles.Nextbutton}
            onPress={this.Next}
         >
            <Text style={{color:'white', textAlign:"center"}}>Verify My OTP</Text>
          </TouchableOpacity>

          </View>


          </KeyboardAvoidingView>

    </View>




)
}

};
export default otpScreen;

 const Styles =  StyleSheet.create({
    SectionStyle: {
      flex:1, flexDirection:"column",alignItems:"center"},
Nextbutton:{ backgroundColor:"red", width:380, padding:15, borderRadius:5, marginTop:80},
TextInpute:{ borderColor:'grey', width:380, padding:10, borderRadius:5, borderWidth:0.5},
hasError:{ borderColor:'red',borderWidth:1},
FormGroup:{ },
buttonStyle: {
    backgroundColor: 'red',
    
    color: 'white',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    margin:10
    

  },

});