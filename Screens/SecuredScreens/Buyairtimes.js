
//Import all required component
import React, {  Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
  } from 'react-native';
  import Feather from 'react-native-vector-icons/Feather';
  import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
  import { Picker } from "@react-native-community/picker";
import { ValidateEmptyField, ValidateNumber, ValidatePhone } from '../../_helper/Validation';
import { connect } from 'react-redux';

import{ BuyAirtime, ClearErrorMgs, FetchAirtime} from '../../Redux/Actions/Data.action'

import AwesomeAlert from 'react-native-awesome-alerts';
import Loader from '../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../_services/Navigation.service';




class BuyairtimeScreen extends Component {
 
    constructor(props){
        super(props)

this.state = {   showsuccess:false,
PhoneNumber:'', PhoneNumberError:'',PhoneNumberHasError:false,
Amount:'', AmountError:'',AmountHasError:false,
Network:'', NetworkError:'',NetworkHasError:false,

        };
    };
 componentDidMount(props){  this.props.ClearErrorMgs();  this.Loadaitime();}
    Hide= ()=>{


      this.props.navigation.navigate('LoginScreen');
      this.props.navigation.navigate('First');
    
      
    
    }


    Loadaitime= async ()=>{
      const id = await AsyncStorage.getItem('id')
      await this.props.FetchAirtime("airtime",id);
    }
HandleBuyAirtime = async() =>{
const {loading, errorMgs, success} = this.props
      const {Network, PhoneNumber, Amount} = this.state
this.setState({NetworkError:''})
this.setState({PhoneNumberError:''})
this.setState({PhoneNumberHasError:false})
this.setState({NetworkHasError:false})
this.setState({AmountError:''})
this.setState({AmountHasError:false})

const Response = ValidatePhone(PhoneNumber)
if(Response.isError === true){
  this.setState({PhoneNumberError:Response.Errormgs})
  this.setState({PhoneNumberHasError:true})

  return false;
}

const Res = ValidateEmptyField("Network Provider", Network);
if(Res.isError === true){
  this.setState({NetworkError:Res.Errormgs})
  this.setState({NetworkHasError:true})
  return;

}

const Result = ValidateNumber("Amount", Amount);

if(Result.isError === true){
  this.setState({AmountError:Result.Errormgs})
  this.setState({AmountHasError:true})

  return false;

}
const id = await AsyncStorage.getItem('id')

 await this.props.BuyAirtime(this.state.Network,id,this.state.Amount,PhoneNumber)
 success? this.setState({showsuccess:true}):''

    }
    render(){
      const {loading, errorMgs, success} = this.props
        return(
         
  <ScrollView style={styles.mainBody}>

      <View  style={styles.Row}> 

      <Loader message="Processing Your Transaction.." loading={loading} />
    
      <Text style={{color:'red', textAlign:"center", fontSize:18, marginBottom:20}}>{errorMgs}</Text>
       
    <View style={styles.Imagegroup} >
 
   <Image source={require('../../assets/mtn.png')} style={styles.Image} />
   
  <Image source={require('../../assets/glo.jpg')}  style={styles.Image} />


 <Image source={require('../../assets/airtel.jpg')} style={styles.Image} />


<Image source={require('../../assets/9mobile.png')} style={styles.Image}/>




</View>

<View style={styles.FormGroup}>  
               <Text style={styles.Label}>Mobile Number To Recharge</Text>
          
    <View style={{ flexDirection:"row"}} >
    <Feather name="phone" color="#05375a" size={20} style={[styles.icon, this.state.PhoneNumberHasError? styles.HasError:'']} />
             <TextInput
             style={[styles.inputStyle, this.state.PhoneNumberHasError? styles.HasError:'']}
          
               onChangeText={userPhone =>  this.setState({PhoneNumber:userPhone})}
           
               placeholder="Enter Phone Number" 
               placeholderTextColor="grey"
          
            
            
             
        />

    </View><Text style={styles.Errortext}>{this.state.PhoneNumberError}</Text></View>

        
             
    
    <View style={styles.FormGroup}>  
        <Text style={styles.Label}>Select Service Provider  </Text>
         <View style={[styles.Picker, this.state.NetworkHasError? styles.HasError:'']}> 
        <Picker
       
       
       onValueChange={(itemValue, itemIndex) => this.setState({Network:itemValue})}
       selectedValue={ this.state.Network}
        >
 <Picker.Item label=" Select Network Provider" value=""/>
<Picker.Item label=" MTN" value="mtn"/>
<Picker.Item label=" GLo" value="glo"/>
<Picker.Item label=" AIRTEL" value="airtel"/>
<Picker.Item label=" 9 MOBILE" value="9mobile"/>
        </Picker></View><Text style={styles.Errortext}>{this.state.NetworkError}</Text></View> 
           

        <View style={styles.FormGroup}> 
        <Text style={styles.Label}> Amount </Text>
          <View style={{flexDirection:"row", }} >

             
       <Text style={[styles.icon, this.state.AmountHasError? styles.HasError:'']}>{'\u20A6'}</Text>
                  
             <TextInput
            style={[styles.inputStyle, this.state.AmountHasError? styles.HasError:'']}
          
               onChangeText={amt => this.setState({Amount:amt})}
               underlineColorAndroid="#FFFFFF"
               placeholder="Enter Amount " 
               placeholderTextColor="grey"
               autoCapitalize="none"
               keyboardType="numeric"
            
            //   blurOnSubmit={false}
             />
</View><Text style={styles.Errortext}>{this.state.AmountError}</Text>
          
             </View>

         


          <View>  

           <TouchableOpacity style={styles.buttonStyle} 
           onPress ={()=>this.HandleBuyAirtime()}
           
           >
             <Text style={{color:'white', textAlign:'center', fontSize:20}}>Buy Airtime</Text>
           </TouchableOpacity>
           </View>
   </View>

   
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

function MapStateToProp(state){

  return{
    successMgs:state.dat.successMgs,
  success:state.dat.airtimesuccess,
  loading:state.dat.airtimeloading,
  errorMgs:state.dat.errorMgs,
  package:state.dat.airtimepackage
  }

}

export default connect(  MapStateToProp,{BuyAirtime, FetchAirtime, ClearErrorMgs})(BuyairtimeScreen);


const styles = StyleSheet.create({
    mainBody: {
  
      backgroundColor: 'white',
     width:wp('100'),
     height:hp('100'),
     flexDirection: "column",

      
    },
    Row:{ margin:wp('5'),  width:wp('90%'),},
  Imagegroup:{
    flexDirection:"row",
  
    marginBottom:30,
    alignItems:"center"
  
  
  },

  FormGroup:{ marginTop:10},
  Image:{
   width:wp('20%'), 
   margin:wp('1%'),
   borderRadius:15,
    height:75
  
  },
  inputStyle: {
    
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
  
    borderWidth: 0.5,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    width:wp(79),
    borderColor: 'black',
  },
  icon: {
    width:wp(11),
     color: 'black',
     borderTopLeftRadius:5,
     borderBottomLeftRadius:5,
     borderWidth: 0.5,
     paddingTop:15,
     height:50,
     padding:10,
     fontSize:20,
     borderColor: 'black',
   },
  
   buttonStyle: {
    backgroundColor: '#282828',
    borderRadius:10,
  padding:10,
    color: '#FFFFFF',

    marginTop:50
    
  },
  Picker:{   color: 'black',
  paddingLeft: 15,
  paddingRight: 15,

  borderWidth: 0.5,
  
  borderRadius:5,
  borderColor: 'black',},
Label
:{ marginBottom:5},
Errortext:{color:'red' },
HasError:{borderColor:'red'}
  });