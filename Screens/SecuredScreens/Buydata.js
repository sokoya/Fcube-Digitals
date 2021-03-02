import React, { Component } from "react";
import { StyleSheet, TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView, } from "react-native";
    import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
    import Feather from 'react-native-vector-icons/Feather';

class BuydataScreen extends Component {
 
    constructor(props){
        super(props)
    };

    render(){

        return(

            <ScrollView style={styles.mainBody}>
                

                <View style={styles.Imagegroup} >
 

                <Text style={{fontSize:16, fontWeight:"bold", marginBottom:20}}> Please Select Data Service provider</Text>
                <TouchableOpacity style={styles.buttonStyle}   onPress={()=>this.props.navigation.navigate("Mtndata")}>
   <Image source={require('../../assets/mtn.png')} style={styles.Image} /><Feather style={{marginLeft:wp('60')}}
                        name="chevron-right"
                        color="grey"
                        size={50}
                  />
   
 </TouchableOpacity>


 <TouchableOpacity   onPress={()=>this.props.navigation.navigate("Glodata")} style={styles.buttonStyle}><Image source={require('../../assets/glo.jpg')}  style={styles.Image} />
 <Feather style={{marginLeft:wp('60')}}
                        name="chevron-right"
                        color="grey"
                        size={50}
                  />
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>this.props.navigation.navigate("Airteldata")} style={styles.buttonStyle}>
    <Image source={require('../../assets/airtel.jpg')} style={styles.Image} />
    <Feather style={{marginLeft:wp('60')}}
                        name="chevron-right"
                        color="grey"
                        size={50}
                  />
</TouchableOpacity>

<TouchableOpacity   onPress={()=>this.props.navigation.navigate("Etisalatdata")} style={styles.buttonStyle}>
    <Image source={require('../../assets/9mobile.png')} style={styles.Image}/>
    <Feather style={{marginLeft:wp('60')}}
                        name="chevron-right"
                        color="grey"
                        size={50}
                  />

</TouchableOpacity>


</View>
</ScrollView>
    
    )

    };

};

export default BuydataScreen;

const styles = StyleSheet.create({
    mainBody: {
      backgroundColor: 'white',
      width:wp('100'),
      height:hp('100'),
     flexDirection: "column",
     paddingTop:10
      
    },
  
  Imagegroup:{
  width:wp('90'),
  margin:wp('5'),
 
  
  
  },
  Image:{
   width:65,
   borderRadius:15,
    height:70
  
  },
 
   buttonStyle: {
       flexDirection:"row",
    borderColor:'#282828',
    borderTopWidth:0.5,

    padding:4,
    color: '#FFFFFF',

    
  },
  select:{ borderWidth:1, borderColor:'blue'}
  });