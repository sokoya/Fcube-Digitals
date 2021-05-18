import React, { Component }  from "react";
import {  ScrollView, TouchableOpacity, } from "react-native-gesture-handler";
import { validateEmail, ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, Image, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Alert, ToastAndroid} from "react-native";
import Loader from "../../Component/Loader";
import SuccessAlert from "../../Component/SuccessAlert";
import ErrorAlert from "../../Component/ErrorAlert";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Register, CLEARMESSAGE} from "../../Redux/Actions/Register.action";
import { connect } from "react-redux";
import RadioForm from 'react-native-simple-radio-button';
import AsyncStorage from "@react-native-community/async-storage";
import AwesomeAlert from 'react-native-awesome-alerts';


import { BankTransfer, ClearErrorMgs } from "../../Redux/Actions/Data.action";


class bank extends   Component{

constructor(props){

        super(props)
this.getuser()
    };

state = {bankname:'',
accountnumber:'',
accountname:'',success:false,
account1:'',account2:'',Errormgs:'',
     paymentmode:''
      };
    
      getuser =async ()=>{
    
        
        const account = await AsyncStorage.getItem('user');

        const bankaccount = await AsyncStorage.getItem('account');
     
        const JsonResult = JSON.parse(account);
        const bankJsonResult = JSON.parse(bankaccount);
      

        this.setState({account2:bankJsonResult.account_2})
        this.setState({account1:bankJsonResult.account_1})
        this.setState({bankname:JsonResult.bank_name})
        this.setState({accountnumber:JsonResult.account_number})
        this.setState({accountname:JsonResult.account_name})

      
        const id = await AsyncStorage.getItem('id')

       }


        hideAlert = async() =>{

          await this.props.ClearErrorMgs();
        
          this.props.navigation.navigate('First');
        }
        handlepaymnet= async()=>{

          const { Errormgs,paymentmode} = this.state;
 this.setState({Errormgs:''})

 const res = ValidateEmptyField("bank ", paymentmode)

 if(res.isError== true){
  this.setState({Errormgs:" * Pls Select the Bank You Made payment into."})
  return false;
 }


   await this.props.BankTransfer(this.props.navigation.state.params.Amount, paymentmode,this.props.navigation.state.params.Id )
 /// add request to dn 

 this.setState({success:true})
        }

    render(){
      
      var radio_props = [
     //   {label:[this.state.bankname,"\n", this.state.accountname,"\n", this.state.accountnumber],value:"Standard Chartered Bank Nigeria Ltd"},
        {label: [this.state.account1],value: this.state.account1} ,
        {label: [this.state.account2],value: this.state.account2} 
      ];

      const { loading, register_suc,register_fail, errortext} = this.props;
      
return(
   <ScrollView >

<View style={Styles.Container}>
<View style={Styles.Row}>
<Loader message="Loading..." loading={this.props.loading} />
<View style={Styles.FormGroup}> 
<Text style ={Styles.title}> Select The Account You Made Payment Into</Text>
<Text style ={Styles.Error}> { this.state.Errormgs}</Text>
<View
 style={[Styles.TextInpute, this.state.maritalstatusHasError ? Styles.hasError:'' ]}
 >

   
        <RadioForm
          radio_props={radio_props}
          initial={false}
         
          
          labelHorizontal={true}
          selectedButtonColor={'black'}
          buttonColor={'black'}
          animation={true}
          marginBottom= {10}
          buttonSize={15}
          buttonOuterSize={30}
          labelStyle={{fontSize: 16, marginLeft:20, marginRight:40, marginBottom:50, color: 'black'}}
          onPress={(mstatus) => this.setState({paymentmode:mstatus})}
        />
      </View>
</View>

</View>





<View style={Styles.FormGroup}> 
  <TouchableOpacity 
      
      onPress={this.handlepaymnet}
      style={[  Styles.nextButton,]}  >
      <Text style= {Styles.nextText}>
         Confirm My Payment
      </Text>
     </TouchableOpacity></View>

</View>


<View>
     <AwesomeAlert style={{
    
    modalContainer:{backgroundColor:'green'}, 
  }}
    show={this.props.success}
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
    message="Request sent Successfully ! Your payment is under Confirmation."
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
  
    onCancelPressed={() => {
 this.hideAlert();
    }}
    onConfirmPressed={() => {
      this.hideAlert();
    }}
  />
</View>



</ScrollView>

)

    };



};


function MapstateToProps(state){

  return{
     loading:state.dat.BankTransferloading,
     success:state.dat.BankTransfersuccess
   
  
  }
}

export default connect( MapstateToProps,  {Register, BankTransfer , ClearErrorMgs}) (bank);

const Styles = StyleSheet.create({
    Container:{
        flex:1,  width:wp('100%'), alignItems:"center"
    },
    Row:{ width:wp('90%'),  marginTop:hp('5')
    },
    Nextbutton:{ backgroundColor:"#282828",padding:15, borderRadius:10,marginTop:wp('10%'),marginBottom:wp('10%')},
    TextInput:{ borderWidth:0.5, borderLeftWidth:0, width:wp('75%'),  padding:15,  borderBottomRightRadius:5, borderTopRightRadius:5},
    RowFlex:{flexDirection:"row"},
    PickerStyle:{borderWidth:0.5, width:100,marginRight:5,borderRadius:5},
    Error:{  color:'red', textAlign:"center", marginBottom:30, fontSize:15},
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
       FormGroup:{width:wp('90'), },
       title: {
        alignItems:'flex-start',
         fontSize: 18,
         fontWeight:"bold",
         marginBottom:10,

        
       },
       Disable:{ opacity:0.4},
       nextText:{ color:"white", textAlign:'center', fontSize:20},
    
  nextButton:{ backgroundColor:"#282828",borderRadius:10, marginBottom:20, marginTop:30, padding:15 },
 
    
    });