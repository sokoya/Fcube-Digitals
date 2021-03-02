import React, { Component }  from "react";
import {  ScrollView, TouchableOpacity, } from "react-native-gesture-handler";
import { validateEmail, ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, Image, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Alert, ToastAndroid} from "react-native";
import Loader from "../../Component/Loader";
import SuccessAlert from "../../Component/SuccessAlert";
import ErrorAlert from "../../Component/ErrorAlert";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Register, CLEARMESSAGE} from "../../Redux/Actions/Register.action";
import { connect } from "react-redux";

class RegisterScreen extends   Component{

constructor(props){

        super(props)

    };

state = { showsuccess:false,
        userPhone:'',
        userPhoneError:'',
        userPhoneHasError:false,
        disable:true,
       ///////////////
       FullName:'',
       FullNameError:'',
       FullNameHasError:false,
       //////////////////////
       Email:'',
       EmailError:'',
       EmailHasError:false,
       /////////////////////
       Password:'',
       PasswordError:'',
       PasswordHasError:false,
       //////////////////////
       ConfirmPassword:'',
       ConfirmPasswordError:'',
       ComfirmPasswordHasError:false,
       //////////////////////
      
      };
handleFullname= (value)=>{

        this.setState({FullNameError:''});
        this.setState({FullNameHasError:false});
        const Response = ValidateEmptyField("Full Name",value);
        if(Response.isError === true){
           
            this.setState({FullNameError:Response.Errormgs});
            this.setState({FullNameHasError:true});
            return false;
        }

        this.setState({FullName:value})
      };
handleEmail= (value)=>{

        this.setState({EmailError:''});
        this.setState({EmailHasError:false});
        const Response1 =  validateEmail(value);
        if(Response1.isError === true){
           this.setState({EmailError:Response1.Errormgs});
            this.setState({EmailHasError:true});
            return false;
        }
     
        this.setState({Email:value})

      };

handlephone= (value)=>{
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        const Response3 =ValidatePhone(value);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        } else{
        this.setState({disable:false})
        this.setState({userPhone:value})}
      };
handlePassword= (value)=>{
        this.setState({PasswordError:''});
        this.setState({PasswordHasError:false});
        const Responsec = ValidateEmptyField("Password",value);
        if(Responsec.isError === true){
           
            this.setState({PasswordError:Responsec.Errormgs});
            this.setState({PasswordHasError:true});
            return false;

        }
        
        this.setState({Password:value})
      };

handleConfirmPassword= (value)=>{
        this.setState({ConfirmPasswordError:''});
        this.setState({ComfirmPasswordHasError:false});
        const Response6 = ValidateEmptyField("Confirm Password",value);
        if(Response6.isError === true){
           
            this.setState({ConfirmPasswordError:Response6.Errormgs});
            this.setState({ComfirmPasswordHasError:true});
            return false;

        }
        if(this.state.Password !== value){
            this.setState({ConfirmPasswordError:"Password Do Not Match"});
            this.setState({ComfirmPasswordHasError:true});
            this.setState({PasswordError:"Password Do Not Match"});
            this.setState({PasswordHasError:true});
            return false;

        }
        this.setState({PasswordError:''});
        this.setState({PasswordHasError:false});
        this.setState({ConfirmPassword:value})
      };

      showErrorToast= (mgs)=>{

        ToastAndroid.showWithGravityAndOffset(mgs,ToastAndroid.LONG, ToastAndroid.CENTER, 25,50);
      };
     
      HandleRegister = async ()=>{
   // await this.props.CLEARMESSAGE();
    const {userPhone} = this.state
    this.setState({userPhoneError:''});
    this.setState({userPhoneHasError:false});
    const Response3 =ValidatePhone(userPhone);
    if(Response3.isError === true){
      
      this.setState({userPhoneError:Response3.Errormgs});
      this.setState({userPhoneHasError:true});
      return false;
    } else{
      
      await this.props.Register(this.state.userPhone, this.state.Email, this.state.FullName, this.state.Password);
  this.props.register_suc? this.setState({showsuccess:true}):''
    }


};

