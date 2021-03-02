
//Import React
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import Feather from 'react-native-vector-icons/Feather';
//Import all required component
import { View,   StyleSheet, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from "react-redux";
import{Grid ,Row,Col} from 'react-native-easy-grid'
import NumberFormat from 'react-number-format';
import Swiper from "react-native-web-swiper";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import NavigationService from '../../_services/Navigation.service';
import { getbalance } from '../../Redux/Actions/Athentication.action';
import { Notification } from '../../Redux/Actions/Data.action';
import SuccessAlert from '../../Component/SuccessAlert';
//import{Table, Row, Col, Rows} from "react-native-table-component"

class HomeScreen extends   Component{

    constructor(props){

        super(props)
        this.props.Notification();
this.state={username:'',wallet:'',account_no:'', mydate:''}

this.getuser();
    };

 
 
    HandleFundwallet = ()=>{

       this.props.navigation.navigate("fundwallet");
    
    }
    
     getuser =async ()=>{
      await this.props.Notification();
      const us = await AsyncStorage.getItem('userName');
      const user = await AsyncStorage.getItem('user');
      const JsonResult = JSON.parse(user);
      this.setState({wallet:JsonResult.wallet})
      this.setState({account_no:JsonResult.user_code})
       this.setState({username:us}) 
      var date = new Date().toString()
      this.setState({mydate:date})
      const id = await AsyncStorage.getItem('id')
      await this.props.getbalance(id);

      
     }
    

    render(){
   
        global.currentScreenIndex = 'HomeScreen';
        return (
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.Contianer}>

        { this.props.success?
    <View>

      <SuccessAlert loadingalert={this.props.Notificationsuccess} message={this.props.alert}/>
      <View style={Styles.Row}> 
      <View style={Styles.Welcome}> 
        
       <Text style={Styles.welcomeText}>WELCOME {this.state.username}</Text>
    
    
      </View>
      </View>
      
      <View style={Styles.Row}> 
      
      
      <View style={Styles.Card}>
      <View style={{flexDirection:"row", alignContent:"flex-start"}}>
                    <Image 
                     source={require('../../assets/logo.png')}
                      style={{
                        width: '50%',
                        height: 70,
                        resizeMode: 'contain',
                      
                      }}
                    />
                    <View style={{ alignContent:"center", marginLeft:30, marginTop:10}}>
                    <Text style={[Styles.White, ]}> BALANCE  </Text>
  
                    <NumberFormat
                value={this.props.balance.message.details.wallet}
               displayType={'text'}
               thousandSeparator={true}
            prefix={'\u20A6'}
            renderText={formattedValue => <Text style={[Styles.White, Styles.LoanBalance]}>{formattedValue}.00</Text>} // <--- Don't forget this!
    />


                
                  </View> 
                  </View>
      
      <View style={{flexDirection:"row"}}> 
      
      <View>
      <View style={{marginTop:10, alignContent:"flex-start"}}>
      <Text style={Styles.White}>AC/NAME</Text>
      <Text style={Styles.White}>{this.state.username} </Text></View>
      
      <View style={{ marginTop:5, alignContent:"flex-start"}}>
      <Text style={Styles.White}>AC/NUMBER</Text>
      <Text style={Styles.White}>{this.state.account_no}</Text></View>

      </View>
      
       <View><TouchableOpacity style = {Styles.ApplyButton}
       onPress={()=>this.HandleFundwallet()}
      >
      <Text style={Styles.Fundtext}> <Feather name="plus"/> FUND WALLET</Text>
      
      </TouchableOpacity></View></View>
 
      
      </View>
      
      </View>
      
      <View style={Styles.Row}>
      
      <View style={{  flexDirection:"row",}}>

        <TouchableOpacity style={Styles.Tab}
         onPress={()=>this.props.navigation.navigate("PaybillScreen")}
        ><Text><Feather name="credit-card"  color='white'     size={30}/></Text>
          <Text style={Styles.Tabtext}>Pay Bills</Text></TouchableOpacity>

          <TouchableOpacity style={Styles.Tab}
           onPress={()=>this.props.navigation.navigate("BuydataScreen")}
          ><Text><Feather name="smartphone" color='white'     size={30}/></Text>
          <Text style={Styles.Tabtext}>Buy Data</Text></TouchableOpacity>

      
      </View>
     
      </View>

      <View style={Styles.Row}>
      
      <View style={{  flexDirection:"row",}}>

       

          <TouchableOpacity style={Styles.Tab}
            onPress={()=>this.props.navigation.navigate("BuyairtimeScreen")}
          ><Text><Feather name="phone-call"  color='white'    size={30}/></Text>
          <Text style={Styles.Tabtext}
        
          >Buy Airtime</Text></TouchableOpacity>
          <TouchableOpacity style={Styles.Tab}
          
          onPress={()=>this.props.navigation.navigate("TransactionScreen")}
          ><Text style={{color:'white',padding:2}}><Feather name="file-text"      size={30}/></Text>
          <Text style={Styles.Tabtext}>  My Transactions</Text></TouchableOpacity>
      </View>
     
      </View>

      <View style={Styles.Row}>
        <Text>Quick Access</Text>


 

<View style={{flexDirection:"row"}}>

<TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'purple'}]}
onPress={()=>this.props.navigation.navigate("DstvScreen")}
><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay DSTV Bill</Text></TouchableOpacity>

  <TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'navy'}]}
  onPress={()=>this.props.navigation.navigate("StartimeScreen")}
  ><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay Star Times Bill </Text></TouchableOpacity>
