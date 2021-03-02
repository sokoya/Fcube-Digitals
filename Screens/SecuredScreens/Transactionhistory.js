import React, { Component } from "react";
import{Grid ,Row,Col} from 'react-native-easy-grid'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { connect } from "react-redux";
import { FectchTransaction } from "../../Redux/Actions/Electricity.action";
import AsyncStorage from "@react-native-community/async-storage";


class TransactionScreen extends Component {
 
    constructor(props){
        super(props)

        this.state={ID:''}
      
    };

    componentDidMount(){
    
      this.GetTrans();
    }


GetTrans= async () =>{

  const us = await AsyncStorage.getItem('userName');
  const user = await AsyncStorage.getItem('user');

  const JsonResult = JSON.parse(user);
  
  await this.props.FectchTransaction(JsonResult.id);
}



Showdetails =(value)=>{
  console.log(value)
  this.setState({index:value})
this.setState({showdetails:true})
}

Closedetails =()=>{
this.setState({showdetails:false})
}
    render(){

      const {trans, fsuccess, errormessage} = this.props;
        global.currentScreenIndex = "TransactionScreen"
        return(

<View style={Styles.SectionStyle}>
 
    
 <View style={[Styles.Row,]}> 
 
 
  <View style={Styles.LoanHistoryBorder }>
 
 <Grid  style={{marginBottom:35 }}>
 
 <Row style={{backgroundColor:'#fec107',height:40 ,padding:10 }} > 
 <Col style={{width:wp('5')}}><Text style={Styles.datacell}></Text></Col>
   <Col style={{width:wp('30')}}><Text style={Styles.datacell}>TRANS ID</Text></Col>
   <Col style={{width:wp('20')}}><Text style={Styles.datacell}>AMOUNT</Text></Col>
   <Col style={{width:wp('40')}}><Text style={Styles.datacell}> DATE</Text></Col>
 
   </Row>
 </Grid>
 
 <ScrollView> 
 {
 
 trans.map((item,index)=>(
 <Grid key={index+1} style={{}}>
 { 
  this.state.showdetails && this.state.index === index ?
 
 <Row style={{padding:10, margin:10, backgroundColor:'grey',}}> 
 
 <Col style={{width:wp('7')}}><TouchableOpacity  style={{ backgroundColor:'lightgrey', marginRight:2, padding:1}}
     onPress={() => this.Closedetails()}
         >
         <Text style= {{ fontSize:18, color:'red',}}>
           x
         </Text>
       </TouchableOpacity></Col>
 <Col style={{width:wp('40')}}>
 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Transaction ID</Text></Row>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Amount</Text></Row>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Product</Text></Row>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Balance After</Text></Row>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Status</Text></Row>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>Date</Text></Row>
   <Row style={{height:hp('10')}}><Text style={Styles.datacell}>description</Text></Row>
   </Col>
 
   <Col style={{width:wp('40')}}>
   <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{item.trans_id}</Text></Row>
 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{ item.amount}</Text></Row>
 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{item.product}</Text></Row>

 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{ item.balance_after}</Text></Row>
 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{item.status}</Text></Row>
 <Row style={{height:hp('5')}}><Text style={Styles.datacell}>{item.date_initiated}</Text></Row>
 <Row style={{height:hp('20')}}><Text style={Styles.datacell}>{item.description}</Text></Row>
   </Col>
 
 </Row>:
 
 <Row style={{padding:10, margin:10, backgroundColor:'grey',}}> 
 <Col style={{width:wp('5')}}><TouchableOpacity 
     onPress={() => this.Showdetails(index)}
         >
         <Text style= {{ fontSize:20, color:'white'}}>
          +
         </Text>
       </TouchableOpacity></Col>
 <Col style={{width:wp('30')}}><Text style={Styles.datacell}>{item.trans_id}</Text></Col>
   <Col style={{width:wp('17')}}><Text style={Styles.datacell}>{ item.amount}.00 </Text></Col>
 
 <Col style={{width:wp('35')}}>
  <Text style={Styles.datacell}>{ item.date_initiated}</Text>
 
  </Col>
 
 </Row>
  
 }
   </Grid>
 ))
 
 }
 
 
 </ScrollView>
  </View>
 
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

export default connect(MapStatetoProps,{FectchTransaction})(TransactionScreen);
const Styles = StyleSheet.create({
  SectionStyle: {
    flexDirection:'column',
 width:wp('100')
  },


Row:{
width:wp('100'),
marginBottom:wp('2')

},

White:{ color:'white', fontSize:15},
welcomeText:{color:'red', padding:10},
LoanHistoryHeader:{backgroundColor:'grey', padding:15,  borderTopLeftRadius:10, borderTopRightRadius:10},
LoanHistoryBorder:{ height:hp('80'),

},
LoanBalance:{marginLeft:20},
datacell:{
color:'white', fontSize:11,
textAlign:"center"
},
Paid:{  backgroundColor:'green', borderRadius:15, marginRight:5},
Unpaid:{  backgroundColor:'red', borderRadius:15, marginRight:5}


});