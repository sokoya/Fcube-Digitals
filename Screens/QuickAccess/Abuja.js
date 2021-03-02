
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image, Alert, CheckBox, ScrollView } from "react-native";
import { connect } from "react-redux";
import { ValidateIkeja, ValidateAbuja, clearLoginErrorMessage, PayAbuja} from "../../Redux/Actions/Electricity.action";
import { Picker } from "@react-native-community/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import Loader from "../../Component/Loader";
import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from "@react-native-community/async-storage";

class AbujaScreen extends Component {
 
    constructor(props){
        super(props)
    };

    state={
        dataplanIdError:'',
        Amount:'',
        AmountError:'',
        AmountHasError:false,
        /////////////
        dataplanIdHasError:false, 
         userPhone:'',
    Checked:false,
    disable:true,
       dataplanId:'',
      userPhoneError:'',

       /////////////
       userPhoneHasError:false, };
       componentDidMount(props){
        this.props.clearLoginErrorMessage()
      }

      Hide= ()=>{

        this.props.navigation.navigate('LoginScreen');
        this.props.navigation.navigate('First');
      
      }
 
      handleAmount= (value)=>{
        this.setState({AmountError:''});
        this.setState({AmountHasError:false});
        const Response1 =ValidateEmptyField("Amount ",value);
        if(Response1.isError === true){
          
          this.setState({AmountError:Response1.Errormgs});
          this.setState({AmountHasError:true});
          return false;
        } else{
        this.setState({disable:false})
        this.setState({Amount:value})}
      };

    handlephone= (value)=>{
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        const Response3 =ValidateEmptyField("Meter Number",value);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        } else{
        this.setState({disable:false})
        this.setState({userPhone:value})}
      };
    HandleBuydataplan = async ()=>{
      
        const {userPhone, dataplanId, Amount} = this.state
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        this.setState({dataplanIdError:''});
        this.setState({dataplanIdHasError:false});
        const Response3 =ValidateEmptyField("Meter Number",userPhone);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        
        }
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});



///////////////////////////////////////////////


const Response1 =ValidateEmptyField("Amount",Amount);
if(Response1.isError === true){
  
  this.setState({AmountError:Response1.Errormgs});
  this.setState({AmountHasError:true});
  return false;
} 
this.setState({AmountError:''});
this.setState({AmountHasError:false});