</View>
 

<View style={{flexDirection:"row"}}>

<TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'grey'}]}
onPress={()=>this.props.navigation.navigate("GotvScreen")}
><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay GoTV Bill</Text></TouchableOpacity>

  <TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'darkorange'}]}
  onPress={()=>this.props.navigation.navigate("Ikeja")}
  ><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay Ikeja Electricity  </Text></TouchableOpacity>
</View>

<View style={{flexDirection:"row",}}>

<TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'black'}]}
onPress={()=>this.props.navigation.navigate("Eko")}
><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay Eko Electricity </Text></TouchableOpacity>

  <TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'darkred'}]}
  onPress={()=>this.props.navigation.navigate("Ph")}
  ><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay PH Electricity  </Text></TouchableOpacity>
</View>

<View style={{flexDirection:"row", marginBottom:30}}>

<TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'blue'}]}
onPress={()=>this.props.navigation.navigate("Abuja")}
><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay Abuja Electricity </Text></TouchableOpacity>

  <TouchableOpacity style={[Styles.QuickTab ,{backgroundColor:'green'}]}
  onPress={()=>this.props.navigation.navigate("Enugu")}
  ><Text style={{color:'white',padding:2, marginRight:10}}><Feather name="credit-card"      size={20}/></Text>
  <Text style={Styles.Quicktext}>Pay Enugu Electricity </Text></TouchableOpacity>
</View>





      </View>
         
      </View>: <ActivityIndicator
       color="#282828"
       size='large'
       animating={this.props.loading}
                      />
    }
          </ScrollView>
        );
      

    };

}

function MapStateToProp(state){
  return{
    loading:state.auth.getbalanceloading,
    balance:state.auth.balance,
    success:state.auth.getbalancesuccess,
    alert:state.dat.Notification,
    Notificationsuccess:state.dat.Notificationsuccess

  }
}
export default connect(MapStateToProp, {getbalance, Notification})(HomeScreen);


const Styles= StyleSheet.create({

    Contianer:{
     flexDirection:"column", flex:1, margin:wp('5%'), width:wp('90%')
    },
    Card:{backgroundColor:'#fec107', padding:10, marginTop:20,  borderRadius:10},
Row:{ marginTop:10,  width:wp('90%'),},
    Welcome:{ flexDirection:"row", borderColor:'#282828',  borderRadius:20, borderWidth:1,  },
    ApplyButton:{textAlign:"center",
       backgroundColor:'#282828',
        marginLeft:wp('13%'),
        width:wp('41%'), 
         padding:wp('1.5%'), 
         marginTop:50,
          borderRadius:20,
           },
           Fundtext:{ color:'white',textAlign:"center", fontSize:hp('2%')},
    White:{ color:'white', fontSize:hp('1.7%')},
    welcomeText:{color:'#282828', padding:10},
    LoanBalance:{ fontSize:hp('2.8%')},
  
    Tab:{backgroundColor:'#282828', width:wp('44%'), padding:wp('1.5%'),   height:hp('12%'), margin:wp('0.4%'), borderRadius:5, },
    Tabtext:{ color:'white', textAlign:"center", padding:10,fontSize:hp('1.8%')},
    QuickTab:{ width:wp('43.7%'), flexDirection:"row", padding:wp('1.5%'),   height:hp('5%'), margin:wp('0.9%'), borderRadius:5, },
    Quicktext:{ color:'white', textAlign:"center", fontSize:hp('1.4%')},
    Image:{ width:120,width:'100%', height:400},
    slider:{backgroundColor:'#282828',}
  });