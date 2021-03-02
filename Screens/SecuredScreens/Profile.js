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

class ProfileScreen extends Component {
 
    constructor(props){
        super(props)
    };

    render(){

        return(
       
            <View style={styles.mainBody}>
                

                <View style={styles.Imagegroup} >
 

                <Text style={{fontSize:20, fontWeight:"bold", marginBottom:30}}> Account Settings </Text>

 

<TouchableOpacity   onPress={()=>this.props.navigation.navigate("Editprofile")} style={styles.buttonStyle}>
<Feather 
                        name="user"
                        color="#282828"
                        size={25}
                  />
                  <Text style={{fontSize:17, textAlign:"center", paddingLeft:10}}>Edit Profile</Text>
    <Feather style={{marginLeft:wp('39')}}
                        name="chevron-right"
                        color="#282828"
                        size={25}
                  />

</TouchableOpacity>



<TouchableOpacity   onPress={()=>this.props.navigation.navigate("Changepassword")} style={styles.buttonStyle}>
<Feather 
                        name="lock"
                        color="#282828"
                        size={25}
                  />
                  <Text style={{fontSize:17, textAlign:"center", paddingLeft:10}}>Change Password</Text>
    <Feather style={{marginLeft:wp('25')}}
                        name="chevron-right"
                        color="#282828"
                        size={25}
                  />

</TouchableOpacity>




<TouchableOpacity   onPress={()=>this.props.navigation.navigate("LoginScreen")} style={styles.buttonStyle}>
<Feather 
                        name="log-out"
                        color="#282828"
                        size={25}
                  />
                  <Text style={{fontSize:17, textAlign:"center", color:'red',  paddingLeft:10}}>Sign Out</Text>
 

</TouchableOpacity>




</View>
            </View>
    
        )

    };

};

export default ProfileScreen;


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

 
   buttonStyle: {
       flexDirection:"row",
    borderBottomColor:'#282828',
borderBottomWidth:0.5,

    padding:4,
    color: '#FFFFFF',
    marginTop:25
    
  },
  select:{ borderWidth:1, borderColor:'blue'}
  });