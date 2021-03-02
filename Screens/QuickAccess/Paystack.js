import React, { Component } from 'react';
import PaystackWebView from "react-native-paystack-webview";
import { View , Text, Alert} from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { VerifyPaystack } from '../../Redux/Actions/Data.action';
 
class Paystack extends Component{
    constructor(props){

        super(props)}
   
        state ={ref:'',showerroralert:false,showsuccessalert:false}
        hideAlertError=()=>{ this.props.navigation.navigate("First")}
        hideAlert = () =>{ this.props.navigation.navigate("First")}
    render() {
      console.log(this.props.navigation.state.params.Id)
      console.log(this.props.navigation.state.params.Amount)
        return (
          <View style={{ flex: 1,}}>

            <PaystackWebView
              buttonText="Pay Now"
              showPayButton={false}
              paystackKey="pk_live_56a4e1f8d3f2c8e461278906efb145d9acf26db8"
              amount={this.props.navigation.state.params.Amount}
              billingEmail={this.props.navigation.state.params.Email}
              billingMobile={this.props.navigation.state.params.Phone}
              billingName={this.props.navigation.state.params.Name}
              ActivityIndicatorColor="green"
              refNumber={Math.floor((Math.random() * 1000000000) + 1)}
              SafeAreaViewContainer={{ marginTop: 5 }}
              SafeAreaViewContainerModal={{ marginTop: 5 }}
              onCancel={ async(e) => {
       
                this.setState({showerroralert:true})
               
              }}
              onSuccess={ async(e) => {
                         
              await  this.props.VerifyPaystack(this.props.navigation.state.params.Amount, e.data.transactionRef.reference,this.props.navigation.state.params.Id)

                // handle response here
             ////   console.log(e.data)
             //   console.log(e.data.transactionRef.reference)
              //  console.log(this.props.navigation.state.params.Id)
            //    console.log(this.props.navigation.state.params.Amount)
              // this.props.VerifyPaystack(this.props.navigation.state.params.Amount,this.props.navigation.state.params.Id, e.data.transactionRef.reference)

               // console.log(e.data.transactionRef.reference)
              }}
              autoStart={true}
            />


<View>

 
<AwesomeAlert style={{

  modalContainer:{backgroundColor:'red'}, 
}}
  show={this.state.showerroralert}
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
  message="Transaction Failed"
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
    this.hideAlertError();
  }}
  onConfirmPressed={() => {
    this.hideAlertError();
  }}
/>
</View>
 
    
<View>
    
  <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'red'}, 
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
      message='Transaction Successful.'
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
        this.hideAlert();    }}
    />
</View>
    
    




          </View>
        );
      }
}

function MapStateToProp(state){
  return{
    
    error:state.dat.paystackerror,
    success:state.dat.paystacksuccess
  }
}

export default connect(MapStateToProp, {VerifyPaystack})(Paystack);