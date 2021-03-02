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

class ResetPasswordScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            userPhone:'',
    userEmail:'',
    FirstName:'',
    LastName:'',
    userPassword:'',
    ConfirmPassword:'',
    errortext:'',
    ErrorMgs:'',
    showalert:false,
  
    userPhoneError:'',
    userEmailError:'',
   
    FirstNameError:'',
    LastNameError:'',
     /////////////
     userPhoneHasError:false,
     userEmailHasError:false,
     userPasswordHasError:false,
     userPasswordError:'',
     cPasswordHasError:false,
     cPasswordError:'',
     FirstNameHasError:false,
     LastNameHasError:false,
     showalert:false
        };
    }

    handlepassword=(value)=>{
        this.setState({userPasswordError:''});
        this.setState({userPasswordHasError:false});
        const Response4 = ValidatePassword(value);
        if(Response4.isError === true){
          
          this.setState({userPasswordError:Response4.Errormgs});
          this.setState({setUserPasswordHasError:true});
          return false;
          
        }
    
        this.setState({userPassword:value})
      };
    
      handlecpawword=(value)=>{
        this.setState({cPasswordError:''});
        this.setState({cPasswordHasError:false});
        if(this.state.userPassword !== value){
    
          this.setState({cPasswordError:"Password Do Not Match"});
          this.setState({setcPasswordHasError:true});
         
         return false;
      }
    
      this.setState({ConfirmPassword:value})
    }
        HandleSubmit=()=>{
        const{userPassword}= this.state;
            const Response4 = ValidatePassword(userPassword);
            if(Response4.isError === true){
              
              this.setState({userPasswordError:Response4.Errormgs});
              this.setState({userPasswordHasError:true});
              return false;
              
            };
        
            
        
            if(this.state.userPassword !== this.state.ConfirmPassword){
        
              this.setState({userPasswordError:"Password Do Not Match"});
              this.setState({setUserPasswordHasError:true});
             
             return false;
            };

            this.props.navigation.navigate("HomeScreen")
        }
    

    render(){

        return(

            <View style={Styles.Container}>
            <View style ={Styles.Row}>
         

            <View style={{ alignItems: 'center' }}>
              <Image
               source={require('../../assets/logo.png')}
                style={{
                  width: '100%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            </View>
            <View style ={Styles.Row}></View>
            <View style ={Styles.Row}>
            <View style={Styles.FormGroup}>

<Text style={{color:'red'}}>
        {this.state.userPasswordError}
      </Text>
  <TextInput
    style={[Styles.TextInput, this.state.userPasswordHasError? Styles.hasError:'']}
    onChangeText={pwd =>  this.setState({userPassword:pwd})}
    onChangeText={pwd=> this.handlepassword(pwd)}
    placeholder="Enter Password"
    placeholderTextColor="grey"

   secureTextEntry={true}
    blurOnSubmit={false}
  />
</View>

<View style={Styles.FormGroup}>

<Text style={{color:'red'}}>
        {this.state.cPasswordError}
      </Text>
  <TextInput
    style={[Styles.TextInput, this.state.cPasswordHasError? Styles.hasError:""]}
    onChangeText={cpwd =>  this.setState({ConfirmPassword:cpwd})}
    onChangeText={cp=>{this.handlecpawword(cp)}}
    placeholder="Confirm Password"
    placeholderTextColor="grey"
  

 
    secureTextEntry={true}
  />

<TouchableOpacity style={Styles.Nextbutton}
                 onPress={()=>this.HandleSubmit()}
                 >
                  <Text style={{color:"white",textAlign:"center"}}>Submit</Text>
                 </TouchableOpacity>

</View>

            </View>
            <View style ={Styles.Row}></View>
            <View style ={Styles.Row}></View>
           
            </View>
        );

    };

};
export default ResetPasswordScreen;

const Styles = StyleSheet.create({

    Container:{ flex:1, flexDirection:"column", alignItems:"center"},
    Row:{ marginTop:40},
    FormGroup:{},
    Nextbutton:{ backgroundColor:"red", width:380, padding:15, borderRadius:10, marginTop:80, },
TextInput:{ borderWidth:0.5, width:380, padding:5, borderRadius:5},
RowFlex:{flexDirection:"row"},
PickerStyle:{borderWidth:0.5, width:100,marginRight:5,borderRadius:5},
hasError:{ borderColor:'red',borderWidth:1},
OPacity:{opacity:0.5},
Label:{ fontSize:19, color:'black', paddingBottom:10}


});