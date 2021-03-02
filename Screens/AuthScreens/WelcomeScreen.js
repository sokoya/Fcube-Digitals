import React, { Component }  from "react";
//import {LinearGradient} from'expo-linear-gradient'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

class WelcomeScreen extends   Component{

    constructor(props){

        super(props)

    };

    render(){
return(
   
    
   <View style={styles.container}>


    <View   style = { styles.AccountPanel}>
    <View style={{ flex:1, alignItems:'center', alignContent:'center', marginBottom:150, marginTop:50}}>
    <Image    source={require('../../assets/logo.png')} style={{ width:200, height:40, }}/>
    </View>
<Text style={styles.Welcome}>

WELCOME TO F-CUBE DIGITAL 
</Text>

    <View >

<TouchableOpacity style = { styles.LoginButton}
onPress={() => this.props.navigation.navigate('LoginScreen')}
>
  <Text style={{color:'black', fontSize:16, textAlign:'center',}}> Login To Your Account  </Text>
</TouchableOpacity>
   

    </View>

    <View >

<TouchableOpacity style = {styles.SignUpButton}
onPress={() => this.props.navigation.navigate('RegisterScreen')}
>
  <Text style={{color:'black',  fontSize:16, textAlign:'center',}}> Sign up Now </Text>
</TouchableOpacity>
   

    </View>

    </View>


    
    </View>
   
 
)

    };

}
export default WelcomeScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    flexDirection:"column",
    backgroundColor:"#fec107"
    },
  
    LoginButton:{ backgroundColor:'white', padding:10,  borderRadius:5,  marginBottom:5},
    SignUpButton:{
     marginBottom:50,
    marginTop:20,
       borderRadius:20, borderWidth:1, padding:10, borderColor:'white',borderRadius:5, },
    AccountPanel:{margin:30,   },
    Welcome:{ color:'black', fontSize:18, textAlign:"center",  marginBottom:50 },
    
    Image:{ width:120,width:'100%', height:400},
    button:{backgroundColor:'blue' ,padding: 10,
    borderRadius: 5, padding:10, width:170},
    
  });
  