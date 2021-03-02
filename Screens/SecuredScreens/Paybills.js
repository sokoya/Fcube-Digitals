import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Picker } from "@react-native-community/picker";

class PaybillsScreen extends Component {
 
    constructor(props){
        super(props)

        this.state ={navigateto:''};
    };
    Handlenavigation = (value)=>{

        this.props.navigation.navigate(value);
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
<Picker.Item label=" IKEJA ELECTRICITY" value="Ikeja"/>
<Picker.Item label=" EKO ELECTRICITY" value="Eko"/>
<Picker.Item label=" ABUJA ELECTRICITY" value="Abuja"/>
<Picker.Item label=" PH ELECTRICITY" value="Ph"/>
<Picker.Item label=" ENUGU ELECTRICITY" value="Enugu"/>
<Picker.Item label=" IBADAN ELECTRICITY" value="Ibadan"/>
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
<Picker.Item label=" DSTV SUBSCRIPION" value="DstvScreen"/>
<Picker.Item label=" GOTV SUBSCRIPION" value="GotvScreen"/>
<Picker.Item label=" START TIMES SUBSCRIPION" value="StartimeScreen"/>

        </Picker></View><Text style={{color:'red'}}></Text></View>
           

           </View>
           </View>
        )

    };

};

export default PaybillsScreen;

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