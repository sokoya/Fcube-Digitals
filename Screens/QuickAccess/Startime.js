
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image, Alert } from "react-native";
import { connect } from "react-redux";
import {  ValidateStartimes, StartimesVending, Clearsatalliteerror} from "../../Redux/Actions/Satallite.action";
import { Picker } from "@react-native-community/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import Loader from "../../Component/Loader";
import SuccessAlert from "../../Component/SuccessAlert";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
class StartimeScreen extends Component {
 
    constructor(props){
        super(props)
    };

    state={
        dataplanIdError:'',

        /////////////
        dataplanIdHasError:false, 
         userPhone:'',
    show:false,
       dataplanId:[],
      userPhoneError:'',
      Product_Code:'',
      Amount:'',
      Cycle:'',
       /////////////
       userPhoneHasError:false, };
    componentDidMount(props){
      this.HandleMakechanges()
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

        await this.props.ValidateStartimes(this.state.userPhone);
      
      

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
      this.setState({show:true})
   }
    HandleMakechanges = async ()=>{
 await this.props.Clearsatalliteerror();
    }
    HandleMakepayment = async ()=>{
      const {userPhone, dataplanId} = this.state
      this.setState({dataplanIdError:''});
      this.setState({dataplanIdHasError:false});
        const Response =ValidateEmptyField("Package Plan", dataplanId);
        if(Response.isError === true){
          
          this.setState({dataplanIdError:Response.Errormgs});
          this.setState({dataplanIdHasError:true});
          return false;
        }
        const id = await AsyncStorage.getItem('id')
      await this.props.StartimesVending("gotv",userPhone,this.state.Product_Code,plan.productCode,id,this.state.Amount)
      this.props.multichoice_vending_success? this.setState({showsuccess:true}):''
  
    };

   // getdataplan= async()=>{  await this.props.ValidateDstv(this.state.userPhone);}
    render(){
      const {plan, loading, success,errorMgs} = this.props;
      
     {// success?  console.log(plan):''
    }
        global.currentScreenIndex = 'HomeScreen';
        return(
            <View style={Styles.Container}>
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

      <View style ={Styles.FormGroup}><Text style={Styles.Label2}>Account Name : {plan.customer_smart_card_name}</Text></View>

<View style={Styles.FormGroup}>  
        <Text style={Styles.Label}>Select Package </Text>
         <View  style={[ this.state.dataplanIdHasError? Styles.hasError:{borderColor:"black", borderWidth:0.8, borderRadius:5}]}> 
        <Picker
        selectedValue={ this.state.dataplanId}
          onValueChange={(itemValue, itemIndex) => this.HandleSelect(itemValue)}
         
        >
          <Picker.Item label="Select Package" value=""/>
          {
         plan.bouquets.map((item, index)=>(<Picker.Item key={index} label ={ item.name} value={item.cycles}  />

    ))}</Picker></View><Text style={{color:'red'}}>{this.state.dataplanIdError}</Text>
    
    <Text style={Styles.Label}>Select Cycles </Text>
         <View  style={[ this.state.dataplanIdHasError? Styles.hasError:{borderColor:"black", borderWidth:0.8, borderRadius:5}]}> 
        <Picker
        selectedValue={ this.state.Cycle}
          onValueChange={(itemValue, itemIndex) => this.setState({Cycle:itemValue})}
         
        >
          <Picker.Item label="Select Package" value=""/>
         <Picker.Item  label ={"Daily "+"------" + '\u20A6'+ this.state.dataplanId.daily} value={this.state.dataplanId.daily}  />
         <Picker.Item  label ={"Weekly  "  +"------" + '\u20A6'+ this.state.dataplanId.weekly } value={this.state.dataplanId.weekly}  />
         <Picker.Item  label ={"Monthly" +"------" + '\u20A6'+  this.state.dataplanId.monthly } value={this.state.dataplanId.monthly}  />
    </Picker></View><Text style={{color:'red'}}>{this.state.dataplanIdError}</Text>

    
    </View> 

 
    
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
        </View>
        )

    };

};

function MapStateToProps(state){
    return{
      plan:state.sat.startime_plan   ,
      success:state.sat.startime_plan_success,
      errorMgs:state.sat.startime_error,
      loading:state.sat.loading ,
      vending_success:state.sat.startimes_vending_success ,
      loadingpayment:state.sat.paymentloading
    };
}

export default connect( MapStateToProps, {ValidateStartimes , StartimesVending, Clearsatalliteerror})(StartimeScreen);

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