Hide= async ()=>{

   await this.props.CLEARMESSAGE();
  this.props.navigation.navigate('LoginScreen');
 


}

    render(){
      const { loading, register_suc,register_fail, errortext} = this.props;
      
return(
   <ScrollView>
<View keyboardShouldPersistTaps="handled" style={Styles.Container}>

<KeyboardAvoidingView enabled>
<Text style={{color:'red', textAlign:'center', marginTop:5, fontSize:14}}>{this.props.errortext}</Text>



<Loader message=" Registering  Please wait ..... " loading = {this.props.loading} />


<View style={Styles.Row}>
<View style={{ alignItems: 'center' }}>
          <Image
          source={require('../../assets/logo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 10,
            }}
          />
        </View>
<Text style={{fontSize:15, marginBottom:5}}> Full Name</Text>
<View style={Styles.RowFlex}> 

<Feather
                        name="user"
                        color="#05375a"
                        size={20}
                   style={[Styles.icon,  this.state.FullNameHasError? Styles.hasError : '']} />
   <TextInput
          style={[Styles.TextInput, this.state.FullNameHasError? Styles.hasError:'']}
              onChangeText={name => this.setState({FullName:name})}
              onChangeText= {nam=>this.handleFullname(nam) }
              placeholder="Enter Full Name"
              placeholderTextColor="grey"
              autoCapitalize="none"
            
              returnKeyType="next"
         
            //  blurOnSubmit={false}
            />


</View>
<Text style={{color:"red"}}>{this.state.FullNameError}</Text>
</View>


<View style={Styles.Row}>

<Text style={{fontSize:15, marginBottom:5}}> Email</Text>
<View style={Styles.RowFlex}> 

<Feather
                        name="mail"
                        color="#05375a"
                        size={20}
                   style={[Styles.icon,  this.state.EmailHasError? Styles.hasError : '']} />
   <TextInput
          style={[Styles.TextInput, this.state.EmailHasError? Styles.hasError:'']}
              onChangeText={email => this.setState({Email:email})}
              onChangeText= {email=>this.handleEmail(email) }
              placeholder="Enter Email Address"
              placeholderTextColor="grey"
              autoCapitalize="none"
                keyboardType="email-address"
              returnKeyType="next"
         
            //  blurOnSubmit={false}
            />


</View>
<Text style={{color:"red"}}>{this.state.EmailError}</Text>
</View>


<View style={Styles.Row}>

<Text style={{fontSize:15, marginBottom:5}}> Phone Number</Text>
<View style={Styles.RowFlex}> 

<Feather
                        name="phone"
                        color="#05375a"
                        size={20}
                   style={[Styles.icon,  this.state.userPhoneHasError? Styles.hasError : '']} />
   <TextInput
          style={[Styles.TextInput, this.state.userPhoneHasError? Styles.hasError:'']}
              onChangeText={phone => this.setState({userPhone:phone})}
              onChangeText= {ph=>this.handlephone(ph) }
              placeholder="Enter Phone Number"
              placeholderTextColor="grey"
              autoCapitalize="none"
                keyboardType="numeric"
              returnKeyType="next"
         
             // blurOnSubmit={false}
            />


</View>
<Text style={{color:"red"}}>{this.state.userPhoneError}</Text>
</View>

<View style={Styles.Row}>

<Text style={{fontSize:15, marginBottom:5}}> Password</Text>
<View style={Styles.RowFlex}> 

<Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                   style={[Styles.icon,  this.state.PasswordHasError? Styles.hasError : '']} />
   <TextInput
          style={[Styles.TextInput, this.state.PasswordHasError? Styles.hasError:'']}
              onChangeText={password => this.setState({password:password})}
              onChangeText= {pw=>this.handlePassword(pw) }
              placeholder="Enter Password"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onSubmitEditing={Keyboard.dismiss}
            //  blurOnSubmit={false}
              secureTextEntry={true}
              returnKeyType="next"
         
              blurOnSubmit={false}
            />


</View>
<Text style={{color:"red"}}>{this.state.PasswordError}</Text>
</View>



<View style={Styles.Row}>

<Text style={{fontSize:15, marginBottom:5}}>Confirm Password</Text>
<View style={Styles.RowFlex}> 

<Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                   style={[Styles.icon,  this.state.ComfirmPasswordHasError? Styles.hasError : '']} />
   <TextInput
          style={[Styles.TextInput, this.state.ComfirmPasswordHasError? Styles.hasError:'']}
              onChangeText={cpw => this.setState({ConfirmPassword:cpw})}
              onChangeText= {confirmpw=>this.handleConfirmPassword(confirmpw) }
              placeholder="Enter Password"
              placeholderTextColor="grey"
              autoCapitalize="none" 
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              returnKeyType="next"
         
              blurOnSubmit={false}
            />


</View>
<Text style={{color:"red"}}>{this.state.ConfirmPasswordError}</Text>
</View>


<TouchableOpacity style={[Styles.Nextbutton, Styles.Row]} onPress={()=>this.HandleRegister()}>

    <Text style={{color:'white',textAlign:"center", fontSize:16}}> Register  </Text>
</TouchableOpacity>
</KeyboardAvoidingView>
</View>






<View>
    
     
    <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'green'}, 
    }}
      show={this.props.register_suc}
      
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
      message="Registration Successfull"
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
        this.Hide()
      }}
    />
    </View>

</ScrollView>

)

    };



};


function MapstateToProps(state){

  return{
     loading:state.reg.loading,
    errortext:state.reg.errormessage,
    register_suc:state.reg.register_suc,
    register_fail:state.reg.register_fail,
   
  
  }
}

export default connect( MapstateToProps, {Register, CLEARMESSAGE}) (RegisterScreen);

const Styles = StyleSheet.create({
    Container:{
        flex:1,  width:wp('100%'), alignItems:"center"
    },
    Row:{ width:wp('90%'),  
    },
    Nextbutton:{ backgroundColor:"#282828",padding:15, borderRadius:10,marginTop:wp('10%'),marginBottom:wp('10%')},
    TextInput:{ borderWidth:0.5, borderLeftWidth:0, width:wp('75%'),  padding:5,
      borderBottomRightRadius:5, borderTopRightRadius:5},
    RowFlex:{flexDirection:"row"},
    PickerStyle:{borderWidth:0.5, width:100,marginRight:5,borderRadius:5},
    hasError:{ borderColor:'red',borderWidth:1},
    OPacity:{opacity:0.5},
    icon: {
      width:wp('15%'),
         color: 'black',
         borderTopLeftRadius:5,
         borderBottomLeftRadius:5,
         borderWidth: 0.5,
         padding:15,
         borderColor: 'black',
       },
    
    
    
    });