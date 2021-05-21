import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Picker } from "@react-native-community/picker";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import{ BuyAirtime, ClearErrorMgs,FetchElectricity,FetchTv, FetchAirtime} from '../../Redux/Actions/Data.action'

class PaybillsScreen extends Component {
 
    constructor(props){
        super(props)

        this.state ={navigateto:''};
    };

    componentDidMount(props){ 
      this.Loadelectricity();
       this.Loadtv();}
  
   Loadelectricity= async ()=>{
    const id = await AsyncStorage.getItem('id')
    await this.props.FetchElectricity("electricity-bill",id);
  }
  
      Loadtv= async ()=>{
    
    
        const id = await AsyncStorage.getItem('id')
        await this.props.FetchTv("tv-subscription",id);
      }
    Handlenavigation = (value)=>{
      if(value == 15){
        this.props.navigation.navigate("DstvScreen");
      }
      if(value == 16){
        this.props.navigation.navigate("GotvScreen");
      }

      if(value == 25){
        this.props.navigation.navigate("StartimeScreen");
      }
if(value == 17){
  this.props.navigation.navigate("Ikeja");
}

if(value == 24){
  this.props.navigation.navigate("Abuja");
}

if(value == 23){
  this.props.navigation.navigate("Ibadan");
}

if(value == 21){
  this.props.navigation.navigate("Ph");
}
if(value == 19){
  this.props.navigation.navigate("Eko");
}
if(value == 20){
  this.props.navigation.navigate("Enugu");
}
     
    }

    render(){


     
        return(
            <View style={styles.mainBody}>
<View style={styles.Row}>


<View style={styles.FormGroup}>
<View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/bill.png')}
                style={{
                  width: '100%',
                  height: 100,
                
                  margin: 10,
                }}
              />
            </View>
</View>
                 <View style={styles.FormGroup}>  
        <Text style={styles.Label}>Pay Electricity Bills </Text>
         <View style={styles.Picker}> 
        <Picker
        selectedValue={ this.state.dataplanId}
        onValueChange={(itemValue, itemIndex) => this.Handlenavigation(itemValue) }
        
        >
<Picker.Item label=" Select Provider" value=""/>
{
  
  this.props.elepackage.map((item, index)=>(<Picker.Item key={index} label ={ item.network_title + " ( Discount  - "  +  item.network_discount  + " %) " } value={item.network_id} />

))}
        </Picker></View>
        
        
        <Text style={{color:'red'}}></Text></View> 

     
     

        <View style={styles.FormGroup}>  
        <Text style={styles.Label}>Pay Satallite Tv Bills  </Text>
         <View style={styles.Picker}> 
        <Picker
     selectedValue={ this.state.dataplanId}
     onValueChange={(itemValue, itemIndex) => this.Handlenavigation(itemValue) }
        
        >
          <Picker.Item label=" Select Provider" value=""/>

          {
  
  this.props.tvpackage.map((item, index)=>(<Picker.Item key={index} label ={ item.network_title + " ( Discount  - "  +  item.network_discount  + " %) "  } value={item.network_id } />

))}
        </Picker></View><Text style={{color:'red'}}></Text></View>
           

           </View>
           </View>
        )

    };
    

};
function MapStateToProp(state){

  return{

  tvpackage:state.dat.tvpackage,
  elepackage:state.dat.electricitypackage,
  }

}

export default connect(MapStateToProp,
  {BuyAirtime, FetchElectricity,FetchTv, ClearErrorMgs}
  )(PaybillsScreen);


const styles = StyleSheet.create({
    mainBody: {
  
      backgroundColor: 'white',
     width:wp('100'),
     height:hp('100'),
     flexDirection: "column",

      
    },
    Row:{ margin:wp('5'),  width:wp('90%'), },


  FormGroup:{ marginTop:40},
 
  Picker:{borderBottomWidth:1, borderTopWidth:1, borderColor:'#282828'},
  Label
:{ marginBottom:10, fontWeight:"bold", fontSize:20}

});