/////////////////////////////////////////////

        const Response =ValidateEmptyField("Meter Type", dataplanId);
        if(Response.isError === true){
          
          this.setState({dataplanIdError:Response.Errormgs});
          this.setState({dataplanIdHasError:true});
          return false;
        }
        this.setState({dataplanIdError:''});
        this.setState({dataplanIdHasError:false});
      
        await this.props.ValidateAbuja(this.state.dataplanId, this.state.userPhone)
    };

    MakePayment= async()=>{   
      const id = await AsyncStorage.getItem('id');
      await this.props.PayAbuja(this.state.dataplanId,this.state.userPhone,this.state.Amount,id)}
    render(){

      const {name, fsuccess,ploading,paymentsuccess, paymentdata, errormessage} = this.props;
      //  console.log(dataplan)
        global.currentScreenIndex = 'HomeScreen';
        return(
          <ScrollView>
            <View style={Styles.Container}>
  <Text style={{color:'red', textAlign:"center"}}>{errormessage}</Text>
<Loader message='Validating Your Meter Number' loading={this.props.loading} />

<Loader message='Transaction in Progress....' loading={ploading} />
                <Text style={{color:'red'}}>{}</Text>
        <View style ={Styles.FormGroup}>
        <View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/logo.png')}
                style={{
                  width: '50%',
                  height: 80,
                  resizeMode: 'contain',
                  margin: 10,
                }}
              />
            </View></View>
        <View style ={Styles.FormGroup}>
         <Text style={Styles.Label}>Enter Meter Number</Text>

         <TextInput style={[Styles.TextInput, this.state.userPhoneHasError?Styles.hasError:'']}
            placeholder="    Meter Number"
          onChangeText={Phone=>this.setState({userPhone:Phone})}
          onChangeText= {ph=>this.handlephone(ph) }
            placeholderTextColor="black"
            keyboardType="numeric"
            returnKeyType="next"
         ></TextInput><Text style={{color:'red'}}>{this.state.userPhoneError}</Text>
        </View>
     
     
        <View style ={Styles.FormGroup}>
         <Text style={Styles.Label}>Enter Amount</Text>

         <TextInput style={[Styles.TextInput, this.state.AmountHasError?Styles.hasError:'']}
            placeholder="    Amount"
          onChangeText={amt=>this.setState({Amount:amt})}
          onChangeText= {amount=>this.handleAmount(amount) }
            placeholderTextColor="black"
            keyboardType="numeric"
            returnKeyType="next"
         ></TextInput><Text style={{color:'red'}}>{this.state.AmountError}</Text>
        </View>


     
        <View style={Styles.FormGroup}>  
        <Text style={Styles.Label}>Select Data Plan </Text>
         <View  style={[ this.state.dataplanIdHasError? Styles.hasError:{borderColor:"black", borderWidth:0.8, borderRadius:5}]}> 
        <Picker
        selectedValue={ this.state.dataplanId}
          onValueChange={(itemValue, itemIndex) => this.setState({dataplanId:itemValue})}
        >
           <Picker.Item label="Select Plan" value=""/>
<Picker.Item label="POSTPAID" value="postpaid"/>
<Picker.Item label="PREPAID" value="prepaid"/>
        </Picker></View><Text style={{color:'red'}}>{this.state.dataplanIdError}</Text></View> 

        <View style ={Styles.FormGroup}>
    
    <TouchableOpacity 

   onPress={this.HandleBuydataplan}
       style={ Styles.nextButton}  >
        <Text style= {Styles.nextText}>
         Validate Meter Number
        </Text>
      </TouchableOpacity>

    </View>

{ fsuccess?<View>
              <View style ={Styles.card}>
              <Text style={{fontWeight:"bold", fontSize:20}}>Meter Number: {this.state.userPhone}</Text>
              <Text style={{fontWeight:"bold",  fontSize:20}}>Meter Type: {this.state.dataplanId}</Text>
                <Text style={{fontWeight:"bold",  fontSize:18}}>Meter Name: {name}</Text>
                </View>



     <View style ={Styles.FormGroup}>
    
        <TouchableOpacity 
      //  disabled={this.state.Checked ? false: true}
       onPress={()=>this.MakePayment()}
           style={[Styles.MakePaymentBtn]}  >
            <Text style= {Styles.nextText}>
             Make Payment
            </Text>
          </TouchableOpacity>
    
    </View></View>:<Text></Text>

    }
        </View>

        <View>
    
     
    <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'green'}, 
    }}
      show={paymentsuccess}
      
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
      message={" Transaction Successful !" +'\n'+" Token: " + paymentdata.token}
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

function MapStateToProps(state){
    return{
     name:state.ele.name  ,
     fsuccess:state.ele.fsuccess,
     errormessage:state.ele.errormessage,
     loading:state.ele.loading,
     ploading:state.ele.paymentloading,
     paymentsuccess:state.ele.paymentsuccess,
     paymentdata:state.ele.paymentdata
    };
}

export default connect( MapStateToProps, {ValidateAbuja, clearLoginErrorMessage, PayAbuja })(AbujaScreen);

const Styles= StyleSheet.create({

    Container:{
         flex:1, flexDirection:"column",  margin:10
},
TextInput:{ borderColor:"black", borderWidth:0.8, borderRadius:5, padding:10 },
hasError:{ borderColor:'red',borderWidth:1, borderRadius:5,},
FormGroup:{ marginTop:10 },
Label:{marginBottom:5},
nextButton:{ backgroundColor:"#282828",borderRadius:10,   },
nextText:{ color:"white", textAlign:'center',padding:10, fontSize:20},
Disable:{ opacity:0.4},
MakePaymentBtn:{backgroundColor:'#fec107', borderRadius:10,},
card:{ backgroundColor:'lightgrey', marginTop:10, padding:20, borderRadius:5, marginBottom:100}
});

