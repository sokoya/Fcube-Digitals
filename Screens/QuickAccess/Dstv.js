
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image, Alert } from "react-native";
import { connect } from "react-redux";
import { ValidateDstv, Clearsatalliteerror, multichoiceVending} from "../../Redux/Actions/Satallite.action";
import { Picker } from "@react-native-community/picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import Loader from "../../Component/Loader";
import SuccessAlert from "../../Component/SuccessAlert";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import AsyncStorage from "@react-native-community/async-storage";
import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from "../../_services/Navigation.service";
class DstvScreen extends Component {
 
    constructor(props){
        super(props)
    };

    state={
        dataplanIdError:'',

        /////////////
        dataplanIdHasError:false, 
         userPhone:'',
         showsuccess:false,
       dataplanId:'',
      userPhoneError:'',
      ProductCode:'',
      productToken:'',
      Amount:'',

       /////////////
       userPhoneHasError:false, };
    componentDidMount(props){
      this.HandleMakechanges()
    }

Hide= ()=>{

  this.props.navigation.navigate('LoginScreen');
  this.props.navigation.navigate('First');


}
    handlephone= (value)=>{
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        const Response3 =ValidateEmptyField("Smart Card Number",value);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        } else{
        this.setState({disable:false})
        this.setState({userPhone:value})}
      };
    HandleValidatesmartcardno = async()=>{
     
        const {userPhone, dataplanId} = this.state
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        this.setState({dataplanIdError:''});
        this.setState({dataplanIdHasError:false});
        const Response3 =ValidateEmptyField("Smart Card Number",userPhone);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        
        }

        await this.props.ValidateDstv(this.state.userPhone);
      
      

    };
   HandleSelect=(value)=>{
    const {userPhone, dataplanId} = this.state

    this.setState({dataplanIdError:''});
    this.setState({dataplanIdHasError:false});
      const Response =ValidateEmptyField("Package Plan", value);
      if(Response.isError === true){
        
        this.setState({dataplanIdError:Response.Errormgs});
        this.setState({dataplanIdHasError:true});
        return false;
      }
      this.setState({dataplanId:value})
      const Array = value.split(/[ ,]+/);
     this.setState({Amount:Array[0]})
      this.setState({Product_Code:Array[1]})
      this.setState({show:true})
    
   }
    HandleMakechanges = async ()=>{
 await this.props.Clearsatalliteerror();
    }
    HandleMakepayment = async ()=>{

      const {plan, loading, success,errorMgs} = this.props;
      const {userPhone, dataplanId} = this.state
      this.setState({dataplanIdError:''});
      this.setState({dataplanIdHasError:false});
        const Response =ValidateEmptyField("Package Plan", dataplanId);
        if(Response.isError === true){
          
          this.setState({dataplanIdError:Response.Errormgs});
          this.setState({dataplanIdHasError:true});
          return false;
        }


  const id = await AsyncStorage.getItem('id');
console.log(plan.productToken);
   await this.props.multichoiceVending("dstv",userPhone,plan.productToken,plan.productCode,id,this.state.Amount)
 this.props.multichoice_vending_success? this.setState({showsuccess:true}):''
    };


    render(){

        const {plan, loading,loadingpayment, success,errorMgs} = this.props;
     
        global.currentScreenIndex = 'HomeScreen';
        return(

        
            <ScrollView style={Styles.Container}>

<Loader message="Processing Your Transaction.." loading={loadingpayment} />
                <Loader message="Validating Your Smart Card Number" loading={loading} />
              
                <Text style={{color:'red', textAlign:"center", fontSize:20, marginTop:10}}>{errorMgs}</Text>
        <View style ={Styles.FormGroup}>
        <View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/logo.png')}
                style={{
                  width: '50%',
                  height: 80,
                  resizeMode: 'contain',
                

                }}
              />
            </View></View>

            { success?
       <View>
      <View style ={Styles.FormGroup}><Text style={Styles.Label2}>Smart Card Number : {this.state.userPhone}</Text></View>

      <View style ={Styles.FormGroup}><Text style={Styles.Label2}>Account Name : {plan.customer_name}</Text></View>

      
    {this.state.show?<View style ={Styles.FormGroup}>
      <Text style={Styles.Label2}>Amount : {'\u20A6' + this.state.Amount}</Text>

      </View>:<Text></Text>}<View style={Styles.FormGroup}>  
        <Text style={Styles.Label}>Select Package </Text>
         <View  style={[ this.state.dataplanIdHasError? Styles.hasError:{borderColor:"black", borderWidth:0.8, borderRadius:5}]}> 
        <Picker
        selectedValue={ this.state.dataplanId}
          onValueChange={(itemValue, itemIndex) => this.HandleSelect(itemValue)}
         
        >
          <Picker.Item label="Select Package" value=""/>
          {
         plan.bouquets.map((item, index)=>(<Picker.Item key={index} label ={ item.name + " ----- "  +'\u20A6' + item.amount } value={item.amount +','+ item.product_code}  />

    ))}</Picker></View><Text style={{color:'red'}}>{this.state.dataplanIdError}</Text></View> 

 

    <View style ={Styles.FormGroup}>
    
        <TouchableOpacity 
        onPress={()=>this.HandleMakepayment()}
           style={ Styles.nextButton}  >
            <Text style= {Styles.nextText}>
             Make Payment
            </Text>
          </TouchableOpacity>


          <TouchableOpacity 
        onPress={()=>this.HandleMakechanges()}
           style={ { borderColor:'#282828', borderWidth:1, borderRadius:10}}  >
            <Text style= {{color:'black', textAlign:"center", padding:15, fontSize:20}}>
             Make Changes
            </Text>
          </TouchableOpacity>
    
        </View></View>: <View>
        <View style ={Styles.FormGroup}>
         <Text style={Styles.Label}>Enter Smart Card Number</Text>

         <TextInput style={[Styles.TextInput, this.state.userPhoneHasError?Styles.hasError:'']}
            placeholder="    Smart Card Number"
          onChangeText={Phone=>this.setState({userPhone:Phone})}
          onChangeText= {ph=>this.handlephone(ph) }
            placeholderTextColor="black"
            keyboardType="numeric"
            returnKeyType="next"
         ></TextInput><Text style={{color:'red'}}>{this.state.userPhoneError}</Text>

         <TouchableOpacity
          onPress={this.HandleValidatesmartcardno}
          style={ [Styles.nextButton, {marginTop:hp('5')}]}  
         ><Text style= {Styles.nextText}>Validate Smart Card </Text></TouchableOpacity>
        </View></View>


      }

<View>
    
     
    <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'green'}, 
    }}
      show={this.state.showsuccess}
      
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
      message="Transaction Successfull"
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
      plan:state.sat.multichoice_plan  ,
      success:state.sat.multichoice_plan_success,
      errorMgs:state.sat.multichoice_error,
      loading:state.sat.loading,
      vending_success:state.sat.multichoice_vending_success ,
      loadingpayment:state.sat.paymentloading
    };
}

export default connect( MapStateToProps, {ValidateDstv , multichoiceVending, Clearsatalliteerror})(DstvScreen);

const Styles= StyleSheet.create({

    Container:{
         flex:1,  width:wp('100')
},
TextInput:{ borderColor:"black", borderWidth:0.8, borderRadius:5, padding:10 },
hasError:{ borderColor:'red',borderWidth:1, borderRadius:5,},
FormGroup:{width:wp('90'), margin:wp('5')},
Label:{marginBottom:5},
Label2:{fontSize:20},
nextButton:{ backgroundColor:"#282828",borderRadius:10, marginBottom:20,  padding:15 },
nextText:{ color:"white", textAlign:'center', fontSize:20},
});