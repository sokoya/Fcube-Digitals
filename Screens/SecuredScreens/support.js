import React, { Component } from "react";
import{Grid ,Row,Col} from 'react-native-easy-grid'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet, TextInput, Text, Alert, Image } from "react-native";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { connect } from "react-redux";
import { FectchTransaction } from "../../Redux/Actions/Electricity.action";
import AsyncStorage from "@react-native-community/async-storage";


class SupportScreen extends Component {
 
    constructor(props){
        super(props)

        this.state={ID:''}
      
    };


    render(){

 
        global.currentScreenIndex = "SupportScreen"
        return(

<View style={Styles.SectionStyle}>
 







<View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/support.png')}
                style={{
                  width: '100%',
                
                 
                  marginTop: 80,
                }}
              />
            </View>

            <View style ={Styles.Row}>
            <Text style={Styles.datacell}>Email:  hello@fcubedigital.com</Text>

            <Text style={Styles.datacell}>Email:  fcubedigitals@gmail.com</Text>

            <Text style={Styles.datacell}>Phone:   08162943749</Text>

            </View>

 
 </View>
 
       )

    };

};

function MapStatetoProps(state) {

  return{
    trans:state.ele.transactionhistory  ,
    fsuccess:state.ele.fsuccess,
    errormessage:state.ele.errormessage,
    loading:state.ele.loading
  };
  
}

export default connect(MapStatetoProps,{FectchTransaction})(SupportScreen);
const Styles = StyleSheet.create({
  SectionStyle: {
    flexDirection:'column',
 width:wp('100')
  },


Row:{ 
width:wp('100'),
marginLeft:wp('8'),
marginTop:50

},


datacell:{
 fontSize:20,margin:10,color:"black"

},



});