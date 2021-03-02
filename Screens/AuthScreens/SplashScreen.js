import React, { Component }  from "react";
import {   StyleSheet, Image } from 'react-native';
//import navigationService from '../../_services/Navigation.service';
//import {LinearGradient} from'expo-linear-gradient'
import { View, Text, ActivityIndicator } from "react-native";

class SplashScreen extends   Component{

    constructor(props){

        super(props)

        this.state ={ animating:true};
     this.bootstrapAsync();
    };

    bootstrapAsync = async () => {
        setTimeout(async () => {
        this.setState({animating:false});
        this.props.navigation.navigate('AuthScreen');
    
      }, 2000);
    
      };

    render(){
return(
   
    <View style={styles.container}>
      <Image
        source={require('../../assets/newlogo.png')}
        style={{  width:400, height:200, }}
      />
      <ActivityIndicator
        animating={this.state.animating}
        color="#fec107"
        size="large"
        style={styles.activityIndicator}
      />
    </View>


)

    };

}
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#282828"
     
    },
    activityIndicator: {
      alignItems: 'center',
     marginTop:100
    },
  });