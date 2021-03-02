import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Picker } from "@react-native-community/picker";
import { ValidateEmptyField, ValidateNumber } from "../../_helper/Validation";
import AsyncStorage from "@react-native-community/async-storage";
import { ScrollView } from "react-native-gesture-handler";

class fundewallet extends Component {
 
    constructor(props){
        super(props)
  this.getuser()
        this.state ={Amount:'',AmountHasError:false,AmountError:'',Name:'',Email:'', Phone:'',Id:''};
    };
    Handlenavigation = async (value)=>{

        const { Amount, Name, Phone,Id, Email} = this.state
   this.setState({AmountError:''})
   this.setState({AmountHasError:false})
   
   const res = ValidateNumber("Amount",Amount)

   if(res.isError== true){
       this.setState({AmountHasError:true})
       this.setState({AmountError:res.Errormgs});
       return;
   }
   if(this.state.Amount < 100 ){
    this.setState({AmountHasError:true})
    this.setState({AmountError:" Amount can Not be Less than #100"});
    return;
}
  console.log(value);
if(value==1){
  this.props.navigation.navigate("bank",{Amount:Amount,Id:Id});
}

if(value == 2)
{
  this.props.navigation.navigate("paystack",{Amount:Amount,Email:Email,Name:Name,Phone:Phone,Id:Id});
}
    }
    getuser =async ()=>{
      
        const us = await AsyncStorage.getItem('userName');
        const user = await AsyncStorage.getItem('user');
        const id = await AsyncStorage.getItem('id')
        const JsonResult = JSON.parse(user);
      //  console.log(JsonResult)
        this.setState({Name:JsonResult.name})
        this.setState({Email:JsonResult.email})
        this.setState({Phone:JsonResult.phone})
        this.setState({Id:id});
       }
    render(){


     
        return(
          <ScrollView>
            <View style={styles.mainBody}>
<View style={styles.Row}>


  

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
            
          
             />
</View><Text style={styles.Errortext}>{this.state.AmountError}</Text>
          
             </View>

         

     
     

        <View style={styles.FormGroup}>  
        <Text style={styles.Label}>Select Funding Method  </Text>
         <View style={styles.Picker}> 
        <Picker
     selectedValue={ this.state.dataplanId}
     onValueChange={(itemValue, itemIndex) => this.Handlenavigation(itemValue) }
        
        >
          <Picker.Item label=" Select Mode of Funding" value=""/>
<Picker.Item label=" BANK DEPOSIT/ TRANSFER " value="1"/>
<Picker.Item label=" FUND WITH PAYSTACK" value="2"/>


        </Picker></View><Text style={{color:'red'}}></Text></View>
           

        <View style={styles.FormGroup}>
        <Image source={require('../../assets/22.png')}  style={{
                  width: '90%',
                  height: 80,
                 // resizeMode: 'contain',
                  margin: 10,
                }} />
        <Image source={require('../../assets/p.png')}  style={{
                  width: '90%',
                  height: 80,
                  resizeMode: 'contain',
                  margin: 10,
                }} />
            </View>

           </View>
           </View>
           </ScrollView>
        )

    };

};

export default fundewallet;

const styles = StyleSheet.create({
    mainBody: {
  
      backgroundColor: 'white',
     width:wp('100'),
     height:hp('100'),
     flexDirection: "column",

      
    },
    Row:{ margin:wp('5'),  width:wp('90%'), },


  FormGroup:{ marginTop:20},
 
  Picker:{borderBottomWidth:1, borderTopWidth:1, borderColor:'#282828'},
  Label
:{ marginBottom:10, fontWeight:"bold", fontSize:20},
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
   Errortext:{color:'red' },
HasError:{borderColor:'red'}
  

});